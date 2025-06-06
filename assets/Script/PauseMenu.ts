const { ccclass, property } = cc._decorator;

@ccclass
export default class PauseMenu extends cc.Component {
    @property(cc.Node)
    resumeButton: cc.Node = null;

    @property(cc.Node)
    quitButton: cc.Node = null;

    start() {
        if (this.resumeButton) {
            this.resumeButton.on(cc.Node.EventType.TOUCH_END, this.onResumeClicked, this);
        }

        if (this.quitButton) {
            this.quitButton.on(cc.Node.EventType.TOUCH_END, this.onQuitClicked, this);
        }
    }

    onResumeClicked() {
        const pauseManager = cc.find("Canvas").getComponent("PauseManager");
        if (pauseManager) {
            pauseManager.togglePause();
        }
    }

    onQuitClicked() {
        const pauseManager = cc.find("Canvas").getComponent("PauseManager");
        if (pauseManager) {
            pauseManager.quitToMenu();
        }
    }

    onDestroy() {
        // Clean up event listeners
        if (this.resumeButton) {
            this.resumeButton.off(cc.Node.EventType.TOUCH_END, this.onResumeClicked, this);
        }

        if (this.quitButton) {
            this.quitButton.off(cc.Node.EventType.TOUCH_END, this.onQuitClicked, this);
        }
    }
} 