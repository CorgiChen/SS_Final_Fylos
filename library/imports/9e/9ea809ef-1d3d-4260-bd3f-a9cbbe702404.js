"use strict";
cc._RF.push(module, '9ea80nvHT1CYL0/qcu+cCQE', 'PauseMenu');
// Script/PauseMenu.ts

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
var PauseMenu = /** @class */ (function (_super) {
    __extends(PauseMenu, _super);
    function PauseMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resumeButton = null;
        _this.quitButton = null;
        return _this;
    }
    PauseMenu.prototype.start = function () {
        if (this.resumeButton) {
            this.resumeButton.on(cc.Node.EventType.TOUCH_END, this.onResumeClicked, this);
        }
        if (this.quitButton) {
            this.quitButton.on(cc.Node.EventType.TOUCH_END, this.onQuitClicked, this);
        }
    };
    PauseMenu.prototype.onResumeClicked = function () {
        var pauseManager = cc.find("Canvas").getComponent("PauseManager");
        if (pauseManager) {
            pauseManager.togglePause();
        }
    };
    PauseMenu.prototype.onQuitClicked = function () {
        var pauseManager = cc.find("Canvas").getComponent("PauseManager");
        if (pauseManager) {
            pauseManager.quitToMenu();
        }
    };
    PauseMenu.prototype.onDestroy = function () {
        // Clean up event listeners
        if (this.resumeButton) {
            this.resumeButton.off(cc.Node.EventType.TOUCH_END, this.onResumeClicked, this);
        }
        if (this.quitButton) {
            this.quitButton.off(cc.Node.EventType.TOUCH_END, this.onQuitClicked, this);
        }
    };
    __decorate([
        property(cc.Node)
    ], PauseMenu.prototype, "resumeButton", void 0);
    __decorate([
        property(cc.Node)
    ], PauseMenu.prototype, "quitButton", void 0);
    PauseMenu = __decorate([
        ccclass
    ], PauseMenu);
    return PauseMenu;
}(cc.Component));
exports.default = PauseMenu;

cc._RF.pop();