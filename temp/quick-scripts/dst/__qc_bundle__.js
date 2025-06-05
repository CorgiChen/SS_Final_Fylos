
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Camera');
require('./assets/Script/CameraController');
require('./assets/Script/ChatBubbleController');
require('./assets/Script/Player');
require('./assets/Script/PressStart');
require('./assets/Script/Transport');
require('./assets/Script/VideoPlayerController');
require('./assets/Script/Wind');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PressStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '642deZXJTpASJndCgo+Frm+', 'PressStart');
// Script/PressStart.ts

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
var PressStart = /** @class */ (function (_super) {
    __extends(PressStart, _super);
    function PressStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PressStart.prototype.onLoad = function () {
        // 註冊按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    PressStart.prototype.onButtonClick = function () {
        // 切換場景
        cc.director.loadScene("Scene001_Home_Outside");
    };
    PressStart.prototype.onDestroy = function () {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    PressStart = __decorate([
        ccclass
    ], PressStart);
    return PressStart;
}(cc.Component));
exports.default = PressStart;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQcmVzc1N0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQWdCQSxDQUFDO0lBZEcsMkJBQU0sR0FBTjtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsa0NBQWEsR0FBYjtRQUNJLE9BQU87UUFDUCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksU0FBUztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFmZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdCOUI7SUFBRCxpQkFBQztDQWhCRCxBQWdCQyxDQWhCdUMsRUFBRSxDQUFDLFNBQVMsR0FnQm5EO2tCQWhCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVzc1N0YXJ0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g6Ki75YaK5oyJ6YiV6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIC8vIOWIh+aPm+WgtOaZr1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lMDAxX0hvbWVfT3V0c2lkZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g56e76Zmk5LqL5Lu255uj6IG9XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/VideoPlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    VideoPlayerController.prototype.loadStartScene = function () {
        cc.director.loadScene("StartScene", function (err, scene) {
            if (err) {
                cc.error("Failed to load StartScene:", err);
                return;
            }
            cc.log("StartScene loaded successfully");
        });
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
                this.loadStartScene();
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
                break;
        }
    };
    VideoPlayerController.prototype.onDestroy = function () {
        cc.log("VideoPlayerController onDestroy");
        // Clean up event handlers
        if (this.videoPlayer) {
            this.videoPlayer.videoPlayerEvent = [];
        }
    };
    __decorate([
        property(cc.VideoPlayer)
    ], VideoPlayerController.prototype, "videoPlayer", void 0);
    VideoPlayerController = __decorate([
        ccclass
    ], VideoPlayerController);
    return VideoPlayerController;
}(cc.Component));
exports.default = VideoPlayerController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxWaWRlb1BsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUFvR0M7UUFsR0csaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBZ0d2QyxDQUFDO0lBOUZHLHNDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsV0FBVztZQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRCxxQ0FBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFD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OlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuVmlkZW9QbGF5ZXIpXHJcbiAgICB2aWRlb1BsYXllcjogY2MuVmlkZW9QbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGFzUGxheWVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyQ29udHJvbGxlciBvbkxvYWRcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvUGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcik7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyIGNvbXBvbmVudCBmb3VuZDpcIiwgdGhpcy52aWRlb1BsYXllciA/IFwieWVzXCIgOiBcIm5vXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9QbGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZGVvUGxheWVyRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIC8vIOeiuuS/neimlumgu+ioree9ruato+eiulxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyLmtlZXBBc3BlY3RSYXRpbyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3RheU9uQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyIHNldHVwIGNvbXBsZXRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwiVmlkZW9QbGF5ZXJDb250cm9sbGVyIHN0YXJ0XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIHJlc291cmNlIHR5cGU6XCIsIHRoaXMudmlkZW9QbGF5ZXIucmVzb3VyY2VUeXBlKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gY2xpcDpcIiwgdGhpcy52aWRlb1BsYXllci5jbGlwID8gXCJzZXRcIiA6IFwibm90IHNldFwiKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gcmVtb3RlIFVSTDpcIiwgdGhpcy52aWRlb1BsYXllci5yZW1vdGVVUkwpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJWaWRlbyBwbGF5ZXIgc3RhdGU6XCIsIHRoaXMudmlkZW9QbGF5ZXIuY3VycmVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwVmlkZW9QbGF5ZXJFdmVudHMoKSB7XHJcbiAgICAgICAgY2MubG9nKFwiU2V0dGluZyB1cCB2aWRlbyBwbGF5ZXIgZXZlbnRzXCIpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBldmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJWaWRlb1BsYXllckNvbnRyb2xsZXJcIjtcclxuICAgICAgICBldmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25WaWRlb1BsYXllckV2ZW50XCI7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IFwidmlkZW9fZXZlbnRcIjtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci52aWRlb1BsYXllckV2ZW50ID0gW2V2ZW50SGFuZGxlcl07XHJcbiAgICAgICAgY2MubG9nKFwiVmlkZW8gcGxheWVyIGV2ZW50cyBzZXR1cCBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkU3RhcnRTY2VuZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTdGFydFNjZW5lXCIsIChlcnIsIHNjZW5lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgU3RhcnRTY2VuZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coXCJTdGFydFNjZW5lIGxvYWRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWRlb1BsYXllckV2ZW50KHZpZGVvUGxheWVyOiBjYy5WaWRlb1BsYXllciwgZXZlbnRUeXBlOiBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUsIGN1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MubG9nKFwiVmlkZW8gZXZlbnQgcmVjZWl2ZWQ6XCIsIGV2ZW50VHlwZSk7XHJcbiAgICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuUExBWUlORzpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIGlzIHBsYXlpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJDdXJyZW50IHRpbWU6XCIsIHRoaXMudmlkZW9QbGF5ZXIuY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuVmlkZW9QbGF5ZXIuRXZlbnRUeXBlLlBBVVNFRDpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIGlzIHBhdXNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkN1cnJlbnQgdGltZTpcIiwgdGhpcy52aWRlb1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuU1RPUFBFRDpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIGlzIHN0b3BwZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJDdXJyZW50IHRpbWU6XCIsIHRoaXMudmlkZW9QbGF5ZXIuY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuVmlkZW9QbGF5ZXIuRXZlbnRUeXBlLkNPTVBMRVRFRDpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIHBsYXliYWNrIGNvbXBsZXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXJ0U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5NRVRBX0xPQURFRDpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIG1ldGFkYXRhIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5DTElDS0VEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gcGxheWVyIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzUGxheWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiRmlyc3QgY2xpY2ssIHN0YXJ0aW5nIHZpZGVvIHBsYXliYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzUGxheWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWQgb25jZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5SRUFEWV9UT19QTEFZOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgcmVhZHkgdG8gcGxheVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MubG9nKFwiVmlkZW9QbGF5ZXJDb250cm9sbGVyIG9uRGVzdHJveVwiKTtcclxuICAgICAgICAvLyBDbGVhbiB1cCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIudmlkZW9QbGF5ZXJFdmVudCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fcd7dzYXhKYoTqqS8pN7ZJ', 'Camera');
// Script/Camera.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Reference to the player node
        _this.player = null;
        return _this;
    }
    // Called when the script instance is being loaded
    NewClass.prototype.onLoad = function () {
        // Find the player node in the scene
        this.player = cc.find("Player");
    };
    // Called every frame, dt is the delta time since last frame
    NewClass.prototype.update = function (dt) {
        // Get the target position (player's position)
        var playerPos = this.player.getPosition();
        // Offset the camera to the left by 100 units (adjust as needed)
        var targetPos = playerPos.clone();
        targetPos.x -= 200;
        targetPos.y -= 600;
        // Get the current camera position
        var cameraPos = this.node.getPosition();
        // Smoothly interpolate camera position towards target position
        cameraPos.lerp(targetPos, 0.1, cameraPos);
        // Clamp the camera's y position between 0 and 100
        cameraPos.y = cc.misc.clampf(targetPos.y, 0, 100);
        // Clamp the camera's x position between 0 and 8000
        if (cameraPos.x < 0) {
            cameraPos.x = 0;
        }
        else if (cameraPos.x > 8000) {
            cameraPos.x = 8000;
        }
        // Set the camera's new position
        this.node.setPosition(cameraPos);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQ0M7UUFuQ0csK0JBQStCO1FBQy9CLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBa0MzQixDQUFDO0lBaENHLGtEQUFrRDtJQUNsRCx5QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNERBQTREO0lBQzVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsOENBQThDO1FBQzlDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUMsZ0VBQWdFO1FBQ2hFLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNuQixTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUVuQixrQ0FBa0M7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QywrREFBK0Q7UUFDL0QsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLGtEQUFrRDtRQUNsRCxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxELG1EQUFtRDtRQUNuRCxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtZQUMzQixTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBbkNnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0M1QjtJQUFELGVBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0NqRDtrQkFwQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBDYWxsZWQgd2hlbiB0aGUgc2NyaXB0IGluc3RhbmNlIGlzIGJlaW5nIGxvYWRlZFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIHBsYXllciBub2RlIGluIHRoZSBzY2VuZVxyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIlBsYXllclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsZWQgZXZlcnkgZnJhbWUsIGR0IGlzIHRoZSBkZWx0YSB0aW1lIHNpbmNlIGxhc3QgZnJhbWVcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgdGFyZ2V0IHBvc2l0aW9uIChwbGF5ZXIncyBwb3NpdGlvbilcclxuICAgICAgICBsZXQgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBPZmZzZXQgdGhlIGNhbWVyYSB0byB0aGUgbGVmdCBieSAxMDAgdW5pdHMgKGFkanVzdCBhcyBuZWVkZWQpXHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IHBsYXllclBvcy5jbG9uZSgpO1xyXG4gICAgICAgIHRhcmdldFBvcy54IC09IDIwMDtcclxuICAgICAgICB0YXJnZXRQb3MueSAtPSA2MDA7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBjYW1lcmEgcG9zaXRpb25cclxuICAgICAgICBsZXQgY2FtZXJhUG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gU21vb3RobHkgaW50ZXJwb2xhdGUgY2FtZXJhIHBvc2l0aW9uIHRvd2FyZHMgdGFyZ2V0IHBvc2l0aW9uXHJcbiAgICAgICAgY2FtZXJhUG9zLmxlcnAodGFyZ2V0UG9zLCAwLjEsIGNhbWVyYVBvcyk7XHJcblxyXG4gICAgICAgIC8vIENsYW1wIHRoZSBjYW1lcmEncyB5IHBvc2l0aW9uIGJldHdlZW4gMCBhbmQgMTAwXHJcbiAgICAgICAgY2FtZXJhUG9zLnkgPSBjYy5taXNjLmNsYW1wZih0YXJnZXRQb3MueSwgMCwgMTAwKTtcclxuXHJcbiAgICAgICAgLy8gQ2xhbXAgdGhlIGNhbWVyYSdzIHggcG9zaXRpb24gYmV0d2VlbiAwIGFuZCA4MDAwXHJcbiAgICAgICAgaWYgKGNhbWVyYVBvcy54IDwgMCkge1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MueCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYW1lcmFQb3MueCA+IDgwMDApIHtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnggPSA4MDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXQgdGhlIGNhbWVyYSdzIG5ldyBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYW1lcmFQb3MpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Wind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '835a4Mbk9tPTIWnxW5UxwFV', 'Wind');
// Script/Wind.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.playerNode = null;
        _this.offsetX = 160; // 右邊偏移量
        _this.offsetY = 30; // 垂直偏移量
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.update = function (dt) {
        // 跟隨 player 並根據 moveDirection 決定風向
        if (this.playerNode) {
            // 取得 Player 腳本
            var playerScript = this.playerNode.getComponent('Player');
            var moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整風的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
            }
            else {
                this.node.x = this.playerNode.x + this.offsetX;
            }
            this.node.y = this.playerNode.y + this.offsetY;
        }
    };
    NewClass.prototype.onKeyDown = function (event) {
        if (event.keyCode === cc.macro.KEY.f) {
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[0];
                    anim.play(firstClip.name);
                }
            }
            else {
                // 若已經顯示，確保動畫持續撥放
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[0];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        if (event.keyCode === cc.macro.KEY.f) {
            this.node.active = false;
        }
        if (event.keyCode === cc.macro.KEY.space) {
            this.node.active = false;
        }
    };
    NewClass.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "playerNode", void 0);
    __decorate([
        property
    ], NewClass.prototype, "offsetX", void 0);
    __decorate([
        property
    ], NewClass.prototype, "offsetY", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXaW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUZDO1FBbEZHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVcsR0FBRyxDQUFDLENBQUMsUUFBUTtRQUcvQixhQUFPLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTs7UUFxRTlCLGlCQUFpQjtJQUNyQixDQUFDO0lBcEVHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixlQUFlO1lBQ2YsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksWUFBWSxFQUFFO2dCQUNkLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxhQUFhO1lBQ2IsSUFBSSxPQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNsRDtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUQsNEJBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ25DLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLFVBQVU7Z0JBQ1YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNwQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjthQUNKO2lCQUFNO2dCQUNILGlCQUFpQjtnQkFDakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNwQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTt3QkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzdCO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsS0FBNkI7UUFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQS9FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUTs2Q0FDYTtJQUd0QjtRQURDLFFBQVE7NkNBQ1k7SUFmSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUY1QjtJQUFELGVBQUM7Q0FyRkQsQUFxRkMsQ0FyRnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUZqRDtrQkFyRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvZmZzZXRYOiBudW1iZXIgPSAxNjA7IC8vIOWPs+mCiuWBj+enu+mHj1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb2Zmc2V0WTogbnVtYmVyID0gMzA7IC8vIOWeguebtOWBj+enu+mHj1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOmgkOioremaseW9olxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8g6Lef6ZqoIHBsYXllciDkuKbmoLnmk5ogbW92ZURpcmVjdGlvbiDmsbrlrprpoqjlkJFcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIOWPluW+lyBQbGF5ZXIg6IWz5pysXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclNjcmlwdCA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZURpciA9IDE7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJTY3JpcHQpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVEaXIgPSBwbGF5ZXJTY3JpcHQubm9kZS5zY2FsZVggPCAwID8gLTEgOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOagueaTmuaWueWQkeiqv+aVtOmiqOeahOS9jee9rlxyXG4gICAgICAgICAgICBpZiAobW92ZURpciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5wbGF5ZXJOb2RlLnggLSB0aGlzLm9mZnNldFg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMucGxheWVyTm9kZS54ICsgdGhpcy5vZmZzZXRYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5wbGF5ZXJOb2RlLnkgKyB0aGlzLm9mZnNldFk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+56ys5LiA5YCL5YuV55WrXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbmltICYmIGFuaW0uZ2V0Q2xpcHMoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDbGlwID0gYW5pbS5nZXRDbGlwcygpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0ucGxheShmaXJzdENsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDoi6Xlt7LntpPpoa/npLrvvIznorrkv53li5XnlavmjIHnuozmkqXmlL5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW0gJiYgYW5pbS5nZXRDbGlwcygpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdENsaXAgPSBhbmltLmdldENsaXBzKClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltLmdldEFuaW1hdGlvblN0YXRlKGZpcnN0Q2xpcC5uYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbS5wbGF5KGZpcnN0Q2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4da677y89CoYaRo5Za3EB3', 'Player');
// Script/Player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveSpeed = 300;
        _this.jumpForce = 500;
        _this.gravity = 1200;
        _this.maxFallSpeed = 800;
        _this.groundY = -300; // 添加地面Y座標屬性
        _this.moveDirection = 0;
        _this.onGround = false;
        _this.isJumping = false;
        _this.isFalling = false;
        _this.anim = null;
        _this.verticalVelocity = 0;
        _this.horizontalVelocity = 0;
        _this.rigidbody = null;
        _this.collider = null;
        _this.currentAnimation = "idle";
        _this.groundCheckDistance = 10;
        _this.lastVerticalVelocity = 0; // 用於檢測速度方向變化
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        // 初始化物理系統
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, -1200);
        manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
            cc.PhysicsManager.DrawBits.e_shapeBit;
        // 獲取組件
        this.anim = this.getComponent(cc.Animation);
        if (this.anim) {
            var clips = this.anim.getClips();
            clips.forEach(function (clip) {
                clip.wrapMode = cc.WrapMode.Loop;
            });
        }
        // 初始化物理組件
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        if (this.rigidbody) {
            this.rigidbody.type = cc.RigidBodyType.Dynamic;
            this.rigidbody.fixedRotation = true;
            this.rigidbody.enabledContactListener = true;
            this.rigidbody.gravityScale = 0;
            this.rigidbody.linearDamping = 0;
            this.rigidbody.allowSleep = false;
        }
        if (this.collider) {
            this.collider.enabled = true;
            this.collider.sensor = false;
            this.collider.friction = 0.3;
            this.collider.restitution = 0;
            // 調整碰撞箱大小
            var size = this.node.getContentSize();
            this.collider.size = cc.size(size.width * 0.8, size.height * 0.8);
            this.collider.offset = cc.v2(0, -size.height * 0.1);
        }
        // 註冊鍵盤事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // 預設播放待機動畫
        if (this.anim) {
            this.anim.play("idle");
        }
    };
    PlayerController.prototype.playAnimation = function (animName) {
        if (this.anim && this.currentAnimation !== animName) {
            var state = this.anim.getAnimationState(animName);
            if (state) {
                state.wrapMode = cc.WrapMode.Loop;
                state.speed = 1.0;
                this.anim.play(animName);
                this.currentAnimation = animName;
            }
        }
    };
    PlayerController.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                this.moveDirection = -1;
                this.horizontalVelocity = -this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX > 0) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                this.moveDirection = 1;
                this.horizontalVelocity = this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX < 0) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.up:
            case cc.macro.KEY.space:
                if (this.onGround) {
                    this.jump();
                }
                break;
        }
    };
    PlayerController.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                if (this.moveDirection < 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                    }
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                if (this.moveDirection > 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                    }
                }
                break;
        }
    };
    PlayerController.prototype.jump = function () {
        if (this.onGround) {
            this.onGround = false;
            this.isJumping = true;
            this.isFalling = false;
            this.verticalVelocity = this.jumpForce;
            this.playAnimation("jump");
        }
    };
    PlayerController.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            var normal = contact.getWorldManifold().normal;
            if (normal.y < 0) {
                this.onGround = true;
                this.isJumping = false;
                this.isFalling = false;
                this.verticalVelocity = 0;
                if (this.moveDirection !== 0) {
                    this.playAnimation("move");
                }
                else {
                    this.playAnimation("idle");
                }
            }
        }
    };
    PlayerController.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            var normal = contact.getWorldManifold().normal;
            if (normal.y < 0) {
                this.onGround = false;
                if (this.verticalVelocity < 0) {
                    this.isFalling = true;
                    this.playAnimation("fall");
                }
            }
        }
    };
    PlayerController.prototype.update = function (dt) {
        // 檢查是否在地面上
        if (!this.onGround) {
            var startPos = cc.v2(this.node.position.x, this.node.position.y);
            var rayStart = cc.v2(startPos.x, startPos.y);
            var rayEnd = cc.v2(startPos.x, startPos.y - this.groundCheckDistance);
            var results = cc.director.getPhysicsManager().rayCast(rayStart, rayEnd, cc.RayCastType.All);
            if (results.length > 0) {
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    if (result.collider.node.name === 'Ground') {
                        // 確保只有在地面Y座標附近才判定為著地
                        if (Math.abs(result.point.y - this.groundY) < 10) {
                            this.onGround = true;
                            this.isFalling = false;
                            this.isJumping = false;
                            this.verticalVelocity = 0;
                            this.node.y = this.groundY; // 確保角色位置正確
                            break;
                        }
                    }
                }
            }
        }
        // 應用重力
        if (!this.onGround) {
            this.verticalVelocity -= this.gravity * dt;
            if (this.verticalVelocity < -this.maxFallSpeed) {
                this.verticalVelocity = -this.maxFallSpeed;
            }
            // 檢測跳躍到最高點
            if (this.lastVerticalVelocity > 0 && this.verticalVelocity <= 0) {
                this.isJumping = false;
                this.isFalling = true;
                this.playAnimation("fall");
            }
            // 更新下落狀態
            if (this.verticalVelocity < 0 && !this.isFalling) {
                this.isFalling = true;
                this.isJumping = false;
                this.playAnimation("fall");
            }
        }
        // 更新位置
        var newX = this.node.x + this.horizontalVelocity * dt;
        var newY = this.node.y + this.verticalVelocity * dt;
        // 防止角色掉出地面
        if (newY < this.groundY) {
            newY = this.groundY;
            this.onGround = true;
            this.isFalling = false;
            this.isJumping = false;
            this.verticalVelocity = 0;
        }
        this.node.setPosition(newX, newY);
        // 更新動畫
        if (this.anim) {
            if (this.isJumping) {
                this.playAnimation("jump");
            }
            else if (this.isFalling) {
                this.playAnimation("fall");
            }
            else if (this.moveDirection !== 0) {
                this.playAnimation("move");
            }
            else {
                this.playAnimation("idle");
            }
        }
        // 保存當前垂直速度用於下一幀比較
        this.lastVerticalVelocity = this.verticalVelocity;
    };
    PlayerController.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    __decorate([
        property
    ], PlayerController.prototype, "moveSpeed", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "jumpForce", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "gravity", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "maxFallSpeed", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "groundY", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFxUkM7UUFuUkcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFHM0IsYUFBTyxHQUFXLENBQUMsR0FBRyxDQUFDLENBQUUsWUFBWTtRQUU5QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUMxQixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBMEIsSUFBSSxDQUFDO1FBQ3ZDLHNCQUFnQixHQUFXLE1BQU0sQ0FBQztRQUNsQyx5QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsMEJBQW9CLEdBQVcsQ0FBQyxDQUFDLENBQUUsYUFBYTs7SUEwUDVELENBQUM7SUF4UEcsaUNBQU0sR0FBTjtRQUNJLFVBQVU7UUFDVixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJ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RCxBQXFSQyxDQXJSNkMsRUFBRSxDQUFDLFNBQVMsR0FxUnpEO2tCQXJSb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHlcbiAgICBtb3ZlU3BlZWQ6IG51bWJlciA9IDMwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGp1bXBGb3JjZTogbnVtYmVyID0gNTAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZ3Jhdml0eTogbnVtYmVyID0gMTIwMDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIG1heEZhbGxTcGVlZDogbnVtYmVyID0gODAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZ3JvdW5kWTogbnVtYmVyID0gLTMwMDsgIC8vIOa3u+WKoOWcsOmdolnluqfmqJnlsazmgKdcblxuICAgIHB1YmxpYyBtb3ZlRGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzSnVtcGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNGYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuICAgIHByaXZhdGUgdmVydGljYWxWZWxvY2l0eTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGhvcml6b250YWxWZWxvY2l0eTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcbiAgICBwcml2YXRlIGNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudEFuaW1hdGlvbjogc3RyaW5nID0gXCJpZGxlXCI7XG4gICAgcHJpdmF0ZSBncm91bmRDaGVja0Rpc3RhbmNlOiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIGxhc3RWZXJ0aWNhbFZlbG9jaXR5OiBudW1iZXIgPSAwOyAgLy8g55So5pa85qqi5ris6YCf5bqm5pa55ZCR6K6K5YyWXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOWIneWni+WMlueJqeeQhuezu+e1sVxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5ncmF2aXR5ID0gY2MudjIoMCwgLTEyMDApO1xuICAgICAgICBtYW5hZ2VyLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXQ7XG5cbiAgICAgICAgLy8g542y5Y+W57WE5Lu2XG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaXBzID0gdGhpcy5hbmltLmdldENsaXBzKCk7XG4gICAgICAgICAgICBjbGlwcy5mb3JFYWNoKGNsaXAgPT4ge1xuICAgICAgICAgICAgICAgIGNsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJ3lp4vljJbniannkIbntYTku7ZcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcblxuICAgICAgICBpZiAodGhpcy5yaWdpZGJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmVuYWJsZWRDb250YWN0TGlzdGVuZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmxpbmVhckRhbXBpbmcgPSAwO1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLnNlbnNvciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5mcmljdGlvbiA9IDAuMztcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIucmVzdGl0dXRpb24gPSAwO1xuXG4gICAgICAgICAgICAvLyDoqr/mlbTnorDmkp7nrrHlpKflsI9cbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoc2l6ZS53aWR0aCAqIDAuOCwgc2l6ZS5oZWlnaHQgKiAwLjgpO1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5vZmZzZXQgPSBjYy52MigwLCAtc2l6ZS5oZWlnaHQgKiAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6Ki75YaK6Y2155uk5LqL5Lu2XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuXG4gICAgICAgIC8vIOmgkOioreaSreaUvuW+heapn+WLleeVq1xuICAgICAgICBpZiAodGhpcy5hbmltKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImlkbGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlBbmltYXRpb24oYW5pbU5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5hbmltICYmIHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPT0gYW5pbU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGFuaW1OYW1lKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zcGVlZCA9IDEuMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShhbmltTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gYW5pbU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxWZWxvY2l0eSA9IC10aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uR3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlRGlyZWN0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxWZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZURpcmVjdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsVmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJpZGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAganVtcCgpIHtcbiAgICAgICAgaWYgKHRoaXMub25Hcm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSB0aGlzLmp1bXBGb3JjZTtcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImp1bXBcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT09ICdHcm91bmQnKSB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWwgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub3JtYWwueSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXJlY3Rpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJpZGxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT09ICdHcm91bmQnKSB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWwgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub3JtYWwueSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWxWZWxvY2l0eSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJmYWxsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIC8vIOaqouafpeaYr+WQpuWcqOWcsOmdouS4ilxuICAgICAgICBpZiAoIXRoaXMub25Hcm91bmQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gY2MudjIodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGNvbnN0IHJheVN0YXJ0ID0gY2MudjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XG4gICAgICAgICAgICBjb25zdCByYXlFbmQgPSBjYy52MihzdGFydFBvcy54LCBzdGFydFBvcy55IC0gdGhpcy5ncm91bmRDaGVja0Rpc3RhbmNlKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkucmF5Q2FzdChyYXlTdGFydCwgcmF5RW5kLCBjYy5SYXlDYXN0VHlwZS5BbGwpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLm5hbWUgPT09ICdHcm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnorrkv53lj6rmnInlnKjlnLDpnaJZ5bqn5qiZ6ZmE6L+R5omN5Yik5a6a54K66JGX5ZywXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocmVzdWx0LnBvaW50LnkgLSB0aGlzLmdyb3VuZFkpIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMuZ3JvdW5kWTsgIC8vIOeiuuS/neinkuiJsuS9jee9ruato+eiulxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5oeJ55So6YeN5YqbXG4gICAgICAgIGlmICghdGhpcy5vbkdyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5IC09IHRoaXMuZ3Jhdml0eSAqIGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWxWZWxvY2l0eSA8IC10aGlzLm1heEZhbGxTcGVlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxWZWxvY2l0eSA9IC10aGlzLm1heEZhbGxTcGVlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5qqi5ris6Lez6LqN5Yiw5pyA6auY6bueXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0VmVydGljYWxWZWxvY2l0eSA+IDAgJiYgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJmYWxsXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmm7TmlrDkuIvokL3ni4DmhYtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPCAwICYmICF0aGlzLmlzRmFsbGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDkvY3nva5cbiAgICAgICAgbGV0IG5ld1ggPSB0aGlzLm5vZGUueCArIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ICogZHQ7XG4gICAgICAgIGxldCBuZXdZID0gdGhpcy5ub2RlLnkgKyB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgKiBkdDtcblxuICAgICAgICAvLyDpmLLmraLop5LoibLmjonlh7rlnLDpnaJcbiAgICAgICAgaWYgKG5ld1kgPCB0aGlzLmdyb3VuZFkpIHtcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLmdyb3VuZFk7XG4gICAgICAgICAgICB0aGlzLm9uR3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdYLCBuZXdZKTtcblxuICAgICAgICAvLyDmm7TmlrDli5XnlatcbiAgICAgICAgaWYgKHRoaXMuYW5pbSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwianVtcFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0ZhbGxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJmYWxsXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVEaXJlY3Rpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJtb3ZlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJpZGxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L+d5a2Y55W25YmN5Z6C55u06YCf5bqm55So5pa85LiL5LiA5bmA5q+U6LyDXG4gICAgICAgIHRoaXMubGFzdFZlcnRpY2FsVmVsb2NpdHkgPSB0aGlzLnZlcnRpY2FsVmVsb2NpdHk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ChatBubbleController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6347dWRfn1Aa6PnkdBLSu8d', 'ChatBubbleController');
// Script/ChatBubbleController.ts

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
var ChatBubbleController = /** @class */ (function (_super) {
    __extends(ChatBubbleController, _super);
    function ChatBubbleController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.friend = null;
        _this.bubbleSpriteFrame = null;
        _this.chatImageSpriteFrames = [];
        _this.chatBubble = null;
        _this.chatImage = null;
        _this.currentImageIndex = 0;
        _this.DETECTION_RADIUS = 200;
        _this.BUBBLE_OFFSET = 120;
        _this.lastBubbleState = false;
        return _this;
    }
    ChatBubbleController.prototype.onLoad = function () {
        if (!this.player || !this.friend || !this.bubbleSpriteFrame || this.chatImageSpriteFrames.length === 0) {
            cc.error("Please assign all required components!");
            return;
        }
        // 關閉碰撞區域的顯示
        var physicsManager = cc.director.getPhysicsManager();
        if (physicsManager) {
            physicsManager.debugDrawFlags = 0;
        }
        this.createChatBubble();
        this.createChatImage();
    };
    ChatBubbleController.prototype.createChatBubble = function () {
        // 創建一個新的節點作為氣泡
        this.chatBubble = new cc.Node('Chat_Bubble');
        // 添加 Sprite 組件
        var sprite = this.chatBubble.addComponent(cc.Sprite);
        sprite.spriteFrame = this.bubbleSpriteFrame;
        // 添加按鈕組件
        var button = this.chatBubble.addComponent(cc.Button);
        // 設置父節點
        this.chatBubble.parent = this.friend;
        // 設置聊天氣泡的初始位置（在朋友頭頂上方）
        this.chatBubble.y = this.BUBBLE_OFFSET;
        // 確保氣泡在最上層
        this.chatBubble.zIndex = 999;
        // 初始時隱藏聊天氣泡
        this.chatBubble.active = false;
        // 添加點擊事件
        this.chatBubble.on(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
    };
    ChatBubbleController.prototype.createChatImage = function () {
        // 創建聊天圖片節點
        this.chatImage = new cc.Node('Chat_Image');
        // 添加 Sprite 組件
        var sprite = this.chatImage.addComponent(cc.Sprite);
        sprite.spriteFrame = this.chatImageSpriteFrames[0];
        // 設置父節點為 Canvas
        this.chatImage.parent = cc.director.getScene().getChildByName('Canvas');
        // 設置位置在畫面中央
        this.chatImage.setPosition(cc.v2(0, 0));
        // 確保圖片在最上層
        this.chatImage.zIndex = 1000;
        // 初始時隱藏圖片
        this.chatImage.active = false;
        // 添加點擊事件（點擊圖片時顯示下一張或隱藏）
        this.chatImage.on(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
    };
    ChatBubbleController.prototype.onBubbleClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex = 0;
            var sprite = this.chatImage.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
            }
            this.chatImage.active = true;
        }
    };
    ChatBubbleController.prototype.onImageClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex++;
            if (this.currentImageIndex < this.chatImageSpriteFrames.length) {
                // 顯示下一張圖片
                var sprite = this.chatImage.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
                }
            }
            else {
                // 已經是最後一張圖片，隱藏聊天圖片
                this.chatImage.active = false;
                this.currentImageIndex = 0;
            }
        }
    };
    ChatBubbleController.prototype.update = function () {
        if (!this.player || !this.friend || !this.chatBubble)
            return;
        // 將 Vec3 轉換為 Vec2
        var playerPos = new cc.Vec2(this.player.position.x, this.player.position.y);
        var friendPos = new cc.Vec2(this.friend.position.x, this.friend.position.y);
        // 計算玩家和朋友的距離
        var distance = this.getDistance(playerPos, friendPos);
        var shouldShow = distance <= this.DETECTION_RADIUS;
        // 根據距離顯示或隱藏聊天氣泡
        if (this.chatBubble.active !== shouldShow) {
            this.chatBubble.active = shouldShow;
            if (shouldShow) {
                // 確保氣泡在最上層
                this.chatBubble.zIndex = 999;
            }
        }
    };
    ChatBubbleController.prototype.getDistance = function (pos1, pos2) {
        var dx = pos1.x - pos2.x;
        var dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    ChatBubbleController.prototype.onDestroy = function () {
        if (this.chatBubble) {
            this.chatBubble.off(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
            this.chatBubble.destroy();
        }
        if (this.chatImage) {
            this.chatImage.off(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
            this.chatImage.destroy();
        }
    };
    __decorate([
        property(cc.Node)
    ], ChatBubbleController.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], ChatBubbleController.prototype, "friend", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ChatBubbleController.prototype, "bubbleSpriteFrame", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ChatBubbleController.prototype, "chatImageSpriteFrames", void 0);
    ChatBubbleController = __decorate([
        ccclass
    ], ChatBubbleController);
    return ChatBubbleController;
}(cc.Component));
exports.default = ChatBubbleController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGF0QnViYmxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQXdKQztRQXRKRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUd6QywyQkFBcUIsR0FBcUIsRUFBRSxDQUFDO1FBRXJDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUMvQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUNyQyxxQkFBZSxHQUFZLEtBQUssQ0FBQzs7SUFzSTdDLENBQUM7SUFwSUcscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwRyxFQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDbkQsT0FBTztTQUNWO1FBRUQsWUFBWTtRQUNaLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLGNBQWMsRUFBRTtZQUNoQixjQUFjLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxl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LElBQUksQ0FBQzt3REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bUVBQ2dCO0lBR3pDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3VFQUNrQjtJQVg1QixvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQXdKeEM7SUFBRCwyQkFBQztDQXhKRCxBQXdKQyxDQXhKaUQsRUFBRSxDQUFDLFNBQVMsR0F3SjdEO2tCQXhKb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRCdWJibGVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZnJpZW5kOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBidWJibGVTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgY2hhdEltYWdlU3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBwcml2YXRlIGNoYXRCdWJibGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY2hhdEltYWdlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRJbWFnZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgREVURUNUSU9OX1JBRElVUzogbnVtYmVyID0gMjAwO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgQlVCQkxFX09GRlNFVDogbnVtYmVyID0gMTIwO1xuICAgIHByaXZhdGUgbGFzdEJ1YmJsZVN0YXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIgfHwgIXRoaXMuZnJpZW5kIHx8ICF0aGlzLmJ1YmJsZVNwcml0ZUZyYW1lIHx8IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJQbGVhc2UgYXNzaWduIGFsbCByZXF1aXJlZCBjb21wb25lbnRzIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmXnOmWieeisOaSnuWNgOWfn+eahOmhr+ekulxuICAgICAgICBjb25zdCBwaHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIGlmIChwaHlzaWNzTWFuYWdlcikge1xuICAgICAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0QnViYmxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhdEltYWdlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGF0QnViYmxlKCkge1xuICAgICAgICAvLyDlibXlu7rkuIDlgIvmlrDnmoTnr4Dpu57kvZzngrrmsKPms6FcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlID0gbmV3IGNjLk5vZGUoJ0NoYXRfQnViYmxlJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDmt7vliqAgU3ByaXRlIOe1hOS7tlxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRCdWJibGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuYnViYmxlU3ByaXRlRnJhbWU7XG4gICAgICAgIFxuICAgICAgICAvLyDmt7vliqDmjInpiJXntYTku7ZcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5jaGF0QnViYmxlLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgLy8g6Kit572u54i256+A6bueXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5wYXJlbnQgPSB0aGlzLmZyaWVuZDtcbiAgICAgICAgXG4gICAgICAgIC8vIOioree9ruiBiuWkqeawo+azoeeahOWIneWni+S9jee9ru+8iOWcqOaci+WPi+mgremgguS4iuaWue+8iVxuICAgICAgICB0aGlzLmNoYXRCdWJibGUueSA9IHRoaXMuQlVCQkxFX09GRlNFVDtcbiAgICAgICAgXG4gICAgICAgIC8vIOeiuuS/neawo+azoeWcqOacgOS4iuWxpFxuICAgICAgICB0aGlzLmNoYXRCdWJibGUuekluZGV4ID0gOTk5O1xuICAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5pmC6Zqx6JeP6IGK5aSp5rCj5rOhXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyDmt7vliqDpu57mk4rkuovku7ZcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1YmJsZUNsaWNrZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2hhdEltYWdlKCkge1xuICAgICAgICAvLyDlibXlu7rogYrlpKnlnJbniYfnr4Dpu55cbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UgPSBuZXcgY2MuTm9kZSgnQ2hhdF9JbWFnZScpO1xuICAgICAgICBcbiAgICAgICAgLy8g5re75YqgIFNwcml0ZSDntYTku7ZcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5jaGF0SW1hZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzWzBdO1xuICAgICAgICBcbiAgICAgICAgLy8g6Kit572u54i256+A6bue54K6IENhbnZhc1xuICAgICAgICB0aGlzLmNoYXRJbWFnZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOioree9ruS9jee9ruWcqOeVq+mdouS4reWkrlxuICAgICAgICB0aGlzLmNoYXRJbWFnZS5zZXRQb3NpdGlvbihjYy52MigwLCAwKSk7XG4gICAgICAgIFxuICAgICAgICAvLyDnorrkv53lnJbniYflnKjmnIDkuIrlsaRcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UuekluZGV4ID0gMTAwMDtcbiAgICAgICAgXG4gICAgICAgIC8vIOWIneWni+aZgumaseiXj+WclueJh1xuICAgICAgICB0aGlzLmNoYXRJbWFnZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyDmt7vliqDpu57mk4rkuovku7bvvIjpu57mk4rlnJbniYfmmYLpoa/npLrkuIvkuIDlvLXmiJbpmrHol4/vvIlcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uSW1hZ2VDbGlja2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnViYmxlQ2xpY2tlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhdEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuY2hhdEltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzW3RoaXMuY3VycmVudEltYWdlSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25JbWFnZUNsaWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCsrO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlSW5kZXggPCB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyDpoa/npLrkuIvkuIDlvLXlnJbniYdcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzW3RoaXMuY3VycmVudEltYWdlSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5bey57aT5piv5pyA5b6M5LiA5by15ZyW54mH77yM6Zqx6JeP6IGK5aSp5ZyW54mHXG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIgfHwgIXRoaXMuZnJpZW5kIHx8ICF0aGlzLmNoYXRCdWJibGUpIHJldHVybjtcblxuICAgICAgICAvLyDlsIcgVmVjMyDovYnmj5vngrogVmVjMlxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSBuZXcgY2MuVmVjMih0aGlzLnBsYXllci5wb3NpdGlvbi54LCB0aGlzLnBsYXllci5wb3NpdGlvbi55KTtcbiAgICAgICAgY29uc3QgZnJpZW5kUG9zID0gbmV3IGNjLlZlYzIodGhpcy5mcmllbmQucG9zaXRpb24ueCwgdGhpcy5mcmllbmQucG9zaXRpb24ueSk7XG5cbiAgICAgICAgLy8g6KiI566X546p5a625ZKM5pyL5Y+L55qE6Led6ZuiXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZShwbGF5ZXJQb3MsIGZyaWVuZFBvcyk7XG4gICAgICAgIGNvbnN0IHNob3VsZFNob3cgPSBkaXN0YW5jZSA8PSB0aGlzLkRFVEVDVElPTl9SQURJVVM7XG5cbiAgICAgICAgLy8g5qC55pOa6Led6Zui6aGv56S65oiW6Zqx6JeP6IGK5aSp5rCj5rOhXG4gICAgICAgIGlmICh0aGlzLmNoYXRCdWJibGUuYWN0aXZlICE9PSBzaG91bGRTaG93KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUuYWN0aXZlID0gc2hvdWxkU2hvdztcbiAgICAgICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgICAgICAgLy8g56K65L+d5rCj5rOh5Zyo5pyA5LiK5bGkXG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0QnViYmxlLnpJbmRleCA9IDk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2UocG9zMTogY2MuVmVjMiwgcG9zMjogY2MuVmVjMik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGR4ID0gcG9zMS54IC0gcG9zMi54O1xuICAgICAgICBjb25zdCBkeSA9IHBvczEueSAtIHBvczIueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jaGF0QnViYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1YmJsZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5jaGF0QnViYmxlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGF0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25JbWFnZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufSAiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Transport.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '418acFo37pMXZD+Hf+1dbqx', 'Transport');
// Script/Transport.ts

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
var Door_to_002 = /** @class */ (function (_super) {
    __extends(Door_to_002, _super);
    function Door_to_002() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.door = null;
        _this.doorSpriteFrame = null;
        _this.promptSpriteFrame = null;
        _this.destinationScene = "";
        _this.DETECTION_RADIUS = 70;
        _this.DOOR_OFFSET = 120;
        _this.lastDoorState = false;
        _this.promptImage = null;
        return _this;
    }
    Door_to_002.prototype.onLoad = function () {
        if (!this.player || !this.door || !this.doorSpriteFrame || !this.promptSpriteFrame) {
            cc.error("Please assign all required components!");
            return;
        }
        // 關閉碰撞區域的顯示
        var physicsManager = cc.director.getPhysicsManager();
        if (physicsManager) {
            physicsManager.debugDrawFlags = 0;
        }
        this.setupDoor();
        this.createPromptImage();
    };
    Door_to_002.prototype.setupDoor = function () {
        // 添加 Sprite 組件
        var sprite = this.door.addComponent(cc.Sprite);
        sprite.spriteFrame = this.doorSpriteFrame;
    };
    Door_to_002.prototype.createPromptImage = function () {
        // 創建提示圖片節點
        this.promptImage = new cc.Node('Prompt_Image');
        // 添加 Sprite 組件
        var sprite = this.promptImage.addComponent(cc.Sprite);
        sprite.spriteFrame = this.promptSpriteFrame;
        // 添加按鈕組件
        var button = this.promptImage.addComponent(cc.Button);
        // 設置父節點為門
        this.promptImage.parent = this.door;
        // 設置位置在門的正上方
        this.promptImage.setPosition(cc.v2(0, this.DOOR_OFFSET + 60));
        // 確保圖片在最上層
        this.promptImage.zIndex = 1000;
        // 初始時隱藏圖片
        this.promptImage.active = false;
        // 添加點擊事件
        this.promptImage.on(cc.Node.EventType.TOUCH_END, this.onPromptClicked, this);
    };
    Door_to_002.prototype.onPromptClicked = function () {
        // 切換到場景 Scene002_Home_1F
        cc.director.loadScene(this.destinationScene);
    };
    Door_to_002.prototype.update = function () {
        if (!this.player || !this.door || !this.promptImage)
            return;
        // 將 Vec3 轉換為 Vec2
        var playerPos = new cc.Vec2(this.player.position.x, this.player.position.y);
        var doorPos = new cc.Vec2(this.door.position.x, this.door.position.y);
        // 計算玩家和門的距離
        var distance = this.getDistance(playerPos, doorPos);
        var shouldShow = distance <= this.DETECTION_RADIUS;
        // 根據距離顯示或隱藏提示圖片
        if (this.promptImage.active !== shouldShow) {
            this.promptImage.active = shouldShow;
            if (shouldShow) {
                // 確保提示圖片在最上層
                this.promptImage.zIndex = 1000;
            }
        }
    };
    Door_to_002.prototype.getDistance = function (pos1, pos2) {
        var dx = pos1.x - pos2.x;
        var dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Door_to_002.prototype.onDestroy = function () {
        if (this.promptImage) {
            this.promptImage.off(cc.Node.EventType.TOUCH_END, this.onPromptClicked, this);
            this.promptImage.destroy();
        }
    };
    __decorate([
        property(cc.Node)
    ], Door_to_002.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Door_to_002.prototype, "door", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Door_to_002.prototype, "doorSpriteFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Door_to_002.prototype, "promptSpriteFrame", void 0);
    __decorate([
        property
    ], Door_to_002.prototype, "destinationScene", void 0);
    Door_to_002 = __decorate([
        ccclass
    ], Door_to_002);
    return Door_to_002;
}(cc.Component));
exports.default = Door_to_002;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUcmFuc3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF3R0M7UUF0R0csWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2Qyx1QkFBaUIsR0FBbUIsSUFBSSxDQUFDO1FBRXpDLHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUViLHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUNuQyxtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUF5RnhDLENBQUM7SUF2RkcsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDaEYsRUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDVjtRQUVELFlBQVk7UUFDWixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLCtCQUFTLEdBQWpCO1FBQ0ksZUFBZTtRQUNm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QUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQXJHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzBEQUNnQjtJQUV6QztRQURDLFFBQVE7eURBQ3FCO0lBVmIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdHL0I7SUFBRCxrQkFBQztDQXhHRCxBQXdHQyxDQXhHd0MsRUFBRSxDQUFDLFNBQVMsR0F3R3BEO2tCQXhHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb29yX3RvXzAwMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZG9vclNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcm9tcHRTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkZXN0aW5hdGlvblNjZW5lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgREVURUNUSU9OX1JBRElVUzogbnVtYmVyID0gNzA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERPT1JfT0ZGU0VUOiBudW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIGxhc3REb29yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcHJvbXB0SW1hZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyIHx8ICF0aGlzLmRvb3IgfHwgIXRoaXMuZG9vclNwcml0ZUZyYW1lIHx8ICF0aGlzLnByb21wdFNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGxlYXNlIGFzc2lnbiBhbGwgcmVxdWlyZWQgY29tcG9uZW50cyFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmXnOmWieeisOaSnuWNgOWfn+eahOmhr+ekulxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocGh5c2ljc01hbmFnZXIpIHtcclxuICAgICAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cERvb3IoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVByb21wdEltYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cERvb3IoKSB7XHJcbiAgICAgICAgLy8g5re75YqgIFNwcml0ZSDntYTku7ZcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmRvb3IuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5kb29yU3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9tcHRJbWFnZSgpIHtcclxuICAgICAgICAvLyDlibXlu7rmj5DnpLrlnJbniYfnr4Dpu55cclxuICAgICAgICB0aGlzLnByb21wdEltYWdlID0gbmV3IGNjLk5vZGUoJ1Byb21wdF9JbWFnZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOa3u+WKoCBTcHJpdGUg57WE5Lu2XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5wcm9tcHRJbWFnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnByb21wdFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOa3u+WKoOaMiemIlee1hOS7tlxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMucHJvbXB0SW1hZ2UuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u54i256+A6bue54K66ZaAXHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5wYXJlbnQgPSB0aGlzLmRvb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u5L2N572u5Zyo6ZaA55qE5q2j5LiK5pa5XHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5zZXRQb3NpdGlvbihjYy52MigwLCB0aGlzLkRPT1JfT0ZGU0VUICsgNjApKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDnorrkv53lnJbniYflnKjmnIDkuIrlsaRcclxuICAgICAgICB0aGlzLnByb21wdEltYWdlLnpJbmRleCA9IDEwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5Yid5aeL5pmC6Zqx6JeP5ZyW54mHXHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Qcm9tcHRDbGlja2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUHJvbXB0Q2xpY2tlZCgpIHtcclxuICAgICAgICAvLyDliIfmj5vliLDloLTmma8gU2NlbmUwMDJfSG9tZV8xRlxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLmRlc3RpbmF0aW9uU2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyIHx8ICF0aGlzLmRvb3IgfHwgIXRoaXMucHJvbXB0SW1hZ2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8g5bCHIFZlYzMg6L2J5o+b54K6IFZlYzJcclxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSBuZXcgY2MuVmVjMih0aGlzLnBsYXllci5wb3NpdGlvbi54LCB0aGlzLnBsYXllci5wb3NpdGlvbi55KTtcclxuICAgICAgICBjb25zdCBkb29yUG9zID0gbmV3IGNjLlZlYzIodGhpcy5kb29yLnBvc2l0aW9uLngsIHRoaXMuZG9vci5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgLy8g6KiI566X546p5a625ZKM6ZaA55qE6Led6ZuiXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKHBsYXllclBvcywgZG9vclBvcyk7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IGRpc3RhbmNlIDw9IHRoaXMuREVURUNUSU9OX1JBRElVUztcclxuXHJcbiAgICAgICAgLy8g5qC55pOa6Led6Zui6aGv56S65oiW6Zqx6JeP5o+Q56S65ZyW54mHXHJcbiAgICAgICAgaWYgKHRoaXMucHJvbXB0SW1hZ2UuYWN0aXZlICE9PSBzaG91bGRTaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvbXB0SW1hZ2UuYWN0aXZlID0gc2hvdWxkU2hvdztcclxuICAgICAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcclxuICAgICAgICAgICAgICAgIC8vIOeiuuS/neaPkOekuuWclueJh+WcqOacgOS4iuWxpFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS56SW5kZXggPSAxMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2UocG9zMTogY2MuVmVjMiwgcG9zMjogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZHggPSBwb3MxLnggLSBwb3MyLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSBwb3MxLnkgLSBwb3MyLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb21wdEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvbXB0SW1hZ2Uub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblByb21wdENsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnByb21wdEltYWdlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4c80xdoflDFKewc/hrCizY', 'CameraController');
// Script/CameraController.ts

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
var CameraController = /** @class */ (function (_super) {
    __extends(CameraController, _super);
    function CameraController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null; // 跟隨目標（玩家）
        _this.smoothSpeed = 0.1; // 相機移動平滑度
        _this.offsetX = 0; // X軸偏移量
        _this.offsetY = 0; // Y軸偏移量
        _this.minX = -1000; // 相機X軸最小範圍
        _this.maxX = 1000; // 相機X軸最大範圍
        _this.minY = -1000; // 相機Y軸最小範圍
        _this.maxY = 1000; // 相機Y軸最大範圍
        _this.camera = null;
        return _this;
    }
    CameraController.prototype.onLoad = function () {
        // 獲取相機組件
        this.camera = this.getComponent(cc.Camera);
        if (!this.camera) {
            this.camera = this.addComponent(cc.Camera);
        }
        // 設置相機屬性
        this.camera.backgroundColor = cc.Color.BLACK;
        this.camera.zoomRatio = 1;
        this.camera.clearFlags = cc.Camera.ClearFlag.SOLID_COLOR;
    };
    CameraController.prototype.update = function (dt) {
        if (!this.target)
            return;
        // 計算目標位置
        var targetX = this.target.x + this.offsetX;
        var targetY = this.target.y + this.offsetY;
        // 限制相機範圍
        targetX = cc.misc.clampf(targetX, this.minX, this.maxX);
        targetY = cc.misc.clampf(targetY, this.minY, this.maxY);
        // 平滑移動相機
        var currentPos = this.node.position;
        var targetPos = cc.v3(targetX, targetY, currentPos.z);
        // 使用 lerp 實現平滑移動
        this.node.position = cc.v3(cc.misc.lerp(currentPos.x, targetPos.x, this.smoothSpeed), cc.misc.lerp(currentPos.y, targetPos.y, this.smoothSpeed), currentPos.z);
    };
    __decorate([
        property(cc.Node)
    ], CameraController.prototype, "target", void 0);
    __decorate([
        property
    ], CameraController.prototype, "smoothSpeed", void 0);
    __decorate([
        property
    ], CameraController.prototype, "offsetX", void 0);
    __decorate([
        property
    ], CameraController.prototype, "offsetY", void 0);
    __decorate([
        property
    ], CameraController.prototype, "minX", void 0);
    __decorate([
        property
    ], CameraController.prototype, "maxX", void 0);
    __decorate([
        property
    ], CameraController.prototype, "minY", void 0);
    __decorate([
        property
    ], CameraController.prototype, "maxY", void 0);
    CameraController = __decorate([
        ccclass
    ], CameraController);
    return CameraController;
}(cc.Component));
exports.default = CameraController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYW1lcmFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBOERDO1FBNURHLFlBQU0sR0FBWSxJQUFJLENBQUMsQ0FBRSxXQUFXO1FBR3BDLGlCQUFXLEdBQVcsR0FBRyxDQUFDLENBQUUsVUFBVTtRQUd0QyxhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUc5QixhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUc5QixVQUFJLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBRSxXQUFXO1FBR2xDLFVBQUksR0FBVyxJQUFJLENBQUMsQ0FBRyxXQUFXO1FBR2xDLFVBQUksR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFFLFdBQVc7UUFHbEMsVUFBSSxHQUFXLElBQUksQ0FBQyxDQUFHLFdBQVc7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFxQ3JDLENBQUM7SUFuQ0csaUNBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QztRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQzdELENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFekIsU0FBUztRQUNULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUzQyxTQUFTO1FBQ1QsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhELFNBQVM7UUFDVCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUN0QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN6RCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN6RCxVQUFVLENBQUMsQ0FBQyxDQUNmLENBQUM7SUFDTixDQUFDO0lBM0REO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ0s7SUFHdkI7UUFEQyxRQUFRO3lEQUNpQjtJQUcxQjtRQURDLFFBQVE7cURBQ1c7SUFHcEI7UUFEQyxRQUFRO3FEQUNXO0lBR3BCO1FBREMsUUFBUTtrREFDWTtJQUdyQjtRQURDLFFBQVE7a0RBQ1c7SUFHcEI7UUFEQyxRQUFRO2tEQUNZO0lBR3JCO1FBREMsUUFBUTtrREFDVztJQXZCSCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQThEcEM7SUFBRCx1QkFBQztDQTlERCxBQThEQyxDQTlENkMsRUFBRSxDQUFDLFNBQVMsR0E4RHpEO2tCQTlEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsOyAgLy8g6Lef6Zqo55uu5qiZ77yI546p5a6277yJXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzbW9vdGhTcGVlZDogbnVtYmVyID0gMC4xOyAgLy8g55u45qmf56e75YuV5bmz5ruR5bqmXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvZmZzZXRYOiBudW1iZXIgPSAwOyAgLy8gWOi7uOWBj+enu+mHj1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb2Zmc2V0WTogbnVtYmVyID0gMDsgIC8vIFnou7jlgY/np7vph49cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pblg6IG51bWJlciA9IC0xMDAwOyAgLy8g55u45qmfWOi7uOacgOWwj+evhOWcjVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4WDogbnVtYmVyID0gMTAwMDsgICAvLyDnm7jmqZ9Y6Lu45pyA5aSn56+E5ZyNXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5ZOiBudW1iZXIgPSAtMTAwMDsgIC8vIOebuOapn1nou7jmnIDlsI/nr4TlnI1cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1heFk6IG51bWJlciA9IDEwMDA7ICAgLy8g55u45qmfWei7uOacgOWkp+evhOWcjVxyXG5cclxuICAgIHByaXZhdGUgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDnjbLlj5bnm7jmqZ/ntYTku7ZcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbWVyYSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLkNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDoqK3nva7nm7jmqZ/lsazmgKdcclxuICAgICAgICB0aGlzLmNhbWVyYS5iYWNrZ3JvdW5kQ29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmNsZWFyRmxhZ3MgPSBjYy5DYW1lcmEuQ2xlYXJGbGFnLlNPTElEX0NPTE9SO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyDoqIjnrpfnm67mqJnkvY3nva5cclxuICAgICAgICBsZXQgdGFyZ2V0WCA9IHRoaXMudGFyZ2V0LnggKyB0aGlzLm9mZnNldFg7XHJcbiAgICAgICAgbGV0IHRhcmdldFkgPSB0aGlzLnRhcmdldC55ICsgdGhpcy5vZmZzZXRZO1xyXG5cclxuICAgICAgICAvLyDpmZDliLbnm7jmqZ/nr4TlnI1cclxuICAgICAgICB0YXJnZXRYID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0WCwgdGhpcy5taW5YLCB0aGlzLm1heFgpO1xyXG4gICAgICAgIHRhcmdldFkgPSBjYy5taXNjLmNsYW1wZih0YXJnZXRZLCB0aGlzLm1pblksIHRoaXMubWF4WSk7XHJcblxyXG4gICAgICAgIC8vIOW5s+a7keenu+WLleebuOapn1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSBjYy52Myh0YXJnZXRYLCB0YXJnZXRZLCBjdXJyZW50UG9zLnopO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS9v+eUqCBsZXJwIOWvpuePvuW5s+a7keenu+WLlVxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKFxyXG4gICAgICAgICAgICBjYy5taXNjLmxlcnAoY3VycmVudFBvcy54LCB0YXJnZXRQb3MueCwgdGhpcy5zbW9vdGhTcGVlZCksXHJcbiAgICAgICAgICAgIGNjLm1pc2MubGVycChjdXJyZW50UG9zLnksIHRhcmdldFBvcy55LCB0aGlzLnNtb290aFNwZWVkKSxcclxuICAgICAgICAgICAgY3VycmVudFBvcy56XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSAiXX0=
//------QC-SOURCE-SPLIT------
