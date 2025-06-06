import PlayerController from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ReloadSceneButton extends cc.Component {
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.reloadScene, this);
    }

    reloadScene() {
        const scene = cc.director.getScene();
        const player = scene.getChildByName("Canvas").getChildByName("Player").getComponent(PlayerController);
        player.isDied = true;
        const sceneName = cc.director.getScene().name;
            // 播放死亡音效
        if (player.dieSound) {
            cc.audioEngine.playEffect(player.dieSound, false);
        }
        // 讓玩家慢慢跌倒（0.5秒內旋轉90度）
        cc.tween(player.node)
            .to(0.5, { angle: 90 })
            .start();
        setTimeout(() => {
            cc.director.loadScene(sceneName);
        }, 2000);
    }

    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.reloadScene, this);
    }


    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.reloadScene, this);
    }

    update() {
        const camera = cc.find("Canvas/Main Camera");
        if (camera) {
            // Add offset relative to camera position using Vec3
            this.node.position = camera.position.add(cc.v3(518, 362, 0));
        }
    }
} 