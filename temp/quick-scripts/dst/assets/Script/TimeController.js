
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TimeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a136yTEwBFz4PM5s5q26hp', 'TimeController');
// Script/TimeController.ts

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
        _this.followCamera = true;
        _this.timeFont = null;
        _this.chatBubble = null;
        _this.chatImage = null;
        _this.currentImageIndex = 0;
        _this.DETECTION_RADIUS = 200;
        _this.BUBBLE_OFFSET = 120;
        _this.lastBubbleState = false;
        _this.timeLabel = null;
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
        // 初始時隱藏圖片
        this.chatImage.active = false;
        // 確保圖片在最上層
        this.chatImage.zIndex = 1000;
        // 添加點擊事件（點擊圖片時顯示下一張或隱藏）
        this.chatImage.on(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
    };
    ChatBubbleController.prototype.showCurrentTime = function () {
        // 如果已經有 label，先移除
        if (this.timeLabel && cc.isValid(this.timeLabel)) {
            this.timeLabel.destroy();
        }
        // 創建 label
        this.timeLabel = new cc.Node('TimeLabel');
        var label = this.timeLabel.addComponent(cc.Label);
        // 設定字型大小、顏色
        label.fontSize = 60; // 字體大小
        label.lineHeight = 100; // 行高略大於字體
        label.string = this.getCurrentTimeString();
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        this.timeLabel.color = cc.Color.WHITE;
        // 設 parent 跟圖片一樣
        this.timeLabel.parent = this.chatImage.parent;
        // 設定在圖片上方 (0, 120) 或正中央 (0, 0)
        this.timeLabel.setPosition(0, 60);
        this.timeLabel.zIndex = 1500;
        this.timeLabel.active = true;
        if (this.timeFont) {
            label.font = this.timeFont;
        }
    };
    ChatBubbleController.prototype.hideCurrentTime = function () {
        if (this.timeLabel && cc.isValid(this.timeLabel)) {
            this.timeLabel.destroy();
            this.timeLabel = null;
        }
    };
    ChatBubbleController.prototype.getCurrentTimeString = function () {
        var now = new Date();
        var pad = function (n) { return n < 10 ? '0' + n : n; };
        var dateStr = " " + now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate()) + " ";
        var timeStr = pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
        return dateStr + "\n" + timeStr;
    };
    ChatBubbleController.prototype.onBubbleClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex = 0;
            var sprite = this.chatImage.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
            }
            this.chatImage.active = true;
            this.showCurrentTime();
        }
    };
    ChatBubbleController.prototype.onImageClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex++;
            if (this.currentImageIndex < this.chatImageSpriteFrames.length) {
                var sprite = this.chatImage.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
                }
            }
            else {
                this.chatImage.active = false;
                this.currentImageIndex = 0;
                this.hideCurrentTime();
            }
        }
    };
    ChatBubbleController.prototype.update = function () {
        if (!this.player || !this.friend || !this.chatBubble)
            return;
        if (this.followCamera) {
            var camera = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
            this.chatImage.x = camera.x;
        }
        // 若時間Label存在且顯示中，持續更新時間文字
        if (this.timeLabel && this.timeLabel.active) {
            var label = this.timeLabel.getComponent(cc.Label);
            if (label) {
                label.string = this.getCurrentTimeString();
            }
        }
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
        this.hideCurrentTime();
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
    __decorate([
        property
    ], ChatBubbleController.prototype, "followCamera", void 0);
    __decorate([
        property(cc.TTFFont)
    ], ChatBubbleController.prototype, "timeFont", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQW1OQztRQWpORyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUd6QywyQkFBcUIsR0FBcUIsRUFBRSxDQUFDO1FBRzdDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQix1QkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBQ3JDLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBMEx0QyxDQUFDO0lBeExHLHFDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEcsRUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDVjtRQUVELFlBQVk7UUFDWixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGNB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Q0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoTkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bUVBQ2dCO0lBR3pDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3VFQUNrQjtJQUc3QztRQURDLFFBQVE7OERBQ29CO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MERBQ087SUFqQlgsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FtTnhDO0lBQUQsMkJBQUM7Q0FuTkQsQUFtTkMsQ0FuTmlELEVBQUUsQ0FBQyxTQUFTLEdBbU43RDtrQkFuTm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0QnViYmxlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmcmllbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGJ1YmJsZVNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBjaGF0SW1hZ2VTcHJpdGVGcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZvbGxvd0NhbWVyYTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRURkZvbnQpXHJcbiAgICB0aW1lRm9udDogY2MuVFRGRm9udCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGF0QnViYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hhdEltYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEltYWdlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERFVEVDVElPTl9SQURJVVM6IG51bWJlciA9IDIwMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQlVCQkxFX09GRlNFVDogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBsYXN0QnViYmxlU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdGltZUxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5mcmllbmQgfHwgIXRoaXMuYnViYmxlU3ByaXRlRnJhbWUgfHwgdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGxlYXNlIGFzc2lnbiBhbGwgcmVxdWlyZWQgY29tcG9uZW50cyFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmXnOmWieeisOaSnuWNgOWfn+eahOmhr+ekulxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocGh5c2ljc01hbmFnZXIpIHtcclxuICAgICAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0QnViYmxlKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0SW1hZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNoYXRCdWJibGUoKSB7XHJcbiAgICAgICAgLy8g5Ym15bu65LiA5YCL5paw55qE56+A6bue5L2c54K65rCj5rOhXHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlID0gbmV3IGNjLk5vZGUoJ0NoYXRfQnViYmxlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5re75YqgIFNwcml0ZSDntYTku7ZcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRCdWJibGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5idWJibGVTcHJpdGVGcmFtZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDmt7vliqDmjInpiJXntYTku7ZcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNoYXRCdWJibGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u54i256+A6bueXHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLnBhcmVudCA9IHRoaXMuZnJpZW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOioree9ruiBiuWkqeawo+azoeeahOWIneWni+S9jee9ru+8iOWcqOaci+WPi+mgremgguS4iuaWue+8iVxyXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS55ID0gdGhpcy5CVUJCTEVfT0ZGU0VUO1xyXG5cclxuICAgICAgICAvLyDnorrkv53msKPms6HlnKjmnIDkuIrlsaRcclxuICAgICAgICB0aGlzLmNoYXRCdWJibGUuekluZGV4ID0gOTk5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWIneWni+aZgumaseiXj+iBiuWkqeawo+azoVxyXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1YmJsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ2hhdEltYWdlKCkge1xyXG4gICAgICAgIC8vIOWJteW7uuiBiuWkqeWclueJh+evgOm7nlxyXG4gICAgICAgIHRoaXMuY2hhdEltYWdlID0gbmV3IGNjLk5vZGUoJ0NoYXRfSW1hZ2UnKTtcclxuXHJcbiAgICAgICAgLy8g5re75YqgIFNwcml0ZSDntYTku7ZcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRJbWFnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lc1swXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDoqK3nva7niLbnr4Dpu57ngrogQ2FudmFzXHJcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5Yid5aeL5pmC6Zqx6JeP5ZyW54mHXHJcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOeiuuS/neWclueJh+WcqOacgOS4iuWxpFxyXG4gICAgICAgIHRoaXMuY2hhdEltYWdlLnpJbmRleCA9IDEwMDA7XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOm7nuaTiuS6i+S7tu+8iOm7nuaTiuWclueJh+aZgumhr+ekuuS4i+S4gOW8teaIlumaseiXj++8iVxyXG4gICAgICAgIHRoaXMuY2hhdEltYWdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkltYWdlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93Q3VycmVudFRpbWUoKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5bey57aT5pyJIGxhYmVs77yM5YWI56e76ZmkXHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxhYmVsICYmIGNjLmlzVmFsaWQodGhpcy50aW1lTGFiZWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxhYmVsLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Ym15bu6IGxhYmVsXHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwgPSBuZXcgY2MuTm9kZSgnVGltZUxhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnRpbWVMYWJlbC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIC8vIOioreWumuWtl+Wei+Wkp+Wwj+OAgemhj+iJslxyXG4gICAgICAgIGxhYmVsLmZvbnRTaXplID0gNjA7IC8vIOWtl+mrlOWkp+Wwj1xyXG4gICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSAxMDA7IC8vIOihjOmrmOeVpeWkp+aWvOWtl+mrlFxyXG4gICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMuZ2V0Q3VycmVudFRpbWVTdHJpbmcoKTtcclxuICAgICAgICBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIGxhYmVsLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICB0aGlzLnRpbWVMYWJlbC5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIC8vIOiorSBwYXJlbnQg6Lef5ZyW54mH5LiA5qijXHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwucGFyZW50ID0gdGhpcy5jaGF0SW1hZ2UucGFyZW50O1xyXG4gICAgICAgIC8vIOioreWumuWcqOWclueJh+S4iuaWuSAoMCwgMTIwKSDmiJbmraPkuK3lpK4gKDAsIDApXHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuc2V0UG9zaXRpb24oMCwgNjApO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLnpJbmRleCA9IDE1MDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy50aW1lRm9udCkge1xyXG4gICAgICAgICAgICBsYWJlbC5mb250ID0gdGhpcy50aW1lRm9udDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlQ3VycmVudFRpbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxhYmVsICYmIGNjLmlzVmFsaWQodGhpcy50aW1lTGFiZWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxhYmVsLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEN1cnJlbnRUaW1lU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBwYWQgPSAobjogbnVtYmVyKSA9PiBuIDwgMTAgPyAnMCcgKyBuIDogbjtcclxuICAgICAgICBjb25zdCBkYXRlU3RyID0gYCAke25vdy5nZXRGdWxsWWVhcigpfS0ke3BhZChub3cuZ2V0TW9udGgoKSArIDEpfS0ke3BhZChub3cuZ2V0RGF0ZSgpKX0gYDtcclxuICAgICAgICBjb25zdCB0aW1lU3RyID0gYCR7cGFkKG5vdy5nZXRIb3VycygpKX06JHtwYWQobm93LmdldE1pbnV0ZXMoKSl9OiR7cGFkKG5vdy5nZXRTZWNvbmRzKCkpfWA7XHJcbiAgICAgICAgcmV0dXJuIGAke2RhdGVTdHJ9XFxuJHt0aW1lU3RyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJ1YmJsZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXNbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q3VycmVudFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkltYWdlQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGF0SW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA8IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5jaGF0SW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXNbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXRJbWFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQ3VycmVudFRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5mcmllbmQgfHwgIXRoaXMuY2hhdEJ1YmJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dDYW1lcmEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuZ2V0Q2hpbGRCeU5hbWUoJ01haW4gQ2FtZXJhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLnggPSBjYW1lcmEueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiLpeaZgumWk0xhYmVs5a2Y5Zyo5LiU6aGv56S65Lit77yM5oyB57qM5pu05paw5pmC6ZaT5paH5a2XXHJcbiAgICAgICAgaWYgKHRoaXMudGltZUxhYmVsICYmIHRoaXMudGltZUxhYmVsLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMudGltZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy5nZXRDdXJyZW50VGltZVN0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlsIcgVmVjMyDovYnmj5vngrogVmVjMlxyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IG5ldyBjYy5WZWMyKHRoaXMucGxheWVyLnBvc2l0aW9uLngsIHRoaXMucGxheWVyLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGNvbnN0IGZyaWVuZFBvcyA9IG5ldyBjYy5WZWMyKHRoaXMuZnJpZW5kLnBvc2l0aW9uLngsIHRoaXMuZnJpZW5kLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICAvLyDoqIjnrpfnjqnlrrblkozmnIvlj4vnmoTot53pm6JcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2UocGxheWVyUG9zLCBmcmllbmRQb3MpO1xyXG4gICAgICAgIGNvbnN0IHNob3VsZFNob3cgPSBkaXN0YW5jZSA8PSB0aGlzLkRFVEVDVElPTl9SQURJVVM7XHJcblxyXG4gICAgICAgIC8vIOagueaTmui3nemboumhr+ekuuaIlumaseiXj+iBiuWkqeawo+azoVxyXG4gICAgICAgIGlmICh0aGlzLmNoYXRCdWJibGUuYWN0aXZlICE9PSBzaG91bGRTaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgPSBzaG91bGRTaG93O1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xyXG4gICAgICAgICAgICAgICAgLy8g56K65L+d5rCj5rOh5Zyo5pyA5LiK5bGkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUuekluZGV4ID0gOTk5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlzdGFuY2UocG9zMTogY2MuVmVjMiwgcG9zMjogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZHggPSBwb3MxLnggLSBwb3MyLng7XHJcbiAgICAgICAgY29uc3QgZHkgPSBwb3MxLnkgLSBwb3MyLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYXRCdWJibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGF0QnViYmxlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdWJibGVDbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0QnViYmxlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25JbWFnZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRJbWFnZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlkZUN1cnJlbnRUaW1lKCk7XHJcbiAgICB9XHJcbn0gIl19