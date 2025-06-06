// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property
    offsetX: number = 100; // 右邊偏移量

    @property
    offsetY: number = 20; // 垂直偏移量

    @property
    rotation: number = 15;

    @property({ type: [cc.Node] })
    crateNodes: cc.Node[] = [];

    @property(cc.Node)
    regionNode: cc.Node = null; // Region 節點
    @property(cc.Node)
    groundNode: cc.Node = null; // Ground 節點
    @property(cc.Node)
    iceImageNode: cc.Node = null; // 新增：冰塊圖片節點

    @property({ type: cc.Node })
    bridgeNode: cc.Node = null;

    @property({ type: cc.Node })
    switchNode: cc.Node = null;

    @property({ type: cc.AudioClip })
    becomeIceAudio: cc.AudioClip = null; // 新增：冰塊音效

    private animation_idx: number = 0;
    private lastMoveDir: number = 1;
    private isBlowing: boolean = false;
    private iceEffectTimeout: any = null;
    private iceCreated: boolean = false; // 新增：冰塊是否已經生成
    private iceRemoveTimeout: any = null;
    private isRising: boolean = true;  // 控制橋的升降狀態

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        const collider = this.getComponent(cc.PhysicsBoxCollider);
        if (collider) collider.sensor = true;
        // 遊戲開始時禁用 Ground 的碰撞器
        if (this.groundNode) {
            const rigidBody = this.groundNode.getComponent(cc.RigidBody);
            if (rigidBody) rigidBody.enabled = false;
            const boxCollider = this.groundNode.getComponent(cc.PhysicsBoxCollider);
            if (boxCollider) boxCollider.enabled = false;
        }
        // 新增：遊戲開始時隱藏冰塊圖片
        if (this.iceImageNode) {
            this.iceImageNode.active = false;
        }
    }

    update(dt: number) {
        if (this.playerNode) {
            const playerScript = this.playerNode.getComponent('Player');
            let moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整風的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
                this.animation_idx = 1;
                this.node.rotation = -this.rotation; // 左邊風向
            } else {
                this.node.x = this.playerNode.x + this.offsetX;
                this.animation_idx = 0;
                this.node.rotation = this.rotation; // 右邊風向
            }
            this.node.y = this.playerNode.y + this.offsetY;

            // 方向改變時，若風顯示中則立即切換動畫
            if (this.node.active && moveDir !== this.lastMoveDir) {
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const clip = anim.getClips()[this.animation_idx];
                    anim.play(clip.name);
                }
            }
            this.lastMoveDir = moveDir;
        }
        // 持續推動箱子
        if (this.isBlowing && this.playerNode) {
            const parent = this.node.parent || cc.director.getScene();
            let crateNodeList: cc.Node[] = [];
            if (this.crateNodes && Array.isArray(this.crateNodes) && this.crateNodes.length > 0) {
                crateNodeList = this.crateNodes;
            } else {
                // 沒有指定則自動尋找場景所有 Crate
                crateNodeList = parent.children.filter(child => child.getComponent && child.getComponent('Crate'));
            }
            crateNodeList.forEach(child => {
                const crate = child.getComponent && child.getComponent('Crate');
                if (crate) {
                    const dx = child.x - this.playerNode.x;
                    const dy = child.y - this.playerNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (dx > 0 && distance < 300 && this.playerNode.scaleX > 0) {
                        crate.applyWindForce(1);
                    } else if (dx < 0 && distance < 300 && this.playerNode.scaleX < 0) {
                        crate.applyWindForce(-1);
                    }
                }
            });
        }
        // 持續推動橋
        if (this.isBlowing && this.bridgeNode && this.playerNode && this.playerNode.scaleX > 0) {
            const dx = this.bridgeNode.x - this.playerNode.x;
            const dy = this.bridgeNode.y - this.playerNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            cc.log("Bridge distance:", distance);
            if (distance < 300) {
                if(this.isRising) {
                    if(this.bridgeNode.y < 1200) {
                        this.bridgeNode.y += 50 * dt; // 每秒上升100單位
                    }
                    else {
                        this.isRising = false;
                    }
                } else {
                    if(this.bridgeNode.y > 100) {
                        this.bridgeNode.y -= 50 * dt; // 每秒下降100單位
                    }
                    else {
                        this.isRising = true;
                    }
                }
            }
        }
        if (this.switchNode && this.playerNode.scaleX > 0) {
            const switchScript = this.switchNode.getComponent('Switch');
            if (switchScript) {
                switchScript.setState(0);
                if (this.isBlowing && this.bridgeNode && this.playerNode) {
                    const dx = this.bridgeNode.x - this.playerNode.x;
                    const dy = this.bridgeNode.y - this.playerNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
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
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.f) {
            // 風動畫和吹箱子功能（這裡不判斷 iceCreated）
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[this.animation_idx];
                    anim.play(firstClip.name);
                }
            } else {
                // 若已經顯示，確保動畫持續撥放
                const anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    const firstClip = anim.getClips()[this.animation_idx];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
            this.isBlowing = true;

            // 只有冰塊生成這段要判斷 iceCreated
            if (
                !this.iceCreated &&
                this.regionNode && this.groundNode && this.playerNode && this.iceImageNode
            ) {
                // 以世界座標計算距離
                const regionPos = this.regionNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const playerPos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
                const dx = regionPos.x - playerPos.x;
                const dy = regionPos.y - playerPos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if ((distance < 500 && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < 500 && dx < 0 && this.playerNode.scaleX < 0)) {
                    // 同時顯示冰塊圖片與啟用 Ground
                    this.iceImageNode.active = true;
                    // 生成時播放音效
                    if (this.becomeIceAudio) {
                        cc.audioEngine.playEffect(this.becomeIceAudio, false);
                    }
                    let sprite = this.iceImageNode.getComponent(cc.Sprite);
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
                    const rigidBody = this.groundNode.getComponent(cc.RigidBody);
                    if (rigidBody) rigidBody.enabled = true;
                    const boxCollider = this.groundNode.getComponent(cc.PhysicsBoxCollider);
                    if (boxCollider) boxCollider.enabled = true;
                    this.iceCreated = true;
                    // 清除前一次的timeout
                    if (this.iceRemoveTimeout) {
                        clearTimeout(this.iceRemoveTimeout);
                        this.iceRemoveTimeout = null;
                    }
                    // 5秒後同時淡出與關閉
                    this.iceRemoveTimeout = setTimeout(() => {
                        let sprite = this.iceImageNode.getComponent(cc.Sprite);
                        if (sprite) {
                            cc.tween(sprite.node)
                                .to(1.5, { opacity: 0 })
                                .call(() => {
                                    this.iceImageNode.active = false;
                                })
                                .start();
                        } else {
                            this.iceImageNode.active = false;
                        }
                        cc.tween(this.groundNode)
                            .to(1.5, { opacity: 0 })
                            .call(() => {
                                this.groundNode.active = false;
                                this.groundNode.opacity = 255;
                            })
                            .start();
                        // 消失時也播放音效
                        if (this.becomeIceAudio) {
                            cc.audioEngine.playEffect(this.becomeIceAudio, false);
                        }
                        this.iceCreated = false;
                    }, 5000);
                }
            }
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        if (event.keyCode === cc.macro.KEY.f) {
            this.node.active = false;
            this.isBlowing = false;
        }
        if (event.keyCode === cc.macro.KEY.space) {
            this.node.active = false;
            this.isBlowing = false;
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    // update (dt) {}
}
