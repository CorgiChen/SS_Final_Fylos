// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
declare const firebase: any;

const { ccclass, property } = cc._decorator;

// Global variables for leaderboard data
var leaderboardList = [];
var sortedList;
var isLeaderboardReady = false;

@ccclass
export default class Leaderboard extends cc.Component {

    @property({ type: cc.AudioClip })
    bgm: cc.AudioClip = null;

    // Called when the component starts
    start() {
        this.resetLeaderboard();
        cc.audioEngine.stopMusic();
        this.loadLeaderboardData();
        // Add event listener for quit button
        cc.find("Canvas/quit").on(cc.Node.EventType.MOUSE_DOWN, function () {
            this.loadMenuScene();
        }, this);
    }

    // Reset leaderboard data
    resetLeaderboard() {
        leaderboardList = [];
        sortedList = null;
        isLeaderboardReady = false;
    }

    // Update leaderboard display if data is ready
    update(dt) {
        if (isLeaderboardReady) {
            this.updateLeaderboardDisplay();
        }
    }

    // Play background music
    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    // Load menu scene
    private loadMenuScene() {
        cc.director.loadScene("StartScene");
    }

    // Load leaderboard data from Firebase
    private loadLeaderboardData() {
        firebase.auth().onAuthStateChanged(function (user) {
            var usersRef = firebase.database().ref("user_list/");
            usersRef.once('value').then(function (snapshot) {
                snapshot.forEach(function (element) {
                    leaderboardList.push({ score: element.val().score, email: element.key });
                });
            }).then(function () {
                sortedList = leaderboardList.sort(function (a, b) { return b.score - a.score });
            }).then(function () {
                isLeaderboardReady = true;
            })
        });
    }

    // Update leaderboard UI with sorted data
    private updateLeaderboardDisplay() {
        if (sortedList.length < 6) {
            for (var i = 0; i < sortedList.length; i++) {
                cc.find("Canvas/leaderboard_background/" + (i + 1) + "/email").getComponent(cc.Label).string = sortedList[i].email;
                cc.find("Canvas/leaderboard_background/" + (i + 1) + "/score").getComponent(cc.Label).string = sortedList[i].score;
            }
        } else {
            for (var i = 0; i < 5; i++) {
                cc.find("Canvas/leaderboard_background/" + (i + 1) + "/email").getComponent(cc.Label).string = sortedList[i].email;
                cc.find("Canvas/leaderboard_background/" + (i + 1) + "/score").getComponent(cc.Label).string = sortedList[i].score;
            }
        }
    }
}
