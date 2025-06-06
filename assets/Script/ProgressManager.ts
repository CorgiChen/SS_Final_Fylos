// import firebase from "firebase/app";
// import "firebase/database";
declare const firebase: any;

const { ccclass, property } = cc._decorator;

import PlayerController from "./Player";

@ccclass
export default class ProgressManager extends cc.Component {
    private static _instance: ProgressManager = null;

    public static get instance(): ProgressManager {
        return this._instance;
    }

    private _currentScene: string = "";
    private _furthestScene: string = "";
    private userEmail: string = "";
    private deathCount: number = 0;
    private isLoaded: boolean = false;

    onLoad() {
        if (ProgressManager._instance == null) {
            ProgressManager._instance = this;
            cc.game.addPersistRootNode(this.node); // 設為常駐節點

            // 監聽場景切換
            cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this.onSceneChanged, this);
        } else {
            this.node.destroy(); // 保證只有一個實例
        }
    }

    // 取得目前 Scene
    public get currentScene(): string {
        return this._currentScene;
    }

    // 取得最遠 Scene
    public get furthestScene(): string {
        return this._furthestScene;
    }

    // 設定目前 Scene，並自動判斷是否更新最遠 Scene
    public setCurrentScene(sceneName: string) {
        this._currentScene = sceneName;
        if (this.isSceneFurther(sceneName, this._furthestScene)) {
            this._furthestScene = sceneName;
        }
        this.saveProgressToFirebase();
    }

    // 判斷 sceneA 是否比 sceneB 更後面（根據你的順序）
    private isSceneFurther(sceneA: string, sceneB: string): boolean {
        const sceneOrder = [
            "Scene000_Menu",
            "Scene000_Signup",
            "Scene000_Login",
            "Scene000_StartScene",
            "Scene000_Leaderboard",
            "Scene001_Home_Outside",
            "Scene001_Home_Outside2",
            "Scene002_Home_1F",
            "Scene002_Home_1F2",
            "Scene003_Home_B1",
            "Scene003_Home_B1_2",
            "Scene004_Subway",
            "Scene004_Subway_2",
            "Scene101_Ch1",
            "Scene401_Mine",
            "Scene402_EndClip",
            "Scene403_Chat",
            "Scene404_Final"
        ];
        const idxA = sceneOrder.indexOf(sceneA);
        const idxB = sceneOrder.indexOf(sceneB);
        cc.log(`[ProgressManager] isSceneFurther 檢查: sceneA=${sceneA} (idx=${idxA}), sceneB=${sceneB} (idx=${idxB})`);
        return idxA > idxB;
    }

    public setUserEmail(email: string) {
        this.userEmail = email.replace(/\./g, "-").replace(/@/g, "-AT-");
    }

    // 儲存進度到 Firebase
    private saveProgressToFirebase() {
        if (!this.userEmail) {
            console.warn("User email not set, cannot save progress.");
            return;
        }
        const userRef = firebase.database().ref(`user_list/${this.userEmail}`);
        userRef.update({
            max_stage: this._furthestScene,
            current_stage: this._currentScene,
            wind: PlayerController.wind,
            water: PlayerController.water,
            fire: PlayerController.fire,
            plant: PlayerController.plant,
            death_count: this.deathCount
        }).then(() => {
            console.log("Progress saved to Firebase!");
        }).catch((error) => {
            console.error("Failed to save progress:", error);
        });
    }

    // 從 Firebase 載入進度
   // 改进的 onSceneChanged 方法
private onSceneChanged() {
    const sceneName = cc.director.getScene().name;
    cc.log("[ProgressManager] 切換到場景:", sceneName);

    // 如果不是起始场景，先加载数据，加载完成后再处理当前场景
    if (!sceneName.startsWith("Scene000")) {
        this.loadProgressFromFirebase(() => {
            // 加载完成后，再设置当前场景（这会触发保存）
            this.setCurrentScene(sceneName);
        });
    } else {
         // 对于起始场景 (Scene000 系列)，可能不需要立即加载或保存
         // 根据你的游戏逻辑决定这里是否需要加载或做其他处理
         // 例如，如果登录/注册场景不需要加载用户进度，可以跳过
    }
}

// 修改 loadProgressFromFirebase，确保 callback 在数据加载和赋值完成后执行
public loadProgressFromFirebase(callback?: () => void) {
    if (!this.userEmail) {
        console.warn("User email not set or sanitized, cannot load progress.");
         if (callback) callback(); // 如果无法加载，也调用回调
        return;
    }
    const userRef = firebase.database().ref(`user_list/${this.userEmail}`);
    userRef.once('value').then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
             // 在这里打印获取到的原始数据，帮助调试
             cc.log('[TEST] loadProgressFromFirebase 获取到的原始数据:', data);

            cc.log(`[TEST] 从 Firebase 获取到用户 ${this.userEmail} 的数据：max_stage=${data.max_stage}, current_stage=${data.current_stage}, death_count=${data.death_count}`);
            this._furthestScene = data.max_stage || "";
            this._currentScene = data.current_stage || "";
            this.deathCount = data.death_count || 0;

             // 在这里添加其他属性的加载，例如 fire, water, plant, wind
             // 确保 PlayerController 已经可以访问或有方法来设置这些属性
             if (PlayerController) { // 确保 PlayerController 已加载或可用
                 PlayerController.wind = data.wind ?? false; // 使用 ?? 运算符更安全地处理 false
                 PlayerController.water = data.water ?? false;
                 PlayerController.fire = data.fire ?? false;
                 PlayerController.plant = data.plant ?? false;
             }

        } else {
            cc.log('[TEST] 未找到用户数据：', this.userEmail);
            this._furthestScene = "";
            this._currentScene = "";
            this.deathCount = 0;
            // 如果是新用户，也需要初始化 PlayerController 的属性
             if (PlayerController) {
                 PlayerController.wind = false;
                 PlayerController.water = false;
                 PlayerController.fire = false;
                 PlayerController.plant = false;
             }
        }
         // 在数据加载和赋值完成后调用回调
        if (callback) callback();
    });
}

    // 持續自動同步四個屬性到 firebase
    update(dt) {

        this.saveProgressToFirebase();
    }

    public addDeathCount() {
        this.deathCount += 1;
        this.saveProgressToFirebase();
    }
}
