const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {

  // // Background music audio clip
  // @property({ type: cc.AudioClip })
  // bgm: cc.AudioClip = null;

  start() {
    // Register event listeners for login and signup buttons
    this.registerButtonEvents();

    // // Play background music if not already playing
    // if (!cc.audioEngine.isMusicPlaying()) {
    //   this.playBGM();
    // }
  }

  /**
   * Register mouse down events for Login and Signup buttons
   */
  private registerButtonEvents(): void {
    const loginButton = cc.find("Canvas/LoginButton");
    const signupButton = cc.find("Canvas/SignupButton");

    loginButton.on(cc.Node.EventType.MOUSE_DOWN, () => {
      this.loadLoginScene();
    }, this);

    signupButton.on(cc.Node.EventType.MOUSE_DOWN, () => {
      this.loadSignupScene();
    }, this);
  }

  /**
   * Load the login scene
   */
  loadLoginScene(): void {
    cc.director.loadScene("Scene000_Login");
  }

  /**
   * Load the signup scene
   */
  loadSignupScene(): void {
    cc.director.loadScene("Scene000_Signup");
  }

  // /**
  //  * Play background music in a loop
  //  */
  // playBGM(): void {
  //     cc.audioEngine.playMusic(this.bgm, true);
  // }
}