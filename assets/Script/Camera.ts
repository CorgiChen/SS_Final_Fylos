// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // Reference to the player node
    player: cc.Node = null;

    // Called when the script instance is being loaded
    onLoad() {
        // Find the player node in the scene
        this.player = cc.find("Player");
    }

    // Called every frame, dt is the delta time since last frame
    update(dt) {
        // Get the target position (player's position)
        let playerPos = this.player.getPosition();
        // Offset the camera to the left by 100 units (adjust as needed)
        let targetPos = playerPos.clone();
        targetPos.x -= 200;
        targetPos.y -= 600;

        // Get the current camera position
        let cameraPos = this.node.getPosition();
        // Smoothly interpolate camera position towards target position
        cameraPos.lerp(targetPos, 0.1, cameraPos);

        // Clamp the camera's y position between 0 and 100
        cameraPos.y = cc.misc.clampf(targetPos.y, 0, 100);

        // Clamp the camera's x position between 0 and 8000
        if (cameraPos.x < 0) {
            cameraPos.x = 0;
        } else if (cameraPos.x > 8000) {
            cameraPos.x = 8000;
        }
        // Set the camera's new position
        this.node.setPosition(cameraPos);
    }
}
