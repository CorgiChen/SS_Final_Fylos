const { ccclass, property } = cc._decorator;

@ccclass
export default class CameraController extends cc.Component {
    @property(cc.Node)
    target: cc.Node = null;  // 跟隨目標（玩家）

    @property
    smoothSpeed: number = 0.1;  // 相機移動平滑度

    @property
    offsetX: number = 0;  // X軸偏移量

    @property
    offsetY: number = 0;  // Y軸偏移量

    @property
    minX: number = -1000;  // 相機X軸最小範圍

    @property
    maxX: number = 1000;   // 相機X軸最大範圍

    @property
    minY: number = -1000;  // 相機Y軸最小範圍

    @property
    maxY: number = 1000;   // 相機Y軸最大範圍

    private camera: cc.Camera = null;

    onLoad() {
        // 獲取相機組件
        this.camera = this.getComponent(cc.Camera);
        if (!this.camera) {
            this.camera = this.addComponent(cc.Camera);
        }

        // 設置相機屬性
        this.camera.backgroundColor = cc.Color.BLACK;
        this.camera.zoomRatio = 1;
    }

    update(dt: number) {
        if (!this.target) return;

        // 計算目標位置
        let targetX = this.target.x + this.offsetX;
        let targetY = this.target.y + this.offsetY;

        // 限制相機範圍
        targetX = cc.misc.clampf(targetX, this.minX, this.maxX);
        targetY = cc.misc.clampf(targetY, this.minY, this.maxY);

        // 平滑移動相機
        let currentPos = this.node.position;
        let targetPos = cc.v3(targetX, targetY, currentPos.z);
        
        // 使用 lerp 實現平滑移動
        this.node.position = cc.v3(
            cc.misc.lerp(currentPos.x, targetPos.x, this.smoothSpeed),
            cc.misc.lerp(currentPos.y, targetPos.y, this.smoothSpeed),
            currentPos.z
        );
    }
} 