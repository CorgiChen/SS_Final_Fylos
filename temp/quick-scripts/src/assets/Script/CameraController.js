"use strict";
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