"use strict";
cc._RF.push(module, 'a2249vTRl9If5fEFrRAIxwo', 'AudioManager');
// Script/AudioManager.ts

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
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalBGM = null;
        _this.endingBGM = null;
        _this.volume = 0.5;
        _this.loop = true;
        return _this;
    }
    AudioManager_1 = AudioManager;
    Object.defineProperty(AudioManager, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.onLoad = function () {
        if (AudioManager_1._instance === null) {
            AudioManager_1._instance = this;
            cc.game.addPersistRootNode(this.node);
            // 只在第一次 persist 時自動播放
            this.playNormalBGM();
            cc.log(AudioManager_1.audioId);
        }
        else {
            this.node.destroy();
        }
    };
    AudioManager.prototype.playNormalBGM = function () {
        if (this.normalBGM) {
            this.stopBGM();
            AudioManager_1.audioId = cc.audioEngine.play(this.normalBGM, this.loop, this.volume);
        }
    };
    AudioManager.prototype.playEndingBGM = function () {
        if (this.endingBGM) {
            this.stopBGM();
            AudioManager_1.audioId = cc.audioEngine.play(this.endingBGM, this.loop, this.volume);
        }
    };
    AudioManager.prototype.stopBGM = function () {
        if (AudioManager_1.audioId !== -1) {
            cc.audioEngine.stop(AudioManager_1.audioId);
            AudioManager_1.audioId = -1;
        }
    };
    AudioManager.prototype.setVolume = function (volume) {
        this.volume = volume;
        // 只要有正在播放的 BGM，立即調整音量
        if (AudioManager_1.audioId !== -1) {
            cc.audioEngine.setVolume(AudioManager_1.audioId, volume);
        }
    };
    // 可選：切換 BGM 時自動用目前 volume
    AudioManager.prototype.switchToNormalBGM = function () {
        this.playNormalBGM();
        this.setVolume(this.volume);
    };
    AudioManager.prototype.switchToEndingBGM = function () {
        this.playEndingBGM();
        this.setVolume(this.volume);
    };
    AudioManager.prototype.onDestroy = function () {
        if (AudioManager_1._instance === this) {
            AudioManager_1._instance = null;
        }
    };
    var AudioManager_1;
    AudioManager._instance = null;
    AudioManager.audioId = -1;
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioManager.prototype, "normalBGM", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioManager.prototype, "endingBGM", void 0);
    __decorate([
        property
    ], AudioManager.prototype, "volume", void 0);
    __decorate([
        property
    ], AudioManager.prototype, "loop", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();