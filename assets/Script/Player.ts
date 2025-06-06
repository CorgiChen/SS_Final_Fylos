// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import AudioManager from './AudioManager';

@ccclass
export default class PlayerController extends cc.Component {
    moveSpeed: number = 300;
    jumpForce: number = 850;
    gravity: number = 1500;
    maxFallSpeed: number = 800;
    groundY: number = -300;

    public moveDirection: number = 0;
    private onGround: boolean = false;
    private isJumping: boolean = false;
    private isFalling: boolean = false;
    private anim: cc.Animation = null;
    private verticalVelocity: number = 0;
    private horizontalVelocity: number = 0;
    private rigidbody: cc.RigidBody = null;
    private collider: cc.PhysicsBoxCollider = null;
    private currentAnimation: string = "idle";
    private groundCheckDistance: number = 10;
    private lastVerticalVelocity: number = 0; 
    private footstepSoundId: number = -1; 
    private lastFootstepTime: number = 0;
    private footstepInterval: number = 0.3; 
    private isDied: boolean = false;

    @property(cc.AudioClip)
    footstepSound: cc.AudioClip = null;  // 走路音效

    @property(cc.AudioClip)
    jumpSound: cc.AudioClip = null;  // 跳跃音效

    @property({ type: cc.AudioClip })
    dieSound: cc.AudioClip = null; // 新增：死亡音效

    onLoad() {
        this.isDied = false;
        cc.director.getCollisionManager().enabled = true;
        // 初始化物理系統
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, -1200);
        manager.debugDrawFlags = 0;  // 關閉碰撞顯示

        // 獲取組件
        this.anim = this.getComponent(cc.Animation);
        if (this.anim) {
            const clips = this.anim.getClips();
            clips.forEach(clip => {
                clip.wrapMode = cc.WrapMode.Loop;
            });
        }

        // 初始化物理組件
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);

        if (this.rigidbody) {
            this.rigidbody.type = cc.RigidBodyType.Dynamic;
            this.rigidbody.fixedRotation = true;
            this.rigidbody.enabledContactListener = true;
            this.rigidbody.gravityScale = 0;
            this.rigidbody.linearDamping = 0;
            this.rigidbody.allowSleep = false;
        }

        if (this.collider) {
            this.collider.enabled = true;
            this.collider.sensor = false;
            this.collider.friction = 0.3;
            this.collider.restitution = 0;

            // 調整碰撞箱大小
            const size = this.node.getContentSize();
            this.collider.size = cc.size(size.width * 0.8, size.height * 0.8);
            this.collider.offset = cc.v2(0, -size.height * 0.1);
        }

        // 註冊鍵盤事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        // 預設播放待機動畫
        if (this.anim) {
            this.anim.play("idle");
        }
    }

    private playAnimation(animName: string) {
        if (this.isDied) return;
        if (this.anim && this.currentAnimation !== animName) {
            const state = this.anim.getAnimationState(animName);
            if (state) {
                state.wrapMode = cc.WrapMode.Loop;
                state.speed = 1.0;
                this.anim.play(animName);
                this.currentAnimation = animName;
            }
        }
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (this.isDied) return;
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                this.moveDirection = -1;
                this.horizontalVelocity = -this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX > 0 && !cc.director.isPaused()) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                this.moveDirection = 1;
                this.horizontalVelocity = this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX < 0 && !cc.director.isPaused()) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.up:
            case cc.macro.KEY.space:
                if (this.onGround) {
                    this.jump();
                }
                break;
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        if (this.isDied) return;
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                if (this.moveDirection < 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                        this.stopFootstepSound();  // 停止走路音效
                    }
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                if (this.moveDirection > 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                        this.stopFootstepSound();  // 停止走路音效
                    }
                }
                break;
        }
    }

    private playJumpSound() {
        if (this.jumpSound) {
            cc.audioEngine.play(this.jumpSound, false, cc.audioEngine.getVolume(AudioManager.audioId));
        }
    }

    jump() {
        if (this.onGround) {
            this.onGround = false;
            this.isJumping = true;
            this.isFalling = false;
            this.verticalVelocity = this.jumpForce;
            this.playAnimation("jump");
            this.playJumpSound();  // 播放跳跃音效
        }
    }

    onBeginContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        if (otherCollider.node.name === 'Ground') {
            const normal = contact.getWorldManifold().normal;
            
            if (normal.y < 0) {
                this.onGround = true;
                this.isJumping = false;
                this.isFalling = false;
                this.verticalVelocity = 0;

                if (this.moveDirection !== 0) {
                    this.playAnimation("move");
                } else {
                    this.playAnimation("idle");
                }
            }
        }
                // 新增：碰到 DieArea 就 reload 當前場景
        if (otherCollider.node.name === 'DieArea') {
            this.isDied = true;
            const sceneName = cc.director.getScene().name;
            // 播放死亡音效
            if (this.dieSound) {
                cc.audioEngine.playEffect(this.dieSound, false);
            }
            // 讓玩家慢慢跌倒（0.5秒內旋轉90度）
            cc.tween(this.node)
                .to(0.5, { angle: 90 })
                .start();
            setTimeout(() => {
                cc.director.loadScene(sceneName);
            }, 2000);
        }

    }

    onEndContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        if (otherCollider.node.name === 'Ground') {
            const normal = contact.getWorldManifold().normal;
            
            if (normal.y < 0) {
                this.onGround = false;
                if (this.verticalVelocity < 0) {
                    this.isFalling = true;
                    this.playAnimation("fall");
                }
            }
        }

    }

    private playFootstepSound() {
        const currentTime = Date.now() / 1000;  // 转换为秒
        if (currentTime - this.lastFootstepTime >= this.footstepInterval) {
            if (this.footstepSound) {
                // 如果之前的音效还在播放，先停止它
                if (this.footstepSoundId !== -1) {
                    cc.audioEngine.stop(this.footstepSoundId);
                }
                // 播放新的音效，使用配置的音量
                this.footstepSoundId = cc.audioEngine.play(this.footstepSound, false, cc.audioEngine.getVolume(AudioManager.audioId));
                this.lastFootstepTime = currentTime;
            }
        }
    }

    private stopFootstepSound() {
        if (this.footstepSoundId !== -1) {
            cc.audioEngine.stop(this.footstepSoundId);
            this.footstepSoundId = -1;
        }
    }

    update(dt: number) {
        if (this.isDied) return;
        // 檢查是否在地面上
        if (!this.onGround) {
            const startPos = cc.v2(this.node.position.x, this.node.position.y);
            const rayStart = cc.v2(startPos.x, startPos.y);
            const rayEnd = cc.v2(startPos.x, startPos.y - this.groundCheckDistance);

            const results = cc.director.getPhysicsManager().rayCast(rayStart, rayEnd, cc.RayCastType.All);
            if (results.length > 0) {
                for (const result of results) {
                    if (result.collider.node.name === 'Ground') {
                        // 確保只有在地面Y座標附近才判定為著地
                        if (Math.abs(result.point.y - this.groundY) < 10) {
                            this.onGround = true;
                            this.isFalling = false;
                            this.isJumping = false;
                            this.verticalVelocity = 0;
                            this.node.y = this.groundY;  // 確保角色位置正確
                            break;
                        }
                    }
                }
            }
        }

        // 應用重力
        if (!this.onGround) {
            this.verticalVelocity -= this.gravity * dt;
            if (this.verticalVelocity < -this.maxFallSpeed) {
                this.verticalVelocity = -this.maxFallSpeed;
            }

            // 檢測跳躍到最高點
            if (this.lastVerticalVelocity > 0 && this.verticalVelocity <= 0) {
                this.isJumping = false;
                this.isFalling = true;
                this.playAnimation("fall");
            }

            // 更新下落狀態
            if (this.verticalVelocity < 0 && !this.isFalling) {
                this.isFalling = true;
                this.isJumping = false;
                this.playAnimation("fall");
            }
        }

        // 更新位置
        let newX = this.node.x + this.horizontalVelocity * dt;
        let newY = this.node.y + this.verticalVelocity * dt;

        // 如果在地面上且正在移动，播放走路音效
        if (this.onGround && this.moveDirection !== 0) {
            this.playFootstepSound();
        } else {
            this.stopFootstepSound();  // 如果不在移动，停止音效
        }

        // 防止角色掉出地面
        if (newY < this.groundY) {
            newY = this.groundY;
            this.onGround = true;
            this.isFalling = false;
            this.isJumping = false;
            this.verticalVelocity = 0;
        }

        this.node.setPosition(newX, newY);

        // 更新動畫
        if (this.anim) {
            if (this.isJumping) {
                this.playAnimation("jump");
            } else if (this.isFalling) {
                this.playAnimation("fall");
            } else if (this.moveDirection !== 0) {
                this.playAnimation("move");
            } else {
                this.playAnimation("idle");
            }
        }

        // 保存當前垂直速度用於下一幀比較
        this.lastVerticalVelocity = this.verticalVelocity;
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onCollisionEnter(other, self) {
        cc.log('onCollisionEnter:', other.node.name);
        if (other.node.name === "JumpArea") {
            cc.tween(self.node)
                .to(0.5, { y: self.node.y + 500 })
                .start();
            cc.log('JumpArea triggered, moving up 500');
        }
    }
}
