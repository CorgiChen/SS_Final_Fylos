// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property
    offsetX: number = 160; // 右邊偏移量

    @property
    offsetY: number = 30; // 垂直偏移量

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    update(dt: number) {
        // 跟隨 player 並根據 moveDirection 決定風向
        if (this.playerNode) {
            // 取得 Player 腳本
            const playerScript = this.playerNode.getComponent('Player');
            let moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整風的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
            } else {
                this.node.x = this.playerNode.x + this.offsetX;
            }
            this.node.y = this.playerNode.y + this.offsetY;
        }
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.f) {
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[0];
                    anim.play(firstClip.name);
                }
            } else {
                // 若已經顯示，確保動畫持續撥放
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[0];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.f) {
            this.node.active = false;
        }
        if (event.keyCode === cc.macro.KEY.space) {
            this.node.active = false;
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    // update (dt) {}
}
