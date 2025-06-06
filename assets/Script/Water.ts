// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Water extends cc.Component {

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property
    offsetX: number = 100; // 右邊偏移量

    @property
    offsetY: number = 20; // 垂直偏移量

    @property
    rotation: number = 15;

    @property({ type: [cc.Node] })
    campFireNodes: cc.Node[] = []; // 營火節點數組

    @property({ type: [cc.Node] })
    dieAreaNodes: cc.Node[] = []; // 對應的死亡區域節點數組

    @property(cc.Node)
    lakeNode: cc.Node = null; // 修改：改為單一湖泊節點

    @property(cc.AudioClip)
    extinguishAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    lakeAppearAudio: cc.AudioClip = null; // 湖泊出現音效

    private isWatering: boolean = false;
    private lastMoveDir: number = 1;
    private fireExtinguished: boolean[] = []; // 追蹤每個火焰的狀態
    private lakeAppeared: boolean = false; // 修改：改為單一布爾值
    waterAudio: any;

    start() {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // 初始化火焰狀態數組
        this.fireExtinguished = new Array(this.campFireNodes.length).fill(false);
        // 預設隱藏湖泊
        if (this.lakeNode) {
            this.lakeNode.active = false;
            this.lakeNode.opacity = 0;
        }
    }

    update(dt: number) {
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
        if (event.keyCode === cc.macro.KEY.g) {
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
            if (this.waterAudio) {
                cc.audioEngine.playEffect(this.waterAudio, false);
            }
            this.isWatering = true;

            // 檢查是否可以熄滅火焰
            if (this.campFireNodes && this.campFireNodes.length > 0 && this.playerNode) {
                const playerPos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
                
                // 遍歷所有營火
                this.campFireNodes.forEach((fireNode, index) => {
                    if (!this.fireExtinguished[index] && fireNode) {
                        const firePos = fireNode.convertToWorldSpaceAR(cc.v2(0, 0));
                        const dx = firePos.x - playerPos.x;
                        const dy = firePos.y - playerPos.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if ((distance < 500 && dx > 0 && this.playerNode.scaleX > 0) ||
                            (distance < 500 && dx < 0 && this.playerNode.scaleX < 0)) {
                            // 熄滅火焰
                            fireNode.active = false;
                            // 同時隱藏對應的死亡區域
                            if (this.dieAreaNodes && this.dieAreaNodes[index]) {
                                this.dieAreaNodes[index].active = false;
                            }
                            // 播放熄滅音效
                            if (this.extinguishAudio) {
                                cc.audioEngine.playEffect(this.extinguishAudio, false);
                            }
                            this.fireExtinguished[index] = true;
                        }
                    }
                });
            }

            // 檢查是否可以讓湖泊浮現
            if (!this.lakeAppeared && this.lakeNode && this.playerNode) {
                const playerPos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const lakePos = this.lakeNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const dx = lakePos.x - playerPos.x;
                const dy = lakePos.y - playerPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if ((distance < 500 && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < 500 && dx < 0 && this.playerNode.scaleX < 0)) {
                    // 顯示湖泊並淡入
                    this.lakeNode.active = true;
                    cc.tween(this.lakeNode)
                        .to(1.5, { opacity: 255 })
                        .start();
                    // 播放湖泊出現音效
                    if (this.lakeAppearAudio) {
                        cc.audioEngine.playEffect(this.lakeAppearAudio, false);
                    }
                    this.lakeAppeared = true;
                }
            }
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.g) {
            this.node.active = false;
            this.isWatering = false;
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}
