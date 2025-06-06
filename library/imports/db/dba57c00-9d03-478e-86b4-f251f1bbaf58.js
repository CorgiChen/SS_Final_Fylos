"use strict";
cc._RF.push(module, 'dba57wAnQNHjoa08lHxu69Y', 'Login');
// Script/Login.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var ProgressManager_1 = require("./ProgressManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property({ type: cc.AudioClip })
    // bgm: cc.AudioClip = null; // Background music clip
    // LIFE-CYCLE CALLBACKS
    Login.prototype.start = function () {
        // Register button event listeners
        this.registerButtonEvents();
        // // Play background music if not already playing
        // if (!cc.audioEngine.isMusicPlaying()) {
        //     this.playBGM();
        // }
    };
    /**
     * Register mouse down events for buttons
     */
    Login.prototype.registerButtonEvents = function () {
        cc.find("small_canvas_bg/quit").on(cc.Node.EventType.MOUSE_DOWN, this.loadMenuScene, this);
        cc.find("small_canvas_bg/submit").on(cc.Node.EventType.MOUSE_DOWN, this.loginNow, this);
    };
    /**
     * Handle user login with email and password
     */
    Login.prototype.loginNow = function () {
        var email = cc.find("small_canvas_bg/email/TEXT_LABEL").getComponent(cc.Label).string;
        var password = cc.find("small_canvas_bg/password/TEXT_LABEL").getComponent(cc.Label).string;
        ProgressManager_1.default.instance.setUserEmail(email);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function () {
            alert("Login Success");
            ProgressManager_1.default.instance.loadProgressFromFirebase(function () {
                var transition = cc.find("Canvas/Transition");
                if (transition) {
                    transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_StartScene");
                }
                else {
                    cc.director.loadScene("Scene000_StartScene");
                }
            });
        })
            .catch(function (error) {
            // Show error message
            alert(error.message);
        });
    };
    /**
     * Load the menu scene
     */
    Login.prototype.loadMenuScene = function () {
        var transition2 = cc.find("Canvas/Transition");
        if (transition2) {
            transition2.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Menu");
        }
        else {
            cc.director.loadScene("Scene000_Menu");
        }
    };
    Login = __decorate([
        ccclass
    ], Login);
    return Login;
}(cc.Component));
exports.default = Login;

cc._RF.pop();