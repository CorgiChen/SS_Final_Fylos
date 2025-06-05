const { ccclass, property } = cc._decorator;

@ccclass
export default class ChangePicture extends cc.Component {
    @property(cc.Sprite)
    pictureSprite: cc.Sprite = null;

    @property([cc.SpriteFrame])
    pictures: cc.SpriteFrame[] = [];

    @property
    nextScene: string = "Scene000_StartScene";

    private currentIndex: number = 0;

    onLoad() {
        cc.log("ChangePicture onLoad");
        
        // 檢查 Sprite 組件
        if (!this.pictureSprite) {
            this.pictureSprite = this.getComponent(cc.Sprite);
            cc.log("Sprite component found:", this.pictureSprite ? "yes" : "no");
        }

        // 檢查 Button 組件
        const button = this.getComponent(cc.Button);
        if (!button) {
            cc.log("Adding Button component");
            const newButton = this.node.addComponent(cc.Button);
            
            // 設置點擊事件
            const clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "ChangePicture";
            clickEventHandler.handler = "onClick";
            
            newButton.clickEvents = [clickEventHandler];
        }
        
        // 初始化第一張圖片
        if (this.pictures.length > 0) {
            this.pictureSprite.spriteFrame = this.pictures[0];
            cc.log("First picture set");
        } else {
            cc.warn("No pictures set in the array!");
        }
    }

    // 點擊時切換圖片
    onClick() {
        cc.log("Picture clicked, current index:", this.currentIndex);
        
        this.currentIndex++;
        
        // 如果還有下一張圖片
        if (this.currentIndex < this.pictures.length) {
            this.pictureSprite.spriteFrame = this.pictures[this.currentIndex];
            cc.log("Changed to picture:", this.currentIndex);
        } else {
            // 沒有更多圖片了，切換場景
            cc.log("No more pictures, loading next scene");
            this.loadNextScene();
        }
    }

    private loadNextScene() {
        cc.log("Loading next scene:", this.nextScene);
        cc.director.loadScene(this.nextScene, (err, scene) => {
            if (err) {
                cc.error("Failed to load scene:", err);
                return;
            }
            cc.log("Scene loaded successfully");
        });
    }
} 