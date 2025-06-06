"use strict";
cc._RF.push(module, '6b146UPRx5HzLUWwOPnWvae', 'TransitionManager');
// Script/TransitionManager.ts

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
var TransitionManager = /** @class */ (function (_super) {
    __extends(TransitionManager, _super);
    function TransitionManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transitionAnim = null;
        return _this;
    }
    TransitionManager.prototype.onLoad = function () {
        this.playTransIn();
    };
    TransitionManager.prototype.playTransIn = function () {
        if (this.transitionAnim) {
            this.transitionAnim.play('TransIn');
        }
    };
    TransitionManager.prototype.playTransOutAndChangeScene = function (sceneName) {
        if (this.transitionAnim) {
            this.transitionAnim.play('TransOut');
            this.transitionAnim.once('finished', function () {
                cc.director.loadScene(sceneName);
            });
        }
        else {
            cc.director.loadScene(sceneName);
        }
    };
    TransitionManager.prototype.update = function () {
        // 讓 Transition 節點跟隨 Main Camera 的 x, y
        var camera = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
        if (camera) {
            this.node.x = camera.x;
            this.node.y = camera.y;
        }
    };
    __decorate([
        property(cc.Animation)
    ], TransitionManager.prototype, "transitionAnim", void 0);
    TransitionManager = __decorate([
        ccclass
    ], TransitionManager);
    return TransitionManager;
}(cc.Component));
exports.default = TransitionManager;

cc._RF.pop();