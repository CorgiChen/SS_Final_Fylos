"use strict";
cc._RF.push(module, 'bf780HQzbhMP5h9r3oYYOIY', 'Menu');
// Script/Menu.ts

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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // // Background music audio clip
    // @property({ type: cc.AudioClip })
    // bgm: cc.AudioClip = null;
    Menu.prototype.start = function () {
        // Register event listeners for login and signup buttons
        this.registerButtonEvents();
        // // Play background music if not already playing
        // if (!cc.audioEngine.isMusicPlaying()) {
        //   this.playBGM();
        // }
    };
    /**
     * Register mouse down events for Login and Signup buttons
     */
    Menu.prototype.registerButtonEvents = function () {
        var _this = this;
        var loginButton = cc.find("Canvas/LoginButton");
        var signupButton = cc.find("Canvas/SignupButton");
        loginButton.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadLoginScene();
        }, this);
        signupButton.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadSignupScene();
        }, this);
    };
    /**
     * Load the login scene
     */
    Menu.prototype.loadLoginScene = function () {
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Login");
        }
        else {
            cc.director.loadScene("Scene000_Login");
        }
    };
    /**
     * Load the signup scene
     */
    Menu.prototype.loadSignupScene = function () {
        var transition2 = cc.find("Canvas/Transition");
        if (transition2) {
            transition2.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Signup");
        }
        else {
            cc.director.loadScene("Scene000_Signup");
        }
    };
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

cc._RF.pop();