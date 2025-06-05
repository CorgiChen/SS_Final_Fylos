"use strict";
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