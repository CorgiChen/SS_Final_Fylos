"use strict";
cc._RF.push(module, 'c3feevXGKlBp7sf5mKRrXq7', 'Switch');
// Script/Switch.ts

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
        _this.spriteNode = null;
        _this.sprite1 = null;
        _this.sprite2 = null;
        _this.state = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.setState = function (state) {
        if (!this.spriteNode)
            return;
        var sprite = this.spriteNode.getComponent(cc.Sprite);
        if (!sprite)
            return;
        if (state === 0 && this.sprite1) {
            sprite.spriteFrame = this.sprite1;
        }
        else if (state === 1 && this.sprite2) {
            sprite.spriteFrame = this.sprite2;
        }
    };
    NewClass.prototype.update = function (dt) {
        if (!this.spriteNode)
            return;
        var sprite = this.spriteNode.getComponent(cc.Sprite);
        if (!sprite)
            return;
        if (this.state === 0 && this.sprite1) {
            sprite.spriteFrame = this.sprite1;
        }
        else if (this.sprite2) {
            sprite.spriteFrame = this.sprite2;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "spriteNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "sprite1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "sprite2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();