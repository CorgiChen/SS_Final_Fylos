"use strict";
cc._RF.push(module, 'f3d8ecnBrlNMIW0UfdvhbEj', 'Crate');
// Script/Crate.ts

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
var Crate = /** @class */ (function (_super) {
    __extends(Crate, _super);
    function Crate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rigidbody = null;
        _this.collider = null;
        _this.onGround = false;
        return _this;
    }
    Crate.prototype.onLoad = function () {
        // 啟用物理系統
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        // 初始化剛體
        this.rigidbody = this.getComponent(cc.RigidBody);
        if (!this.rigidbody) {
            this.rigidbody = this.node.addComponent(cc.RigidBody);
        }
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
        this.rigidbody.fixedRotation = true;
        this.rigidbody.gravityScale = 10; // 箱子很重但不會過重
        this.rigidbody.linearDamping = 0.5;
        this.rigidbody.enabledContactListener = true;
        this.rigidbody.allowSleep = false;
        // 初始化碰撞器
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        if (!this.collider) {
            this.collider = this.node.addComponent(cc.PhysicsBoxCollider);
        }
        this.collider.enabled = true;
        this.collider.sensor = false;
        this.collider.friction = 1.0;
        this.collider.restitution = 0;
        // 自動調整碰撞箱大小與位置
        var size = this.node.getContentSize();
        this.collider.size = cc.size(size.width, size.height);
        this.collider.offset = cc.v2(0, 0);
        this.collider.apply();
    };
    // 只允許箱子在地板上停止，不能被推動
    Crate.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            this.onGround = true;
            this.rigidbody.linearVelocity = cc.v2(0, 0);
            this.rigidbody.angularVelocity = 0;
        }
    };
    // 讓 Wind.ts 可以呼叫這個方法
    Crate.prototype.applyWindForce = function (dir) {
        this.rigidbody.linearVelocity = cc.v2(dir * 800, 0);
    };
    Crate = __decorate([
        ccclass
    ], Crate);
    return Crate;
}(cc.Component));
exports.default = Crate;

cc._RF.pop();