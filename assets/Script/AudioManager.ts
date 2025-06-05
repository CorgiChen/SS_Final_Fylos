const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {
    private static _instance: AudioManager = null;
    private audioId: number = -1;

    @property(cc.AudioClip)
    normalBGM: cc.AudioClip = null;

    @property(cc.AudioClip)
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
            
            // 保持節點在場景切換時不被銷毀
            cc.game.addPersistRootNode(this.node);
            // 開始播放普通背景音樂
            this.playNormalBGM();
        } else {
            this.node.destroy();
        }
    }

    playNormalBGM() {
        if (this.normalBGM) {
            this.stopBGM();
            this.audioId = cc.audioEngine.play(this.normalBGM, this.loop, this.volume);
        }
    }

    playEndingBGM() {
        if (this.endingBGM) {
            this.stopBGM();
            this.audioId = cc.audioEngine.play(this.endingBGM, this.loop, this.volume);
        }
    }

    stopBGM() {
        if (this.audioId !== -1) {
            cc.audioEngine.stop(this.audioId);
            this.audioId = -1;
        }
    }

    setVolume(volume: number) {
        this.volume = volume;
        if (this.audioId !== -1) {
            cc.audioEngine.setVolume(this.audioId, volume);
        }
    }

    onDestroy() {
        if (AudioManager._instance === this) {
            AudioManager._instance = null;
        }
    }
} 