"use strict";
cc._RF.push(module, '72e9dz9wZpOm4EhWJ9Xfbdi', 'Signup');
// Script/Signup.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Signup = /** @class */ (function (_super) {
    __extends(Signup, _super);
    function Signup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property({ type: cc.AudioClip })
    // bgm: cc.AudioClip = null;
    // Called once when the component is enabled
    Signup.prototype.start = function () {
        // Register quit button event
        var quitButton = cc.find("small_canvas_bg/quit");
        if (quitButton) {
            quitButton.on(cc.Node.EventType.TOUCH_END, this.loadMenuScene, this);
        }
        // Register submit button event
        cc.find("small_canvas_bg/submit").on(cc.Node.EventType.MOUSE_DOWN, this.createAccount, this);
        // // Play background music if not already playing
        // if (!cc.audioEngine.isMusicPlaying()) {
        //     this.playBGM();
        // }
    };
    // Loads the menu scene
    Signup.prototype.loadMenuScene = function () {
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Menu");
        }
        else {
            cc.director.loadScene("Scene000_Menu");
        }
    };
    // Called every frame, logs the current username input
    Signup.prototype.update = function (dt) {
        var username = cc.find("small_canvas_bg/username/TEXT_LABEL")
            .getComponent(cc.Label).string;
        cc.log(username);
    };
    // // Plays background music
    // playBGM() {
    //     cc.audioEngine.playMusic(this.bgm, true);
    // }
    // Handles account creation logic
    Signup.prototype.createAccount = function () {
        // Get user input values
        var email = cc.find("small_canvas_bg/email/TEXT_LABEL")
            .getComponent(cc.Label).string;
        var username = cc.find("small_canvas_bg/username/TEXT_LABEL")
            .getComponent(cc.Label).string;
        var password = cc.find("small_canvas_bg/password/TEXT_LABEL")
            .getComponent(cc.Label).string;
        // Create user with Firebase Authentication
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            // Store user data in Firebase Database
            var usersRef = firebase.database().ref('user_list/');
            var emailKey = email.replace(".", "-");
            usersRef.child(emailKey).set({
                username: username,
                email: email,
                max_stage: "Scene001_Home_Outside",
                death_count: 0,
                play_time: 0
            });
            alert("You have successfully created the account!");
            var transition2 = cc.find("Canvas/Transition");
            if (transition2) {
                transition2.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Login");
            }
            else {
                cc.director.loadScene("Scene000_Login");
            }
            // Update user profile with username
            return result.user.updateProfile({
                displayName: username,
            });
        })
            .catch(function (error) {
            // Handle errors
            alert(error.message);
        });
    };
    Signup = __decorate([
        ccclass
    ], Signup);
    return Signup;
}(cc.Component));
exports.default = Signup;

cc._RF.pop();