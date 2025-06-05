
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