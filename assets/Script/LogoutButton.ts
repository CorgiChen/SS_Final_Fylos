const { ccclass, property } = cc._decorator;

@ccclass
export default class LogoutButton extends cc.Component {
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.logout, this);
    }

    logout() {
        cc.director.loadScene("Scene000_Menu");
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.logout, this);
    }
} 