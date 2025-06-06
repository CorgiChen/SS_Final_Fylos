import AudioManager from "./AudioManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class PauseManager extends cc.Component {
    @property(cc.Node)
    pauseMenu: cc.Node = null;

    @property(cc.Node)
    pauseButton: cc.Node = null;

    @property(cc.Node)
    volumeUpButton: cc.Node = null;

    @property(cc.Node)
    volumeDownButton: cc.Node = null;

    @property(cc.Label)
    volumeLabel: cc.Label = null;

    private isPaused: boolean = false;
    private audioManager: AudioManager = null;

    start() {
        // Initialize pause menu
        if (this.pauseMenu) {
            this.pauseMenu.active = false;
        }

        // Update volume label
        this.updateVolumeLabel();

        // Register pause button event
        if (this.pauseButton) {
            this.pauseButton.on(cc.Node.EventType.TOUCH_END, () => {
                this.togglePause();
            }, this);
        }

        // Register volume control events
        if (this.volumeUpButton) {
            this.volumeUpButton.on(cc.Node.EventType.TOUCH_END, this.increaseVolume, this);
        }
        if (this.volumeDownButton) {
            this.volumeDownButton.on(cc.Node.EventType.TOUCH_END, this.decreaseVolume, this);
        }

        // Register resume button event
        const resumeButton = cc.find("Canvas/PauseMenu/ResumeButton");
        if (resumeButton) {
            resumeButton.on(cc.Node.EventType.TOUCH_END, () => {
                this.togglePause();
            }, this);
        }

        // Register quit button event
        const quitButton = cc.find("Canvas/PauseMenu/QuitButton");
        if (quitButton) {
            quitButton.on(cc.Node.EventType.TOUCH_END, () => {
                this.quitToMenu();
            }, this);
        }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        
        if (this.pauseMenu) {
            this.pauseMenu.active = this.isPaused;
        }

        if (this.isPaused) {
            cc.director.pause();
        } else {
            cc.director.resume();
        }
    }

    quitToMenu() {
        cc.director.resume();
        const transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_StartScene");
        } else {
            cc.director.loadScene("Scene000_StartScene");
        }
    }

    increaseVolume() {
        let newVolume = Math.min(1.0, cc.audioEngine.getVolume(AudioManager.audioId) + 0.1);
        cc.audioEngine.setVolume(AudioManager.audioId, newVolume);
        this.updateVolumeLabel();
    }

    decreaseVolume() {
        let newVolume = Math.max(0.0, cc.audioEngine.getVolume(AudioManager.audioId) - 0.1);
        cc.audioEngine.setVolume(AudioManager.audioId, newVolume);
        this.updateVolumeLabel();
    }

    updateVolumeLabel() {
        const volume10 = Math.round(cc.audioEngine.getVolume(AudioManager.audioId) * 10);
        this.volumeLabel.string = ` ${volume10} `;
    }

    onDestroy() {
        // Clean up event listeners
        if (this.pauseButton) {
            this.pauseButton.off(cc.Node.EventType.TOUCH_END);
        }

        if (this.volumeUpButton) {
            this.volumeUpButton.off(cc.Node.EventType.TOUCH_END);
        }

        if (this.volumeDownButton) {
            this.volumeDownButton.off(cc.Node.EventType.TOUCH_END);
        }

        const resumeButton = cc.find("Canvas/PauseMenu/ResumeButton");
        if (resumeButton) {
            resumeButton.off(cc.Node.EventType.TOUCH_END);
        }

        const quitButton = cc.find("Canvas/PauseMenu/QuitButton");
        if (quitButton) {
            quitButton.off(cc.Node.EventType.TOUCH_END);
        }
    }

    update() {
        const camera = cc.find("Canvas/Main Camera");
        if (camera) {
            // Add offset relative to camera position using Vec3
            this.node.position = camera.position.add(cc.v3(668, 362, 0));
            if (this.pauseMenu) {
                this.pauseMenu.position = camera.position.add(cc.v3(0, 0, 0));
            }
        }
    }
}