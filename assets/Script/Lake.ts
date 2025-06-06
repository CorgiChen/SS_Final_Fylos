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
        this.node.active = false;
        this.node.opacity = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    start () {

    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    private onKeyDown(event: cc.Event.EventKeyboard) {
        // // 測試用，按H可以讓水出現
        // if (event.keyCode === cc.macro.KEY.h) {
        //     this.fadeInAndActivate();
        // }
    }

    /**
     * Fades in this node from transparent and activates it.
     */
    public fadeInAndActivate(duration: number = 0.5) {
        this.node.active = true;
        this.node.opacity = 0;
        cc.tween(this.node)
            .to(duration, { opacity: 255 })
            .start();
    }
    // public fadeInAndActivate(duration: number = 0.5) {
    //     cc.tween(this.node)
    //         .to(duration, { opacity: 255 })
    //         .call(() => {
    //             this.node.active = true;
    //             //this.node.opacity = 255; // Reset for next activation
    //         })
    //         .start();
    // }

    // update (dt) {}
}
