"use strict";
cc._RF.push(module, 'dca47iKkwBI1IUzPa/HoRu/', 'Leaderboard');
// Script/Leaderboard.ts

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
// Global variables for leaderboard data
var leaderboardList = [];
var sortedList;
var isLeaderboardReady = false;
var Leaderboard = /** @class */ (function (_super) {
    __extends(Leaderboard, _super);
    function Leaderboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        return _this;
    }
    // Called when the component starts
    Leaderboard.prototype.start = function () {
        this.resetLeaderboard();
        cc.audioEngine.stopMusic();
        this.loadLeaderboardData();
        // Add event listener for quit button
        cc.find("Canvas/quit").on(cc.Node.EventType.MOUSE_DOWN, function () {
            this.loadMenuScene();
        }, this);
    };
    // Reset leaderboard data
    Leaderboard.prototype.resetLeaderboard = function () {
        leaderboardList = [];
        sortedList = null;
        isLeaderboardReady = false;
    };
    // Update leaderboard display if data is ready
    Leaderboard.prototype.update = function (dt) {
        if (isLeaderboardReady) {
            this.updateLeaderboardDisplay();
        }
    };
    // Play background music
    Leaderboard.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    // Load menu scene
    Leaderboard.prototype.loadMenuScene = function () {
        cc.director.loadScene("Scene000_StartScene");
    };
    // Load leaderboard data from Firebase
    Leaderboard.prototype.loadLeaderboardData = function () {
        firebase.auth().onAuthStateChanged(function (user) {
            var usersRef = firebase.database().ref("user_list/");
            usersRef.once('value').then(function (snapshot) {
                leaderboardList = [];
                snapshot.forEach(function (element) {
                    leaderboardList.push({
                        email: element.val().email || "",
                        play_time: element.val().play_time || 0,
                        death_count: element.val().death_count || 0
                    });
                });
            }).then(function () {
                sortedList = leaderboardList.sort(function (a, b) { return a.death_count - b.death_count; });
            }).then(function () {
                isLeaderboardReady = true;
            });
        });
    };
    // Update leaderboard UI with sorted data
    Leaderboard.prototype.updateLeaderboardDisplay = function () {
        for (var i = 0; i < Math.min(sortedList.length, 5); i++) {
            var basePath = "Canvas/leaderboard_background/" + (i + 1) + "/";
            var emailNode = cc.find(basePath + "email");
            var deathCountNode = cc.find(basePath + "death_count");
            if (!emailNode || !deathCountNode) {
                cc.error("\u627E\u4E0D\u5230\u7B2C" + (i + 1) + "\u540D\u7684\u7BC0\u9EDE");
                continue;
            }
            var emailLabel = emailNode.getComponent(cc.Label);
            var deathCountLabel = deathCountNode.getComponent(cc.Label);
            emailLabel.string = sortedList[i].email;
            deathCountLabel.string = sortedList[i].death_count;
        }
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], Leaderboard.prototype, "bgm", void 0);
    Leaderboard = __decorate([
        ccclass
    ], Leaderboard);
    return Leaderboard;
}(cc.Component));
exports.default = Leaderboard;

cc._RF.pop();