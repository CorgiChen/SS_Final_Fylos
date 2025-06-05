
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
        _this.jumpForce = 800;
        _this.gravity = 1200;
        _this.maxFallSpeed = 800;
        _this.groundY = -300;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUE0UUM7UUEzUUcsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsa0JBQVksR0FBVyxHQUFHLENBQUM7UUFDM0IsYUFBTyxHQUFXLENBQUMsR0FBRyxDQUFDO1FBRWhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBQzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3Qix3QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUEwQixJQUFJLENBQUM7UUFDdkMsc0JBQWdCLEdBQVcsTUFBTSxDQUFDO1FBQ2xDLHlCQUFtQixHQUFXLEVBQUUsQ0FBQztRQUNqQywwQkFBb0IsR0FBVyxDQUFDLENBQUMsQ0FBRSxhQUFhOztJQTBQNUQsQ0FBQztJQXhQRyxpQ0FBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBQ3pELEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUUxQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELFVBQVU7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV6RCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLFVBQVU7WUFDVixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxTQUFTO1FBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdkUsV0FBVztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVPLHdDQUFhLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssUUFBUSxFQUFFO1lBQ2pELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDbEMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO2FBQ3BDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ25DLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlCO2dCQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzFCO2dCQUNELE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2Y7Z0JBQ0QsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxLQUE2QjtRQUNqQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzlCO2lCQUNKO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsT0FBMEIsRUFBRSxZQUFnQyxFQUFFLGFBQWlDO1FBQzFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUVqRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Z0JBRTFCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsT0FBMEIsRUFBRSxZQUFnQyxFQUFFLGFBQWlDO1FBQ3hHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUVqRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM5QjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixXQUFXO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUV4RSxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RixJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixLQUFxQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtvQkFBekIsSUFBTSxNQUFNLGdCQUFBO29CQUNiLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTt3QkFDeEMscUJBQXFCO3dCQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTs0QkFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFFLFdBQVc7NEJBQ3hDLE1BQU07eUJBQ1Q7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO1FBRUQsT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDOUM7WUFFRCxXQUFXO1lBQ1gsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtZQUVELFNBQVM7WUFDVCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELE9BQU87UUFDUCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3RELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFcEQsV0FBVztRQUNYLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELGtCQUFrQjtRQUNsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3RELENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQTNRZ0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E0UXBDO0lBQUQsdUJBQUM7Q0E1UUQsQUE0UUMsQ0E1UTZDLEVBQUUsQ0FBQyxTQUFTLEdBNFF6RDtrQkE1UW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAzMDA7XG4gICAganVtcEZvcmNlOiBudW1iZXIgPSA4MDA7XG4gICAgZ3Jhdml0eTogbnVtYmVyID0gMTIwMDtcbiAgICBtYXhGYWxsU3BlZWQ6IG51bWJlciA9IDgwMDtcbiAgICBncm91bmRZOiBudW1iZXIgPSAtMzAwO1xuXG4gICAgcHVibGljIG1vdmVEaXJlY3Rpb246IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBvbkdyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNKdW1waW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0ZhbGxpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbFZlbG9jaXR5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgaG9yaXpvbnRhbFZlbG9jaXR5OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmlnaWRib2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xuICAgIHByaXZhdGUgY29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50QW5pbWF0aW9uOiBzdHJpbmcgPSBcImlkbGVcIjtcbiAgICBwcml2YXRlIGdyb3VuZENoZWNrRGlzdGFuY2U6IG51bWJlciA9IDEwO1xuICAgIHByaXZhdGUgbGFzdFZlcnRpY2FsVmVsb2NpdHk6IG51bWJlciA9IDA7ICAvLyDnlKjmlrzmqqLmuKzpgJ/luqbmlrnlkJHororljJZcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW54mp55CG57O757WxXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmdyYXZpdHkgPSBjYy52MigwLCAtMTIwMCk7XG4gICAgICAgIG1hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgICAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcblxuICAgICAgICAvLyDnjbLlj5bntYTku7ZcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMuYW5pbSkge1xuICAgICAgICAgICAgY29uc3QgY2xpcHMgPSB0aGlzLmFuaW0uZ2V0Q2xpcHMoKTtcbiAgICAgICAgICAgIGNsaXBzLmZvckVhY2goY2xpcCA9PiB7XG4gICAgICAgICAgICAgICAgY2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIneWni+WMlueJqeeQhue1hOS7tlxuICAgICAgICB0aGlzLnJpZ2lkYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xuXG4gICAgICAgIGlmICh0aGlzLnJpZ2lkYm9keSkge1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5ncmF2aXR5U2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkubGluZWFyRGFtcGluZyA9IDA7XG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmZyaWN0aW9uID0gMC4zO1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5yZXN0aXR1dGlvbiA9IDA7XG5cbiAgICAgICAgICAgIC8vIOiqv+aVtOeisOaSnueuseWkp+Wwj1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5zaXplID0gY2Muc2l6ZShzaXplLndpZHRoICogMC44LCBzaXplLmhlaWdodCAqIDAuOCk7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDAsIC1zaXplLmhlaWdodCAqIDAuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDoqLvlhorpjbXnm6Tkuovku7ZcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG5cbiAgICAgICAgLy8g6aCQ6Kit5pKt5pS+5b6F5qmf5YuV55WrXG4gICAgICAgIGlmICh0aGlzLmFuaW0pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUFuaW1hdGlvbihhbmltTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW0gJiYgdGhpcy5jdXJyZW50QW5pbWF0aW9uICE9PSBhbmltTmFtZSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbU5hbWUpO1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMS4wO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KGFuaW1OYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBhbmltTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gLXRoaXMubW92ZVNwZWVkO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZVggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsVmVsb2NpdHkgPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Hcm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVEaXJlY3Rpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSnVtcGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlRGlyZWN0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxWZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAodGhpcy5vbkdyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxWZWxvY2l0eSA9IHRoaXMuanVtcEZvcmNlO1xuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwianVtcFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vcm1hbC55IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZURpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5vcm1hbC55IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbFZlbG9jaXR5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgLy8g5qqi5p+l5piv5ZCm5Zyo5Zyw6Z2i5LiKXG4gICAgICAgIGlmICghdGhpcy5vbkdyb3VuZCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBjYy52Mih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgY29uc3QgcmF5U3RhcnQgPSBjYy52MihzdGFydFBvcy54LCBzdGFydFBvcy55KTtcbiAgICAgICAgICAgIGNvbnN0IHJheUVuZCA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgLSB0aGlzLmdyb3VuZENoZWNrRGlzdGFuY2UpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5yYXlDYXN0KHJheVN0YXJ0LCByYXlFbmQsIGNjLlJheUNhc3RUeXBlLkFsbCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeiuuS/neWPquacieWcqOWcsOmdolnluqfmqJnpmYTov5HmiY3liKTlrprngrrokZflnLBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhyZXN1bHQucG9pbnQueSAtIHRoaXMuZ3JvdW5kWSkgPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ncm91bmRZOyAgLy8g56K65L+d6KeS6Imy5L2N572u5q2j56K6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmh4nnlKjph43liptcbiAgICAgICAgaWYgKCF0aGlzLm9uR3JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgLT0gdGhpcy5ncmF2aXR5ICogZHQ7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbFZlbG9jaXR5IDwgLXRoaXMubWF4RmFsbFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gLXRoaXMubWF4RmFsbFNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmqqLmuKzot7Pouo3liLDmnIDpq5jpu55cbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RWZXJ0aWNhbFZlbG9jaXR5ID4gMCAmJiB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOabtOaWsOS4i+iQveeLgOaFi1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWxWZWxvY2l0eSA8IDAgJiYgIXRoaXMuaXNGYWxsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZmFsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOS9jee9rlxuICAgICAgICBsZXQgbmV3WCA9IHRoaXMubm9kZS54ICsgdGhpcy5ob3Jpem9udGFsVmVsb2NpdHkgKiBkdDtcbiAgICAgICAgbGV0IG5ld1kgPSB0aGlzLm5vZGUueSArIHRoaXMudmVydGljYWxWZWxvY2l0eSAqIGR0O1xuXG4gICAgICAgIC8vIOmYsuatouinkuiJsuaOieWHuuWcsOmdolxuICAgICAgICBpZiAobmV3WSA8IHRoaXMuZ3JvdW5kWSkge1xuICAgICAgICAgICAgbmV3WSA9IHRoaXMuZ3JvdW5kWTtcbiAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1gsIG5ld1kpO1xuXG4gICAgICAgIC8vIOabtOaWsOWLleeVq1xuICAgICAgICBpZiAodGhpcy5hbmltKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0p1bXBpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJqdW1wXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRmFsbGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZURpcmVjdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjnlbbliY3lnoLnm7TpgJ/luqbnlKjmlrzkuIvkuIDluYDmr5TovINcbiAgICAgICAgdGhpcy5sYXN0VmVydGljYWxWZWxvY2l0eSA9IHRoaXMudmVydGljYWxWZWxvY2l0eTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxufVxuIl19