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
        cc.director.loadScene("Scene000_StartScene");
    }

    // Load leaderboard data from Firebase
    private loadLeaderboardData() {
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
    }
    

    // Update leaderboard UI with sorted data
    private updateLeaderboardDisplay() {
        for (var i = 0; i < Math.min(sortedList.length, 5); i++) {
            const basePath = "Canvas/leaderboard_background/" + (i + 1) + "/";
            const emailNode = cc.find(basePath + "email");
            const deathCountNode = cc.find(basePath + "death_count");
    
            if (!emailNode || !deathCountNode) {
                cc.error(`找不到第${i+1}名的節點`);
                continue;
            }
    
            const emailLabel = emailNode.getComponent(cc.Label);
            const deathCountLabel = deathCountNode.getComponent(cc.Label);

            emailLabel.string = sortedList[i].email;
            deathCountLabel.string = sortedList[i].death_count;
        }
    }
}
