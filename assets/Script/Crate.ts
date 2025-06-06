// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Crate extends cc.Component {
    private rigidbody: cc.RigidBody = null;
    private collider: cc.PhysicsBoxCollider = null;
    private onGround: boolean = false;

    onLoad() {
        // 啟用物理系統
        const manager = cc.director.getPhysicsManager();
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
        const size = this.node.getContentSize();
        this.collider.size = cc.size(size.width, size.height);
        this.collider.offset = cc.v2(0, 0);
        this.collider.apply();
    }

    // 只允許箱子在地板上停止，不能被推動
    onBeginContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCollider, otherCollider: cc.PhysicsCollider) {
        if (otherCollider.node.name === 'Ground') {
            this.onGround = true;
            this.rigidbody.linearVelocity = cc.v2(0, 0);
            this.rigidbody.angularVelocity = 0;
        }
    }

    // 讓 Wind.ts 可以呼叫這個方法
    public applyWindForce(dir: number) {
        this.rigidbody.linearVelocity = cc.v2(dir * 800, 0);
    }
}
