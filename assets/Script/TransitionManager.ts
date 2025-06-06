const { ccclass, property } = cc._decorator;

@ccclass
export default class TransitionManager extends cc.Component {
    @property(cc.Animation)
    transitionAnim: cc.Animation = null;

    onLoad() {
        this.playTransIn();
    }

    playTransIn() {
        if (this.transitionAnim) {
            this.transitionAnim.play('TransIn');
        }
    }

    playTransOutAndChangeScene(sceneName: string) {
        if (this.transitionAnim) {
            this.transitionAnim.play('TransOut');
            this.transitionAnim.once('finished', () => {
                cc.director.loadScene(sceneName);
            });
        } else {
            cc.director.loadScene(sceneName);
        }
    }

    update() {
        // 讓 Transition 節點跟隨 Main Camera 的 x, y
        const camera = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
        if (camera) {
            this.node.x = camera.x;
            this.node.y = camera.y;
        }
    }
} 