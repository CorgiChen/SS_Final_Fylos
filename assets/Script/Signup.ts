const { ccclass, property } = cc._decorator;
declare const firebase: any;
@ccclass
export default class Signup extends cc.Component {

    // @property({ type: cc.AudioClip })
    // bgm: cc.AudioClip = null;

    // Called once when the component is enabled
    start() {
        // Register quit button event
        const quitButton = cc.find("small_canvas_bg/quit");
        if (quitButton) {
            quitButton.on(
                cc.Node.EventType.TOUCH_END,
                this.loadMenuScene,
                this
            );
        }

        // Register submit button event
        cc.find("small_canvas_bg/submit").on(
            cc.Node.EventType.MOUSE_DOWN,
            this.createAccount,
            this
        );

        // // Play background music if not already playing
        // if (!cc.audioEngine.isMusicPlaying()) {
        //     this.playBGM();
        // }
    }

    // Loads the menu scene
    loadMenuScene() {
        const transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Menu");
        } else {
            cc.director.loadScene("Scene000_Menu");
        }
    }

    // Called every frame, logs the current username input
    update(dt) {
        const username = cc.find("small_canvas_bg/username/TEXT_LABEL")
            .getComponent(cc.Label).string;
        cc.log(username);
    }

    // // Plays background music
    // playBGM() {
    //     cc.audioEngine.playMusic(this.bgm, true);
    // }

    // Handles account creation logic
    private createAccount() {
        // Get user input values
        const email = cc.find("small_canvas_bg/email/TEXT_LABEL")
            .getComponent(cc.Label).string;
        const username = cc.find("small_canvas_bg/username/TEXT_LABEL")
            .getComponent(cc.Label).string;
        const password = cc.find("small_canvas_bg/password/TEXT_LABEL")
            .getComponent(cc.Label).string;

        // Create user with Firebase Authentication
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                // Store user data in Firebase Database
                const usersRef = firebase.database().ref('user_list/');
                const emailKey = email.replace(".", "-");
                usersRef.child(emailKey).set({
                    username: username,
                    email: email,
                    max_stage: "Scene001_Home_Outside",
                    death_count: 0,
                    play_time: 0
                });

                alert("You have successfully created the account!");
                const transition2 = cc.find("Canvas/Transition");
                if (transition2) {
                    transition2.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Login");
                } else {
                    cc.director.loadScene("Scene000_Login");
                }

                // Update user profile with username
                return result.user.updateProfile({
                    displayName: username,
                });
            })
            .catch(error => {
                // Handle errors
                alert(error.message);
            });
    }
}
