const { ccclass, property } = cc._decorator;

@ccclass
export default class GotoLeaderboard extends cc.Component {

    onLoad() {
        // 註冊按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    }

    onButtonClick() {
        // 切換場景
        cc.director.loadScene("Leaderboard");
    }

    onDestroy() {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    }
} 