// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    @property
    moveSpeed: number = 300;

    @property
    jumpForce: number = 700;

    @property
    gravity: number = 1500;

    @property
    maxFallSpeed: number = 1000;

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
    private groundCheckDistance: number = 20;
    private lastGroundContact: cc.Vec2 = null;
    private lastY: number = 0;

    onLoad() {
        // 初始化物理系統
        const manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, -1500);
        manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
            cc.PhysicsManager.DrawBits.e_shapeBit;

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

        this.lastY = this.node.y;
    }

    private playAnimation(animName: string) {
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
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                this.moveDirection = -1;
                this.horizontalVelocity = -this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX > 0) {
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
                if (this.node.scaleX < 0) {
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
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                if (this.moveDirection < 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
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
                    }
                }
                break;
        }
    }

    jump() {
        this.onGround = false;
        this.isJumping = true;
        this.isFalling = false;
        this.verticalVelocity = this.jumpForce;
        this.playAnimation("jump");
    }

    onBeginContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        if (otherCollider.node.name === 'Ground') {
            const normal = contact.getWorldManifold().normal;
            const point = contact.getWorldManifold().points[0];

            // 只要有向下的分量就視為可以站在地面上
            if (normal.y < 0) {
                this.onGround = true;
                this.isJumping = false;
                this.isFalling = false;
                this.verticalVelocity = 0;
                this.lastGroundContact = point;

                if (this.moveDirection !== 0) {
                    this.playAnimation("move");
                } else {
                    this.playAnimation("idle");
                }
            }
        }
    }

    onEndContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        if (otherCollider.node.name === 'Ground') {
            const normal = contact.getWorldManifold().normal;
            const point = contact.getWorldManifold().points[0];

            // 檢查是否離開地面
            if (normal.y < 0) {
                // 檢查是否真的離開了地面（而不是滑到邊緣）
                if (this.lastGroundContact &&
                    Math.abs(point.x - this.lastGroundContact.x) > this.collider.size.width * 0.5) {
                    this.onGround = false;
                    if (this.verticalVelocity < 0) {
                        this.isFalling = true;
                        this.playAnimation("fall");
                    }
                }
            }
        }
    }

    update(dt: number) {
        // 檢查是否在地面上
        if (!this.onGround) {
            // 使用多個射線檢測地面
            const startPos = cc.v2(this.node.position.x, this.node.position.y);
            const rayCount = 3; // 使用3條射線
            const raySpacing = this.collider.size.width / (rayCount - 1);

            for (let i = 0; i < rayCount; i++) {
                const rayX = startPos.x - this.collider.size.width / 2 + i * raySpacing;
                const rayStart = cc.v2(rayX, startPos.y);
                const rayEnd = cc.v2(rayX, startPos.y - this.groundCheckDistance);

                const results = cc.director.getPhysicsManager().rayCast(rayStart, rayEnd, cc.RayCastType.All);
                if (results.length > 0) {
                    for (const result of results) {
                        if (result.collider.node.name === 'Ground') {
                            if (result.point.y < this.node.position.y) {
                                this.onGround = true;
                                this.isFalling = false;
                                this.verticalVelocity = 0;
                                this.lastGroundContact = result.point;
                                break;
                            }
                        }
                    }
                }
                if (this.onGround) break;
            }
        }

        // 防止穿過地板
        if (this.node.y < this.lastY && this.onGround) {
            this.node.y = this.lastY;
            this.verticalVelocity = 0;
        }

        if (!this.onGround) {
            this.verticalVelocity -= this.gravity * dt;
            if (this.verticalVelocity < -this.maxFallSpeed) {
                this.verticalVelocity = -this.maxFallSpeed;
            }

            if (this.verticalVelocity < 0 && !this.isFalling) {
                this.isFalling = true;
                this.isJumping = false;
                this.playAnimation("fall");
            }
        }

        // 更新位置
        let newX = this.node.x + this.horizontalVelocity * dt;
        const newY = this.node.y + this.verticalVelocity * dt;
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

        this.lastY = this.node.y;
    }

    onDestroy() {
        // 移除鍵盤事件監聽
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}
