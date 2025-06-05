const { ccclass, property } = cc._decorator;
declare const firebase: any;
@ccclass
export default class Signup extends cc.Component {

    // @property({ type: cc.AudioClip })
    // bgm: cc.AudioClip = null;

    // Called once when the component is enabled
    start() {
        // Register quit button event
        cc.find("small_canvas_bg/quit").on(
            cc.Node.EventType.MOUSE_DOWN,
            this.loadMenuScene,
            this
        );

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
        cc.director.loadScene("Menu");
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
        const password = cc.find("small_canvas_bg/password")
            .getComponent(cc.EditBox).string;

        // Create user with Firebase Authentication
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                // Store user data in Firebase Database
                const usersRef = firebase.database().ref('user_list/');
                const emailKey = email.replace(".", "-");
                usersRef.child(emailKey).set({
                    coin: 0,
                    life: 3,
                    score: 0,
                    big_mario: 0
                });

                alert("You have successfully created the account!");
                cc.director.loadScene("login");

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
