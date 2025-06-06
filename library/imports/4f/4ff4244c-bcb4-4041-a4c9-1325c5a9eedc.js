"use strict";
cc._RF.push(module, '4ff42RMvLRAQaTJEyXFqe7c', 'VideoPlayerController');
// Script/VideoPlayerController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VideoPlayerController = /** @class */ (function (_super) {
    __extends(VideoPlayerController, _super);
    function VideoPlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoPlayer = null;
        _this.autoPlay = false;
        _this.nextScene = "Scene000_StartScene";
        _this.hasPlayed = false;
        return _this;
    }
    VideoPlayerController.prototype.onLoad = function () {
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
    };
    VideoPlayerController.prototype.start = function () {
        cc.log("VideoPlayerController start");
        if (this.videoPlayer) {
            cc.log("Video resource type:", this.videoPlayer.resourceType);
            cc.log("Video clip:", this.videoPlayer.clip ? "set" : "not set");
            cc.log("Video remote URL:", this.videoPlayer.remoteURL);
            cc.log("Video player state:", this.videoPlayer.currentTime);
        }
    };
    VideoPlayerController.prototype.setupVideoPlayerEvents = function () {
        cc.log("Setting up video player events");
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = "VideoPlayerController";
        eventHandler.handler = "onVideoPlayerEvent";
        eventHandler.customEventData = "video_event";
        this.videoPlayer.videoPlayerEvent = [eventHandler];
        cc.log("Video player events setup completed");
    };
    VideoPlayerController.prototype.loadScene = function () {
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene(this.nextScene);
        }
        else {
            cc.director.loadScene(this.nextScene);
        }
    };
    VideoPlayerController.prototype.onVideoPlayerEvent = function (videoPlayer, eventType, customEventData) {
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
                }
                else {
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
    };
    VideoPlayerController.prototype.onDestroy = function () {
        cc.log("VideoPlayerController onDestroy");
        if (this.videoPlayer) {
            this.videoPlayer.videoPlayerEvent = [];
        }
    };
    __decorate([
        property(cc.VideoPlayer)
    ], VideoPlayerController.prototype, "videoPlayer", void 0);
    __decorate([
        property({
            tooltip: "是否自動播放視頻"
        })
    ], VideoPlayerController.prototype, "autoPlay", void 0);
    __decorate([
        property
    ], VideoPlayerController.prototype, "nextScene", void 0);
    VideoPlayerController = __decorate([
        ccclass
    ], VideoPlayerController);
    return VideoPlayerController;
}(cc.Component));
exports.default = VideoPlayerController;

cc._RF.pop();