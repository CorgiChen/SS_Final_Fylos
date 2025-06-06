// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    private onKeyDown(event: cc.Event.EventKeyboard) {
        // // 測試用，按G可以讓火熄滅
        // if (event.keyCode === cc.macro.KEY.g) {
        //     this.fadeOutAndDeactivate();
        // }
    }

    start () {

    }

    // update (dt) {}

    /**
     * Fades out this node and deactivates it.
     */
    public fadeOutAndDeactivate(duration: number = 0.5) {
        cc.tween(this.node)
            .to(duration, { opacity: 0 })
            .call(() => {
                this.node.active = false;
                this.node.opacity = 255; // Reset for next activation
            })
            .start();
    }
}
