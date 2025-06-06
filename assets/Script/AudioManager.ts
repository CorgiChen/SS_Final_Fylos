const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {
    private static _instance: AudioManager = null;
    public static audioId: number = -1;

    @property({ type: cc.AudioClip })
    normalBGM: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    endingBGM: cc.AudioClip = null;

    @property
    volume: number = 0.5;

    @property
    loop: boolean = true;

    public static get instance(): AudioManager {
        return this._instance;
    }

    onLoad() {
        if (AudioManager._instance === null) {
            AudioManager._instance = this;
            cc.game.addPersistRootNode(this.node);
            // 只在第一次 persist 時自動播放
            this.playNormalBGM();
            cc.log(AudioManager.audioId);
        } else {
            this.node.destroy();
        }
    }

    playNormalBGM() {
        if (this.normalBGM) {
            this.stopBGM();
            AudioManager.audioId = cc.audioEngine.play(this.normalBGM, this.loop, this.volume);
        }
    }

    playEndingBGM() {
        if (this.endingBGM) {
            this.stopBGM();
            AudioManager.audioId = cc.audioEngine.play(this.endingBGM, this.loop, this.volume);
        }
    }

    stopBGM() {
        if (AudioManager.audioId !== -1) {
            cc.audioEngine.stop(AudioManager.audioId);
            AudioManager.audioId = -1;
        }
    }

    setVolume(volume: number) {
        this.volume = volume;
        // 只要有正在播放的 BGM，立即調整音量
        if (AudioManager.audioId !== -1) {
            cc.audioEngine.setVolume(AudioManager.audioId, volume);
        }
    }

    // 可選：切換 BGM 時自動用目前 volume
    switchToNormalBGM() {
        this.playNormalBGM();
        this.setVolume(this.volume);
    }

    switchToEndingBGM() {
        this.playEndingBGM();
        this.setVolume(this.volume);
    }

    onDestroy() {
        if (AudioManager._instance === this) {
            AudioManager._instance = null;
        }
    }
} 