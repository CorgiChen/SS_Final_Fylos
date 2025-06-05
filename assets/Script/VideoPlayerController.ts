const { ccclass, property } = cc._decorator;

@ccclass
export default class VideoPlayerController extends cc.Component {
    @property(cc.VideoPlayer)
    videoPlayer: cc.VideoPlayer = null;

    @property({
        tooltip: "是否自動播放視頻"
    })
    autoPlay: boolean = false;

    @property
    nextScene: string = "Scene000_StartScene";

    private hasPlayed: boolean = false;

    onLoad() {
        cc.log("VideoPlayerController onLoad");
        if (!this.videoPlayer) {
            this.videoPlayer = this.getComponent(cc.VideoPlayer);
            cc.log("VideoPlayer component found:", this.videoPlayer ? "yes" : "no");
        }

        if (this.videoPlayer) {
            this.setupVideoPlayerEvents();
            // 確保視頻設置正確
            this.videoPlayer.keepAspectRatio = true;
            this.videoPlayer.isFullscreen = false;
            this.videoPlayer.stayOnBottom = false;
            cc.log("VideoPlayer setup completed");
        }
    }

    start() {
        cc.log("VideoPlayerController start");
        if (this.videoPlayer) {
            cc.log("Video resource type:", this.videoPlayer.resourceType);
            cc.log("Video clip:", this.videoPlayer.clip ? "set" : "not set");
            cc.log("Video remote URL:", this.videoPlayer.remoteURL);
            cc.log("Video player state:", this.videoPlayer.currentTime);
        }
    }

    private setupVideoPlayerEvents() {
        cc.log("Setting up video player events");
        const eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = "VideoPlayerController";
        eventHandler.handler = "onVideoPlayerEvent";
        eventHandler.customEventData = "video_event";

        this.videoPlayer.videoPlayerEvent = [eventHandler];
        cc.log("Video player events setup completed");
    }

    private loadScene() {
        cc.director.loadScene(this.nextScene, (err, scene) => {
            if (err) {
                cc.error("Failed to load scene:", err);
                return;
            }
            cc.log("Scene loaded successfully");
        });
    }

    onVideoPlayerEvent(videoPlayer: cc.VideoPlayer, eventType: cc.VideoPlayer.EventType, customEventData: string) {
        cc.log("Video event received:", eventType);
        switch (eventType) {
            case cc.VideoPlayer.EventType.PLAYING:
                cc.log("Video is playing");
                cc.log("Current time:", this.videoPlayer.currentTime);
                break;
            case cc.VideoPlayer.EventType.PAUSED:
                cc.log("Video is paused");
                cc.log("Current time:", this.videoPlayer.currentTime);
                break;
            case cc.VideoPlayer.EventType.STOPPED:
                cc.log("Video is stopped");
                cc.log("Current time:", this.videoPlayer.currentTime);
                break;
            case cc.VideoPlayer.EventType.COMPLETED:
                cc.log("Video playback completed");
                this.loadScene();
                break;
            case cc.VideoPlayer.EventType.META_LOADED:
                cc.log("Video metadata loaded");
                break;
            case cc.VideoPlayer.EventType.CLICKED:
                cc.log("Video player clicked");
                if (!this.hasPlayed) {
                    cc.log("First click, starting video playback");
                    this.videoPlayer.play();
                    this.hasPlayed = true;
                } else {
                    cc.log("Video has already been played once");
                }
                break;
            case cc.VideoPlayer.EventType.READY_TO_PLAY:
                cc.log("Video is ready to play");
                if (this.autoPlay && !this.hasPlayed) {
                    cc.log("AutoPlay enabled, starting video playback");
                    this.videoPlayer.play();
                    this.hasPlayed = true;
                }
                break;
        }
    }

    onDestroy() {
        cc.log("VideoPlayerController onDestroy");
        if (this.videoPlayer) {
            this.videoPlayer.videoPlayerEvent = [];
        }
    }
} 