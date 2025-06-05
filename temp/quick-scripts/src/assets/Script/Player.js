"use strict";
cc._RF.push(module, 'f4da677y89CoYaRo5Za3EB3', 'Player');
// Script/Player.ts

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
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveSpeed = 300;
        _this.jumpForce = 500;
        _this.gravity = 1200;
        _this.maxFallSpeed = 800;
        _this.groundY = -300; // 添加地面Y座標屬性
        _this.moveDirection = 0;
        _this.onGround = false;
        _this.isJumping = false;
        _this.isFalling = false;
        _this.anim = null;
        _this.verticalVelocity = 0;
        _this.horizontalVelocity = 0;
        _this.rigidbody = null;
        _this.collider = null;
        _this.currentAnimation = "idle";
        _this.groundCheckDistance = 10;
        _this.lastVerticalVelocity = 0; // 用於檢測速度方向變化
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        // 初始化物理系統
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, -1200);
        manager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
            cc.PhysicsManager.DrawBits.e_shapeBit;
        // 獲取組件
        this.anim = this.getComponent(cc.Animation);
        if (this.anim) {
            var clips = this.anim.getClips();
            clips.forEach(function (clip) {
                clip.wrapMode = cc.WrapMode.Loop;
            });
        }
        // 初始化物理組件
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        if (this.rigidbody) {
            this.rigidbody.type = cc.RigidBodyType.Dynamic;
            this.rigidbody.fixedRotation = true;
            this.rigidbody.enabledContactListener = true;
            this.rigidbody.gravityScale = 0;
            this.rigidbody.linearDamping = 0;
            this.rigidbody.allowSleep = false;
        }
        if (this.collider) {
            this.collider.enabled = true;
            this.collider.sensor = false;
            this.collider.friction = 0.3;
            this.collider.restitution = 0;
            // 調整碰撞箱大小
            var size = this.node.getContentSize();
            this.collider.size = cc.size(size.width * 0.8, size.height * 0.8);
            this.collider.offset = cc.v2(0, -size.height * 0.1);
        }
        // 註冊鍵盤事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // 預設播放待機動畫
        if (this.anim) {
            this.anim.play("idle");
        }
    };
    PlayerController.prototype.playAnimation = function (animName) {
        if (this.anim && this.currentAnimation !== animName) {
            var state = this.anim.getAnimationState(animName);
            if (state) {
                state.wrapMode = cc.WrapMode.Loop;
                state.speed = 1.0;
                this.anim.play(animName);
                this.currentAnimation = animName;
            }
        }
    };
    PlayerController.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                this.moveDirection = -1;
                this.horizontalVelocity = -this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX > 0) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                this.moveDirection = 1;
                this.horizontalVelocity = this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX < 0) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.up:
            case cc.macro.KEY.space:
                if (this.onGround) {
                    this.jump();
                }
                break;
        }
    };
    PlayerController.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                if (this.moveDirection < 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                    }
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                if (this.moveDirection > 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                    }
                }
                break;
        }
    };
    PlayerController.prototype.jump = function () {
        if (this.onGround) {
            this.onGround = false;
            this.isJumping = true;
            this.isFalling = false;
            this.verticalVelocity = this.jumpForce;
            this.playAnimation("jump");
        }
    };
    PlayerController.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            var normal = contact.getWorldManifold().normal;
            if (normal.y < 0) {
                this.onGround = true;
                this.isJumping = false;
                this.isFalling = false;
                this.verticalVelocity = 0;
                if (this.moveDirection !== 0) {
                    this.playAnimation("move");
                }
                else {
                    this.playAnimation("idle");
                }
            }
        }
    };
    PlayerController.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            var normal = contact.getWorldManifold().normal;
            if (normal.y < 0) {
                this.onGround = false;
                if (this.verticalVelocity < 0) {
                    this.isFalling = true;
                    this.playAnimation("fall");
                }
            }
        }
    };
    PlayerController.prototype.update = function (dt) {
        // 檢查是否在地面上
        if (!this.onGround) {
            var startPos = cc.v2(this.node.position.x, this.node.position.y);
            var rayStart = cc.v2(startPos.x, startPos.y);
            var rayEnd = cc.v2(startPos.x, startPos.y - this.groundCheckDistance);
            var results = cc.director.getPhysicsManager().rayCast(rayStart, rayEnd, cc.RayCastType.All);
            if (results.length > 0) {
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    if (result.collider.node.name === 'Ground') {
                        // 確保只有在地面Y座標附近才判定為著地
                        if (Math.abs(result.point.y - this.groundY) < 10) {
                            this.onGround = true;
                            this.isFalling = false;
                            this.isJumping = false;
                            this.verticalVelocity = 0;
                            this.node.y = this.groundY; // 確保角色位置正確
                            break;
                        }
                    }
                }
            }
        }
        // 應用重力
        if (!this.onGround) {
            this.verticalVelocity -= this.gravity * dt;
            if (this.verticalVelocity < -this.maxFallSpeed) {
                this.verticalVelocity = -this.maxFallSpeed;
            }
            // 檢測跳躍到最高點
            if (this.lastVerticalVelocity > 0 && this.verticalVelocity <= 0) {
                this.isJumping = false;
                this.isFalling = true;
                this.playAnimation("fall");
            }
            // 更新下落狀態
            if (this.verticalVelocity < 0 && !this.isFalling) {
                this.isFalling = true;
                this.isJumping = false;
                this.playAnimation("fall");
            }
        }
        // 更新位置
        var newX = this.node.x + this.horizontalVelocity * dt;
        var newY = this.node.y + this.verticalVelocity * dt;
        // 防止角色掉出地面
        if (newY < this.groundY) {
            newY = this.groundY;
            this.onGround = true;
            this.isFalling = false;
            this.isJumping = false;
            this.verticalVelocity = 0;
        }
        this.node.setPosition(newX, newY);
        // 更新動畫
        if (this.anim) {
            if (this.isJumping) {
                this.playAnimation("jump");
            }
            else if (this.isFalling) {
                this.playAnimation("fall");
            }
            else if (this.moveDirection !== 0) {
                this.playAnimation("move");
            }
            else {
                this.playAnimation("idle");
            }
        }
        // 保存當前垂直速度用於下一幀比較
        this.lastVerticalVelocity = this.verticalVelocity;
    };
    PlayerController.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    __decorate([
        property
    ], PlayerController.prototype, "moveSpeed", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "jumpForce", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "gravity", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "maxFallSpeed", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "groundY", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();