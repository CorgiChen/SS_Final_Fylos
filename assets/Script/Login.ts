// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

// Import firebase if using modules, or declare it if included via script tag
// Uncomment the appropriate line below:

// import * as firebase from "firebase/app";
// import "firebase/auth";

// OR, if firebase is included globally via a script tag:
declare const firebase: any;

@ccclass
export default class Login extends cc.Component {

    // @property({ type: cc.AudioClip })
    // bgm: cc.AudioClip = null; // Background music clip

    // LIFE-CYCLE CALLBACKS

    start() {
        // Register button event listeners
        this.registerButtonEvents();

        // // Play background music if not already playing
        // if (!cc.audioEngine.isMusicPlaying()) {
        //     this.playBGM();
        // }
    }

    /**
     * Register mouse down events for buttons
     */
    private registerButtonEvents() {
        cc.find("small_canvas_bg/quit").on(
            cc.Node.EventType.MOUSE_DOWN,
            this.loadMenuScene,
            this
        );

        cc.find("small_canvas_bg/submit").on(
            cc.Node.EventType.MOUSE_DOWN,
            this.loginNow,
            this
        );
    }

    /**
     * Handle user login with email and password
     */
    private loginNow() {
        const email = cc.find("small_canvas_bg/email/TEXT_LABEL").getComponent(cc.Label).string;
        const password = cc.find("small_canvas_bg/password").getComponent(cc.EditBox).string;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                alert("Login Success");
                cc.director.loadScene("StartClip");
            })
            .catch((error) => {
                // Show error message
                alert(error.message);
            });
    }

    /**
     * Load the menu scene
     */
    loadMenuScene() {
        cc.director.loadScene("Menu");
    }

    // /**
    //  * Play background music
    //  */
    // playBGM() {
    //     cc.audioEngine.playMusic(this.bgm, true);
    // }
}
