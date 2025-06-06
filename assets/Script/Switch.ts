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

    @property({ type: cc.Node })
    spriteNode: cc.Node = null;
    @property(cc.SpriteFrame)
    sprite1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    sprite2: cc.SpriteFrame = null;

    private state: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    public setState(state: number) {
        if (!this.spriteNode) return;
        const sprite = this.spriteNode.getComponent(cc.Sprite);
        if (!sprite) return;
        if (state === 0 && this.sprite1) {
            sprite.spriteFrame = this.sprite1;
        } else if (state === 1 && this.sprite2) {
            sprite.spriteFrame = this.sprite2;
        }
    }

    update(dt) {
        if (!this.spriteNode) return;
        const sprite = this.spriteNode.getComponent(cc.Sprite);
        if (!sprite) return;
        if (this.state === 0 && this.sprite1) {
            sprite.spriteFrame = this.sprite1;
        } else if (this.sprite2) {
            sprite.spriteFrame = this.sprite2;
        }
    }
       
}
