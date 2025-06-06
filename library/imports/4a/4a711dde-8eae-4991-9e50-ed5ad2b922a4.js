"use strict";
cc._RF.push(module, '4a7113ejq5JkZ5Q7VrSuSKk', 'GotoLeaderboard');
// Script/GotoLeaderboard.ts

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
var GotoLeaderboard = /** @class */ (function (_super) {
    __extends(GotoLeaderboard, _super);
    function GotoLeaderboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GotoLeaderboard.prototype.onLoad = function () {
        // 註冊按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    GotoLeaderboard.prototype.onButtonClick = function () {
        // 切換場景
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Leaderboard");
        }
        else {
            cc.director.loadScene("Scene000_Leaderboard");
        }
    };
    GotoLeaderboard.prototype.onDestroy = function () {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    GotoLeaderboard = __decorate([
        ccclass
    ], GotoLeaderboard);
    return GotoLeaderboard;
}(cc.Component));
exports.default = GotoLeaderboard;

cc._RF.pop();