
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