"use strict";
cc._RF.push(module, 'c933au3yvJPUJWqUu+H4lOK', 'PauseManager');
// Script/PauseManager.ts

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
var AudioManager_1 = require("./AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PauseManager = /** @class */ (function (_super) {
    __extends(PauseManager, _super);
    function PauseManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pauseMenu = null;
        _this.pauseButton = null;
        _this.volumeUpButton = null;
        _this.volumeDownButton = null;
        _this.volumeLabel = null;
        _this.isPaused = false;
        _this.audioManager = null;
        return _this;
    }
    PauseManager.prototype.start = function () {
        var _this = this;
        // Initialize pause menu
        if (this.pauseMenu) {
            this.pauseMenu.active = false;
        }
        // Update volume label
        this.updateVolumeLabel();
        // Register pause button event
        if (this.pauseButton) {
            this.pauseButton.on(cc.Node.EventType.TOUCH_END, function () {
                _this.togglePause();
            }, this);
        }
        // Register volume control events
        if (this.volumeUpButton) {
            this.volumeUpButton.on(cc.Node.EventType.TOUCH_END, this.increaseVolume, this);
        }
        if (this.volumeDownButton) {
            this.volumeDownButton.on(cc.Node.EventType.TOUCH_END, this.decreaseVolume, this);
        }
        // Register resume button event
        var resumeButton = cc.find("Canvas/PauseMenu/ResumeButton");
        if (resumeButton) {
            resumeButton.on(cc.Node.EventType.TOUCH_END, function () {
                _this.togglePause();
            }, this);
        }
        // Register quit button event
        var quitButton = cc.find("Canvas/PauseMenu/QuitButton");
        if (quitButton) {
            quitButton.on(cc.Node.EventType.TOUCH_END, function () {
                _this.quitToMenu();
            }, this);
        }
    };
    PauseManager.prototype.togglePause = function () {
        this.isPaused = !this.isPaused;
        if (this.pauseMenu) {
            this.pauseMenu.active = this.isPaused;
        }
        if (this.isPaused) {
            cc.director.pause();
        }
        else {
            cc.director.resume();
        }
    };
    PauseManager.prototype.quitToMenu = function () {
        cc.director.resume();
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_StartScene");
        }
        else {
            cc.director.loadScene("Scene000_StartScene");
        }
    };
    PauseManager.prototype.increaseVolume = function () {
        var newVolume = Math.min(1.0, cc.audioEngine.getVolume(AudioManager_1.default.audioId) + 0.1);
        cc.audioEngine.setVolume(AudioManager_1.default.audioId, newVolume);
        this.updateVolumeLabel();
    };
    PauseManager.prototype.decreaseVolume = function () {
        var newVolume = Math.max(0.0, cc.audioEngine.getVolume(AudioManager_1.default.audioId) - 0.1);
        cc.audioEngine.setVolume(AudioManager_1.default.audioId, newVolume);
        this.updateVolumeLabel();
    };
    PauseManager.prototype.updateVolumeLabel = function () {
        var volume10 = Math.round(cc.audioEngine.getVolume(AudioManager_1.default.audioId) * 10);
        this.volumeLabel.string = " " + volume10 + " ";
    };
    PauseManager.prototype.onDestroy = function () {
        // Clean up event listeners
        if (this.pauseButton) {
            this.pauseButton.off(cc.Node.EventType.TOUCH_END);
        }
        if (this.volumeUpButton) {
            this.volumeUpButton.off(cc.Node.EventType.TOUCH_END);
        }
        if (this.volumeDownButton) {
            this.volumeDownButton.off(cc.Node.EventType.TOUCH_END);
        }
        var resumeButton = cc.find("Canvas/PauseMenu/ResumeButton");
        if (resumeButton) {
            resumeButton.off(cc.Node.EventType.TOUCH_END);
        }
        var quitButton = cc.find("Canvas/PauseMenu/QuitButton");
        if (quitButton) {
            quitButton.off(cc.Node.EventType.TOUCH_END);
        }
    };
    PauseManager.prototype.update = function () {
        var camera = cc.find("Canvas/Main Camera");
        if (camera) {
            // Add offset relative to camera position using Vec3
            this.node.position = camera.position.add(cc.v3(668, 362, 0));
            if (this.pauseMenu) {
                this.pauseMenu.position = camera.position.add(cc.v3(0, 0, 0));
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "pauseMenu", void 0);
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "pauseButton", void 0);
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "volumeUpButton", void 0);
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "volumeDownButton", void 0);
    __decorate([
        property(cc.Label)
    ], PauseManager.prototype, "volumeLabel", void 0);
    PauseManager = __decorate([
        ccclass
    ], PauseManager);
    return PauseManager;
}(cc.Component));
exports.default = PauseManager;

cc._RF.pop();