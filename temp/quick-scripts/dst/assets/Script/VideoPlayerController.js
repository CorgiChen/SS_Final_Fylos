
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
        _this.fadeMask = null;
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
        // 創建淡出遮罩
        this.createFadeMask();
    };
    VideoPlayerController.prototype.createFadeMask = function () {
        // 創建遮罩節點
        this.fadeMask = new cc.Node('FadeMask');
        // 設置父節點為當前節點
        this.fadeMask.parent = this.node;
        // 添加 Sprite 組件
        var sprite = this.fadeMask.addComponent(cc.Sprite);
        // 創建純黑色圖片
        var texture = new cc.Texture2D();
        var canvas = document.createElement('canvas');
        canvas.width = 2;
        canvas.height = 2;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 2, 2);
        texture.initWithElement(canvas);
        // 設置 Sprite 的圖片
        var spriteFrame = new cc.SpriteFrame(texture);
        sprite.spriteFrame = spriteFrame;
        // 設置遮罩大小為全屏
        var visibleSize = cc.view.getVisibleSize();
        this.fadeMask.width = visibleSize.width;
        this.fadeMask.height = visibleSize.height;
        // 設置遮罩位置為中心
        this.fadeMask.x = 0;
        this.fadeMask.y = 0;
        // 設置初始透明度為 0
        this.fadeMask.opacity = 0;
        // 確保遮罩在最上層
        this.fadeMask.zIndex = 999;
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
    VideoPlayerController.prototype.fadeOutAndLoadScene = function () {
        var _this = this;
        if (this.fadeMask) {
            // 創建淡出動畫
            var fadeAction = cc.fadeTo(1.0, 255);
            var callback = cc.callFunc(function () {
                _this.loadStartScene();
            });
            // 執行淡出動畫
            this.fadeMask.runAction(cc.sequence(fadeAction, callback));
        }
        else {
            // 如果沒有遮罩，直接切換場景
            this.loadStartScene();
        }
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
                this.fadeOutAndLoadScene();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxWaWRlb1BsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUFnS0M7UUE5SkcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUEySnJDLENBQUM7SUF6Skcsc0NBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixXQUFXO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsU0FBUztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sOENBQWMsR0FBdEI7UUFDSSxTQUFTO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEMsYUFBYTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFakMsZUFBZTtRQUNmLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxVQUFVO1FBQ1YsSUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxnQkFBZ0I7UUFDaEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRWpDLFlBQVk7UUFDWixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUUxQyxZQUFZO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixhQUFhO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLFdBQVc7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUVELHFDQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5RCxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRSxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUVPLHNEQUFzQixHQUE5QjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUN6QyxJQUFNLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckQsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7UUFDakQsWUFBWSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztRQUM1QyxZQUFZLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztRQUU3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxtREFBbUIsR0FBM0I7UUFBQSxpQkFjQztRQWJHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLFNBQVM7WUFDVCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUN6QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7WUFFSCxTQUFTO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ0gsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTyw4Q0FBYyxHQUF0QjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQzNDLElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzVDLE9BQU87YUFDVjtZQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrREFBa0IsR0FBbEIsVUFBbUIsV0FBMkIsRUFBRSxTQUFtQyxFQUFFLGVBQXVCO1FBQ3hHLEVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0MsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU87Z0JBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdEQsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMxQixFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQyxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVM7Z0JBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVc7Z0JBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDakIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDekI7cUJBQU07b0JBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhO2dCQUN2QyxFQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ2pDLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzFDLDBCQUEwQjtRQUMxQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBN0pEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OERBQ1U7SUFGbEIscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0FnS3pDO0lBQUQsNEJBQUM7Q0FoS0QsQUFnS0MsQ0FoS2tELEVBQUUsQ0FBQyxTQUFTLEdBZ0s5RDtrQkFoS29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb1BsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlZpZGVvUGxheWVyKVxyXG4gICAgdmlkZW9QbGF5ZXI6IGNjLlZpZGVvUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGhhc1BsYXllZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBmYWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyQ29udHJvbGxlciBvbkxvYWRcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvUGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcik7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyIGNvbXBvbmVudCBmb3VuZDpcIiwgdGhpcy52aWRlb1BsYXllciA/IFwieWVzXCIgOiBcIm5vXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9QbGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZGVvUGxheWVyRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIC8vIOeiuuS/neimlumgu+ioree9ruato+eiulxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyLmtlZXBBc3BlY3RSYXRpbyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3RheU9uQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyIHNldHVwIGNvbXBsZXRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWJteW7uua3oeWHuumBrue9qVxyXG4gICAgICAgIHRoaXMuY3JlYXRlRmFkZU1hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUZhZGVNYXNrKCkge1xyXG4gICAgICAgIC8vIOWJteW7uumBrue9qeevgOm7nlxyXG4gICAgICAgIHRoaXMuZmFkZU1hc2sgPSBuZXcgY2MuTm9kZSgnRmFkZU1hc2snKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDoqK3nva7niLbnr4Dpu57ngrrnlbbliY3nr4Dpu55cclxuICAgICAgICB0aGlzLmZhZGVNYXNrLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDmt7vliqAgU3ByaXRlIOe1hOS7tlxyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuZmFkZU1hc2suYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5Ym15bu657SU6buR6Imy5ZyW54mHXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSAyO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAyO1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDIsIDIpO1xyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGNhbnZhcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572uIFNwcml0ZSDnmoTlnJbniYdcclxuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDoqK3nva7pga7nvanlpKflsI/ngrrlhajlsY9cclxuICAgICAgICBjb25zdCB2aXNpYmxlU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICB0aGlzLmZhZGVNYXNrLndpZHRoID0gdmlzaWJsZVNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5mYWRlTWFzay5oZWlnaHQgPSB2aXNpYmxlU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u6YGu572p5L2N572u54K65Lit5b+DXHJcbiAgICAgICAgdGhpcy5mYWRlTWFzay54ID0gMDtcclxuICAgICAgICB0aGlzLmZhZGVNYXNrLnkgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOioree9ruWIneWni+mAj+aYjuW6pueCuiAwXHJcbiAgICAgICAgdGhpcy5mYWRlTWFzay5vcGFjaXR5ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLyDnorrkv53pga7nvanlnKjmnIDkuIrlsaRcclxuICAgICAgICB0aGlzLmZhZGVNYXNrLnpJbmRleCA9IDk5OTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5sb2coXCJWaWRlb1BsYXllckNvbnRyb2xsZXIgc3RhcnRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9QbGF5ZXIpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gcmVzb3VyY2UgdHlwZTpcIiwgdGhpcy52aWRlb1BsYXllci5yZXNvdXJjZVR5cGUpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJWaWRlbyBjbGlwOlwiLCB0aGlzLnZpZGVvUGxheWVyLmNsaXAgPyBcInNldFwiIDogXCJub3Qgc2V0XCIpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJWaWRlbyByZW1vdGUgVVJMOlwiLCB0aGlzLnZpZGVvUGxheWVyLnJlbW90ZVVSTCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIHBsYXllciBzdGF0ZTpcIiwgdGhpcy52aWRlb1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBWaWRlb1BsYXllckV2ZW50cygpIHtcclxuICAgICAgICBjYy5sb2coXCJTZXR0aW5nIHVwIHZpZGVvIHBsYXllciBldmVudHNcIik7XHJcbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBldmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlZpZGVvUGxheWVyQ29udHJvbGxlclwiO1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvblZpZGVvUGxheWVyRXZlbnRcIjtcclxuICAgICAgICBldmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJ2aWRlb19ldmVudFwiO1xyXG5cclxuICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnZpZGVvUGxheWVyRXZlbnQgPSBbZXZlbnRIYW5kbGVyXTtcclxuICAgICAgICBjYy5sb2coXCJWaWRlbyBwbGF5ZXIgZXZlbnRzIHNldHVwIGNvbXBsZXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZhZGVPdXRBbmRMb2FkU2NlbmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFkZU1hc2spIHtcclxuICAgICAgICAgICAgLy8g5Ym15bu65reh5Ye65YuV55WrXHJcbiAgICAgICAgICAgIGNvbnN0IGZhZGVBY3Rpb24gPSBjYy5mYWRlVG8oMS4wLCAyNTUpO1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXJ0U2NlbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDln7fooYzmt6Hlh7rli5XnlatcclxuICAgICAgICAgICAgdGhpcy5mYWRlTWFzay5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZmFkZUFjdGlvbiwgY2FsbGJhY2spKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzmspLmnInpga7nvanvvIznm7TmjqXliIfmj5vloLTmma9cclxuICAgICAgICAgICAgdGhpcy5sb2FkU3RhcnRTY2VuZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRTdGFydFNjZW5lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlN0YXJ0U2NlbmVcIiwgKGVyciwgc2NlbmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBTdGFydFNjZW5lOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlN0YXJ0U2NlbmUgbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblZpZGVvUGxheWVyRXZlbnQodmlkZW9QbGF5ZXI6IGNjLlZpZGVvUGxheWVyLCBldmVudFR5cGU6IGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5sb2coXCJWaWRlbyBldmVudCByZWNlaXZlZDpcIiwgZXZlbnRUeXBlKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5QTEFZSU5HOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgcGxheWluZ1wiKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkN1cnJlbnQgdGltZTpcIiwgdGhpcy52aWRlb1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuUEFVU0VEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgcGF1c2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiQ3VycmVudCB0aW1lOlwiLCB0aGlzLnZpZGVvUGxheWVyLmN1cnJlbnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5TVE9QUEVEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgc3RvcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkN1cnJlbnQgdGltZTpcIiwgdGhpcy52aWRlb1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuQ09NUExFVEVEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gcGxheWJhY2sgY29tcGxldGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3V0QW5kTG9hZFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuTUVUQV9MT0FERUQ6XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJWaWRlbyBtZXRhZGF0YSBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuQ0xJQ0tFRDpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIHBsYXllciBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1BsYXllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIkZpcnN0IGNsaWNrLCBzdGFydGluZyB2aWRlbyBwbGF5YmFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1BsYXllZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIGhhcyBhbHJlYWR5IGJlZW4gcGxheWVkIG9uY2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuUkVBRFlfVE9fUExBWTpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIGlzIHJlYWR5IHRvIHBsYXlcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyQ29udHJvbGxlciBvbkRlc3Ryb3lcIik7XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICBpZiAodGhpcy52aWRlb1BsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnZpZGVvUGxheWVyRXZlbnQgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl19