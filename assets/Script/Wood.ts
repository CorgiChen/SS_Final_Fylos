// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PlayerController from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Wood extends cc.Component {

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property
    offsetX: number = 100; // 右邊偏移量

    @property
    offsetY: number = 20; // 垂直偏移量

    @property
    rotation: number = 15;

    @property(cc.Node)
    treeNode: cc.Node = null;

    @property(cc.Node)
    groundNode: cc.Node = null;

    @property(cc.SpriteFrame)
    treeImage1: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    treeImage2: cc.SpriteFrame = null;

    @property(cc.AudioClip)
    treeGrowAudio: cc.AudioClip = null;

    private isWatering: boolean = false;
    private lastMoveDir: number = 1;
    private treeGrown: boolean = false;
    private currentImageIndex: number = 0;
    woodAudio: any;

    start() {
        // 預設隱形
        this.node.active = false;
        // 預設隱藏ground
        if (this.groundNode) {
            this.groundNode.active = false;
        }
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    update(dt: number) {
        if (!PlayerController.plant) return;
        if (this.playerNode) {
            const playerScript = this.playerNode.getComponent('Player');
            let moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整水的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
                this.node.rotation = -this.rotation; // 左邊水向
            } else {
                this.node.x = this.playerNode.x + this.offsetX;
                this.node.rotation = this.rotation; // 右邊水向
            }
            this.node.y = this.playerNode.y + this.offsetY;

            // 方向改變時，若水顯示中則立即切換動畫
            if (this.node.active && moveDir !== this.lastMoveDir) {
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const clip = anim.getClips()[moveDir === -1 ? 1 : 0];
                    anim.play(clip.name);
                }
            }
            this.lastMoveDir = moveDir;
        }
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (!PlayerController.plant) return;
        if (event.keyCode === cc.macro.KEY.r) {
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[this.lastMoveDir === -1 ? 1 : 0];
                    anim.play(firstClip.name);
                }
            } else {
                // 若已經顯示，確保動畫持續撥放
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[this.lastMoveDir === -1 ? 1 : 0];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
            // 播放音效
            if (this.woodAudio) {
                cc.audioEngine.playEffect(this.woodAudio, false);
            }
            this.isWatering = true;

            // 檢查是否可以讓樹木生長
            if (this.treeNode && this.playerNode) {
                const playerPos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const treePos = this.treeNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const dx = treePos.x - playerPos.x;
                const dy = treePos.y - playerPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if ((distance < 500 && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < 500 && dx < 0 && this.playerNode.scaleX < 0)) {
                    
                    const sprite = this.treeNode.getComponent(cc.Sprite);
                    if (!sprite) return;

                    // 根據當前圖片索引切換到下一張圖片
                    switch (this.currentImageIndex) {
                        case 0:
                            if (this.treeImage1) {
                                sprite.spriteFrame = this.treeImage1;
                                this.currentImageIndex = 1;
                                // 向上調整位置
                                this.treeNode.y += 30;
                                // 播放生長音效
                                if (this.treeGrowAudio) {
                                    cc.audioEngine.playEffect(this.treeGrowAudio, false);
                                }
                            }
                            break;
                        case 1:
                            if (this.treeImage2) {
                                sprite.spriteFrame = this.treeImage2;
                                this.currentImageIndex = 2;
                                // 顯示ground
                                if (this.groundNode) {
                                    this.groundNode.active = true;
                                }
                                // 播放生長音效
                                if (this.treeGrowAudio) {
                                    cc.audioEngine.playEffect(this.treeGrowAudio, false);
                                }
                            }
                            break;
                        case 2:
                            // 如果已經是最大狀態，則不進行任何操作
                            break;
                    }
                }
            }
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        if (!PlayerController.plant) return;
        if (event.keyCode === cc.macro.KEY.r) {
            this.node.active = false;
            this.isWatering = false;
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}