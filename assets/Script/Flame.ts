import PlayerController from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Flame extends cc.Component {

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property
    offsetX: number = 100; // 右邊偏移量

    @property
    offsetY: number = 20; // 垂直偏移量

    @property
    rotation: number = 15;

    @property({ type: cc.AudioClip })
    flameAudio: cc.AudioClip = null; // 火焰音效

    @property(cc.Node)
    targetNode: cc.Node = null; // 目標節點

    @property
    maxDistance: number = 500; // 最大有效距離

    @property(cc.SpriteFrame)
    logfireSprite: cc.SpriteFrame = null; // logfire圖片

    @property(cc.Node)
    spineNode: cc.Node = null; // spine節點

    @property(cc.SpriteFrame)
    spineImage1: cc.SpriteFrame = null; // spine的圖片1

    @property(cc.Node)
    dieAreaNode: cc.Node = null; // DieArea節點

    @property(cc.Node)
    targetNode3: cc.Node = null;

    @property(cc.Node)
    groundNode3: cc.Node = null;

    private animation_idx: number = 0;
    private lastMoveDir: number = 1;
    private isBurning: boolean = false;
    private fadeOutTimeout: any = null;
    private spineRestoreTimeout: any = null;
    private originalSpineSprite: cc.SpriteFrame = null;
    private isSpineTransformed: boolean = false;
    private isTarget3Burned: boolean = false;
    private target3RestoreTimeout: any = null;

    start() {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        const collider = this.getComponent(cc.PhysicsBoxCollider);
        if (collider) collider.sensor = true;

        // 保存原始的spine圖片
        if (this.spineNode) {
            const sprite = this.spineNode.getComponent(cc.Sprite);
            if (sprite) {
                this.originalSpineSprite = sprite.spriteFrame;
            }
        }
    }

    update(dt: number) {
        if (!PlayerController.fire) return;
        if (this.playerNode) {
            const playerScript = this.playerNode.getComponent('Player');
            let moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整火焰的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
                this.animation_idx = 1;
                this.node.rotation = -this.rotation; // 左邊火焰方向
            } else {
                this.node.x = this.playerNode.x + this.offsetX;
                this.animation_idx = 0;
                this.node.rotation = this.rotation; // 右邊火焰方向
            }
            this.node.y = this.playerNode.y + this.offsetY;

            // 方向改變時，若火焰顯示中則立即切換動畫
            if (this.node.active && moveDir !== this.lastMoveDir) {
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const clip = anim.getClips()[this.animation_idx];
                    anim.play(clip.name);
                }
            }
            this.lastMoveDir = moveDir;
        }
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (!PlayerController.fire) return;
        if (event.keyCode === cc.macro.KEY.e) {
            // 火焰動畫功能
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[this.animation_idx];
                    anim.play(firstClip.name);
                }
            } else {
                // 若已經顯示，確保動畫持續撥放
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[this.animation_idx];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
            this.isBurning = true;

            // 播放音效
            if (this.flameAudio) {
                cc.audioEngine.playEffect(this.flameAudio, false);
            }

            // 檢查是否可以讓目標消失
            if (this.targetNode && this.playerNode) {
                const targetPos = this.targetNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const playerPos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const dx = targetPos.x - playerPos.x;
                const dy = targetPos.y - playerPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // 檢查距離和方向
                if ((distance < this.maxDistance && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < this.maxDistance && dx < 0 && this.playerNode.scaleX < 0)) {
                    
                    // 切換到logfire圖片
                    const sprite = this.targetNode.getComponent(cc.Sprite);
                    if (sprite && this.logfireSprite) {
                        sprite.spriteFrame = this.logfireSprite;
                        
                        // 清除之前的timeout
                        if (this.fadeOutTimeout) {
                            clearTimeout(this.fadeOutTimeout);
                        }

                        // 1.5秒後開始淡出
                        this.fadeOutTimeout = setTimeout(() => {
                            // 淡出動畫
                            cc.tween(this.targetNode)
                                .to(1.5, { opacity: 0 })
                                .call(() => {
                                    this.targetNode.active = false;
                                    this.targetNode.opacity = 255; // 重置透明度
                                })
                                .start();
                        }, 1500);
                    }
                }
            }

            // 檢查是否可以處理spine節點
            if (!this.isSpineTransformed && this.spineNode && this.playerNode) {
                // 使用與targetNode相同的座標轉換方式
                const spinePos = this.spineNode.parent.convertToWorldSpaceAR(this.spineNode.position);
                const playerPos = this.playerNode.parent.convertToWorldSpaceAR(this.playerNode.position);
                const dx = spinePos.x - playerPos.x;
                const dy = spinePos.y - playerPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                cc.log("Spine Debug:", {
                    distance: distance,
                    dx: dx,
                    playerScaleX: this.playerNode.scaleX,
                    maxDistance: this.maxDistance
                });

                // 檢查距離和方向
                if ((distance < this.maxDistance && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < this.maxDistance && dx < 0 && this.playerNode.scaleX < 0)) {
                    
                    cc.log("Spine transformation triggered!");
                    
                    // 設置轉換狀態
                    this.isSpineTransformed = true;

                    // 清除之前的還原timeout
                    if (this.spineRestoreTimeout) {
                        clearTimeout(this.spineRestoreTimeout);
                    }

                    // 執行淡出動作
                    const fadeOut = cc.fadeOut(1.5);
                    const hideDieArea = cc.callFunc(() => {
                        if (this.dieAreaNode) {
                            this.dieAreaNode.active = false;
                        }
                    });
                    const sequence = cc.sequence(fadeOut, hideDieArea);
                    this.spineNode.runAction(sequence);

                    // 5秒後還原
                    this.spineRestoreTimeout = setTimeout(() => {
                        // 還原透明度
                        this.spineNode.opacity = 255;
                        // 顯示DieArea
                        if (this.dieAreaNode) {
                            this.dieAreaNode.active = true;
                        }
                        // 重置轉換狀態
                        this.isSpineTransformed = false;
                    }, 5000);
                }
            }

            // 檢查是否可以處理第三個目標
            if (!this.isTarget3Burned && this.targetNode3 && this.playerNode) {
                const target3Pos = this.targetNode3.parent.convertToWorldSpaceAR(this.targetNode3.position);
                const playerPos = this.playerNode.parent.convertToWorldSpaceAR(this.playerNode.position);
                const dx = target3Pos.x - playerPos.x;
                const dy = target3Pos.y - playerPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if ((distance < this.maxDistance && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < this.maxDistance && dx < 0 && this.playerNode.scaleX < 0)) {
                    
                    this.isTarget3Burned = true;

                    if (this.target3RestoreTimeout) {
                        clearTimeout(this.target3RestoreTimeout);
                    }

                    // 隱藏目標和地面
                    this.targetNode3.active = false;
                    if (this.groundNode3) {
                        this.groundNode3.active = false;
                    }

                    // 5秒後還原
                    this.target3RestoreTimeout = setTimeout(() => {
                        this.targetNode3.active = true;
                        if (this.groundNode3) {
                            this.groundNode3.active = true;
                        }
                        this.isTarget3Burned = false;
                    }, 5000);
                }
            }
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        if (!PlayerController.fire) return;
        if (event.keyCode === cc.macro.KEY.e) {
            this.node.active = false;
            this.isBurning = false;
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        if (this.fadeOutTimeout) {
            clearTimeout(this.fadeOutTimeout);
        }
        if (this.spineRestoreTimeout) {
            clearTimeout(this.spineRestoreTimeout);
        }
        if (this.target3RestoreTimeout) {
            clearTimeout(this.target3RestoreTimeout);
        }
    }
} 