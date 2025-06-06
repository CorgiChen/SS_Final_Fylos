const { ccclass, property } = cc._decorator;
import AudioManager from './AudioManager';

@ccclass
export default class Door_to_002 extends cc.Component {
    @property(cc.Node)
    player: cc.Node = null;
    @property(cc.Node)
    door: cc.Node = null;
    @property(cc.SpriteFrame)
    doorSpriteFrame: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    promptSpriteFrame: cc.SpriteFrame = null;
    @property
    destinationScene: string = "";
    @property(cc.AudioClip)
    transportSound: cc.AudioClip = null;

    private readonly DETECTION_RADIUS: number = 70;
    private readonly DOOR_OFFSET: number = 120;
    private lastDoorState: boolean = false;
    private promptImage: cc.Node = null;

    onLoad() {
        if (!this.player || !this.door || !this.doorSpriteFrame || !this.promptSpriteFrame) {
            cc.error("Please assign all required components!");
            return;
        }

        // 關閉碰撞區域的顯示
        const physicsManager = cc.director.getPhysicsManager();
        if (physicsManager) {
            physicsManager.debugDrawFlags = 0;
        }

        this.setupDoor();
        this.createPromptImage();
    }

    private setupDoor() {
        // 添加 Sprite 組件
        const sprite = this.door.addComponent(cc.Sprite);
        sprite.spriteFrame = this.doorSpriteFrame;
    }

    private createPromptImage() {
        // 創建提示圖片節點
        this.promptImage = new cc.Node('Prompt_Image');
        
        // 添加 Sprite 組件
        const sprite = this.promptImage.addComponent(cc.Sprite);
        sprite.spriteFrame = this.promptSpriteFrame;
        
        // 添加按鈕組件
        const button = this.promptImage.addComponent(cc.Button);
        
        // 設置父節點為門
        this.promptImage.parent = this.door;
        
        // 設置位置在門的正上方
        this.promptImage.setPosition(cc.v2(0, this.DOOR_OFFSET + 60));
        
        // 確保圖片在最上層
        this.promptImage.zIndex = 1000;
        
        // 初始時隱藏圖片
        this.promptImage.active = false;

        // 添加點擊事件
        this.promptImage.on(cc.Node.EventType.TOUCH_END, this.onPromptClicked, this);
    }

    private onPromptClicked() {
        // 播放 Open.mp3 音效，音量設為 2
        if (this.transportSound) {
            cc.audioEngine.setVolume(cc.audioEngine.playEffect(this.transportSound, false), cc.audioEngine.getVolume(AudioManager.audioId));
        }
        // 切換到場景 Scene002_Home_1F
        const transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene(this.destinationScene);
        } else {
            cc.director.loadScene(this.destinationScene);
        }
    }

    update() {
        if (!this.player || !this.door || !this.promptImage) return;

        // 將 Vec3 轉換為 Vec2
        const playerPos = new cc.Vec2(this.player.position.x, this.player.position.y);
        const doorPos = new cc.Vec2(this.door.position.x, this.door.position.y);

        // 計算玩家和門的距離
        const distance = this.getDistance(playerPos, doorPos);
        const shouldShow = distance <= this.DETECTION_RADIUS;

        // 根據距離顯示或隱藏提示圖片
        if (this.promptImage.active !== shouldShow) {
            this.promptImage.active = shouldShow;
            if (shouldShow) {
                // 確保提示圖片在最上層
                this.promptImage.zIndex = 1000;
            }
        }
    }

    private getDistance(pos1: cc.Vec2, pos2: cc.Vec2): number {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    onDestroy() {
        if (this.promptImage) {
            this.promptImage.off(cc.Node.EventType.TOUCH_END, this.onPromptClicked, this);
            this.promptImage.destroy();
        }
    }
} 