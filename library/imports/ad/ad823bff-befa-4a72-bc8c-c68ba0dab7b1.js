"use strict";
cc._RF.push(module, 'ad823v/vvpKcryMxoug2rex', 'ChangePicture');
// Script/ChangePicture.ts

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
var ChangePicture = /** @class */ (function (_super) {
    __extends(ChangePicture, _super);
    function ChangePicture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pictureSprite = null;
        _this.pictures = [];
        _this.nextScene = "Scene000_StartScene";
        _this.currentIndex = 0;
        return _this;
    }
    ChangePicture.prototype.onLoad = function () {
        cc.log("ChangePicture onLoad");
        // 檢查 Sprite 組件
        if (!this.pictureSprite) {
            this.pictureSprite = this.getComponent(cc.Sprite);
            cc.log("Sprite component found:", this.pictureSprite ? "yes" : "no");
        }
        // 檢查 Button 組件
        var button = this.getComponent(cc.Button);
        if (!button) {
            cc.log("Adding Button component");
            var newButton = this.node.addComponent(cc.Button);
            // 設置點擊事件
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "ChangePicture";
            clickEventHandler.handler = "onClick";
            newButton.clickEvents = [clickEventHandler];
        }
        // 初始化第一張圖片
        if (this.pictures.length > 0) {
            this.pictureSprite.spriteFrame = this.pictures[0];
            cc.log("First picture set");
        }
        else {
            cc.warn("No pictures set in the array!");
        }
    };
    // 點擊時切換圖片
    ChangePicture.prototype.onClick = function () {
        cc.log("Picture clicked, current index:", this.currentIndex);
        this.currentIndex++;
        // 如果還有下一張圖片
        if (this.currentIndex < this.pictures.length) {
            this.pictureSprite.spriteFrame = this.pictures[this.currentIndex];
            cc.log("Changed to picture:", this.currentIndex);
        }
        else {
            // 沒有更多圖片了，切換場景
            cc.log("No more pictures, loading next scene");
            this.loadNextScene();
        }
    };
    ChangePicture.prototype.loadNextScene = function () {
        cc.log("Loading next scene:", this.nextScene);
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene(this.nextScene);
        }
        else {
            cc.director.loadScene(this.nextScene);
        }
    };
    __decorate([
        property(cc.Sprite)
    ], ChangePicture.prototype, "pictureSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ChangePicture.prototype, "pictures", void 0);
    __decorate([
        property
    ], ChangePicture.prototype, "nextScene", void 0);
    ChangePicture = __decorate([
        ccclass
    ], ChangePicture);
    return ChangePicture;
}(cc.Component));
exports.default = ChangePicture;

cc._RF.pop();