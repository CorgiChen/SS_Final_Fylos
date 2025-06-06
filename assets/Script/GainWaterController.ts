const { ccclass, property } = cc._decorator;
import AudioManager from './AudioManager';
import PlayerController from './Player';

@ccclass
export default class ChatBubbleController extends cc.Component {
    @property(cc.Node)
    player: cc.Node = null;

    @property(cc.Node)
    friend: cc.Node = null;

    @property(cc.SpriteFrame)
    bubbleSpriteFrame: cc.SpriteFrame = null;

    @property([cc.SpriteFrame])
    chatImageSpriteFrames: cc.SpriteFrame[] = [];

    @property
    followCamera: boolean = true;

    @property(cc.AudioClip)
    openSound: cc.AudioClip = null;

    private chatBubble: cc.Node = null;
    private chatImage: cc.Node = null;
    private currentImageIndex: number = 0;
    private readonly DETECTION_RADIUS: number = 200;
    private readonly BUBBLE_OFFSET: number = 120;
    private lastBubbleState: boolean = false;

    onLoad() {
        if (!this.player || !this.friend || !this.bubbleSpriteFrame || this.chatImageSpriteFrames.length === 0) {
            cc.error("Please assign all required components!");
            return;
        }

        // 關閉碰撞區域的顯示
        const physicsManager = cc.director.getPhysicsManager();
        if (physicsManager) {
            physicsManager.debugDrawFlags = 0;
        }
        this.createChatBubble();
        this.createChatImage();
    }

    private createChatBubble() {
        // 創建一個新的節點作為氣泡
        this.chatBubble = new cc.Node('Chat_Bubble');
        
        // 添加 Sprite 組件
        const sprite = this.chatBubble.addComponent(cc.Sprite);
        sprite.spriteFrame = this.bubbleSpriteFrame;
        
        // 添加按鈕組件
        const button = this.chatBubble.addComponent(cc.Button);
        
        // 設置父節點
        this.chatBubble.parent = this.friend;
        
        // 設置聊天氣泡的初始位置（在朋友頭頂上方）
        this.chatBubble.y = this.BUBBLE_OFFSET;

        // 確保氣泡在最上層
        this.chatBubble.zIndex = 999;
        
        // 初始時隱藏聊天氣泡
        this.chatBubble.active = false;

        // 添加點擊事件
        this.chatBubble.on(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
    }

    private createChatImage() {
        // 創建聊天圖片節點
        this.chatImage = new cc.Node('Chat_Image');

        // 添加 Sprite 組件
        const sprite = this.chatImage.addComponent(cc.Sprite);
        sprite.spriteFrame = this.chatImageSpriteFrames[0];
        
        // 設置父節點為 Canvas
        this.chatImage.parent = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
        
        // 初始時隱藏圖片
        this.chatImage.active = false;

        // 確保圖片在最上層
        this.chatImage.zIndex = 1000;

        // 添加點擊事件（點擊圖片時顯示下一張或隱藏）
        this.chatImage.on(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
    }

    private onBubbleClicked() {
        if (this.chatImage && !PlayerController.wind) {
            this.currentImageIndex = 0;
            const sprite = this.chatImage.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
            }
            this.chatImage.active = true;
        
            // 播放 Open.mp3 音效，音量設為 5
            if (this.openSound) {
                cc.audioEngine.setVolume(cc.audioEngine.playEffect(this.openSound, false), cc.audioEngine.getVolume(AudioManager.audioId));
            }
        }
    }

    private onImageClicked() {
        if (this.chatImage) {
            this.currentImageIndex++;
            if (this.currentImageIndex < this.chatImageSpriteFrames.length) {
                // 顯示下一張圖片
                const sprite = this.chatImage.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
                }
            } else {
                // 已經是最後一張圖片，隱藏聊天圖片
                this.chatImage.active = false;
                this.currentImageIndex = 0;
                PlayerController.water = true;
                this.chatBubble.active = false;
            }
        }
    }

    update() {
        if (!this.player || !this.friend || !this.chatBubble || PlayerController.water) return;


        // 將 Vec3 轉換為 Vec2
        const playerPos = new cc.Vec2(this.player.position.x, this.player.position.y);
        const friendPos = new cc.Vec2(this.friend.position.x, this.friend.position.y);

        // 計算玩家和朋友的距離
        const distance = this.getDistance(playerPos, friendPos);
        const shouldShow = distance <= this.DETECTION_RADIUS;

        // 根據距離顯示或隱藏聊天氣泡
        if (this.chatBubble.active !== shouldShow) {
            this.chatBubble.active = shouldShow;
            if (shouldShow) {
                // 確保氣泡在最上層
                this.chatBubble.zIndex = 999;
            }
        }
    }

    private getDistance(pos1: cc.Vec2, pos2: cc.Vec2): number {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    onDestroy() {
        if (this.chatBubble) {
            this.chatBubble.off(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
            this.chatBubble.destroy();
        }
        if (this.chatImage) {
            this.chatImage.off(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
            this.chatImage.destroy();
        }
    }
} 