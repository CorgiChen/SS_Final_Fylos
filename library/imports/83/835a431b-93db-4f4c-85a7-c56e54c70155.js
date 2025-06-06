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
        _this.offsetX = 100; // 右邊偏移量
        _this.offsetY = 20; // 垂直偏移量
        _this.rotation = 15;
        _this.crateNodes = [];
        _this.regionNode = null; // Region 節點
        _this.groundNode = null; // Ground 節點
        _this.iceImageNode = null; // 新增：冰塊圖片節點
        _this.bridgeNode = null;
        _this.switchNode = null;
        _this.becomeIceAudio = null; // 新增：冰塊音效
        _this.animation_idx = 0;
        _this.lastMoveDir = 1;
        _this.isBlowing = false;
        _this.iceEffectTimeout = null;
        _this.iceCreated = false; // 新增：冰塊是否已經生成
        _this.iceRemoveTimeout = null;
        _this.isRising = true; // 控制橋的升降狀態
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
        var collider = this.getComponent(cc.PhysicsBoxCollider);
        if (collider)
            collider.sensor = true;
        // 遊戲開始時禁用 Ground 的碰撞器
        if (this.groundNode) {
            var rigidBody = this.groundNode.getComponent(cc.RigidBody);
            if (rigidBody)
                rigidBody.enabled = false;
            var boxCollider = this.groundNode.getComponent(cc.PhysicsBoxCollider);
            if (boxCollider)
                boxCollider.enabled = false;
        }
        // 新增：遊戲開始時隱藏冰塊圖片
        if (this.iceImageNode) {
            this.iceImageNode.active = false;
        }
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        if (this.playerNode) {
            var playerScript = this.playerNode.getComponent('Player');
            var moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整風的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
                this.animation_idx = 1;
                this.node.rotation = -this.rotation; // 左邊風向
            }
            else {
                this.node.x = this.playerNode.x + this.offsetX;
                this.animation_idx = 0;
                this.node.rotation = this.rotation; // 右邊風向
            }
            this.node.y = this.playerNode.y + this.offsetY;
            // 方向改變時，若風顯示中則立即切換動畫
            if (this.node.active && moveDir !== this.lastMoveDir) {
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var clip = anim.getClips()[this.animation_idx];
                    anim.play(clip.name);
                }
            }
            this.lastMoveDir = moveDir;
        }
        // 持續推動箱子
        if (this.isBlowing && this.playerNode) {
            var parent = this.node.parent || cc.director.getScene();
            var crateNodeList = [];
            if (this.crateNodes && Array.isArray(this.crateNodes) && this.crateNodes.length > 0) {
                crateNodeList = this.crateNodes;
            }
            else {
                // 沒有指定則自動尋找場景所有 Crate
                crateNodeList = parent.children.filter(function (child) { return child.getComponent && child.getComponent('Crate'); });
            }
            crateNodeList.forEach(function (child) {
                var crate = child.getComponent && child.getComponent('Crate');
                if (crate) {
                    var dx = child.x - _this.playerNode.x;
                    var dy = child.y - _this.playerNode.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    if (dx > 0 && distance < 300 && _this.playerNode.scaleX > 0) {
                        crate.applyWindForce(1);
                    }
                    else if (dx < 0 && distance < 300 && _this.playerNode.scaleX < 0) {
                        crate.applyWindForce(-1);
                    }
                }
            });
        }
        // 持續推動橋
        if (this.isBlowing && this.bridgeNode && this.playerNode && this.playerNode.scaleX > 0) {
            var dx = this.bridgeNode.x - this.playerNode.x;
            var dy = this.bridgeNode.y - this.playerNode.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            cc.log("Bridge distance:", distance);
            if (distance < 300) {
                if (this.isRising) {
                    if (this.bridgeNode.y < 1200) {
                        this.bridgeNode.y += 50 * dt; // 每秒上升100單位
                    }
                    else {
                        this.isRising = false;
                    }
                }
                else {
                    if (this.bridgeNode.y > 100) {
                        this.bridgeNode.y -= 50 * dt; // 每秒下降100單位
                    }
                    else {
                        this.isRising = true;
                    }
                }
            }
        }
        if (this.switchNode && this.playerNode.scaleX > 0) {
            var switchScript = this.switchNode.getComponent('Switch');
            if (switchScript) {
                switchScript.setState(0);
                if (this.isBlowing && this.bridgeNode && this.playerNode) {
                    var dx = this.bridgeNode.x - this.playerNode.x;
                    var dy = this.bridgeNode.y - this.playerNode.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    cc.log("Bridge distance:", distance);
                    if (distance < 300 && this.bridgeNode.y < 1200) {
                        switchScript.setState(1);
                    }
                    else {
                        switchScript.setState(0);
                    }
                }
            }
        }
    };
    NewClass.prototype.onKeyDown = function (event) {
        var _this = this;
        if (event.keyCode === cc.macro.KEY.f) {
            // 風動畫和吹箱子功能（這裡不判斷 iceCreated）
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[this.animation_idx];
                    anim.play(firstClip.name);
                }
            }
            else {
                // 若已經顯示，確保動畫持續撥放
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[this.animation_idx];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
            this.isBlowing = true;
            // 只有冰塊生成這段要判斷 iceCreated
            if (!this.iceCreated &&
                this.regionNode && this.groundNode && this.playerNode && this.iceImageNode) {
                // 以世界座標計算距離
                var regionPos = this.regionNode.convertToWorldSpaceAR(cc.v2(0, 0));
                var playerPos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
                var dx = regionPos.x - playerPos.x;
                var dy = regionPos.y - playerPos.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if ((distance < 500 && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < 500 && dx < 0 && this.playerNode.scaleX < 0)) {
                    // 同時顯示冰塊圖片與啟用 Ground
                    this.iceImageNode.active = true;
                    // 生成時播放音效
                    if (this.becomeIceAudio) {
                        cc.audioEngine.playEffect(this.becomeIceAudio, false);
                    }
                    var sprite = this.iceImageNode.getComponent(cc.Sprite);
                    if (sprite) {
                        sprite.node.opacity = 0;
                        cc.tween(sprite.node)
                            .to(1.5, { opacity: 255 })
                            .start();
                    }
                    this.groundNode.active = true;
                    this.groundNode.opacity = 0;
                    cc.tween(this.groundNode)
                        .to(1.5, { opacity: 255 })
                        .start();
                    var rigidBody = this.groundNode.getComponent(cc.RigidBody);
                    if (rigidBody)
                        rigidBody.enabled = true;
                    var boxCollider = this.groundNode.getComponent(cc.PhysicsBoxCollider);
                    if (boxCollider)
                        boxCollider.enabled = true;
                    this.iceCreated = true;
                    // 清除前一次的timeout
                    if (this.iceRemoveTimeout) {
                        clearTimeout(this.iceRemoveTimeout);
                        this.iceRemoveTimeout = null;
                    }
                    // 5秒後同時淡出與關閉
                    this.iceRemoveTimeout = setTimeout(function () {
                        var sprite = _this.iceImageNode.getComponent(cc.Sprite);
                        if (sprite) {
                            cc.tween(sprite.node)
                                .to(1.5, { opacity: 0 })
                                .call(function () {
                                _this.iceImageNode.active = false;
                            })
                                .start();
                        }
                        else {
                            _this.iceImageNode.active = false;
                        }
                        cc.tween(_this.groundNode)
                            .to(1.5, { opacity: 0 })
                            .call(function () {
                            _this.groundNode.active = false;
                            _this.groundNode.opacity = 255;
                        })
                            .start();
                        // 消失時也播放音效
                        if (_this.becomeIceAudio) {
                            cc.audioEngine.playEffect(_this.becomeIceAudio, false);
                        }
                        _this.iceCreated = false;
                    }, 5000);
                }
            }
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        if (event.keyCode === cc.macro.KEY.f) {
            this.node.active = false;
            this.isBlowing = false;
        }
        if (event.keyCode === cc.macro.KEY.space) {
            this.node.active = false;
            this.isBlowing = false;
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
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], NewClass.prototype, "crateNodes", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "regionNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "groundNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iceImageNode", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "bridgeNode", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "switchNode", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "becomeIceAudio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();