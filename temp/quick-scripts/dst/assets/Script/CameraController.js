
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