
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.jumpForce = 700;
        _this.gravity = 1500;
        _this.maxFallSpeed = 1000;
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
        _this.groundCheckDistance = 20;
        _this.lastGroundContact = null;
        _this.lastY = 0;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        // 初始化物理系統
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, -1500);
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
        this.lastY = this.node.y;
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
        this.onGround = false;
        this.isJumping = true;
        this.isFalling = false;
        this.verticalVelocity = this.jumpForce;
        this.playAnimation("jump");
    };
    PlayerController.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            var normal = contact.getWorldManifold().normal;
            var point = contact.getWorldManifold().points[0];
            // 只要有向下的分量就視為可以站在地面上
            if (normal.y < 0) {
                this.onGround = true;
                this.isJumping = false;
                this.isFalling = false;
                this.verticalVelocity = 0;
                this.lastGroundContact = point;
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
            var point = contact.getWorldManifold().points[0];
            // 檢查是否離開地面
            if (normal.y < 0) {
                // 檢查是否真的離開了地面（而不是滑到邊緣）
                if (this.lastGroundContact &&
                    Math.abs(point.x - this.lastGroundContact.x) > this.collider.size.width * 0.5) {
                    this.onGround = false;
                    if (this.verticalVelocity < 0) {
                        this.isFalling = true;
                        this.playAnimation("fall");
                    }
                }
            }
        }
    };
    PlayerController.prototype.update = function (dt) {
        // 檢查是否在地面上
        if (!this.onGround) {
            // 使用多個射線檢測地面
            var startPos = cc.v2(this.node.position.x, this.node.position.y);
            var rayCount = 3; // 使用3條射線
            var raySpacing = this.collider.size.width / (rayCount - 1);
            for (var i = 0; i < rayCount; i++) {
                var rayX = startPos.x - this.collider.size.width / 2 + i * raySpacing;
                var rayStart = cc.v2(rayX, startPos.y);
                var rayEnd = cc.v2(rayX, startPos.y - this.groundCheckDistance);
                var results = cc.director.getPhysicsManager().rayCast(rayStart, rayEnd, cc.RayCastType.All);
                if (results.length > 0) {
                    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                        var result = results_1[_i];
                        if (result.collider.node.name === 'Ground') {
                            if (result.point.y < this.node.position.y) {
                                this.onGround = true;
                                this.isFalling = false;
                                this.verticalVelocity = 0;
                                this.lastGroundContact = result.point;
                                break;
                            }
                        }
                    }
                }
                if (this.onGround)
                    break;
            }
        }
        // 防止穿過地板
        if (this.node.y < this.lastY && this.onGround) {
            this.node.y = this.lastY;
            this.verticalVelocity = 0;
        }
        if (!this.onGround) {
            this.verticalVelocity -= this.gravity * dt;
            if (this.verticalVelocity < -this.maxFallSpeed) {
                this.verticalVelocity = -this.maxFallSpeed;
            }
            if (this.verticalVelocity < 0 && !this.isFalling) {
                this.isFalling = true;
                this.isJumping = false;
                this.playAnimation("fall");
            }
        }
        // 更新位置
        var newX = this.node.x + this.horizontalVelocity * dt;
        var newY = this.node.y + this.verticalVelocity * dt;
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
        this.lastY = this.node.y;
    };
    PlayerController.prototype.onDestroy = function () {
        // 移除鍵盤事件監聽
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
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFxUkM7UUFuUkcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUd4QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBR3hCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFcEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFDMUIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLHdCQUFrQixHQUFXLENBQUMsQ0FBQztRQUMvQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixjQUFRLEdBQTBCLElBQUksQ0FBQztRQUN2QyxzQkFBZ0IsR0FBVyxNQUFNLENBQUM7UUFDbEMseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQTRQOUIsQ0FBQztJQTFQRyxpQ0FBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBQ3RDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUU3RCxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELFVBQVU7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV6RCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLFVBQVU7WUFDVixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxTQUFTO1FBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdkUsV0FBVztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sd0NBQWEsR0FBckIsVUFBc0IsUUFBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7WUFDakQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7YUFDcEM7U0FDSjtJQUNMLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBNkI7UUFDbkMsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2xCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDOUI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlCO2dCQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDZjtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLEtBQTZCO1FBQ2pDLFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNsQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM5QjtpQkFDSjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsT0FBMEIsRUFBRSxZQUFnQyxFQUFFLGFBQWlDO1FBQzFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqRCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkQscUJBQXFCO1lBQ3JCLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztnQkFFL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxPQUEwQixFQUFFLFlBQWdDLEVBQUUsYUFBaUM7UUFDeEcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDdEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRCxXQUFXO1lBQ1gsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCx1QkFBdUI7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLGlCQUFpQjtvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO29CQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO3dCQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsV0FBVztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLGFBQWE7WUFDYixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzdCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUU3RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDdEUsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUVsRSxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUYsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDcEIsS0FBcUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7d0JBQXpCLElBQU0sTUFBTSxnQkFBQTt3QkFDYixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7NEJBQ3hDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO2dDQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQ0FDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0NBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Z0NBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2dDQUN0QyxNQUFNOzZCQUNUO3lCQUNKO3FCQUNKO2lCQUNKO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVE7b0JBQUUsTUFBTTthQUM1QjtTQUNKO1FBRUQsU0FBUztRQUNULElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDOUM7WUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELE9BQU87UUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3RELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWxDLE9BQU87UUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtTQUNKO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLFdBQVc7UUFDWCxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBbFJEO1FBREMsUUFBUTt1REFDZTtJQUd4QjtRQURDLFFBQVE7dURBQ2U7SUFHeEI7UUFEQyxRQUFRO3FEQUNjO0lBR3ZCO1FBREMsUUFBUTswREFDbUI7SUFYWCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXFScEM7SUFBRCx1QkFBQztDQXJSRCxBQXFSQyxDQXJSNkMsRUFBRSxDQUFDLFNBQVMsR0FxUnpEO2tCQXJSb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBqdW1wRm9yY2U6IG51bWJlciA9IDcwMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGdyYXZpdHk6IG51bWJlciA9IDE1MDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhGYWxsU3BlZWQ6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRGlyZWN0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBvbkdyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0p1bXBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNGYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHZlcnRpY2FsVmVsb2NpdHk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGhvcml6b250YWxWZWxvY2l0eTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb2xsaWRlcjogY2MuUGh5c2ljc0JveENvbGxpZGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEFuaW1hdGlvbjogc3RyaW5nID0gXCJpZGxlXCI7XHJcbiAgICBwcml2YXRlIGdyb3VuZENoZWNrRGlzdGFuY2U6IG51bWJlciA9IDIwO1xyXG4gICAgcHJpdmF0ZSBsYXN0R3JvdW5kQ29udGFjdDogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGxhc3RZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbniannkIbns7vntbFcclxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG1hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyKDAsIC0xNTAwKTtcclxuICAgICAgICBtYW5hZ2VyLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xyXG5cclxuICAgICAgICAvLyDnjbLlj5bntYTku7ZcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xpcHMgPSB0aGlzLmFuaW0uZ2V0Q2xpcHMoKTtcclxuICAgICAgICAgICAgY2xpcHMuZm9yRWFjaChjbGlwID0+IHtcclxuICAgICAgICAgICAgICAgIGNsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlueJqeeQhue1hOS7tlxyXG4gICAgICAgIHRoaXMucmlnaWRib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmlnaWRib2R5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5lbmFibGVkQ29udGFjdExpc3RlbmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkubGluZWFyRGFtcGluZyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuZnJpY3Rpb24gPSAwLjM7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIucmVzdGl0dXRpb24gPSAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8g6Kq/5pW056Kw5pKe566x5aSn5bCPXHJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5zaXplID0gY2Muc2l6ZShzaXplLndpZHRoICogMC44LCBzaXplLmhlaWdodCAqIDAuOCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoMCwgLXNpemUuaGVpZ2h0ICogMC4xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiou+WGiumNteebpOS6i+S7tlxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOmgkOioreaSreaUvuW+heapn+WLleeVq1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJpZGxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0WSA9IHRoaXMubm9kZS55O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheUFuaW1hdGlvbihhbmltTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbSAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb24gIT09IGFuaW1OYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zcGVlZCA9IDEuMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGFuaW1OYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGFuaW1OYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gLXRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSnVtcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Hcm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXJlY3Rpb24gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSnVtcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSnVtcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqdW1wKCkge1xyXG4gICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzSnVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSB0aGlzLmp1bXBGb3JjZTtcclxuICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJqdW1wXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09PSAnR3JvdW5kJykge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWwgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkucG9pbnRzWzBdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8g5Y+q6KaB5pyJ5ZCR5LiL55qE5YiG6YeP5bCx6KaW54K65Y+v5Lul56uZ5Zyo5Zyw6Z2i5LiKXHJcbiAgICAgICAgICAgIGlmIChub3JtYWwueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0R3JvdW5kQ29udGFjdCA9IHBvaW50O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlRGlyZWN0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyLCBvdGhlckNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT09ICdHcm91bmQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5wb2ludHNbMF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDmqqLmn6XmmK/lkKbpm6LplovlnLDpnaJcclxuICAgICAgICAgICAgaWYgKG5vcm1hbC55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5qqi5p+l5piv5ZCm55yf55qE6Zui6ZaL5LqG5Zyw6Z2i77yI6ICM5LiN5piv5ruR5Yiw6YKK57ej77yJXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0R3JvdW5kQ29udGFjdCAmJiBcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhwb2ludC54IC0gdGhpcy5sYXN0R3JvdW5kQ29udGFjdC54KSA+IHRoaXMuY29sbGlkZXIuc2l6ZS53aWR0aCAqIDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbFZlbG9jaXR5IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8g5qqi5p+l5piv5ZCm5Zyo5Zyw6Z2i5LiKXHJcbiAgICAgICAgaWYgKCF0aGlzLm9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIC8vIOS9v+eUqOWkmuWAi+WwhOe3muaqoua4rOWcsOmdolxyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJheUNvdW50ID0gMzsgLy8g5L2/55SoM+aineWwhOe3mlxyXG4gICAgICAgICAgICBjb25zdCByYXlTcGFjaW5nID0gdGhpcy5jb2xsaWRlci5zaXplLndpZHRoIC8gKHJheUNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJheUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJheVggPSBzdGFydFBvcy54IC0gdGhpcy5jb2xsaWRlci5zaXplLndpZHRoLzIgKyBpICogcmF5U3BhY2luZztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJheVN0YXJ0ID0gY2MudjIocmF5WCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXlFbmQgPSBjYy52MihyYXlYLCBzdGFydFBvcy55IC0gdGhpcy5ncm91bmRDaGVja0Rpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkucmF5Q2FzdChyYXlTdGFydCwgcmF5RW5kLCBjYy5SYXlDYXN0VHlwZS5BbGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLm5hbWUgPT09ICdHcm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnBvaW50LnkgPCB0aGlzLm5vZGUucG9zaXRpb24ueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RHcm91bmRDb250YWN0ID0gcmVzdWx0LnBvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Hcm91bmQpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDpmLLmraLnqb/pgY7lnLDmnb9cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCB0aGlzLmxhc3RZICYmIHRoaXMub25Hcm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLmxhc3RZO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxWZWxvY2l0eSAtPSB0aGlzLmdyYXZpdHkgKiBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWxWZWxvY2l0eSA8IC10aGlzLm1heEZhbGxTcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gLXRoaXMubWF4RmFsbFNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbFZlbG9jaXR5IDwgMCAmJiAhdGhpcy5pc0ZhbGxpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJmYWxsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmm7TmlrDkvY3nva5cclxuICAgICAgICBsZXQgbmV3WCA9IHRoaXMubm9kZS54ICsgdGhpcy5ob3Jpem9udGFsVmVsb2NpdHkgKiBkdDtcclxuICAgICAgICBjb25zdCBuZXdZID0gdGhpcy5ub2RlLnkgKyB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3WCwgbmV3WSk7XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOWLleeVq1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNKdW1waW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJqdW1wXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNGYWxsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJmYWxsXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZURpcmVjdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFkgPSB0aGlzLm5vZGUueTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g56e76Zmk6Y2155uk5LqL5Lu255uj6IG9XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==