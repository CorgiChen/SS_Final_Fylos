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

    private animation_idx: number = 0;
    private lastMoveDir: number = 1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    update(dt: number) {
        if (this.playerNode) {
            const playerScript = this.playerNode.getComponent('Player');
            let moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整風的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
                this.animation_idx = 1;
            } else {
                this.node.x = this.playerNode.x + this.offsetX;
                this.animation_idx = 0;
            }
            this.node.y = this.playerNode.y + this.offsetY;

            // 方向改變時，若風顯示中則立即切換動畫
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
        if (event.keyCode === cc.macro.KEY.f) {
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
