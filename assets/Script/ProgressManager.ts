// import firebase from "firebase/app";
// import "firebase/database";
declare const firebase: any;

const { ccclass, property } = cc._decorator;

@ccclass
export default class ProgressManager extends cc.Component {
    private static _instance: ProgressManager = null;

    public static get instance(): ProgressManager {
        return this._instance;
    }

    private _currentScene: string = "";
    private _furthestScene: string = "";
    private userEmail: string = "";

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
            current_stage: this._currentScene
        }).then(() => {
            console.log("Progress saved to Firebase!");
        }).catch((error) => {
            console.error("Failed to save progress:", error);
        });
    }

    // 從 Firebase 載入進度
    public loadProgressFromFirebase() {
        // TODO: 實作 Firebase 讀取
        // 例如: firebase.database().ref(`users/${userId}/progress`).once('value').then((snapshot) => {
        //   const data = snapshot.val();
        //   this._currentScene = data.currentScene;
        //   this._furthestScene = data.furthestScene;
        // });
    }

    // 新增這個方法
    private onSceneChanged() {
        const sceneName = cc.director.getScene().name;
        cc.log("[ProgressManager] 切換到場景:", sceneName);
        this.setCurrentScene(sceneName);
    }
}
