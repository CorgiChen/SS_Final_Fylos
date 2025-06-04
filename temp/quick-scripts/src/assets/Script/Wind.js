"use strict";
cc._RF.push(module, '835a4Mbk9tPTIWnxW5UxwFV', 'Wind');
// Script/Wind.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.playerNode = null;
        _this.offsetX = 160; // 右邊偏移量
        _this.offsetY = 30; // 垂直偏移量
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.update = function (dt) {
        // 跟隨 player 並根據 moveDirection 決定風向
        if (this.playerNode) {
            // 取得 Player 腳本
            var playerScript = this.playerNode.getComponent('Player');
            var moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整風的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
            }
            else {
                this.node.x = this.playerNode.x + this.offsetX;
            }
            this.node.y = this.playerNode.y + this.offsetY;
        }
    };
    NewClass.prototype.onKeyDown = function (event) {
        if (event.keyCode === cc.macro.KEY.f) {
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[0];
                    anim.play(firstClip.name);
                }
            }
            else {
                // 若已經顯示，確保動畫持續撥放
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[0];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        if (event.keyCode === cc.macro.KEY.f) {
            this.node.active = false;
        }
        if (event.keyCode === cc.macro.KEY.space) {
            this.node.active = false;
        }
    };
    NewClass.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "playerNode", void 0);
    __decorate([
        property
    ], NewClass.prototype, "offsetX", void 0);
    __decorate([
        property
    ], NewClass.prototype, "offsetY", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();