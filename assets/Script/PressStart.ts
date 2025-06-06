const { ccclass, property } = cc._decorator;

@ccclass
export default class PressStart extends cc.Component {

    onLoad() {
        // 註冊按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    }

    onButtonClick() {
        // 切換場景
        const transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene001_Home_Outside");
        } else {
            cc.director.loadScene("Scene001_Home_Outside");
        }
    }

    onDestroy() {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    }
} 