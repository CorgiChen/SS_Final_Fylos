
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
        _this.followCamera = true;
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
        // 初始時隱藏圖片
        this.chatImage.active = false;
        // 確保圖片在最上層
        this.chatImage.zIndex = 1000;
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
        if (this.followCamera) {
            var camera = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
            this.chatImage.x = camera.x;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGF0QnViYmxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQTZKQztRQTNKRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUd6QywyQkFBcUIsR0FBcUIsRUFBRSxDQUFDO1FBRzdDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsdUJBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUMvQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUNyQyxxQkFBZSxHQUFZLEtBQUssQ0FBQzs7SUF3STdDLENBQUM7SUF0SUcscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwRyxFQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDbkQsT0FBTztTQUNWO1FBRUQsWUFBWTtRQUNaLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLGNBQWMsRUFBRTtZQUNoQixjQUFjLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxnQkFBZ0Is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UyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUExSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bUVBQ2dCO0lBR3pDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3VFQUNrQjtJQUc3QztRQURDLFFBQVE7OERBQ29CO0lBZFosb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0E2SnhDO0lBQUQsMkJBQUM7Q0E3SkQsQUE2SkMsQ0E3SmlELEVBQUUsQ0FBQyxTQUFTLEdBNko3RDtrQkE3Sm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0QnViYmxlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZyaWVuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgYnViYmxlU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGNoYXRJbWFnZVNwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZm9sbG93Q2FtZXJhOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgY2hhdEJ1YmJsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjaGF0SW1hZ2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudEltYWdlSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBERVRFQ1RJT05fUkFESVVTOiBudW1iZXIgPSAyMDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBCVUJCTEVfT0ZGU0VUOiBudW1iZXIgPSAxMjA7XG4gICAgcHJpdmF0ZSBsYXN0QnViYmxlU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5mcmllbmQgfHwgIXRoaXMuYnViYmxlU3ByaXRlRnJhbWUgfHwgdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIlBsZWFzZSBhc3NpZ24gYWxsIHJlcXVpcmVkIGNvbXBvbmVudHMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6Zec6ZaJ56Kw5pKe5Y2A5Z+f55qE6aGv56S6XG4gICAgICAgIGNvbnN0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgaWYgKHBoeXNpY3NNYW5hZ2VyKSB7XG4gICAgICAgICAgICBwaHlzaWNzTWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUNoYXRCdWJibGUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0SW1hZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNoYXRCdWJibGUoKSB7XG4gICAgICAgIC8vIOWJteW7uuS4gOWAi+aWsOeahOevgOm7nuS9nOeCuuawo+azoVxuICAgICAgICB0aGlzLmNoYXRCdWJibGUgPSBuZXcgY2MuTm9kZSgnQ2hhdF9CdWJibGUnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOa3u+WKoCBTcHJpdGUg57WE5Lu2XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuY2hhdEJ1YmJsZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5idWJibGVTcHJpdGVGcmFtZTtcbiAgICAgICAgXG4gICAgICAgIC8vIOa3u+WKoOaMiemIlee1hOS7tlxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNoYXRCdWJibGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICAvLyDoqK3nva7niLbnr4Dpu55cbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLnBhcmVudCA9IHRoaXMuZnJpZW5kO1xuICAgICAgICBcbiAgICAgICAgLy8g6Kit572u6IGK5aSp5rCj5rOh55qE5Yid5aeL5L2N572u77yI5Zyo5pyL5Y+L6aCt6aCC5LiK5pa577yJXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS55ID0gdGhpcy5CVUJCTEVfT0ZGU0VUO1xuXG4gICAgICAgIC8vIOeiuuS/neawo+azoeWcqOacgOS4iuWxpFxuICAgICAgICB0aGlzLmNoYXRCdWJibGUuekluZGV4ID0gOTk5O1xuICAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5pmC6Zqx6JeP6IGK5aSp5rCj5rOhXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyDmt7vliqDpu57mk4rkuovku7ZcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1YmJsZUNsaWNrZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2hhdEltYWdlKCkge1xuICAgICAgICAvLyDlibXlu7rogYrlpKnlnJbniYfnr4Dpu55cbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UgPSBuZXcgY2MuTm9kZSgnQ2hhdF9JbWFnZScpO1xuXG4gICAgICAgIC8vIOa3u+WKoCBTcHJpdGUg57WE5Lu2XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuY2hhdEltYWdlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lc1swXTtcbiAgICAgICAgXG4gICAgICAgIC8vIOioree9rueItuevgOm7nueCuiBDYW52YXNcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XG4gICAgICAgIFxuICAgICAgICAvLyDliJ3lp4vmmYLpmrHol4/lnJbniYdcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8g56K65L+d5ZyW54mH5Zyo5pyA5LiK5bGkXG4gICAgICAgIHRoaXMuY2hhdEltYWdlLnpJbmRleCA9IDEwMDA7XG5cbiAgICAgICAgLy8g5re75Yqg6bue5pOK5LqL5Lu277yI6bue5pOK5ZyW54mH5pmC6aGv56S65LiL5LiA5by15oiW6Zqx6JeP77yJXG4gICAgICAgIHRoaXMuY2hhdEltYWdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkltYWdlQ2xpY2tlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ1YmJsZUNsaWNrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lc1t0aGlzLmN1cnJlbnRJbWFnZUluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSW1hZ2VDbGlja2VkKCkge1xuICAgICAgICBpZiAodGhpcy5jaGF0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgrKztcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZUluZGV4IDwgdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8g6aGv56S65LiL5LiA5by15ZyW54mHXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5jaGF0SW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lc1t0aGlzLmN1cnJlbnRJbWFnZUluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOW3sue2k+aYr+acgOW+jOS4gOW8teWclueJh++8jOmaseiXj+iBiuWkqeWclueJh1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyIHx8ICF0aGlzLmZyaWVuZCB8fCAhdGhpcy5jaGF0QnViYmxlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuZm9sbG93Q2FtZXJhKSB7XG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKS5nZXRDaGlsZEJ5TmFtZSgnTWFpbiBDYW1lcmEnKTtcbiAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLnggPSBjYW1lcmEueDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWwhyBWZWMzIOi9ieaPm+eCuiBWZWMyXG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IG5ldyBjYy5WZWMyKHRoaXMucGxheWVyLnBvc2l0aW9uLngsIHRoaXMucGxheWVyLnBvc2l0aW9uLnkpO1xuICAgICAgICBjb25zdCBmcmllbmRQb3MgPSBuZXcgY2MuVmVjMih0aGlzLmZyaWVuZC5wb3NpdGlvbi54LCB0aGlzLmZyaWVuZC5wb3NpdGlvbi55KTtcblxuICAgICAgICAvLyDoqIjnrpfnjqnlrrblkozmnIvlj4vnmoTot53pm6JcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKHBsYXllclBvcywgZnJpZW5kUG9zKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IGRpc3RhbmNlIDw9IHRoaXMuREVURUNUSU9OX1JBRElVUztcblxuICAgICAgICAvLyDmoLnmk5rot53pm6Lpoa/npLrmiJbpmrHol4/ogYrlpKnmsKPms6FcbiAgICAgICAgaWYgKHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgIT09IHNob3VsZFNob3cpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgPSBzaG91bGRTaG93O1xuICAgICAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgICAgICAgICAvLyDnorrkv53msKPms6HlnKjmnIDkuIrlsaRcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUuekluZGV4ID0gOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREaXN0YW5jZShwb3MxOiBjYy5WZWMyLCBwb3MyOiBjYy5WZWMyKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgZHggPSBwb3MxLnggLSBwb3MyLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcG9zMS55IC0gcG9zMi55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXRCdWJibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnViYmxlQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYXRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2Uub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkltYWdlQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmNoYXRJbWFnZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59ICJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYW1lcmFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBNkRDO1FBM0RHLFlBQU0sR0FBWSxJQUFJLENBQUMsQ0FBRSxXQUFXO1FBR3BDLGlCQUFXLEdBQVcsR0FBRyxDQUFDLENBQUUsVUFBVTtRQUd0QyxhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUc5QixhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUc5QixVQUFJLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBRSxXQUFXO1FBR2xDLFVBQUksR0FBVyxJQUFJLENBQUMsQ0FBRyxXQUFXO1FBR2xDLFVBQUksR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFFLFdBQVc7UUFHbEMsVUFBSSxHQUFXLElBQUksQ0FBQyxDQUFHLFdBQVc7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFvQ3JDLENBQUM7SUFsQ0csaUNBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QztRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUV6QixTQUFTO1FBQ1QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTNDLFNBQVM7UUFDVCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEQsU0FBUztRQUNULElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ3pELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ3pELFVBQVUsQ0FBQyxDQUFDLENBQ2YsQ0FBQztJQUNOLENBQUM7SUExREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSztJQUd2QjtRQURDLFFBQVE7eURBQ2lCO0lBRzFCO1FBREMsUUFBUTtxREFDVztJQUdwQjtRQURDLFFBQVE7cURBQ1c7SUFHcEI7UUFEQyxRQUFRO2tEQUNZO0lBR3JCO1FBREMsUUFBUTtrREFDVztJQUdwQjtRQURDLFFBQVE7a0RBQ1k7SUFHckI7UUFEQyxRQUFRO2tEQUNXO0lBdkJILGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBNkRwQztJQUFELHVCQUFDO0NBN0RELEFBNkRDLENBN0Q2QyxFQUFFLENBQUMsU0FBUyxHQTZEekQ7a0JBN0RvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7ICAvLyDot5/pmqjnm67mqJnvvIjnjqnlrrbvvIlcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNtb290aFNwZWVkOiBudW1iZXIgPSAwLjE7ICAvLyDnm7jmqZ/np7vli5XlubPmu5HluqZcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG9mZnNldFg6IG51bWJlciA9IDA7ICAvLyBY6Lu45YGP56e76YePXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvZmZzZXRZOiBudW1iZXIgPSAwOyAgLy8gWei7uOWBj+enu+mHj1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWluWDogbnVtYmVyID0gLTEwMDA7ICAvLyDnm7jmqZ9Y6Lu45pyA5bCP56+E5ZyNXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhYOiBudW1iZXIgPSAxMDAwOyAgIC8vIOebuOapn1jou7jmnIDlpKfnr4TlnI1cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pblk6IG51bWJlciA9IC0xMDAwOyAgLy8g55u45qmfWei7uOacgOWwj+evhOWcjVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4WTogbnVtYmVyID0gMTAwMDsgICAvLyDnm7jmqZ9Z6Lu45pyA5aSn56+E5ZyNXHJcblxyXG4gICAgcHJpdmF0ZSBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOeNsuWPluebuOapn+e1hOS7tlxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOioree9ruebuOapn+WxrOaAp1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmJhY2tncm91bmRDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOioiOeul+ebruaomeS9jee9rlxyXG4gICAgICAgIGxldCB0YXJnZXRYID0gdGhpcy50YXJnZXQueCArIHRoaXMub2Zmc2V0WDtcclxuICAgICAgICBsZXQgdGFyZ2V0WSA9IHRoaXMudGFyZ2V0LnkgKyB0aGlzLm9mZnNldFk7XHJcblxyXG4gICAgICAgIC8vIOmZkOWItuebuOapn+evhOWcjVxyXG4gICAgICAgIHRhcmdldFggPSBjYy5taXNjLmNsYW1wZih0YXJnZXRYLCB0aGlzLm1pblgsIHRoaXMubWF4WCk7XHJcbiAgICAgICAgdGFyZ2V0WSA9IGNjLm1pc2MuY2xhbXBmKHRhcmdldFksIHRoaXMubWluWSwgdGhpcy5tYXhZKTtcclxuXHJcbiAgICAgICAgLy8g5bmz5ruR56e75YuV55u45qmfXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYzKHRhcmdldFgsIHRhcmdldFksIGN1cnJlbnRQb3Mueik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5L2/55SoIGxlcnAg5a+m54++5bmz5ruR56e75YuVXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoXHJcbiAgICAgICAgICAgIGNjLm1pc2MubGVycChjdXJyZW50UG9zLngsIHRhcmdldFBvcy54LCB0aGlzLnNtb290aFNwZWVkKSxcclxuICAgICAgICAgICAgY2MubWlzYy5sZXJwKGN1cnJlbnRQb3MueSwgdGFyZ2V0UG9zLnksIHRoaXMuc21vb3RoU3BlZWQpLFxyXG4gICAgICAgICAgICBjdXJyZW50UG9zLnpcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59ICJdfQ==
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
        _this.jumpForce = 800;
        _this.gravity = 1200;
        _this.maxFallSpeed = 800;
        _this.groundY = -300;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUE0UUM7UUEzUUcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsYUFBTyxHQUFXLENBQUMsR0FBRyxDQUFDO1FBRWhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBQzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3Qix3QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUEwQixJQUFJLENBQUM7UUFDdkMsc0JBQWdCLEdBQVcsTUFBTSxDQUFDO1FBQ2xDLHlCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQywwQkFBb0IsR0FBVyxDQUFDLENBQUMsQ0FBRSxhQUFhOztJQTBQNUQsQ0FBQztJQXhQRyxpQ0FBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBQ3pELEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUUxQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELFVBQVU7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV6RCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLFVBQVU7WUFDVixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxTQUFTO1FBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdkUsV0FBVztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVPLHdDQUFhLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssUUFBUSxFQUFFO1lBQ2pELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDbEMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO2FBQ3BDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ25DLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlCO2dCQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzFCO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2Y7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxLQUE2QjtRQUNqQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzlCO2lCQUNKO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsT0FBMEIsRUFBRSxZQUFnQyxFQUFFLGFBQWlDO1FBQzFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUVqRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Z0JBRTFCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsT0FBMEIsRUFBRSxZQUFnQyxFQUFFLGFBQWlDO1FBQ3hHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUVqRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM5QjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixXQUFXO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUV4RSxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RixJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixLQUFxQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtvQkFBekIsSUFBTSxNQUFNLGdCQUFBO29CQUNiLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTt3QkFDeEMscUJBQXFCO3dCQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTs0QkFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFFLFdBQVc7NEJBQ3hDLE1BQU07eUJBQ1Q7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO1FBRUQsT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDOUM7WUFFRCxXQUFXO1lBQ1gsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtZQUVELFNBQVM7WUFDVCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELE9BQU87UUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3RELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFcEQsV0FBVztRQUNYLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELGtCQUFrQjtRQUNsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3RELENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQTNRZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E0UXBDO0lBQUQsdUJBQUM7Q0E1UUQsQUE0UUMsQ0E1UTZDLEVBQUUsQ0FBQyxTQUFTLEdBNFF6RDtrQkE1UW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAzMDA7XG4gICAganVtcEZvcmNlOiBudW1iZXIgPSA4MDA7XG4gICAgZ3Jhdml0eTogbnVtYmVyID0gMTIwMDtcbiAgICBtYXhGYWxsU3BlZWQ6IG51bWJlciA9IDgwMDtcbiAgICBncm91bmRZOiBudW1iZXIgPSAtMzAwO1xuXG4gICAgcHVibGljIG1vdmVEaXJlY3Rpb246IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBvbkdyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNKdW1waW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0ZhbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbFZlbG9jaXR5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbFZlbG9jaXR5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xuICAgIHByaXZhdGUgY29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbWF0aW9uOiBzdHJpbmcgPSBcImlkbGVcIjtcbiAgICBwcml2YXRlIGdyb3VuZENoZWNrRGlzdGFuY2U6IG51bWJlciA9IDEwO1xuICAgIHByaXZhdGUgbGFzdFZlcnRpY2FsVmVsb2NpdHk6IG51bWJlciA9IDA7ICAvLyDnlKjmlrzmqqLmuKzpgJ/luqbmlrnlkJHororljJZcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW54mp55CG57O757WxXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmdyYXZpdHkgPSBjYy52MigwLCAtMTIwMCk7XG4gICAgICAgIG1hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgICAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcblxuICAgICAgICAvLyDnjbLlj5bntYTku7ZcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMuYW5pbSkge1xuICAgICAgICAgICAgY29uc3QgY2xpcHMgPSB0aGlzLmFuaW0uZ2V0Q2xpcHMoKTtcbiAgICAgICAgICAgIGNsaXBzLmZvckVhY2goY2xpcCA9PiB7XG4gICAgICAgICAgICAgICAgY2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIneWni+WMlueJqeeQhue1hOS7tlxuICAgICAgICB0aGlzLnJpZ2lkYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xuXG4gICAgICAgIGlmICh0aGlzLnJpZ2lkYm9keSkge1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkubGluZWFyRGFtcGluZyA9IDA7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmZyaWN0aW9uID0gMC4zO1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5yZXN0aXR1dGlvbiA9IDA7XG5cbiAgICAgICAgICAgIC8vIOiqv+aVtOeisOaSnueuseWkp+Wwj1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5zaXplID0gY2Muc2l6ZShzaXplLndpZHRoICogMC44LCBzaXplLmhlaWdodCAqIDAuOCk7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDAsIC1zaXplLmhlaWdodCAqIDAuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDoqLvlhorpjbXnm6Tkuovku7ZcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG5cbiAgICAgICAgLy8g6aCQ6Kit5pKt5pS+5b6F5qmf5YuV55WrXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUFuaW1hdGlvbihhbmltTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW0gJiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9PSBhbmltTmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMS4wO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGFuaW1OYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBhbmltTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gLXRoaXMubW92ZVNwZWVkO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZVggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsVmVsb2NpdHkgPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Hcm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXJlY3Rpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlRGlyZWN0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxWZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAodGhpcy5vbkdyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxWZWxvY2l0eSA9IHRoaXMuanVtcEZvcmNlO1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwianVtcFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vcm1hbC55IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZURpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vcm1hbC55IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbFZlbG9jaXR5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgLy8g5qqi5p+l5piv5ZCm5Zyo5Zyw6Z2i5LiKXG4gICAgICAgIGlmICghdGhpcy5vbkdyb3VuZCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgY29uc3QgcmF5U3RhcnQgPSBjYy52MihzdGFydFBvcy54LCBzdGFydFBvcy55KTtcbiAgICAgICAgICAgIGNvbnN0IHJheUVuZCA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgLSB0aGlzLmdyb3VuZENoZWNrRGlzdGFuY2UpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5yYXlDYXN0KHJheVN0YXJ0LCByYXlFbmQsIGNjLlJheUNhc3RUeXBlLkFsbCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeiuuS/neWPquacieWcqOWcsOmdolnluqfmqJnpmYTov5HmiY3liKTlrprngrrokZflnLBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhyZXN1bHQucG9pbnQueSAtIHRoaXMuZ3JvdW5kWSkgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ncm91bmRZOyAgLy8g56K65L+d6KeS6Imy5L2N572u5q2j56K6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmh4nnlKjph43liptcbiAgICAgICAgaWYgKCF0aGlzLm9uR3JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgLT0gdGhpcy5ncmF2aXR5ICogZHQ7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbFZlbG9jaXR5IDwgLXRoaXMubWF4RmFsbFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gLXRoaXMubWF4RmFsbFNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmqqLmuKzot7Pouo3liLDmnIDpq5jpu55cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RWZXJ0aWNhbFZlbG9jaXR5ID4gMCAmJiB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOabtOaWsOS4i+iQveeLgOaFi1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWxWZWxvY2l0eSA8IDAgJiYgIXRoaXMuaXNGYWxsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZmFsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOS9jee9rlxuICAgICAgICBsZXQgbmV3WCA9IHRoaXMubm9kZS54ICsgdGhpcy5ob3Jpem9udGFsVmVsb2NpdHkgKiBkdDtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLm5vZGUueSArIHRoaXMudmVydGljYWxWZWxvY2l0eSAqIGR0O1xuXG4gICAgICAgIC8vIOmYsuatouinkuiJsuaOieWHuuWcsOmdolxuICAgICAgICBpZiAobmV3WSA8IHRoaXMuZ3JvdW5kWSkge1xuICAgICAgICAgICAgbmV3WSA9IHRoaXMuZ3JvdW5kWTtcbiAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1gsIG5ld1kpO1xuXG4gICAgICAgIC8vIOabtOaWsOWLleeVq1xuICAgICAgICBpZiAodGhpcy5hbmltKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJqdW1wXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRmFsbGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZURpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjnlbbliY3lnoLnm7TpgJ/luqbnlKjmlrzkuIvkuIDluYDmr5TovINcbiAgICAgICAgdGhpcy5sYXN0VmVydGljYWxWZWxvY2l0eSA9IHRoaXMudmVydGljYWxWZWxvY2l0eTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXaW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUZDO1FBbEZHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVcsR0FBRyxDQUFDLENBQUMsUUFBUTtRQUcvQixhQUFPLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTs7UUFxRTlCLGlCQUFpQjtJQUNyQixDQUFDO0lBcEVHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixlQUFlO1lBQ2YsSUFBTSxZQUFZLEdBQUcsSUFB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QVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQS9FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUTs2Q0FDYTtJQUd0QjtRQURDLFFBQVE7NkNBQ1k7SUFmSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUY1QjtJQUFELGVBQUM7Q0FyRkQsQUFxRkMsQ0FyRnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUZqRDtrQkFyRm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvZmZzZXRYOiBudW1iZXIgPSAxNjA7IC8vIOWPs+mCiuWBj+enu+mHj1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgb2Zmc2V0WTogbnVtYmVyID0gMzA7IC8vIOWeguebtOWBj+enu+mHj1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIOmgkOioremaseW9olxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8g6Lef6ZqoIHBsYXllciDkuKbmoLnmk5ogbW92ZURpcmVjdGlvbiDmsbrlrprpoqjlkJFcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIOWPluW+lyBQbGF5ZXIg6IWz5pysXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclNjcmlwdCA9IHRoaXMucGxheWVyTm9kZS5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZURpciA9IDE7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJTY3JpcHQpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVEaXIgPSBwbGF5ZXJTY3JpcHQubm9kZS5zY2FsZVggPCAwID8gLTEgOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOagueaTmuaWueWQkeiqv+aVtOmiqOeahOS9jee9rlxyXG4gICAgICAgICAgICBpZiAobW92ZURpciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5wbGF5ZXJOb2RlLnggLSB0aGlzLm9mZnNldFg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMucGxheWVyTm9kZS54ICsgdGhpcy5vZmZzZXRYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5wbGF5ZXJOb2RlLnkgKyB0aGlzLm9mZnNldFk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+56ys5LiA5YCL5YuV55WrXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbmltICYmIGFuaW0uZ2V0Q2xpcHMoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDbGlwID0gYW5pbS5nZXRDbGlwcygpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0ucGxheShmaXJzdENsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDoi6Xlt7LntpPpoa/npLrvvIznorrkv53li5XnlavmjIHnuozmkqXmlL5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW0gJiYgYW5pbS5nZXRDbGlwcygpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdENsaXAgPSBhbmltLmdldENsaXBzKClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltLmdldEFuaW1hdGlvblN0YXRlKGZpcnN0Q2xpcC5uYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbS5wbGF5KGZpcnN0Q2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
