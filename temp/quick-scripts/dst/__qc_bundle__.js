
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/AudioManager');
require('./assets/Script/Camera');
require('./assets/Script/CameraController');
require('./assets/Script/ChangePicture');
require('./assets/Script/ChatBubbleController');
require('./assets/Script/Crate');
require('./assets/Script/Fire');
require('./assets/Script/GotoLeaderboard');
require('./assets/Script/Lake');
require('./assets/Script/Leaderboard');
require('./assets/Script/Login');
require('./assets/Script/Menu');
require('./assets/Script/PauseManager');
require('./assets/Script/PauseMenu');
require('./assets/Script/Player');
require('./assets/Script/PressStart');
require('./assets/Script/Signup');
require('./assets/Script/Switch');
require('./assets/Script/TimeController');
require('./assets/Script/TransitionManager');
require('./assets/Script/Transport');
require('./assets/Script/VideoPlayerController');
require('./assets/Script/Wind');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ChangePicture.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad823v/vvpKcryMxoug2rex', 'ChangePicture');
// Script/ChangePicture.ts

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
var ChangePicture = /** @class */ (function (_super) {
    __extends(ChangePicture, _super);
    function ChangePicture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pictureSprite = null;
        _this.pictures = [];
        _this.nextScene = "Scene000_StartScene";
        _this.currentIndex = 0;
        return _this;
    }
    ChangePicture.prototype.onLoad = function () {
        cc.log("ChangePicture onLoad");
        // 檢查 Sprite 組件
        if (!this.pictureSprite) {
            this.pictureSprite = this.getComponent(cc.Sprite);
            cc.log("Sprite component found:", this.pictureSprite ? "yes" : "no");
        }
        // 檢查 Button 組件
        var button = this.getComponent(cc.Button);
        if (!button) {
            cc.log("Adding Button component");
            var newButton = this.node.addComponent(cc.Button);
            // 設置點擊事件
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "ChangePicture";
            clickEventHandler.handler = "onClick";
            newButton.clickEvents = [clickEventHandler];
        }
        // 初始化第一張圖片
        if (this.pictures.length > 0) {
            this.pictureSprite.spriteFrame = this.pictures[0];
            cc.log("First picture set");
        }
        else {
            cc.warn("No pictures set in the array!");
        }
    };
    // 點擊時切換圖片
    ChangePicture.prototype.onClick = function () {
        cc.log("Picture clicked, current index:", this.currentIndex);
        this.currentIndex++;
        // 如果還有下一張圖片
        if (this.currentIndex < this.pictures.length) {
            this.pictureSprite.spriteFrame = this.pictures[this.currentIndex];
            cc.log("Changed to picture:", this.currentIndex);
        }
        else {
            // 沒有更多圖片了，切換場景
            cc.log("No more pictures, loading next scene");
            this.loadNextScene();
        }
    };
    ChangePicture.prototype.loadNextScene = function () {
        cc.log("Loading next scene:", this.nextScene);
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene(this.nextScene);
        }
        else {
            cc.director.loadScene(this.nextScene);
        }
    };
    __decorate([
        property(cc.Sprite)
    ], ChangePicture.prototype, "pictureSprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ChangePicture.prototype, "pictures", void 0);
    __decorate([
        property
    ], ChangePicture.prototype, "nextScene", void 0);
    ChangePicture = __decorate([
        ccclass
    ], ChangePicture);
    return ChangePicture;
}(cc.Component));
exports.default = ChangePicture;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFuZ2VQaWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBdUVDO1FBckVHLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBcUIsRUFBRSxDQUFDO1FBR2hDLGVBQVMsR0FBVyxxQkFBcUIsQ0FBQztRQUVsQyxrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUE2RHJDLENBQUM7SUEzREcsOEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUUvQixlQUFlO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEU7UUFFRCxlQUFlO1FBQ2YsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNsQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEQsU0FBUztZQUNULElBQU0saUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7WUFDOUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUV0QyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMvQztRQUVELFdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELFVBQVU7SUFDViwrQkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLFlBQVk7UUFDWixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILGVBQWU7WUFDZixFQUFFLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVPLHFDQUFhLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksVUFBVSxFQUFFO1lBQ1osVUFBVSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzRjthQUFNO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQXBFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO21EQUNLO0lBR2hDO1FBREMsUUFBUTtvREFDaUM7SUFSekIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXVFakM7SUFBRCxvQkFBQztDQXZFRCxBQXVFQyxDQXZFMEMsRUFBRSxDQUFDLFNBQVMsR0F1RXREO2tCQXZFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VQaWN0dXJlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHBpY3R1cmVTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwaWN0dXJlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbmV4dFNjZW5lOiBzdHJpbmcgPSBcIlNjZW5lMDAwX1N0YXJ0U2NlbmVcIjtcblxuICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5sb2coXCJDaGFuZ2VQaWN0dXJlIG9uTG9hZFwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOaqouafpSBTcHJpdGUg57WE5Lu2XG4gICAgICAgIGlmICghdGhpcy5waWN0dXJlU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLnBpY3R1cmVTcHJpdGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgY2MubG9nKFwiU3ByaXRlIGNvbXBvbmVudCBmb3VuZDpcIiwgdGhpcy5waWN0dXJlU3ByaXRlID8gXCJ5ZXNcIiA6IFwibm9cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmqqLmn6UgQnV0dG9uIOe1hOS7tlxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZiAoIWJ1dHRvbikge1xuICAgICAgICAgICAgY2MubG9nKFwiQWRkaW5nIEJ1dHRvbiBjb21wb25lbnRcIik7XG4gICAgICAgICAgICBjb25zdCBuZXdCdXR0b24gPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOioree9rum7nuaTiuS6i+S7tlxuICAgICAgICAgICAgY29uc3QgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJDaGFuZ2VQaWN0dXJlXCI7XG4gICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvbkNsaWNrXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5ld0J1dHRvbi5jbGlja0V2ZW50cyA9IFtjbGlja0V2ZW50SGFuZGxlcl07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOWIneWni+WMluesrOS4gOW8teWclueJh1xuICAgICAgICBpZiAodGhpcy5waWN0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBpY3R1cmVTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnBpY3R1cmVzWzBdO1xuICAgICAgICAgICAgY2MubG9nKFwiRmlyc3QgcGljdHVyZSBzZXRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiTm8gcGljdHVyZXMgc2V0IGluIHRoZSBhcnJheSFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDpu57mk4rmmYLliIfmj5vlnJbniYdcbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBjYy5sb2coXCJQaWN0dXJlIGNsaWNrZWQsIGN1cnJlbnQgaW5kZXg6XCIsIHRoaXMuY3VycmVudEluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICAgIFxuICAgICAgICAvLyDlpoLmnpzpgoTmnInkuIvkuIDlvLXlnJbniYdcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy5waWN0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGljdHVyZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMucGljdHVyZXNbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgY2MubG9nKFwiQ2hhbmdlZCB0byBwaWN0dXJlOlwiLCB0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmspLmnInmm7TlpJrlnJbniYfkuobvvIzliIfmj5vloLTmma9cbiAgICAgICAgICAgIGNjLmxvZyhcIk5vIG1vcmUgcGljdHVyZXMsIGxvYWRpbmcgbmV4dCBzY2VuZVwiKTtcbiAgICAgICAgICAgIHRoaXMubG9hZE5leHRTY2VuZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkTmV4dFNjZW5lKCkge1xuICAgICAgICBjYy5sb2coXCJMb2FkaW5nIG5leHQgc2NlbmU6XCIsIHRoaXMubmV4dFNjZW5lKTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvVHJhbnNpdGlvblwiKTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZ2V0Q29tcG9uZW50KFwiVHJhbnNpdGlvbk1hbmFnZXJcIikucGxheVRyYW5zT3V0QW5kQ2hhbmdlU2NlbmUodGhpcy5uZXh0U2NlbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMubmV4dFNjZW5lKTtcbiAgICAgICAgfVxuICAgIH1cbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4c80xdoflDFKewc/hrCizY', 'CameraController');
// Script/CameraController.ts

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
var CameraController = /** @class */ (function (_super) {
    __extends(CameraController, _super);
    function CameraController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null; // 跟隨目標（玩家）
        _this.smoothSpeed = 0.1; // 相機移動平滑度
        _this.offsetX = 0; // X軸偏移量
        _this.offsetY = 0; // Y軸偏移量
        _this.minX = -1000; // 相機X軸最小範圍
        _this.maxX = 1000; // 相機X軸最大範圍
        _this.minY = -1000; // 相機Y軸最小範圍
        _this.maxY = 1000; // 相機Y軸最大範圍
        _this.camera = null;
        return _this;
    }
    CameraController.prototype.onLoad = function () {
        // 獲取相機組件
        this.camera = this.getComponent(cc.Camera);
        if (!this.camera) {
            this.camera = this.addComponent(cc.Camera);
        }
        // 設置相機屬性
        this.camera.backgroundColor = cc.Color.BLACK;
        this.camera.zoomRatio = 1;
    };
    CameraController.prototype.update = function (dt) {
        if (!this.target)
            return;
        // 計算目標位置
        var targetX = this.target.x + this.offsetX;
        var targetY = this.target.y + this.offsetY;
        // 限制相機範圍
        targetX = cc.misc.clampf(targetX, this.minX, this.maxX);
        targetY = cc.misc.clampf(targetY, this.minY, this.maxY);
        // 平滑移動相機
        var currentPos = this.node.position;
        var targetPos = cc.v3(targetX, targetY, currentPos.z);
        // 使用 lerp 實現平滑移動
        this.node.position = cc.v3(cc.misc.lerp(currentPos.x, targetPos.x, this.smoothSpeed), cc.misc.lerp(currentPos.y, targetPos.y, this.smoothSpeed), currentPos.z);
    };
    __decorate([
        property(cc.Node)
    ], CameraController.prototype, "target", void 0);
    __decorate([
        property
    ], CameraController.prototype, "smoothSpeed", void 0);
    __decorate([
        property
    ], CameraController.prototype, "offsetX", void 0);
    __decorate([
        property
    ], CameraController.prototype, "offsetY", void 0);
    __decorate([
        property
    ], CameraController.prototype, "minX", void 0);
    __decorate([
        property
    ], CameraController.prototype, "maxX", void 0);
    __decorate([
        property
    ], CameraController.prototype, "minY", void 0);
    __decorate([
        property
    ], CameraController.prototype, "maxY", void 0);
    CameraController = __decorate([
        ccclass
    ], CameraController);
    return CameraController;
}(cc.Component));
exports.default = CameraController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYW1lcmFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBNkRDO1FBM0RHLFlBQU0sR0FBWSxJQUFJLENBQUMsQ0FBRSxXQUFXO1FBR3BDLGlCQUFXLEdBQVcsR0FBRyxDQUFDLENBQUUsVUFBVTtRQUd0QyxhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUc5QixhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUc5QixVQUFJLEdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBRSxXQUFXO1FBR2xDLFVBQUksR0FBVyxJQUFJLENBQUMsQ0FBRyxXQUFXO1FBR2xDLFVBQUksR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFFLFdBQVc7UUFHbEMsVUFBSSxHQUFXLElBQUksQ0FBQyxDQUFHLFdBQVc7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFvQ3JDLENBQUM7SUFsQ0csaUNBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QztRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUV6QixTQUFTO1FBQ1QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTNDLFNBQVM7UUFDVCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEQsU0FBUztRQUNULElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ3pELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ3pELFVBQVUsQ0FBQyxDQUFDLENBQ2YsQ0FBQztJQUNOLENBQUM7SUExREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSztJQUd2QjtRQURDLFFBQVE7eURBQ2lCO0lBRzFCO1FBREMsUUFBUTtxREFDVztJQUdwQjtRQURDLFFBQVE7cURBQ1c7SUFHcEI7UUFEQyxRQUFRO2tEQUNZO0lBR3JCO1FBREMsUUFBUTtrREFDVztJQUdwQjtRQURDLFFBQVE7a0RBQ1k7SUFHckI7UUFEQyxRQUFRO2tEQUNXO0lBdkJILGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBNkRwQztJQUFELHVCQUFDO0NBN0RELEFBNkRDLENBN0Q2QyxFQUFFLENBQUMsU0FBUyxHQTZEekQ7a0JBN0RvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7ICAvLyDot5/pmqjnm67mqJnvvIjnjqnlrrbvvIlcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNtb290aFNwZWVkOiBudW1iZXIgPSAwLjE7ICAvLyDnm7jmqZ/np7vli5XlubPmu5HluqZcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG9mZnNldFg6IG51bWJlciA9IDA7ICAvLyBY6Lu45YGP56e76YePXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvZmZzZXRZOiBudW1iZXIgPSAwOyAgLy8gWei7uOWBj+enu+mHj1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWluWDogbnVtYmVyID0gLTEwMDA7ICAvLyDnm7jmqZ9Y6Lu45pyA5bCP56+E5ZyNXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhYOiBudW1iZXIgPSAxMDAwOyAgIC8vIOebuOapn1jou7jmnIDlpKfnr4TlnI1cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1pblk6IG51bWJlciA9IC0xMDAwOyAgLy8g55u45qmfWei7uOacgOWwj+evhOWcjVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4WTogbnVtYmVyID0gMTAwMDsgICAvLyDnm7jmqZ9Z6Lu45pyA5aSn56+E5ZyNXHJcblxyXG4gICAgcHJpdmF0ZSBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOeNsuWPluebuOapn+e1hOS7tlxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5hZGRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOioree9ruebuOapn+WxrOaAp1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmJhY2tncm91bmRDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb21SYXRpbyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOioiOeul+ebruaomeS9jee9rlxyXG4gICAgICAgIGxldCB0YXJnZXRYID0gdGhpcy50YXJnZXQueCArIHRoaXMub2Zmc2V0WDtcclxuICAgICAgICBsZXQgdGFyZ2V0WSA9IHRoaXMudGFyZ2V0LnkgKyB0aGlzLm9mZnNldFk7XHJcblxyXG4gICAgICAgIC8vIOmZkOWItuebuOapn+evhOWcjVxyXG4gICAgICAgIHRhcmdldFggPSBjYy5taXNjLmNsYW1wZih0YXJnZXRYLCB0aGlzLm1pblgsIHRoaXMubWF4WCk7XHJcbiAgICAgICAgdGFyZ2V0WSA9IGNjLm1pc2MuY2xhbXBmKHRhcmdldFksIHRoaXMubWluWSwgdGhpcy5tYXhZKTtcclxuXHJcbiAgICAgICAgLy8g5bmz5ruR56e75YuV55u45qmfXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IGNjLnYzKHRhcmdldFgsIHRhcmdldFksIGN1cnJlbnRQb3Mueik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5L2/55SoIGxlcnAg5a+m54++5bmz5ruR56e75YuVXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoXHJcbiAgICAgICAgICAgIGNjLm1pc2MubGVycChjdXJyZW50UG9zLngsIHRhcmdldFBvcy54LCB0aGlzLnNtb290aFNwZWVkKSxcclxuICAgICAgICAgICAgY2MubWlzYy5sZXJwKGN1cnJlbnRQb3MueSwgdGFyZ2V0UG9zLnksIHRoaXMuc21vb3RoU3BlZWQpLFxyXG4gICAgICAgICAgICBjdXJyZW50UG9zLnpcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59ICJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ChatBubbleController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6347dWRfn1Aa6PnkdBLSu8d', 'ChatBubbleController');
// Script/ChatBubbleController.ts

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
var AudioManager_1 = require("./AudioManager");
var ChatBubbleController = /** @class */ (function (_super) {
    __extends(ChatBubbleController, _super);
    function ChatBubbleController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.friend = null;
        _this.bubbleSpriteFrame = null;
        _this.chatImageSpriteFrames = [];
        _this.followCamera = true;
        _this.openSound = null;
        _this.chatBubble = null;
        _this.chatImage = null;
        _this.currentImageIndex = 0;
        _this.DETECTION_RADIUS = 200;
        _this.BUBBLE_OFFSET = 120;
        _this.lastBubbleState = false;
        return _this;
    }
    ChatBubbleController.prototype.onLoad = function () {
        if (!this.player || !this.friend || !this.bubbleSpriteFrame || this.chatImageSpriteFrames.length === 0) {
            cc.error("Please assign all required components!");
            return;
        }
        // 關閉碰撞區域的顯示
        var physicsManager = cc.director.getPhysicsManager();
        if (physicsManager) {
            physicsManager.debugDrawFlags = 0;
        }
        this.createChatBubble();
        this.createChatImage();
    };
    ChatBubbleController.prototype.createChatBubble = function () {
        // 創建一個新的節點作為氣泡
        this.chatBubble = new cc.Node('Chat_Bubble');
        // 添加 Sprite 組件
        var sprite = this.chatBubble.addComponent(cc.Sprite);
        sprite.spriteFrame = this.bubbleSpriteFrame;
        // 添加按鈕組件
        var button = this.chatBubble.addComponent(cc.Button);
        // 設置父節點
        this.chatBubble.parent = this.friend;
        // 設置聊天氣泡的初始位置（在朋友頭頂上方）
        this.chatBubble.y = this.BUBBLE_OFFSET;
        // 確保氣泡在最上層
        this.chatBubble.zIndex = 999;
        // 初始時隱藏聊天氣泡
        this.chatBubble.active = false;
        // 添加點擊事件
        this.chatBubble.on(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
    };
    ChatBubbleController.prototype.createChatImage = function () {
        // 創建聊天圖片節點
        this.chatImage = new cc.Node('Chat_Image');
        // 添加 Sprite 組件
        var sprite = this.chatImage.addComponent(cc.Sprite);
        sprite.spriteFrame = this.chatImageSpriteFrames[0];
        // 設置父節點為 Canvas
        this.chatImage.parent = cc.director.getScene().getChildByName('Canvas');
        // 初始時隱藏圖片
        this.chatImage.active = false;
        // 確保圖片在最上層
        this.chatImage.zIndex = 1000;
        // 添加點擊事件（點擊圖片時顯示下一張或隱藏）
        this.chatImage.on(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
    };
    ChatBubbleController.prototype.onBubbleClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex = 0;
            var sprite = this.chatImage.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
            }
            this.chatImage.active = true;
            // 播放 Open.mp3 音效，音量設為 5
            if (this.openSound) {
                cc.audioEngine.setVolume(cc.audioEngine.playEffect(this.openSound, false), cc.audioEngine.getVolume(AudioManager_1.default.audioId));
            }
        }
    };
    ChatBubbleController.prototype.onImageClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex++;
            if (this.currentImageIndex < this.chatImageSpriteFrames.length) {
                // 顯示下一張圖片
                var sprite = this.chatImage.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
                }
            }
            else {
                // 已經是最後一張圖片，隱藏聊天圖片
                this.chatImage.active = false;
                this.currentImageIndex = 0;
            }
        }
    };
    ChatBubbleController.prototype.update = function () {
        if (!this.player || !this.friend || !this.chatBubble)
            return;
        if (this.followCamera) {
            var camera = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
            this.chatImage.x = camera.x;
        }
        // 將 Vec3 轉換為 Vec2
        var playerPos = new cc.Vec2(this.player.position.x, this.player.position.y);
        var friendPos = new cc.Vec2(this.friend.position.x, this.friend.position.y);
        // 計算玩家和朋友的距離
        var distance = this.getDistance(playerPos, friendPos);
        var shouldShow = distance <= this.DETECTION_RADIUS;
        // 根據距離顯示或隱藏聊天氣泡
        if (this.chatBubble.active !== shouldShow) {
            this.chatBubble.active = shouldShow;
            if (shouldShow) {
                // 確保氣泡在最上層
                this.chatBubble.zIndex = 999;
            }
        }
    };
    ChatBubbleController.prototype.getDistance = function (pos1, pos2) {
        var dx = pos1.x - pos2.x;
        var dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    ChatBubbleController.prototype.onDestroy = function () {
        if (this.chatBubble) {
            this.chatBubble.off(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
            this.chatBubble.destroy();
        }
        if (this.chatImage) {
            this.chatImage.off(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
            this.chatImage.destroy();
        }
    };
    __decorate([
        property(cc.Node)
    ], ChatBubbleController.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], ChatBubbleController.prototype, "friend", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ChatBubbleController.prototype, "bubbleSpriteFrame", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ChatBubbleController.prototype, "chatImageSpriteFrames", void 0);
    __decorate([
        property
    ], ChatBubbleController.prototype, "followCamera", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ChatBubbleController.prototype, "openSound", void 0);
    ChatBubbleController = __decorate([
        ccclass
    ], ChatBubbleController);
    return ChatBubbleController;
}(cc.Component));
exports.default = ChatBubbleController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGF0QnViYmxlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QywrQ0FBMEM7QUFHMUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUFvS0M7UUFsS0csWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLHVCQUFpQixHQUFtQixJQUFJLENBQUM7UUFHekMsMkJBQXFCLEdBQXFCLEVBQUUsQ0FBQztRQUc3QyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHVCQUFpQixHQUFXLENBQUMsQ0FBQztRQUNyQixzQkFBZ0IsR0FBVyxHQUFHLENBQUM7UUFDL0IsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFDckMscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBNEk3QyxDQUFDO0lBMUlHLHFDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEcsRUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDVjtRQUVELFlBQVk7UUFDWixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGNBQWMsR0FB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LElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFqS0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bUVBQ2dCO0lBR3pDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3VFQUNrQjtJQUc3QztRQURDLFFBQVE7OERBQ29CO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MkRBQ1E7SUFqQmQsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FvS3hDO0lBQUQsMkJBQUM7Q0FwS0QsQUFvS0MsQ0FwS2lELEVBQUUsQ0FBQyxTQUFTLEdBb0s3RDtrQkFwS29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSAnLi9BdWRpb01hbmFnZXInO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdEJ1YmJsZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZnJpZW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBidWJibGVTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgY2hhdEltYWdlU3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBmb2xsb3dDYW1lcmE6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBvcGVuU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGF0QnViYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hhdEltYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEltYWdlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERFVEVDVElPTl9SQURJVVM6IG51bWJlciA9IDIwMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQlVCQkxFX09GRlNFVDogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBsYXN0QnViYmxlU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5mcmllbmQgfHwgIXRoaXMuYnViYmxlU3ByaXRlRnJhbWUgfHwgdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGxlYXNlIGFzc2lnbiBhbGwgcmVxdWlyZWQgY29tcG9uZW50cyFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmXnOmWieeisOaSnuWNgOWfn+eahOmhr+ekulxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocGh5c2ljc01hbmFnZXIpIHtcclxuICAgICAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0QnViYmxlKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0SW1hZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNoYXRCdWJibGUoKSB7XHJcbiAgICAgICAgLy8g5Ym15bu65LiA5YCL5paw55qE56+A6bue5L2c54K65rCj5rOhXHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlID0gbmV3IGNjLk5vZGUoJ0NoYXRfQnViYmxlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5re75YqgIFNwcml0ZSDntYTku7ZcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRCdWJibGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5idWJibGVTcHJpdGVGcmFtZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDmt7vliqDmjInpiJXntYTku7ZcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNoYXRCdWJibGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u54i256+A6bueXHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLnBhcmVudCA9IHRoaXMuZnJpZW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOioree9ruiBiuWkqeawo+azoeeahOWIneWni+S9jee9ru+8iOWcqOaci+WPi+mgremgguS4iuaWue+8iVxyXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS55ID0gdGhpcy5CVUJCTEVfT0ZGU0VUO1xyXG5cclxuICAgICAgICAvLyDnorrkv53msKPms6HlnKjmnIDkuIrlsaRcclxuICAgICAgICB0aGlzLmNoYXRCdWJibGUuekluZGV4ID0gOTk5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWIneWni+aZgumaseiXj+iBiuWkqeawo+azoVxyXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1YmJsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ2hhdEltYWdlKCkge1xyXG4gICAgICAgIC8vIOWJteW7uuiBiuWkqeWclueJh+evgOm7nlxyXG4gICAgICAgIHRoaXMuY2hhdEltYWdlID0gbmV3IGNjLk5vZGUoJ0NoYXRfSW1hZ2UnKTtcclxuXHJcbiAgICAgICAgLy8g5re75YqgIFNwcml0ZSDntYTku7ZcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRJbWFnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lc1swXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDoqK3nva7niLbnr4Dpu57ngrogQ2FudmFzXHJcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5Yid5aeL5pmC6Zqx6JeP5ZyW54mHXHJcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOeiuuS/neWclueJh+WcqOacgOS4iuWxpFxyXG4gICAgICAgIHRoaXMuY2hhdEltYWdlLnpJbmRleCA9IDEwMDA7XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOm7nuaTiuS6i+S7tu+8iOm7nuaTiuWclueJh+aZgumhr+ekuuS4i+S4gOW8teaIlumaseiXj++8iVxyXG4gICAgICAgIHRoaXMuY2hhdEltYWdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkltYWdlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJ1YmJsZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXNbdGhpcy5jdXJyZW50SW1hZ2VJbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8g5pKt5pS+IE9wZW4ubXAzIOmfs+aViO+8jOmfs+mHj+ioreeCuiA1XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5Tb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5vcGVuU291bmQsIGZhbHNlKSwgY2MuYXVkaW9FbmdpbmUuZ2V0Vm9sdW1lKEF1ZGlvTWFuYWdlci5hdWRpb0lkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkltYWdlQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGF0SW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA8IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8g6aGv56S65LiL5LiA5by15ZyW54mHXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmNoYXRJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lc1t0aGlzLmN1cnJlbnRJbWFnZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOW3sue2k+aYr+acgOW+jOS4gOW8teWclueJh++8jOmaseiXj+iBiuWkqeWclueJh1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5mcmllbmQgfHwgIXRoaXMuY2hhdEJ1YmJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dDYW1lcmEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuZ2V0Q2hpbGRCeU5hbWUoJ01haW4gQ2FtZXJhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLnggPSBjYW1lcmEueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWwhyBWZWMzIOi9ieaPm+eCuiBWZWMyXHJcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gbmV3IGNjLlZlYzIodGhpcy5wbGF5ZXIucG9zaXRpb24ueCwgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY29uc3QgZnJpZW5kUG9zID0gbmV3IGNjLlZlYzIodGhpcy5mcmllbmQucG9zaXRpb24ueCwgdGhpcy5mcmllbmQucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIC8vIOioiOeul+eOqeWutuWSjOaci+WPi+eahOi3nembolxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZShwbGF5ZXJQb3MsIGZyaWVuZFBvcyk7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvdyA9IGRpc3RhbmNlIDw9IHRoaXMuREVURUNUSU9OX1JBRElVUztcclxuXHJcbiAgICAgICAgLy8g5qC55pOa6Led6Zui6aGv56S65oiW6Zqx6JeP6IGK5aSp5rCj5rOhXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdEJ1YmJsZS5hY3RpdmUgIT09IHNob3VsZFNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGF0QnViYmxlLmFjdGl2ZSA9IHNob3VsZFNob3c7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRTaG93KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnorrkv53msKPms6HlnKjmnIDkuIrlsaRcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhdEJ1YmJsZS56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREaXN0YW5jZShwb3MxOiBjYy5WZWMyLCBwb3MyOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBkeCA9IHBvczEueCAtIHBvczIueDtcclxuICAgICAgICBjb25zdCBkeSA9IHBvczEueSAtIHBvczIueTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdEJ1YmJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1YmJsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGF0SW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2Uub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkltYWdlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdEltYWdlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GotoLeaderboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a7113ejq5JkZ5Q7VrSuSKk', 'GotoLeaderboard');
// Script/GotoLeaderboard.ts

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
var GotoLeaderboard = /** @class */ (function (_super) {
    __extends(GotoLeaderboard, _super);
    function GotoLeaderboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GotoLeaderboard.prototype.onLoad = function () {
        // 註冊按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    GotoLeaderboard.prototype.onButtonClick = function () {
        // 切換場景
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_Leaderboard");
        }
        else {
            cc.director.loadScene("Scene000_Leaderboard");
        }
    };
    GotoLeaderboard.prototype.onDestroy = function () {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    GotoLeaderboard = __decorate([
        ccclass
    ], GotoLeaderboard);
    return GotoLeaderboard;
}(cc.Component));
exports.default = GotoLeaderboard;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHb3RvTGVhZGVyYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7O0lBcUJBLENBQUM7SUFuQkcsZ0NBQU0sR0FBTjtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLE9BQU87UUFDUCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsSUFBSSxVQUFVLEVBQUU7WUFDWixVQUFVLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNuRzthQUFNO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksU0FBUztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFwQmdCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FxQm5DO0lBQUQsc0JBQUM7Q0FyQkQsQUFxQkMsQ0FyQjRDLEVBQUUsQ0FBQyxTQUFTLEdBcUJ4RDtrQkFyQm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR290b0xlYWRlcmJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g6Ki75YaK5oyJ6YiV6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIC8vIOWIh+aPm+WgtOaZr1xyXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBjYy5maW5kKFwiQ2FudmFzL1RyYW5zaXRpb25cIik7XHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi5nZXRDb21wb25lbnQoXCJUcmFuc2l0aW9uTWFuYWdlclwiKS5wbGF5VHJhbnNPdXRBbmRDaGFuZ2VTY2VuZShcIlNjZW5lMDAwX0xlYWRlcmJvYXJkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lMDAwX0xlYWRlcmJvYXJkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g56e76Zmk5LqL5Lu255uj6IG9XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Leaderboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMZWFkZXJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qyx3Q0FBd0M7QUFDeEMsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQUksVUFBVSxDQUFDO0FBQ2YsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7QUFHL0I7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFpRkM7UUE5RUcsU0FBRyxHQUFpQixJQUFJLENBQUM7O0lBOEU3QixDQUFDO0lBNUVHLG1DQUFtQztJQUNuQywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixxQ0FBcUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3BELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLHNDQUFnQixHQUFoQjtRQUNJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELDhDQUE4QztJQUM5Qyw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksa0JBQWtCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFD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QVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FpRi9CO0lBQUQsa0JBQUM7Q0FqRkQsQUFpRkMsQ0FqRndDLEVBQUUsQ0FBQyxTQUFTLEdBaUZwRDtrQkFqRm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8vIEdsb2JhbCB2YXJpYWJsZXMgZm9yIGxlYWRlcmJvYXJkIGRhdGFcclxudmFyIGxlYWRlcmJvYXJkTGlzdCA9IFtdO1xyXG52YXIgc29ydGVkTGlzdDtcclxudmFyIGlzTGVhZGVyYm9hcmRSZWFkeSA9IGZhbHNlO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhZGVyYm9hcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIENhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgc3RhcnRzXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0TGVhZGVyYm9hcmQoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICB0aGlzLmxvYWRMZWFkZXJib2FyZERhdGEoKTtcclxuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHF1aXQgYnV0dG9uXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9xdWl0XCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTWVudVNjZW5lKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgbGVhZGVyYm9hcmQgZGF0YVxyXG4gICAgcmVzZXRMZWFkZXJib2FyZCgpIHtcclxuICAgICAgICBsZWFkZXJib2FyZExpc3QgPSBbXTtcclxuICAgICAgICBzb3J0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICBpc0xlYWRlcmJvYXJkUmVhZHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgbGVhZGVyYm9hcmQgZGlzcGxheSBpZiBkYXRhIGlzIHJlYWR5XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoaXNMZWFkZXJib2FyZFJlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGVhZGVyYm9hcmREaXNwbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBsYXkgYmFja2dyb3VuZCBtdXNpY1xyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgbWVudSBzY2VuZVxyXG4gICAgcHJpdmF0ZSBsb2FkTWVudVNjZW5lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lMDAwX1N0YXJ0U2NlbmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBsZWFkZXJib2FyZCBkYXRhIGZyb20gRmlyZWJhc2VcclxuICAgIHByaXZhdGUgbG9hZExlYWRlcmJvYXJkRGF0YSgpIHtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2Vyc1JlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKFwidXNlcl9saXN0L1wiKTtcclxuICAgICAgICAgICAgdXNlcnNSZWYub25jZSgndmFsdWUnKS50aGVuKGZ1bmN0aW9uIChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICAgICAgbGVhZGVyYm9hcmRMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhZGVyYm9hcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZWxlbWVudC52YWwoKS5lbWFpbCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5X3RpbWU6IGVsZW1lbnQudmFsKCkucGxheV90aW1lIHx8IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYXRoX2NvdW50OiBlbGVtZW50LnZhbCgpLmRlYXRoX2NvdW50IHx8IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNvcnRlZExpc3QgPSBsZWFkZXJib2FyZExpc3Quc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5kZWF0aF9jb3VudCAtIGIuZGVhdGhfY291bnQ7IH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlzTGVhZGVyYm9hcmRSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gVXBkYXRlIGxlYWRlcmJvYXJkIFVJIHdpdGggc29ydGVkIGRhdGFcclxuICAgIHByaXZhdGUgdXBkYXRlTGVhZGVyYm9hcmREaXNwbGF5KCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTWF0aC5taW4oc29ydGVkTGlzdC5sZW5ndGgsIDUpOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVBhdGggPSBcIkNhbnZhcy9sZWFkZXJib2FyZF9iYWNrZ3JvdW5kL1wiICsgKGkgKyAxKSArIFwiL1wiO1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbE5vZGUgPSBjYy5maW5kKGJhc2VQYXRoICsgXCJlbWFpbFwiKTtcclxuICAgICAgICAgICAgY29uc3QgZGVhdGhDb3VudE5vZGUgPSBjYy5maW5kKGJhc2VQYXRoICsgXCJkZWF0aF9jb3VudFwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoIWVtYWlsTm9kZSB8fCAhZGVhdGhDb3VudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGDmib7kuI3liLDnrKwke2krMX3lkI3nmoTnr4Dpu55gKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgZW1haWxMYWJlbCA9IGVtYWlsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWF0aENvdW50TGFiZWwgPSBkZWF0aENvdW50Tm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgZW1haWxMYWJlbC5zdHJpbmcgPSBzb3J0ZWRMaXN0W2ldLmVtYWlsO1xyXG4gICAgICAgICAgICBkZWF0aENvdW50TGFiZWwuc3RyaW5nID0gc29ydGVkTGlzdFtpXS5kZWF0aF9jb3VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function () {
            alert("Login Success");
            var transition = cc.find("Canvas/Transition");
            if (transition) {
                transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_StartScene");
            }
            else {
                cc.director.loadScene("Scene000_StartScene");
            }
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQVk1QztJQUFtQyx5QkFBWTtJQUEvQzs7SUEyRUEsQ0FBQztJQXpFRyxvQ0FBb0M7SUFDcEMscURBQXFEO0lBRXJELHVCQUF1QjtJQUV2QixxQkFBSyxHQUFMO1FBQ0ksa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTVCLGtEQUFrRDtRQUNsRCwwQ0FBMEM7UUFDMUMsc0JBQXNCO1FBQ3RCLElBQUk7SUFDUixDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQ0FBb0IsR0FBNUI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQzVCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FDUCxDQUFDO1FBRUYsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsQ0FDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUM1QixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0ssd0JBQVEsR0FBaEI7UUFDSSxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDeEYsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRTlGLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3RELElBQUksQ0FBQztZQUNGLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN2QixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDaEQsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osVUFBVSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDbEc7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxxQkFBcUI7WUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFhLEdBQWI7UUFDSSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQsSUFBSSxXQUFXLEVBQUU7WUFDYixXQUFXLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDN0Y7YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQW5FZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTJFekI7SUFBRCxZQUFDO0NBM0VELEFBMkVDLENBM0VrQyxFQUFFLENBQUMsU0FBUyxHQTJFOUM7a0JBM0VvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLy8gSW1wb3J0IGZpcmViYXNlIGlmIHVzaW5nIG1vZHVsZXMsIG9yIGRlY2xhcmUgaXQgaWYgaW5jbHVkZWQgdmlhIHNjcmlwdCB0YWdcclxuLy8gVW5jb21tZW50IHRoZSBhcHByb3ByaWF0ZSBsaW5lIGJlbG93OlxyXG5cclxuLy8gaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG4vLyBpbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG4vLyBPUiwgaWYgZmlyZWJhc2UgaXMgaW5jbHVkZWQgZ2xvYmFsbHkgdmlhIGEgc2NyaXB0IHRhZzpcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgLy8gYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsOyAvLyBCYWNrZ3JvdW5kIG11c2ljIGNsaXBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLU1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQnV0dG9uRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIC8vIC8vIFBsYXkgYmFja2dyb3VuZCBtdXNpYyBpZiBub3QgYWxyZWFkeSBwbGF5aW5nXHJcbiAgICAgICAgLy8gaWYgKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIG1vdXNlIGRvd24gZXZlbnRzIGZvciBidXR0b25zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJCdXR0b25FdmVudHMoKSB7XHJcbiAgICAgICAgY2MuZmluZChcInNtYWxsX2NhbnZhc19iZy9xdWl0XCIpLm9uKFxyXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLFxyXG4gICAgICAgICAgICB0aGlzLmxvYWRNZW51U2NlbmUsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjYy5maW5kKFwic21hbGxfY2FudmFzX2JnL3N1Ym1pdFwiKS5vbihcclxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTixcclxuICAgICAgICAgICAgdGhpcy5sb2dpbk5vdyxcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgdXNlciBsb2dpbiB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvZ2luTm93KCkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gY2MuZmluZChcInNtYWxsX2NhbnZhc19iZy9lbWFpbC9URVhUX0xBQkVMXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY2MuZmluZChcInNtYWxsX2NhbnZhc19iZy9wYXNzd29yZC9URVhUX0xBQkVMXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG5cclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkxvZ2luIFN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gY2MuZmluZChcIkNhbnZhcy9UcmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLmdldENvbXBvbmVudChcIlRyYW5zaXRpb25NYW5hZ2VyXCIpLnBsYXlUcmFuc091dEFuZENoYW5nZVNjZW5lKFwiU2NlbmUwMDBfU3RhcnRTY2VuZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUwMDBfU3RhcnRTY2VuZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBtZW51IHNjZW5lXHJcbiAgICAgKi9cclxuICAgIGxvYWRNZW51U2NlbmUoKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbjIgPSBjYy5maW5kKFwiQ2FudmFzL1RyYW5zaXRpb25cIik7XHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb24yKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24yLmdldENvbXBvbmVudChcIlRyYW5zaXRpb25NYW5hZ2VyXCIpLnBsYXlUcmFuc091dEFuZENoYW5nZVNjZW5lKFwiU2NlbmUwMDBfTWVudVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTY2VuZTAwMF9NZW51XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIFBsYXkgYmFja2dyb3VuZCBtdXNpY1xyXG4gICAgLy8gICovXHJcbiAgICAvLyBwbGF5QkdNKCkge1xyXG4gICAgLy8gICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PauseMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ea80nvHT1CYL0/qcu+cCQE', 'PauseMenu');
// Script/PauseMenu.ts

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
var PauseMenu = /** @class */ (function (_super) {
    __extends(PauseMenu, _super);
    function PauseMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resumeButton = null;
        _this.quitButton = null;
        return _this;
    }
    PauseMenu.prototype.start = function () {
        if (this.resumeButton) {
            this.resumeButton.on(cc.Node.EventType.TOUCH_END, this.onResumeClicked, this);
        }
        if (this.quitButton) {
            this.quitButton.on(cc.Node.EventType.TOUCH_END, this.onQuitClicked, this);
        }
    };
    PauseMenu.prototype.onResumeClicked = function () {
        var pauseManager = cc.find("Canvas").getComponent("PauseManager");
        if (pauseManager) {
            pauseManager.togglePause();
        }
    };
    PauseMenu.prototype.onQuitClicked = function () {
        var pauseManager = cc.find("Canvas").getComponent("PauseManager");
        if (pauseManager) {
            pauseManager.quitToMenu();
        }
    };
    PauseMenu.prototype.onDestroy = function () {
        // Clean up event listeners
        if (this.resumeButton) {
            this.resumeButton.off(cc.Node.EventType.TOUCH_END, this.onResumeClicked, this);
        }
        if (this.quitButton) {
            this.quitButton.off(cc.Node.EventType.TOUCH_END, this.onQuitClicked, this);
        }
    };
    __decorate([
        property(cc.Node)
    ], PauseMenu.prototype, "resumeButton", void 0);
    __decorate([
        property(cc.Node)
    ], PauseMenu.prototype, "quitButton", void 0);
    PauseMenu = __decorate([
        ccclass
    ], PauseMenu);
    return PauseMenu;
}(cc.Component));
exports.default = PauseMenu;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQYXVzZU1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF5Q0M7UUF2Q0csa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBb0MvQixDQUFDO0lBbENHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakY7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0U7SUFDTCxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNJLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksWUFBWSxFQUFFO1lBQ2QsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRSxJQUFJLFlBQVksRUFBRTtZQUNkLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksMkJBQTJCO1FBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsRjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RTtJQUNMLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBTFYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlDN0I7SUFBRCxnQkFBQztDQXpDRCxBQXlDQyxDQXpDc0MsRUFBRSxDQUFDLFNBQVMsR0F5Q2xEO2tCQXpDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZU1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZXN1bWVCdXR0b246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcXVpdEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzdW1lQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdW1lQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJlc3VtZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucXVpdEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXRCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uUXVpdENsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc3VtZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgY29uc3QgcGF1c2VNYW5hZ2VyID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoXCJQYXVzZU1hbmFnZXJcIik7XHJcbiAgICAgICAgaWYgKHBhdXNlTWFuYWdlcikge1xyXG4gICAgICAgICAgICBwYXVzZU1hbmFnZXIudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25RdWl0Q2xpY2tlZCgpIHtcclxuICAgICAgICBjb25zdCBwYXVzZU1hbmFnZXIgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcIlBhdXNlTWFuYWdlclwiKTtcclxuICAgICAgICBpZiAocGF1c2VNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHBhdXNlTWFuYWdlci5xdWl0VG9NZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBDbGVhbiB1cCBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICBpZiAodGhpcy5yZXN1bWVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bWVCdXR0b24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJlc3VtZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucXVpdEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXRCdXR0b24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblF1aXRDbGlja2VkLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PressStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '642deZXJTpASJndCgo+Frm+', 'PressStart');
// Script/PressStart.ts

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
var PressStart = /** @class */ (function (_super) {
    __extends(PressStart, _super);
    function PressStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PressStart.prototype.onLoad = function () {
        // 註冊按鈕點擊事件
        this.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    PressStart.prototype.onButtonClick = function () {
        // 切換場景
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene001_Home_Outside");
        }
        else {
            cc.director.loadScene("Scene001_Home_Outside");
        }
    };
    PressStart.prototype.onDestroy = function () {
        // 移除事件監聽
        this.node.off(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    PressStart = __decorate([
        ccclass
    ], PressStart);
    return PressStart;
}(cc.Component));
exports.default = PressStart;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQcmVzc1N0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQXFCQSxDQUFDO0lBbkJHLDJCQUFNLEdBQU47UUFDSSxXQUFXO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDSSxPQUFPO1FBQ1AsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksVUFBVSxFQUFFO1lBQ1osVUFBVSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDcEc7YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBcEJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBcUI5QjtJQUFELGlCQUFDO0NBckJELEFBcUJDLENBckJ1QyxFQUFFLENBQUMsU0FBUyxHQXFCbkQ7a0JBckJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXNzU3RhcnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDoqLvlhormjInpiJXpu57mk4rkuovku7ZcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgLy8g5YiH5o+b5aC05pmvXHJcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvVHJhbnNpdGlvblwiKTtcclxuICAgICAgICBpZiAodHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLmdldENvbXBvbmVudChcIlRyYW5zaXRpb25NYW5hZ2VyXCIpLnBsYXlUcmFuc091dEFuZENoYW5nZVNjZW5lKFwiU2NlbmUwMDFfSG9tZV9PdXRzaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lMDAxX0hvbWVfT3V0c2lkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIOenu+mZpOS6i+S7tuebo+iBvVxyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG59ICJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDOztJQThEQSxDQUFDO0lBNURDLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBRTVCLG9CQUFLLEdBQUw7UUFDRSx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFNUIsa0RBQWtEO1FBQ2xELDBDQUEwQztRQUMxQyxvQkFBb0I7UUFDcEIsSUFBSTtJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNLLG1DQUFvQixHQUE1QjtRQUFBLGlCQVdDO1FBVkMsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVwRCxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUMzQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDNUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFjLEdBQWQ7UUFDRSxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsSUFBSSxVQUFVLEVBQUU7WUFDWixVQUFVLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM3RjthQUFNO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILDhCQUFlLEdBQWY7UUFDRSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQsSUFBSSxXQUFXLEVBQUU7WUFDYixXQUFXLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMvRjthQUFNO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUF0RGtCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4RHhCO0lBQUQsV0FBQztDQTlERCxBQThEQyxDQTlEaUMsRUFBRSxDQUFDLFNBQVMsR0E4RDdDO2tCQTlEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gLy8gQmFja2dyb3VuZCBtdXNpYyBhdWRpbyBjbGlwXHJcbiAgLy8gQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgLy8gYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICBzdGFydCgpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBmb3IgbG9naW4gYW5kIHNpZ251cCBidXR0b25zXHJcbiAgICB0aGlzLnJlZ2lzdGVyQnV0dG9uRXZlbnRzKCk7XHJcblxyXG4gICAgLy8gLy8gUGxheSBiYWNrZ3JvdW5kIG11c2ljIGlmIG5vdCBhbHJlYWR5IHBsYXlpbmdcclxuICAgIC8vIGlmICghY2MuYXVkaW9FbmdpbmUuaXNNdXNpY1BsYXlpbmcoKSkge1xyXG4gICAgLy8gICB0aGlzLnBsYXlCR00oKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIG1vdXNlIGRvd24gZXZlbnRzIGZvciBMb2dpbiBhbmQgU2lnbnVwIGJ1dHRvbnNcclxuICAgKi9cclxuICBwcml2YXRlIHJlZ2lzdGVyQnV0dG9uRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9naW5CdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL0xvZ2luQnV0dG9uXCIpO1xyXG4gICAgY29uc3Qgc2lnbnVwQnV0dG9uID0gY2MuZmluZChcIkNhbnZhcy9TaWdudXBCdXR0b25cIik7XHJcblxyXG4gICAgbG9naW5CdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRMb2dpblNjZW5lKCk7XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICBzaWdudXBCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRTaWdudXBTY2VuZSgpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIHRoZSBsb2dpbiBzY2VuZVxyXG4gICAqL1xyXG4gIGxvYWRMb2dpblNjZW5lKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvVHJhbnNpdGlvblwiKTtcclxuICAgIGlmICh0cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbi5nZXRDb21wb25lbnQoXCJUcmFuc2l0aW9uTWFuYWdlclwiKS5wbGF5VHJhbnNPdXRBbmRDaGFuZ2VTY2VuZShcIlNjZW5lMDAwX0xvZ2luXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTY2VuZTAwMF9Mb2dpblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgdGhlIHNpZ251cCBzY2VuZVxyXG4gICAqL1xyXG4gIGxvYWRTaWdudXBTY2VuZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRyYW5zaXRpb24yID0gY2MuZmluZChcIkNhbnZhcy9UcmFuc2l0aW9uXCIpO1xyXG4gICAgaWYgKHRyYW5zaXRpb24yKSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjIuZ2V0Q29tcG9uZW50KFwiVHJhbnNpdGlvbk1hbmFnZXJcIikucGxheVRyYW5zT3V0QW5kQ2hhbmdlU2NlbmUoXCJTY2VuZTAwMF9TaWdudXBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lMDAwX1NpZ251cFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC8qKlxyXG4gIC8vICAqIFBsYXkgYmFja2dyb3VuZCBtdXNpYyBpbiBhIGxvb3BcclxuICAvLyAgKi9cclxuICAvLyBwbGF5QkdNKCk6IHZvaWQge1xyXG4gIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gIC8vIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Transport.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '418acFo37pMXZD+Hf+1dbqx', 'Transport');
// Script/Transport.ts

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
var AudioManager_1 = require("./AudioManager");
var Door_to_002 = /** @class */ (function (_super) {
    __extends(Door_to_002, _super);
    function Door_to_002() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.door = null;
        _this.doorSpriteFrame = null;
        _this.promptSpriteFrame = null;
        _this.destinationScene = "";
        _this.transportSound = null;
        _this.DETECTION_RADIUS = 70;
        _this.DOOR_OFFSET = 120;
        _this.lastDoorState = false;
        _this.promptImage = null;
        return _this;
    }
    Door_to_002.prototype.onLoad = function () {
        if (!this.player || !this.door || !this.doorSpriteFrame || !this.promptSpriteFrame) {
            cc.error("Please assign all required components!");
            return;
        }
        // 關閉碰撞區域的顯示
        var physicsManager = cc.director.getPhysicsManager();
        if (physicsManager) {
            physicsManager.debugDrawFlags = 0;
        }
        this.setupDoor();
        this.createPromptImage();
    };
    Door_to_002.prototype.setupDoor = function () {
        // 添加 Sprite 組件
        var sprite = this.door.addComponent(cc.Sprite);
        sprite.spriteFrame = this.doorSpriteFrame;
    };
    Door_to_002.prototype.createPromptImage = function () {
        // 創建提示圖片節點
        this.promptImage = new cc.Node('Prompt_Image');
        // 添加 Sprite 組件
        var sprite = this.promptImage.addComponent(cc.Sprite);
        sprite.spriteFrame = this.promptSpriteFrame;
        // 添加按鈕組件
        var button = this.promptImage.addComponent(cc.Button);
        // 設置父節點為門
        this.promptImage.parent = this.door;
        // 設置位置在門的正上方
        this.promptImage.setPosition(cc.v2(0, this.DOOR_OFFSET + 60));
        // 確保圖片在最上層
        this.promptImage.zIndex = 1000;
        // 初始時隱藏圖片
        this.promptImage.active = false;
        // 添加點擊事件
        this.promptImage.on(cc.Node.EventType.TOUCH_END, this.onPromptClicked, this);
    };
    Door_to_002.prototype.onPromptClicked = function () {
        // 播放 Open.mp3 音效，音量設為 2
        if (this.transportSound) {
            cc.audioEngine.setVolume(cc.audioEngine.playEffect(this.transportSound, false), cc.audioEngine.getVolume(AudioManager_1.default.audioId));
        }
        // 切換到場景 Scene002_Home_1F
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene(this.destinationScene);
        }
        else {
            cc.director.loadScene(this.destinationScene);
        }
    };
    Door_to_002.prototype.update = function () {
        if (!this.player || !this.door || !this.promptImage)
            return;
        // 將 Vec3 轉換為 Vec2
        var playerPos = new cc.Vec2(this.player.position.x, this.player.position.y);
        var doorPos = new cc.Vec2(this.door.position.x, this.door.position.y);
        // 計算玩家和門的距離
        var distance = this.getDistance(playerPos, doorPos);
        var shouldShow = distance <= this.DETECTION_RADIUS;
        // 根據距離顯示或隱藏提示圖片
        if (this.promptImage.active !== shouldShow) {
            this.promptImage.active = shouldShow;
            if (shouldShow) {
                // 確保提示圖片在最上層
                this.promptImage.zIndex = 1000;
            }
        }
    };
    Door_to_002.prototype.getDistance = function (pos1, pos2) {
        var dx = pos1.x - pos2.x;
        var dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Door_to_002.prototype.onDestroy = function () {
        if (this.promptImage) {
            this.promptImage.off(cc.Node.EventType.TOUCH_END, this.onPromptClicked, this);
            this.promptImage.destroy();
        }
    };
    __decorate([
        property(cc.Node)
    ], Door_to_002.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], Door_to_002.prototype, "door", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Door_to_002.prototype, "doorSpriteFrame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Door_to_002.prototype, "promptSpriteFrame", void 0);
    __decorate([
        property
    ], Door_to_002.prototype, "destinationScene", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Door_to_002.prototype, "transportSound", void 0);
    Door_to_002 = __decorate([
        ccclass
    ], Door_to_002);
    return Door_to_002;
}(cc.Component));
exports.default = Door_to_002;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUcmFuc3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsK0NBQTBDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBbUhDO1FBakhHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUV6QyxzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFFOUIsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBRW5CLHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUNuQyxtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFrR3hDLENBQUM7SUFoR0csNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDaEYsRUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDVjtRQUVELFlBQVk7UUFDWixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLCtCQUFTLEdBQWpCO1FBQ0ksZUFBZTtRQUNmLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUMsQ0FBQztJQUVPLHVDQUFpQixHQUF6QjtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUvQyxlQUFlO1FBQ2YsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBRTVDLFNBQVM7UUFDVCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEQsVUFBVTtRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFcEMsYUFBYTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RCxXQUFXO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRS9CLFVBQVU7UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFaEMsU0FBUztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTyxxQ0FBZSxHQUF2QjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxzQkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDbkk7UUFDRCx5QkFBeUI7UUFDekIsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksVUFBVSxFQUFFO1lBQ1osVUFBVSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2xHO2FBQU07WUFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRTVELGtCQUFrQjtRQUNsQixJQUFNLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQU0sT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEUsWUFBWTtRQUNaLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQU0sVUFBVSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFckQsZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztZQUNyQyxJQUFJLFVBQVUsRUFBRTtnQkFDWixhQUFhO2dCQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNsQztTQUNKO0lBQ0wsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLElBQWEsRUFBRSxJQUFhO1FBQzVDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBaEhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNjO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQ2dCO0lBRXpDO1FBREMsUUFBUTt5REFDcUI7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt1REFDYTtJQVpuQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUgvQjtJQUFELGtCQUFDO0NBbkhELEFBbUhDLENBbkh3QyxFQUFFLENBQUMsU0FBUyxHQW1IcEQ7a0JBbkhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tICcuL0F1ZGlvTWFuYWdlcic7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb29yX3RvXzAwMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZG9vclNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcm9tcHRTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkZXN0aW5hdGlvblNjZW5lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHRyYW5zcG9ydFNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgREVURUNUSU9OX1JBRElVUzogbnVtYmVyID0gNzA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERPT1JfT0ZGU0VUOiBudW1iZXIgPSAxMjA7XHJcbiAgICBwcml2YXRlIGxhc3REb29yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcHJvbXB0SW1hZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyIHx8ICF0aGlzLmRvb3IgfHwgIXRoaXMuZG9vclNwcml0ZUZyYW1lIHx8ICF0aGlzLnByb21wdFNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGxlYXNlIGFzc2lnbiBhbGwgcmVxdWlyZWQgY29tcG9uZW50cyFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmXnOmWieeisOaSnuWNgOWfn+eahOmhr+ekulxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocGh5c2ljc01hbmFnZXIpIHtcclxuICAgICAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cERvb3IoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVByb21wdEltYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cERvb3IoKSB7XHJcbiAgICAgICAgLy8g5re75YqgIFNwcml0ZSDntYTku7ZcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLmRvb3IuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5kb29yU3ByaXRlRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9tcHRJbWFnZSgpIHtcclxuICAgICAgICAvLyDlibXlu7rmj5DnpLrlnJbniYfnr4Dpu55cclxuICAgICAgICB0aGlzLnByb21wdEltYWdlID0gbmV3IGNjLk5vZGUoJ1Byb21wdF9JbWFnZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOa3u+WKoCBTcHJpdGUg57WE5Lu2XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5wcm9tcHRJbWFnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnByb21wdFNwcml0ZUZyYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOa3u+WKoOaMiemIlee1hOS7tlxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMucHJvbXB0SW1hZ2UuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u54i256+A6bue54K66ZaAXHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5wYXJlbnQgPSB0aGlzLmRvb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u5L2N572u5Zyo6ZaA55qE5q2j5LiK5pa5XHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5zZXRQb3NpdGlvbihjYy52MigwLCB0aGlzLkRPT1JfT0ZGU0VUICsgNjApKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDnorrkv53lnJbniYflnKjmnIDkuIrlsaRcclxuICAgICAgICB0aGlzLnByb21wdEltYWdlLnpJbmRleCA9IDEwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5Yid5aeL5pmC6Zqx6JeP5ZyW54mHXHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Qcm9tcHRDbGlja2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUHJvbXB0Q2xpY2tlZCgpIHtcclxuICAgICAgICAvLyDmkq3mlL4gT3Blbi5tcDMg6Z+z5pWI77yM6Z+z6YeP6Kit54K6IDJcclxuICAgICAgICBpZiAodGhpcy50cmFuc3BvcnRTb3VuZCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnRyYW5zcG9ydFNvdW5kLCBmYWxzZSksIGNjLmF1ZGlvRW5naW5lLmdldFZvbHVtZShBdWRpb01hbmFnZXIuYXVkaW9JZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliIfmj5vliLDloLTmma8gU2NlbmUwMDJfSG9tZV8xRlxyXG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBjYy5maW5kKFwiQ2FudmFzL1RyYW5zaXRpb25cIik7XHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi5nZXRDb21wb25lbnQoXCJUcmFuc2l0aW9uTWFuYWdlclwiKS5wbGF5VHJhbnNPdXRBbmRDaGFuZ2VTY2VuZSh0aGlzLmRlc3RpbmF0aW9uU2NlbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLmRlc3RpbmF0aW9uU2NlbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5kb29yIHx8ICF0aGlzLnByb21wdEltYWdlKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOWwhyBWZWMzIOi9ieaPm+eCuiBWZWMyXHJcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gbmV3IGNjLlZlYzIodGhpcy5wbGF5ZXIucG9zaXRpb24ueCwgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY29uc3QgZG9vclBvcyA9IG5ldyBjYy5WZWMyKHRoaXMuZG9vci5wb3NpdGlvbi54LCB0aGlzLmRvb3IucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIC8vIOioiOeul+eOqeWutuWSjOmWgOeahOi3nembolxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZXREaXN0YW5jZShwbGF5ZXJQb3MsIGRvb3JQb3MpO1xyXG4gICAgICAgIGNvbnN0IHNob3VsZFNob3cgPSBkaXN0YW5jZSA8PSB0aGlzLkRFVEVDVElPTl9SQURJVVM7XHJcblxyXG4gICAgICAgIC8vIOagueaTmui3nemboumhr+ekuuaIlumaseiXj+aPkOekuuWclueJh1xyXG4gICAgICAgIGlmICh0aGlzLnByb21wdEltYWdlLmFjdGl2ZSAhPT0gc2hvdWxkU2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLnByb21wdEltYWdlLmFjdGl2ZSA9IHNob3VsZFNob3c7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRTaG93KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnorrkv53mj5DnpLrlnJbniYflnKjmnIDkuIrlsaRcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0SW1hZ2UuekluZGV4ID0gMTAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERpc3RhbmNlKHBvczE6IGNjLlZlYzIsIHBvczI6IGNjLlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGR4ID0gcG9zMS54IC0gcG9zMi54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gcG9zMS55IC0gcG9zMi55O1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9tcHRJbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb21wdEltYWdlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Qcm9tcHRDbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9tcHRJbWFnZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PauseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c933au3yvJPUJWqUu+H4lOK', 'PauseManager');
// Script/PauseManager.ts

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
var AudioManager_1 = require("./AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PauseManager = /** @class */ (function (_super) {
    __extends(PauseManager, _super);
    function PauseManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pauseMenu = null;
        _this.pauseButton = null;
        _this.volumeUpButton = null;
        _this.volumeDownButton = null;
        _this.volumeLabel = null;
        _this.isPaused = false;
        _this.audioManager = null;
        return _this;
    }
    PauseManager.prototype.start = function () {
        var _this = this;
        // Initialize pause menu
        if (this.pauseMenu) {
            this.pauseMenu.active = false;
        }
        // Update volume label
        this.updateVolumeLabel();
        // Register pause button event
        if (this.pauseButton) {
            this.pauseButton.on(cc.Node.EventType.TOUCH_END, function () {
                _this.togglePause();
            }, this);
        }
        // Register volume control events
        if (this.volumeUpButton) {
            this.volumeUpButton.on(cc.Node.EventType.TOUCH_END, this.increaseVolume, this);
        }
        if (this.volumeDownButton) {
            this.volumeDownButton.on(cc.Node.EventType.TOUCH_END, this.decreaseVolume, this);
        }
        // Register resume button event
        var resumeButton = cc.find("Canvas/PauseMenu/ResumeButton");
        if (resumeButton) {
            resumeButton.on(cc.Node.EventType.TOUCH_END, function () {
                _this.togglePause();
            }, this);
        }
        // Register quit button event
        var quitButton = cc.find("Canvas/PauseMenu/QuitButton");
        if (quitButton) {
            quitButton.on(cc.Node.EventType.TOUCH_END, function () {
                _this.quitToMenu();
            }, this);
        }
    };
    PauseManager.prototype.togglePause = function () {
        this.isPaused = !this.isPaused;
        if (this.pauseMenu) {
            this.pauseMenu.active = this.isPaused;
        }
        if (this.isPaused) {
            cc.director.pause();
        }
        else {
            cc.director.resume();
        }
    };
    PauseManager.prototype.quitToMenu = function () {
        cc.director.resume();
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene("Scene000_StartScene");
        }
        else {
            cc.director.loadScene("Scene000_StartScene");
        }
    };
    PauseManager.prototype.increaseVolume = function () {
        var newVolume = Math.min(1.0, cc.audioEngine.getVolume(AudioManager_1.default.audioId) + 0.1);
        cc.audioEngine.setVolume(AudioManager_1.default.audioId, newVolume);
        this.updateVolumeLabel();
    };
    PauseManager.prototype.decreaseVolume = function () {
        var newVolume = Math.max(0.0, cc.audioEngine.getVolume(AudioManager_1.default.audioId) - 0.1);
        cc.audioEngine.setVolume(AudioManager_1.default.audioId, newVolume);
        this.updateVolumeLabel();
    };
    PauseManager.prototype.updateVolumeLabel = function () {
        var volume10 = Math.round(cc.audioEngine.getVolume(AudioManager_1.default.audioId) * 10);
        this.volumeLabel.string = " " + volume10 + " ";
    };
    PauseManager.prototype.onDestroy = function () {
        // Clean up event listeners
        if (this.pauseButton) {
            this.pauseButton.off(cc.Node.EventType.TOUCH_END);
        }
        if (this.volumeUpButton) {
            this.volumeUpButton.off(cc.Node.EventType.TOUCH_END);
        }
        if (this.volumeDownButton) {
            this.volumeDownButton.off(cc.Node.EventType.TOUCH_END);
        }
        var resumeButton = cc.find("Canvas/PauseMenu/ResumeButton");
        if (resumeButton) {
            resumeButton.off(cc.Node.EventType.TOUCH_END);
        }
        var quitButton = cc.find("Canvas/PauseMenu/QuitButton");
        if (quitButton) {
            quitButton.off(cc.Node.EventType.TOUCH_END);
        }
    };
    PauseManager.prototype.update = function () {
        var camera = cc.find("Canvas/Main Camera");
        if (camera) {
            // Add offset relative to camera position using Vec3
            this.node.position = camera.position.add(cc.v3(668, 362, 0));
            if (this.pauseMenu) {
                this.pauseMenu.position = camera.position.add(cc.v3(0, 0, 0));
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "pauseMenu", void 0);
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "pauseButton", void 0);
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "volumeUpButton", void 0);
    __decorate([
        property(cc.Node)
    ], PauseManager.prototype, "volumeDownButton", void 0);
    __decorate([
        property(cc.Label)
    ], PauseManager.prototype, "volumeLabel", void 0);
    PauseManager = __decorate([
        ccclass
    ], PauseManager);
    return PauseManager;
}(cc.Component));
exports.default = PauseManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQYXVzZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBQ3BDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBd0lDO1FBdElHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0Isc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBR2pDLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRXJCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDOztJQXVIOUMsQ0FBQztJQXJIRyw0QkFBSyxHQUFMO1FBQUEsaUJBdUNDO1FBdENHLHdCQUF3QjtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUM3QyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxD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Q0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksTUFBTSxFQUFFO1lBQ1Isb0RBQW9EO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakU7U0FDSjtJQUNMLENBQUM7SUFySUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDZTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNVO0lBZFosWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdJaEM7SUFBRCxtQkFBQztDQXhJRCxBQXdJQyxDQXhJeUMsRUFBRSxDQUFDLFNBQVMsR0F3SXJEO2tCQXhJb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF1c2VNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYXVzZU1lbnU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGF1c2VCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdm9sdW1lVXBCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdm9sdW1lRG93bkJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdm9sdW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIHBhdXNlIG1lbnVcbiAgICAgICAgaWYgKHRoaXMucGF1c2VNZW51KSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlTWVudS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB2b2x1bWUgbGFiZWxcbiAgICAgICAgdGhpcy51cGRhdGVWb2x1bWVMYWJlbCgpO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIHBhdXNlIGJ1dHRvbiBldmVudFxuICAgICAgICBpZiAodGhpcy5wYXVzZUJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZ2lzdGVyIHZvbHVtZSBjb250cm9sIGV2ZW50c1xuICAgICAgICBpZiAodGhpcy52b2x1bWVVcEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy52b2x1bWVVcEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuaW5jcmVhc2VWb2x1bWUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZvbHVtZURvd25CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lRG93bkJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuZGVjcmVhc2VWb2x1bWUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgcmVzdW1lIGJ1dHRvbiBldmVudFxuICAgICAgICBjb25zdCByZXN1bWVCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlTWVudS9SZXN1bWVCdXR0b25cIik7XG4gICAgICAgIGlmIChyZXN1bWVCdXR0b24pIHtcbiAgICAgICAgICAgIHJlc3VtZUJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlKCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlZ2lzdGVyIHF1aXQgYnV0dG9uIGV2ZW50XG4gICAgICAgIGNvbnN0IHF1aXRCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlTWVudS9RdWl0QnV0dG9uXCIpO1xuICAgICAgICBpZiAocXVpdEJ1dHRvbikge1xuICAgICAgICAgICAgcXVpdEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1aXRUb01lbnUoKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnBhdXNlTWVudSkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZU1lbnUuYWN0aXZlID0gdGhpcy5pc1BhdXNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBxdWl0VG9NZW51KCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvVHJhbnNpdGlvblwiKTtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZ2V0Q29tcG9uZW50KFwiVHJhbnNpdGlvbk1hbmFnZXJcIikucGxheVRyYW5zT3V0QW5kQ2hhbmdlU2NlbmUoXCJTY2VuZTAwMF9TdGFydFNjZW5lXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUwMDBfU3RhcnRTY2VuZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlYXNlVm9sdW1lKCkge1xuICAgICAgICBsZXQgbmV3Vm9sdW1lID0gTWF0aC5taW4oMS4wLCBjYy5hdWRpb0VuZ2luZS5nZXRWb2x1bWUoQXVkaW9NYW5hZ2VyLmF1ZGlvSWQpICsgMC4xKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKEF1ZGlvTWFuYWdlci5hdWRpb0lkLCBuZXdWb2x1bWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZUxhYmVsKCk7XG4gICAgfVxuXG4gICAgZGVjcmVhc2VWb2x1bWUoKSB7XG4gICAgICAgIGxldCBuZXdWb2x1bWUgPSBNYXRoLm1heCgwLjAsIGNjLmF1ZGlvRW5naW5lLmdldFZvbHVtZShBdWRpb01hbmFnZXIuYXVkaW9JZCkgLSAwLjEpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoQXVkaW9NYW5hZ2VyLmF1ZGlvSWQsIG5ld1ZvbHVtZSk7XG4gICAgICAgIHRoaXMudXBkYXRlVm9sdW1lTGFiZWwoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWb2x1bWVMYWJlbCgpIHtcbiAgICAgICAgY29uc3Qgdm9sdW1lMTAgPSBNYXRoLnJvdW5kKGNjLmF1ZGlvRW5naW5lLmdldFZvbHVtZShBdWRpb01hbmFnZXIuYXVkaW9JZCkgKiAxMCk7XG4gICAgICAgIHRoaXMudm9sdW1lTGFiZWwuc3RyaW5nID0gYCAke3ZvbHVtZTEwfSBgO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8gQ2xlYW4gdXAgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGlmICh0aGlzLnBhdXNlQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudm9sdW1lVXBCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lVXBCdXR0b24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52b2x1bWVEb3duQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZURvd25CdXR0b24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bWVCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlTWVudS9SZXN1bWVCdXR0b25cIik7XG4gICAgICAgIGlmIChyZXN1bWVCdXR0b24pIHtcbiAgICAgICAgICAgIHJlc3VtZUJ1dHRvbi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHF1aXRCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL1BhdXNlTWVudS9RdWl0QnV0dG9uXCIpO1xuICAgICAgICBpZiAocXVpdEJ1dHRvbikge1xuICAgICAgICAgICAgcXVpdEJ1dHRvbi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY2FtZXJhID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKTtcbiAgICAgICAgaWYgKGNhbWVyYSkge1xuICAgICAgICAgICAgLy8gQWRkIG9mZnNldCByZWxhdGl2ZSB0byBjYW1lcmEgcG9zaXRpb24gdXNpbmcgVmVjM1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uLmFkZChjYy52Myg2NjgsIDM2MiwgMCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGF1c2VNZW51KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZU1lbnUucG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb24uYWRkKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TimeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a136yTEwBFz4PM5s5q26hp', 'TimeController');
// Script/TimeController.ts

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
var ChatBubbleController = /** @class */ (function (_super) {
    __extends(ChatBubbleController, _super);
    function ChatBubbleController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.friend = null;
        _this.bubbleSpriteFrame = null;
        _this.chatImageSpriteFrames = [];
        _this.followCamera = true;
        _this.timeFont = null;
        _this.openSound = null;
        _this.chatBubble = null;
        _this.chatImage = null;
        _this.currentImageIndex = 0;
        _this.DETECTION_RADIUS = 200;
        _this.BUBBLE_OFFSET = 120;
        _this.lastBubbleState = false;
        _this.timeLabel = null;
        return _this;
    }
    ChatBubbleController.prototype.onLoad = function () {
        if (!this.player || !this.friend || !this.bubbleSpriteFrame || this.chatImageSpriteFrames.length === 0) {
            cc.error("Please assign all required components!");
            return;
        }
        // 關閉碰撞區域的顯示
        var physicsManager = cc.director.getPhysicsManager();
        if (physicsManager) {
            physicsManager.debugDrawFlags = 0;
        }
        this.createChatBubble();
        this.createChatImage();
        // 確保 openSound 已設定
        if (!this.openSound) {
            cc.error("Open Sound is not assigned!");
        }
    };
    ChatBubbleController.prototype.createChatBubble = function () {
        // 創建一個新的節點作為氣泡
        this.chatBubble = new cc.Node('Chat_Bubble');
        // 添加 Sprite 組件
        var sprite = this.chatBubble.addComponent(cc.Sprite);
        sprite.spriteFrame = this.bubbleSpriteFrame;
        // 添加按鈕組件
        var button = this.chatBubble.addComponent(cc.Button);
        // 設置父節點
        this.chatBubble.parent = this.friend;
        // 設置聊天氣泡的初始位置（在朋友頭頂上方）
        this.chatBubble.y = this.BUBBLE_OFFSET;
        // 確保氣泡在最上層
        this.chatBubble.zIndex = 999;
        // 初始時隱藏聊天氣泡
        this.chatBubble.active = false;
        // 添加點擊事件
        this.chatBubble.on(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
    };
    ChatBubbleController.prototype.createChatImage = function () {
        // 創建聊天圖片節點
        this.chatImage = new cc.Node('Chat_Image');
        // 添加 Sprite 組件
        var sprite = this.chatImage.addComponent(cc.Sprite);
        sprite.spriteFrame = this.chatImageSpriteFrames[0];
        // 設置父節點為 Canvas
        this.chatImage.parent = cc.director.getScene().getChildByName('Canvas');
        // 初始時隱藏圖片
        this.chatImage.active = false;
        // 確保圖片在最上層
        this.chatImage.zIndex = 1000;
        // 添加點擊事件（點擊圖片時顯示下一張或隱藏）
        this.chatImage.on(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
    };
    ChatBubbleController.prototype.showCurrentTime = function () {
        // 如果已經有 label，先移除
        if (this.timeLabel && cc.isValid(this.timeLabel)) {
            this.timeLabel.destroy();
        }
        // 創建 label
        this.timeLabel = new cc.Node('TimeLabel');
        var label = this.timeLabel.addComponent(cc.Label);
        // 設定字型大小、顏色
        label.fontSize = 60; // 字體大小
        label.lineHeight = 100; // 行高略大於字體
        label.string = this.getCurrentTimeString();
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        label.verticalAlign = cc.Label.VerticalAlign.CENTER;
        this.timeLabel.color = cc.Color.WHITE;
        // 設 parent 跟圖片一樣
        this.timeLabel.parent = this.chatImage.parent;
        // 設定在圖片上方 (0, 120) 或正中央 (0, 0)
        this.timeLabel.setPosition(0, 60);
        this.timeLabel.zIndex = 1500;
        this.timeLabel.active = true;
        if (this.timeFont) {
            label.font = this.timeFont;
        }
    };
    ChatBubbleController.prototype.hideCurrentTime = function () {
        if (this.timeLabel && cc.isValid(this.timeLabel)) {
            this.timeLabel.destroy();
            this.timeLabel = null;
        }
    };
    ChatBubbleController.prototype.getCurrentTimeString = function () {
        var now = new Date();
        var pad = function (n) { return n < 10 ? '0' + n : n; };
        var dateStr = " " + now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate()) + " ";
        var timeStr = pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
        return dateStr + "\n" + timeStr;
    };
    ChatBubbleController.prototype.onBubbleClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex = 0;
            var sprite = this.chatImage.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
            }
            // 只有在 chatImage 未顯示時才播放音效
            if (!this.chatImage.active) {
                this.chatImage.active = true;
                this.showCurrentTime();
                // 播放 Open.mp3 音效，音量設為 5
                if (this.openSound) {
                    cc.audioEngine.setVolume(cc.audioEngine.playEffect(this.openSound, false), 3);
                }
            }
        }
    };
    ChatBubbleController.prototype.onImageClicked = function () {
        if (this.chatImage) {
            this.currentImageIndex++;
            if (this.currentImageIndex < this.chatImageSpriteFrames.length) {
                var sprite = this.chatImage.getComponent(cc.Sprite);
                if (sprite) {
                    sprite.spriteFrame = this.chatImageSpriteFrames[this.currentImageIndex];
                }
            }
            else {
                this.chatImage.active = false;
                this.currentImageIndex = 0;
                this.hideCurrentTime();
            }
        }
    };
    ChatBubbleController.prototype.update = function () {
        if (!this.player || !this.friend || !this.chatBubble)
            return;
        if (this.followCamera) {
            var camera = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
            this.chatImage.x = camera.x;
        }
        // 若時間Label存在且顯示中，持續更新時間文字
        if (this.timeLabel && this.timeLabel.active) {
            var label = this.timeLabel.getComponent(cc.Label);
            if (label) {
                label.string = this.getCurrentTimeString();
            }
        }
        // 將 Vec3 轉換為 Vec2
        var playerPos = new cc.Vec2(this.player.position.x, this.player.position.y);
        var friendPos = new cc.Vec2(this.friend.position.x, this.friend.position.y);
        // 計算玩家和朋友的距離
        var distance = this.getDistance(playerPos, friendPos);
        var shouldShow = distance <= this.DETECTION_RADIUS;
        // 根據距離顯示或隱藏聊天氣泡
        if (this.chatBubble.active !== shouldShow) {
            this.chatBubble.active = shouldShow;
            if (shouldShow) {
                // 確保氣泡在最上層
                this.chatBubble.zIndex = 999;
            }
        }
    };
    ChatBubbleController.prototype.getDistance = function (pos1, pos2) {
        var dx = pos1.x - pos2.x;
        var dy = pos1.y - pos2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    ChatBubbleController.prototype.onDestroy = function () {
        if (this.chatBubble) {
            this.chatBubble.off(cc.Node.EventType.TOUCH_END, this.onBubbleClicked, this);
            this.chatBubble.destroy();
        }
        if (this.chatImage) {
            this.chatImage.off(cc.Node.EventType.TOUCH_END, this.onImageClicked, this);
            this.chatImage.destroy();
        }
        this.hideCurrentTime();
    };
    __decorate([
        property(cc.Node)
    ], ChatBubbleController.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], ChatBubbleController.prototype, "friend", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ChatBubbleController.prototype, "bubbleSpriteFrame", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ChatBubbleController.prototype, "chatImageSpriteFrames", void 0);
    __decorate([
        property
    ], ChatBubbleController.prototype, "followCamera", void 0);
    __decorate([
        property(cc.TTFFont)
    ], ChatBubbleController.prototype, "timeFont", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ChatBubbleController.prototype, "openSound", void 0);
    ChatBubbleController = __decorate([
        ccclass
    ], ChatBubbleController);
    return ChatBubbleController;
}(cc.Component));
exports.default = ChatBubbleController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUaW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQWlPQztRQS9ORyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUd6QywyQkFBcUIsR0FBcUIsRUFBRSxDQUFDO1FBRzdDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQix1QkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBQ3JDLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBcU10QyxDQUFDO0lBbk1HLHFDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEcsRUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDVjtRQUVELFlBQVk7UUFDWixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxj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O1FBREMsUUFBUTs4REFDb0I7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswREFDTztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJEQUNRO0lBcEJkLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBaU94QztJQUFELDJCQUFDO0NBak9ELEFBaU9DLENBak9pRCxFQUFFLENBQUMsU0FBUyxHQWlPN0Q7a0JBak9vQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdEJ1YmJsZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZnJpZW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBidWJibGVTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgY2hhdEltYWdlU3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBmb2xsb3dDYW1lcmE6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5UVEZGb250KVxyXG4gICAgdGltZUZvbnQ6IGNjLlRURkZvbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBvcGVuU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGF0QnViYmxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2hhdEltYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VycmVudEltYWdlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IERFVEVDVElPTl9SQURJVVM6IG51bWJlciA9IDIwMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQlVCQkxFX09GRlNFVDogbnVtYmVyID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBsYXN0QnViYmxlU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdGltZUxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5mcmllbmQgfHwgIXRoaXMuYnViYmxlU3ByaXRlRnJhbWUgfHwgdGhpcy5jaGF0SW1hZ2VTcHJpdGVGcmFtZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiUGxlYXNlIGFzc2lnbiBhbGwgcmVxdWlyZWQgY29tcG9uZW50cyFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmXnOmWieeisOaSnuWNgOWfn+eahOmhr+ekulxyXG4gICAgICAgIGNvbnN0IHBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBpZiAocGh5c2ljc01hbmFnZXIpIHtcclxuICAgICAgICAgICAgcGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0QnViYmxlKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0SW1hZ2UoKTtcclxuICAgICAgICAvLyDnorrkv50gb3BlblNvdW5kIOW3suioreWumlxyXG4gICAgICAgIGlmICghdGhpcy5vcGVuU291bmQpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJPcGVuIFNvdW5kIGlzIG5vdCBhc3NpZ25lZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQ2hhdEJ1YmJsZSgpIHtcclxuICAgICAgICAvLyDlibXlu7rkuIDlgIvmlrDnmoTnr4Dpu57kvZzngrrmsKPms6FcclxuICAgICAgICB0aGlzLmNoYXRCdWJibGUgPSBuZXcgY2MuTm9kZSgnQ2hhdF9CdWJibGUnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDmt7vliqAgU3ByaXRlIOe1hOS7tlxyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuY2hhdEJ1YmJsZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmJ1YmJsZVNwcml0ZUZyYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOa3u+WKoOaMiemIlee1hOS7tlxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY2hhdEJ1YmJsZS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDoqK3nva7niLbnr4Dpu55cclxuICAgICAgICB0aGlzLmNoYXRCdWJibGUucGFyZW50ID0gdGhpcy5mcmllbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6Kit572u6IGK5aSp5rCj5rOh55qE5Yid5aeL5L2N572u77yI5Zyo5pyL5Y+L6aCt6aCC5LiK5pa577yJXHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLnkgPSB0aGlzLkJVQkJMRV9PRkZTRVQ7XHJcblxyXG4gICAgICAgIC8vIOeiuuS/neawo+azoeWcqOacgOS4iuWxpFxyXG4gICAgICAgIHRoaXMuY2hhdEJ1YmJsZS56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5Yid5aeL5pmC6Zqx6JeP6IGK5aSp5rCj5rOhXHJcbiAgICAgICAgdGhpcy5jaGF0QnViYmxlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyDmt7vliqDpu57mk4rkuovku7ZcclxuICAgICAgICB0aGlzLmNoYXRCdWJibGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnViYmxlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGF0SW1hZ2UoKSB7XHJcbiAgICAgICAgLy8g5Ym15bu66IGK5aSp5ZyW54mH56+A6bueXHJcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UgPSBuZXcgY2MuTm9kZSgnQ2hhdF9JbWFnZScpO1xyXG5cclxuICAgICAgICAvLyDmt7vliqAgU3ByaXRlIOe1hOS7tlxyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuY2hhdEltYWdlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOioree9rueItuevgOm7nueCuiBDYW52YXNcclxuICAgICAgICB0aGlzLmNoYXRJbWFnZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDliJ3lp4vmmYLpmrHol4/lnJbniYdcclxuICAgICAgICB0aGlzLmNoYXRJbWFnZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g56K65L+d5ZyW54mH5Zyo5pyA5LiK5bGkXHJcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2UuekluZGV4ID0gMTAwMDtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6bue5pOK5LqL5Lu277yI6bue5pOK5ZyW54mH5pmC6aGv56S65LiL5LiA5by15oiW6Zqx6JeP77yJXHJcbiAgICAgICAgdGhpcy5jaGF0SW1hZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uSW1hZ2VDbGlja2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dDdXJyZW50VGltZSgpIHtcclxuICAgICAgICAvLyDlpoLmnpzlt7LntpPmnIkgbGFiZWzvvIzlhYjnp7vpmaRcclxuICAgICAgICBpZiAodGhpcy50aW1lTGFiZWwgJiYgY2MuaXNWYWxpZCh0aGlzLnRpbWVMYWJlbCkpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGFiZWwuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlibXlu7ogbGFiZWxcclxuICAgICAgICB0aGlzLnRpbWVMYWJlbCA9IG5ldyBjYy5Ob2RlKCdUaW1lTGFiZWwnKTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMudGltZUxhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgLy8g6Kit5a6a5a2X5Z6L5aSn5bCP44CB6aGP6ImyXHJcbiAgICAgICAgbGFiZWwuZm9udFNpemUgPSA2MDsgLy8g5a2X6auU5aSn5bCPXHJcbiAgICAgICAgbGFiZWwubGluZUhlaWdodCA9IDEwMDsgLy8g6KGM6auY55Wl5aSn5pa85a2X6auUXHJcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy5nZXRDdXJyZW50VGltZVN0cmluZygpO1xyXG4gICAgICAgIGxhYmVsLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XHJcbiAgICAgICAgbGFiZWwudmVydGljYWxBbGlnbiA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgLy8g6KitIHBhcmVudCDot5/lnJbniYfkuIDmqKNcclxuICAgICAgICB0aGlzLnRpbWVMYWJlbC5wYXJlbnQgPSB0aGlzLmNoYXRJbWFnZS5wYXJlbnQ7XHJcbiAgICAgICAgLy8g6Kit5a6a5Zyo5ZyW54mH5LiK5pa5ICgwLCAxMjApIOaIluato+S4reWkriAoMCwgMClcclxuICAgICAgICB0aGlzLnRpbWVMYWJlbC5zZXRQb3NpdGlvbigwLCA2MCk7XHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuekluZGV4ID0gMTUwMDtcclxuICAgICAgICB0aGlzLnRpbWVMYWJlbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVGb250KSB7XHJcbiAgICAgICAgICAgIGxhYmVsLmZvbnQgPSB0aGlzLnRpbWVGb250O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGVDdXJyZW50VGltZSgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lTGFiZWwgJiYgY2MuaXNWYWxpZCh0aGlzLnRpbWVMYWJlbCkpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTGFiZWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q3VycmVudFRpbWVTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHBhZCA9IChuOiBudW1iZXIpID0+IG4gPCAxMCA/ICcwJyArIG4gOiBuO1xyXG4gICAgICAgIGNvbnN0IGRhdGVTdHIgPSBgICR7bm93LmdldEZ1bGxZZWFyKCl9LSR7cGFkKG5vdy5nZXRNb250aCgpICsgMSl9LSR7cGFkKG5vdy5nZXREYXRlKCkpfSBgO1xyXG4gICAgICAgIGNvbnN0IHRpbWVTdHIgPSBgJHtwYWQobm93LmdldEhvdXJzKCkpfToke3BhZChub3cuZ2V0TWludXRlcygpKX06JHtwYWQobm93LmdldFNlY29uZHMoKSl9YDtcclxuICAgICAgICByZXR1cm4gYCR7ZGF0ZVN0cn1cXG4ke3RpbWVTdHJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnViYmxlQ2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGF0SW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuY2hhdEltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lc1t0aGlzLmN1cnJlbnRJbWFnZUluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlj6rmnInlnKggY2hhdEltYWdlIOacqumhr+ekuuaZguaJjeaSreaUvumfs+aViFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhdEltYWdlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0N1cnJlbnRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmkq3mlL4gT3Blbi5tcDMg6Z+z5pWI77yM6Z+z6YeP6Kit54K6IDVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW5Tb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMub3BlblNvdW5kLCBmYWxzZSksIDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25JbWFnZUNsaWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhdEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlSW5kZXggPCB0aGlzLmNoYXRJbWFnZVNwcml0ZUZyYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuY2hhdEltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhdEltYWdlU3ByaXRlRnJhbWVzW3RoaXMuY3VycmVudEltYWdlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUN1cnJlbnRUaW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXIgfHwgIXRoaXMuZnJpZW5kIHx8ICF0aGlzLmNoYXRCdWJibGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9sbG93Q2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpLmdldENoaWxkQnlOYW1lKCdNYWluIENhbWVyYScpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRJbWFnZS54ID0gY2FtZXJhLng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDoi6XmmYLplpNMYWJlbOWtmOWcqOS4lOmhr+ekuuS4re+8jOaMgee6jOabtOaWsOaZgumWk+aWh+Wtl1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVMYWJlbCAmJiB0aGlzLnRpbWVMYWJlbC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLnRpbWVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMuZ2V0Q3VycmVudFRpbWVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5bCHIFZlYzMg6L2J5o+b54K6IFZlYzJcclxuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSBuZXcgY2MuVmVjMih0aGlzLnBsYXllci5wb3NpdGlvbi54LCB0aGlzLnBsYXllci5wb3NpdGlvbi55KTtcclxuICAgICAgICBjb25zdCBmcmllbmRQb3MgPSBuZXcgY2MuVmVjMih0aGlzLmZyaWVuZC5wb3NpdGlvbi54LCB0aGlzLmZyaWVuZC5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgLy8g6KiI566X546p5a625ZKM5pyL5Y+L55qE6Led6ZuiXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKHBsYXllclBvcywgZnJpZW5kUG9zKTtcclxuICAgICAgICBjb25zdCBzaG91bGRTaG93ID0gZGlzdGFuY2UgPD0gdGhpcy5ERVRFQ1RJT05fUkFESVVTO1xyXG5cclxuICAgICAgICAvLyDmoLnmk5rot53pm6Lpoa/npLrmiJbpmrHol4/ogYrlpKnmsKPms6FcclxuICAgICAgICBpZiAodGhpcy5jaGF0QnViYmxlLmFjdGl2ZSAhPT0gc2hvdWxkU2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRCdWJibGUuYWN0aXZlID0gc2hvdWxkU2hvdztcclxuICAgICAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcclxuICAgICAgICAgICAgICAgIC8vIOeiuuS/neawo+azoeWcqOacgOS4iuWxpFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0QnViYmxlLnpJbmRleCA9IDk5OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERpc3RhbmNlKHBvczE6IGNjLlZlYzIsIHBvczI6IGNjLlZlYzIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGR4ID0gcG9zMS54IC0gcG9zMi54O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gcG9zMS55IC0gcG9zMi55O1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGF0QnViYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnViYmxlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdEJ1YmJsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoYXRJbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXRJbWFnZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uSW1hZ2VDbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0SW1hZ2UuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGVDdXJyZW50VGltZSgpO1xyXG4gICAgfVxyXG59ICJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/VideoPlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ff42RMvLRAQaTJEyXFqe7c', 'VideoPlayerController');
// Script/VideoPlayerController.ts

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
var VideoPlayerController = /** @class */ (function (_super) {
    __extends(VideoPlayerController, _super);
    function VideoPlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoPlayer = null;
        _this.autoPlay = false;
        _this.nextScene = "Scene000_StartScene";
        _this.hasPlayed = false;
        return _this;
    }
    VideoPlayerController.prototype.onLoad = function () {
        cc.log("VideoPlayerController onLoad");
        if (!this.videoPlayer) {
            this.videoPlayer = this.getComponent(cc.VideoPlayer);
            cc.log("VideoPlayer component found:", this.videoPlayer ? "yes" : "no");
        }
        if (this.videoPlayer) {
            this.setupVideoPlayerEvents();
            // 確保視頻設置正確
            this.videoPlayer.keepAspectRatio = true;
            this.videoPlayer.isFullscreen = false;
            this.videoPlayer.stayOnBottom = false;
            cc.log("VideoPlayer setup completed");
        }
    };
    VideoPlayerController.prototype.start = function () {
        cc.log("VideoPlayerController start");
        if (this.videoPlayer) {
            cc.log("Video resource type:", this.videoPlayer.resourceType);
            cc.log("Video clip:", this.videoPlayer.clip ? "set" : "not set");
            cc.log("Video remote URL:", this.videoPlayer.remoteURL);
            cc.log("Video player state:", this.videoPlayer.currentTime);
        }
    };
    VideoPlayerController.prototype.setupVideoPlayerEvents = function () {
        cc.log("Setting up video player events");
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = "VideoPlayerController";
        eventHandler.handler = "onVideoPlayerEvent";
        eventHandler.customEventData = "video_event";
        this.videoPlayer.videoPlayerEvent = [eventHandler];
        cc.log("Video player events setup completed");
    };
    VideoPlayerController.prototype.loadScene = function () {
        var transition = cc.find("Canvas/Transition");
        if (transition) {
            transition.getComponent("TransitionManager").playTransOutAndChangeScene(this.nextScene);
        }
        else {
            cc.director.loadScene(this.nextScene);
        }
    };
    VideoPlayerController.prototype.onVideoPlayerEvent = function (videoPlayer, eventType, customEventData) {
        cc.log("Video event received:", eventType);
        switch (eventType) {
            case cc.VideoPlayer.EventType.PLAYING:
                cc.log("Video is playing");
                cc.log("Current time:", this.videoPlayer.currentTime);
                break;
            case cc.VideoPlayer.EventType.PAUSED:
                cc.log("Video is paused");
                cc.log("Current time:", this.videoPlayer.currentTime);
                break;
            case cc.VideoPlayer.EventType.STOPPED:
                cc.log("Video is stopped");
                cc.log("Current time:", this.videoPlayer.currentTime);
                break;
            case cc.VideoPlayer.EventType.COMPLETED:
                cc.log("Video playback completed");
                this.loadScene();
                break;
            case cc.VideoPlayer.EventType.META_LOADED:
                cc.log("Video metadata loaded");
                break;
            case cc.VideoPlayer.EventType.CLICKED:
                cc.log("Video player clicked");
                if (!this.hasPlayed) {
                    cc.log("First click, starting video playback");
                    this.videoPlayer.play();
                    this.hasPlayed = true;
                }
                else {
                    cc.log("Video has already been played once");
                }
                break;
            case cc.VideoPlayer.EventType.READY_TO_PLAY:
                cc.log("Video is ready to play");
                if (this.autoPlay && !this.hasPlayed) {
                    cc.log("AutoPlay enabled, starting video playback");
                    this.videoPlayer.play();
                    this.hasPlayed = true;
                }
                break;
        }
    };
    VideoPlayerController.prototype.onDestroy = function () {
        cc.log("VideoPlayerController onDestroy");
        if (this.videoPlayer) {
            this.videoPlayer.videoPlayerEvent = [];
        }
    };
    __decorate([
        property(cc.VideoPlayer)
    ], VideoPlayerController.prototype, "videoPlayer", void 0);
    __decorate([
        property({
            tooltip: "是否自動播放視頻"
        })
    ], VideoPlayerController.prototype, "autoPlay", void 0);
    __decorate([
        property
    ], VideoPlayerController.prototype, "nextScene", void 0);
    VideoPlayerController = __decorate([
        ccclass
    ], VideoPlayerController);
    return VideoPlayerController;
}(cc.Component));
exports.default = VideoPlayerController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxWaWRlb1BsYXllckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUErR0M7UUE3R0csaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBS25DLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsZUFBUyxHQUFXLHFCQUFxQixDQUFDO1FBRWxDLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBbUd2QyxDQUFDO0lBakdHLHNDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsV0FBVztZQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFF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QUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQTVHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhEQUNVO0lBS25DO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLFVBQVU7U0FDdEIsQ0FBQzsyREFDd0I7SUFHMUI7UUFEQyxRQUFROzREQUNpQztJQVZ6QixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQStHekM7SUFBRCw0QkFBQztDQS9HRCxBQStHQyxDQS9Ha0QsRUFBRSxDQUFDLFNBQVMsR0ErRzlEO2tCQS9Hb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuVmlkZW9QbGF5ZXIpXHJcbiAgICB2aWRlb1BsYXllcjogY2MuVmlkZW9QbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogXCLmmK/lkKboh6rli5Xmkq3mlL7oppbpoLtcIlxyXG4gICAgfSlcclxuICAgIGF1dG9QbGF5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBuZXh0U2NlbmU6IHN0cmluZyA9IFwiU2NlbmUwMDBfU3RhcnRTY2VuZVwiO1xyXG5cclxuICAgIHByaXZhdGUgaGFzUGxheWVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyQ29udHJvbGxlciBvbkxvYWRcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvUGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5WaWRlb1BsYXllcik7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyIGNvbXBvbmVudCBmb3VuZDpcIiwgdGhpcy52aWRlb1BsYXllciA/IFwieWVzXCIgOiBcIm5vXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9QbGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZGVvUGxheWVyRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIC8vIOeiuuS/neimlumgu+ioree9ruato+eiulxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyLmtlZXBBc3BlY3RSYXRpbyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIuc3RheU9uQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvUGxheWVyIHNldHVwIGNvbXBsZXRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwiVmlkZW9QbGF5ZXJDb250cm9sbGVyIHN0YXJ0XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIHJlc291cmNlIHR5cGU6XCIsIHRoaXMudmlkZW9QbGF5ZXIucmVzb3VyY2VUeXBlKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gY2xpcDpcIiwgdGhpcy52aWRlb1BsYXllci5jbGlwID8gXCJzZXRcIiA6IFwibm90IHNldFwiKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gcmVtb3RlIFVSTDpcIiwgdGhpcy52aWRlb1BsYXllci5yZW1vdGVVUkwpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJWaWRlbyBwbGF5ZXIgc3RhdGU6XCIsIHRoaXMudmlkZW9QbGF5ZXIuY3VycmVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwVmlkZW9QbGF5ZXJFdmVudHMoKSB7XHJcbiAgICAgICAgY2MubG9nKFwiU2V0dGluZyB1cCB2aWRlbyBwbGF5ZXIgZXZlbnRzXCIpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBldmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJWaWRlb1BsYXllckNvbnRyb2xsZXJcIjtcclxuICAgICAgICBldmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25WaWRlb1BsYXllckV2ZW50XCI7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IFwidmlkZW9fZXZlbnRcIjtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci52aWRlb1BsYXllckV2ZW50ID0gW2V2ZW50SGFuZGxlcl07XHJcbiAgICAgICAgY2MubG9nKFwiVmlkZW8gcGxheWVyIGV2ZW50cyBzZXR1cCBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkU2NlbmUoKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvVHJhbnNpdGlvblwiKTtcclxuICAgICAgICBpZiAodHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLmdldENvbXBvbmVudChcIlRyYW5zaXRpb25NYW5hZ2VyXCIpLnBsYXlUcmFuc091dEFuZENoYW5nZVNjZW5lKHRoaXMubmV4dFNjZW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5uZXh0U2NlbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblZpZGVvUGxheWVyRXZlbnQodmlkZW9QbGF5ZXI6IGNjLlZpZGVvUGxheWVyLCBldmVudFR5cGU6IGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBjYy5sb2coXCJWaWRlbyBldmVudCByZWNlaXZlZDpcIiwgZXZlbnRUeXBlKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5QTEFZSU5HOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgcGxheWluZ1wiKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkN1cnJlbnQgdGltZTpcIiwgdGhpcy52aWRlb1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuUEFVU0VEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgcGF1c2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiQ3VycmVudCB0aW1lOlwiLCB0aGlzLnZpZGVvUGxheWVyLmN1cnJlbnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5TVE9QUEVEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgc3RvcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIkN1cnJlbnQgdGltZTpcIiwgdGhpcy52aWRlb1BsYXllci5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5WaWRlb1BsYXllci5FdmVudFR5cGUuQ09NUExFVEVEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gcGxheWJhY2sgY29tcGxldGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5NRVRBX0xPQURFRDpcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlZpZGVvIG1ldGFkYXRhIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5DTElDS0VEOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gcGxheWVyIGNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzUGxheWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiRmlyc3QgY2xpY2ssIHN0YXJ0aW5nIHZpZGVvIHBsYXliYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzUGxheWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaGFzIGFscmVhZHkgYmVlbiBwbGF5ZWQgb25jZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLlZpZGVvUGxheWVyLkV2ZW50VHlwZS5SRUFEWV9UT19QTEFZOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW8gaXMgcmVhZHkgdG8gcGxheVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmICF0aGlzLmhhc1BsYXllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIkF1dG9QbGF5IGVuYWJsZWQsIHN0YXJ0aW5nIHZpZGVvIHBsYXliYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9QbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzUGxheWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MubG9nKFwiVmlkZW9QbGF5ZXJDb250cm9sbGVyIG9uRGVzdHJveVwiKTtcclxuICAgICAgICBpZiAodGhpcy52aWRlb1BsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyLnZpZGVvUGxheWVyRXZlbnQgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Wind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '835a4Mbk9tPTIWnxW5UxwFV', 'Wind');
// Script/Wind.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.playerNode = null;
        _this.offsetX = 100; // 右邊偏移量
        _this.offsetY = 20; // 垂直偏移量
        _this.rotation = 15;
        _this.crateNodes = [];
        _this.regionNode = null; // Region 節點
        _this.groundNode = null; // Ground 節點
        _this.iceImageNode = null; // 新增：冰塊圖片節點
        _this.bridgeNode = null;
        _this.switchNode = null;
        _this.becomeIceAudio = null; // 新增：冰塊音效
        _this.animation_idx = 0;
        _this.lastMoveDir = 1;
        _this.isBlowing = false;
        _this.iceEffectTimeout = null;
        _this.iceCreated = false; // 新增：冰塊是否已經生成
        _this.iceRemoveTimeout = null;
        _this.isRising = true; // 控制橋的升降狀態
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        // 預設隱形
        this.node.active = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        var collider = this.getComponent(cc.PhysicsBoxCollider);
        if (collider)
            collider.sensor = true;
        // 遊戲開始時禁用 Ground 的碰撞器
        if (this.groundNode) {
            var rigidBody = this.groundNode.getComponent(cc.RigidBody);
            if (rigidBody)
                rigidBody.enabled = false;
            var boxCollider = this.groundNode.getComponent(cc.PhysicsBoxCollider);
            if (boxCollider)
                boxCollider.enabled = false;
        }
        // 新增：遊戲開始時隱藏冰塊圖片
        if (this.iceImageNode) {
            this.iceImageNode.active = false;
        }
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        if (this.playerNode) {
            var playerScript = this.playerNode.getComponent('Player');
            var moveDir = 1;
            if (playerScript) {
                moveDir = playerScript.node.scaleX < 0 ? -1 : 1;
            }
            // 根據方向調整風的位置
            if (moveDir === -1) {
                this.node.x = this.playerNode.x - this.offsetX;
                this.animation_idx = 1;
                this.node.rotation = -this.rotation; // 左邊風向
            }
            else {
                this.node.x = this.playerNode.x + this.offsetX;
                this.animation_idx = 0;
                this.node.rotation = this.rotation; // 右邊風向
            }
            this.node.y = this.playerNode.y + this.offsetY;
            // 方向改變時，若風顯示中則立即切換動畫
            if (this.node.active && moveDir !== this.lastMoveDir) {
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var clip = anim.getClips()[this.animation_idx];
                    anim.play(clip.name);
                }
            }
            this.lastMoveDir = moveDir;
        }
        // 持續推動箱子
        if (this.isBlowing && this.playerNode) {
            var parent = this.node.parent || cc.director.getScene();
            var crateNodeList = [];
            if (this.crateNodes && Array.isArray(this.crateNodes) && this.crateNodes.length > 0) {
                crateNodeList = this.crateNodes;
            }
            else {
                // 沒有指定則自動尋找場景所有 Crate
                crateNodeList = parent.children.filter(function (child) { return child.getComponent && child.getComponent('Crate'); });
            }
            crateNodeList.forEach(function (child) {
                var crate = child.getComponent && child.getComponent('Crate');
                if (crate) {
                    var dx = child.x - _this.playerNode.x;
                    var dy = child.y - _this.playerNode.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    if (dx > 0 && distance < 300 && _this.playerNode.scaleX > 0) {
                        crate.applyWindForce(1);
                    }
                    else if (dx < 0 && distance < 300 && _this.playerNode.scaleX < 0) {
                        crate.applyWindForce(-1);
                    }
                }
            });
        }
        // 持續推動橋
        if (this.isBlowing && this.bridgeNode && this.playerNode && this.playerNode.scaleX > 0) {
            var dx = this.bridgeNode.x - this.playerNode.x;
            var dy = this.bridgeNode.y - this.playerNode.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            cc.log("Bridge distance:", distance);
            if (distance < 300) {
                if (this.isRising) {
                    if (this.bridgeNode.y < 1200) {
                        this.bridgeNode.y += 50 * dt; // 每秒上升100單位
                    }
                    else {
                        this.isRising = false;
                    }
                }
                else {
                    if (this.bridgeNode.y > 100) {
                        this.bridgeNode.y -= 50 * dt; // 每秒下降100單位
                    }
                    else {
                        this.isRising = true;
                    }
                }
            }
        }
        if (this.switchNode && this.playerNode.scaleX > 0) {
            var switchScript = this.switchNode.getComponent('Switch');
            if (switchScript) {
                switchScript.setState(0);
                if (this.isBlowing && this.bridgeNode && this.playerNode) {
                    var dx = this.bridgeNode.x - this.playerNode.x;
                    var dy = this.bridgeNode.y - this.playerNode.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    cc.log("Bridge distance:", distance);
                    if (distance < 300 && this.bridgeNode.y < 1200) {
                        switchScript.setState(1);
                    }
                    else {
                        switchScript.setState(0);
                    }
                }
            }
        }
    };
    NewClass.prototype.onKeyDown = function (event) {
        var _this = this;
        if (event.keyCode === cc.macro.KEY.f) {
            // 風動畫和吹箱子功能（這裡不判斷 iceCreated）
            if (!this.node.active) {
                this.node.active = true;
                // 播放第一個動畫
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[this.animation_idx];
                    anim.play(firstClip.name);
                }
            }
            else {
                // 若已經顯示，確保動畫持續撥放
                var anim = this.getComponent(cc.Animation);
                if (anim && anim.getClips().length > 0) {
                    var firstClip = anim.getClips()[this.animation_idx];
                    if (!anim.getAnimationState(firstClip.name).isPlaying) {
                        anim.play(firstClip.name);
                    }
                }
            }
            this.isBlowing = true;
            // 只有冰塊生成這段要判斷 iceCreated
            if (!this.iceCreated &&
                this.regionNode && this.groundNode && this.playerNode && this.iceImageNode) {
                // 以世界座標計算距離
                var regionPos = this.regionNode.convertToWorldSpaceAR(cc.v2(0, 0));
                var playerPos = this.playerNode.convertToWorldSpaceAR(cc.v2(0, 0));
                var dx = regionPos.x - playerPos.x;
                var dy = regionPos.y - playerPos.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if ((distance < 500 && dx > 0 && this.playerNode.scaleX > 0) ||
                    (distance < 500 && dx < 0 && this.playerNode.scaleX < 0)) {
                    // 同時顯示冰塊圖片與啟用 Ground
                    this.iceImageNode.active = true;
                    // 生成時播放音效
                    if (this.becomeIceAudio) {
                        cc.audioEngine.playEffect(this.becomeIceAudio, false);
                    }
                    var sprite = this.iceImageNode.getComponent(cc.Sprite);
                    if (sprite) {
                        sprite.node.opacity = 0;
                        cc.tween(sprite.node)
                            .to(1.5, { opacity: 255 })
                            .start();
                    }
                    this.groundNode.active = true;
                    this.groundNode.opacity = 0;
                    cc.tween(this.groundNode)
                        .to(1.5, { opacity: 255 })
                        .start();
                    var rigidBody = this.groundNode.getComponent(cc.RigidBody);
                    if (rigidBody)
                        rigidBody.enabled = true;
                    var boxCollider = this.groundNode.getComponent(cc.PhysicsBoxCollider);
                    if (boxCollider)
                        boxCollider.enabled = true;
                    this.iceCreated = true;
                    // 清除前一次的timeout
                    if (this.iceRemoveTimeout) {
                        clearTimeout(this.iceRemoveTimeout);
                        this.iceRemoveTimeout = null;
                    }
                    // 5秒後同時淡出與關閉
                    this.iceRemoveTimeout = setTimeout(function () {
                        var sprite = _this.iceImageNode.getComponent(cc.Sprite);
                        if (sprite) {
                            cc.tween(sprite.node)
                                .to(1.5, { opacity: 0 })
                                .call(function () {
                                _this.iceImageNode.active = false;
                            })
                                .start();
                        }
                        else {
                            _this.iceImageNode.active = false;
                        }
                        cc.tween(_this.groundNode)
                            .to(1.5, { opacity: 0 })
                            .call(function () {
                            _this.groundNode.active = false;
                            _this.groundNode.opacity = 255;
                        })
                            .start();
                        // 消失時也播放音效
                        if (_this.becomeIceAudio) {
                            cc.audioEngine.playEffect(_this.becomeIceAudio, false);
                        }
                        _this.iceCreated = false;
                    }, 5000);
                }
            }
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        if (event.keyCode === cc.macro.KEY.f) {
            this.node.active = false;
            this.isBlowing = false;
        }
        if (event.keyCode === cc.macro.KEY.space) {
            this.node.active = false;
            this.isBlowing = false;
        }
    };
    NewClass.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "playerNode", void 0);
    __decorate([
        property
    ], NewClass.prototype, "offsetX", void 0);
    __decorate([
        property
    ], NewClass.prototype, "offsetY", void 0);
    __decorate([
        property
    ], NewClass.prototype, "rotation", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], NewClass.prototype, "crateNodes", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "regionNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "groundNode", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iceImageNode", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "bridgeNode", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "switchNode", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "becomeIceAudio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXaW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd1JDO1FBclJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixhQUFPLEdBQVcsR0FBRyxDQUFDLENBQUMsUUFBUTtRQUcvQixhQUFPLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUc5QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGdCQUFVLEdBQWMsRUFBRSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDLENBQUMsWUFBWTtRQUV4QyxnQkFBVSxHQUFZLElBQUksQ0FBQyxDQUFDLFlBQVk7UUFFeEMsa0JBQVksR0FBWSxJQUFJLENBQUMsQ0FBQyxZQUFZO1FBRzFDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG9CQUFjLEdBQWlCLElBQUksQ0FBQyxDQUFDLFVBQVU7UUFFdkMsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixzQkFBZ0IsR0FBUSxJQUFJLENBQUM7UUFDN0IsZ0JBQVUsR0FBWSxLQUFLLENBQUMsQ0FBQyxjQUFjO1FBQzNDLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3QixjQUFRLEdBQVksSUFBSSxDQUFDLENB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b3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwbGF5ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG9mZnNldFg6IG51bWJlciA9IDEwMDsgLy8g5Y+z6YKK5YGP56e76YePXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBvZmZzZXRZOiBudW1iZXIgPSAyMDsgLy8g5Z6C55u05YGP56e76YePXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMTU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLk5vZGVdIH0pXHJcbiAgICBjcmF0ZU5vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJlZ2lvbk5vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyBSZWdpb24g56+A6bueXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdyb3VuZE5vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyBHcm91bmQg56+A6bueXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljZUltYWdlTm9kZTogY2MuTm9kZSA9IG51bGw7IC8vIOaWsOWinu+8muWGsOWhiuWclueJh+evgOm7nlxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcclxuICAgIGJyaWRnZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLk5vZGUgfSlcclxuICAgIHN3aXRjaE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYmVjb21lSWNlQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7IC8vIOaWsOWinu+8muWGsOWhiumfs+aViFxyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uX2lkeDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbGFzdE1vdmVEaXI6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGlzQmxvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpY2VFZmZlY3RUaW1lb3V0OiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpY2VDcmVhdGVkOiBib29sZWFuID0gZmFsc2U7IC8vIOaWsOWinu+8muWGsOWhiuaYr+WQpuW3sue2k+eUn+aIkFxyXG4gICAgcHJpdmF0ZSBpY2VSZW1vdmVUaW1lb3V0OiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc1Jpc2luZzogYm9vbGVhbiA9IHRydWU7ICAvLyDmjqfliLbmqYvnmoTljYfpmY3ni4DmhYtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDpoJDoqK3pmrHlvaJcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyKSBjb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgIC8vIOmBiuaIsumWi+Wni+aZguemgeeUqCBHcm91bmQg55qE56Kw5pKe5ZmoXHJcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kTm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCByaWdpZEJvZHkgPSB0aGlzLmdyb3VuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIGlmIChyaWdpZEJvZHkpIHJpZ2lkQm9keS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveENvbGxpZGVyID0gdGhpcy5ncm91bmROb2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICBpZiAoYm94Q29sbGlkZXIpIGJveENvbGxpZGVyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5paw5aKe77ya6YGK5oiy6ZaL5aeL5pmC6Zqx6JeP5Yaw5aGK5ZyW54mHXHJcbiAgICAgICAgaWYgKHRoaXMuaWNlSW1hZ2VOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNlSW1hZ2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllck5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyU2NyaXB0ID0gdGhpcy5wbGF5ZXJOb2RlLmdldENvbXBvbmVudCgnUGxheWVyJyk7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlRGlyID0gMTtcclxuICAgICAgICAgICAgaWYgKHBsYXllclNjcmlwdCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZURpciA9IHBsYXllclNjcmlwdC5ub2RlLnNjYWxlWCA8IDAgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5qC55pOa5pa55ZCR6Kq/5pW06aKo55qE5L2N572uXHJcbiAgICAgICAgICAgIGlmIChtb3ZlRGlyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLnBsYXllck5vZGUueCAtIHRoaXMub2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uX2lkeCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSAtdGhpcy5yb3RhdGlvbjsgLy8g5bem6YKK6aKo5ZCRXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMucGxheWVyTm9kZS54ICsgdGhpcy5vZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25faWR4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGlvbiA9IHRoaXMucm90YXRpb247IC8vIOWPs+mCiumiqOWQkVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5wbGF5ZXJOb2RlLnkgKyB0aGlzLm9mZnNldFk7XHJcblxyXG4gICAgICAgICAgICAvLyDmlrnlkJHmlLnorormmYLvvIzoi6Xpoqjpoa/npLrkuK3liYfnq4vljbPliIfmj5vli5XnlatcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgJiYgbW92ZURpciAhPT0gdGhpcy5sYXN0TW92ZURpcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbSAmJiBhbmltLmdldENsaXBzKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaXAgPSBhbmltLmdldENsaXBzKClbdGhpcy5hbmltYXRpb25faWR4XTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltLnBsYXkoY2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RNb3ZlRGlyID0gbW92ZURpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5oyB57qM5o6o5YuV566x5a2QXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCbG93aW5nICYmIHRoaXMucGxheWVyTm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50IHx8IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgIGxldCBjcmF0ZU5vZGVMaXN0OiBjYy5Ob2RlW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3JhdGVOb2RlcyAmJiBBcnJheS5pc0FycmF5KHRoaXMuY3JhdGVOb2RlcykgJiYgdGhpcy5jcmF0ZU5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNyYXRlTm9kZUxpc3QgPSB0aGlzLmNyYXRlTm9kZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmspLmnInmjIflrprliYfoh6rli5XlsIvmib7loLTmma/miYDmnIkgQ3JhdGVcclxuICAgICAgICAgICAgICAgIGNyYXRlTm9kZUxpc3QgPSBwYXJlbnQuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmdldENvbXBvbmVudCAmJiBjaGlsZC5nZXRDb21wb25lbnQoJ0NyYXRlJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyYXRlTm9kZUxpc3QuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmF0ZSA9IGNoaWxkLmdldENvbXBvbmVudCAmJiBjaGlsZC5nZXRDb21wb25lbnQoJ0NyYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeCA9IGNoaWxkLnggLSB0aGlzLnBsYXllck5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeSA9IGNoaWxkLnkgLSB0aGlzLnBsYXllck5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR4ID4gMCAmJiBkaXN0YW5jZSA8IDMwMCAmJiB0aGlzLnBsYXllck5vZGUuc2NhbGVYID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmF0ZS5hcHBseVdpbmRGb3JjZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGR4IDwgMCAmJiBkaXN0YW5jZSA8IDMwMCAmJiB0aGlzLnBsYXllck5vZGUuc2NhbGVYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmF0ZS5hcHBseVdpbmRGb3JjZSgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5oyB57qM5o6o5YuV5qmLXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCbG93aW5nICYmIHRoaXMuYnJpZGdlTm9kZSAmJiB0aGlzLnBsYXllck5vZGUgJiYgdGhpcy5wbGF5ZXJOb2RlLnNjYWxlWCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLmJyaWRnZU5vZGUueCAtIHRoaXMucGxheWVyTm9kZS54O1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IHRoaXMuYnJpZGdlTm9kZS55IC0gdGhpcy5wbGF5ZXJOb2RlLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgY2MubG9nKFwiQnJpZGdlIGRpc3RhbmNlOlwiLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc1Jpc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYnJpZGdlTm9kZS55IDwgMTIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyaWRnZU5vZGUueSArPSA1MCAqIGR0OyAvLyDmr4/np5LkuIrljYcxMDDllq7kvY1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSaXNpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYnJpZGdlTm9kZS55ID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpZGdlTm9kZS55IC09IDUwICogZHQ7IC8vIOavj+enkuS4i+mZjTEwMOWWruS9jVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Jpc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaE5vZGUgJiYgdGhpcy5wbGF5ZXJOb2RlLnNjYWxlWCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3dpdGNoU2NyaXB0ID0gdGhpcy5zd2l0Y2hOb2RlLmdldENvbXBvbmVudCgnU3dpdGNoJyk7XHJcbiAgICAgICAgICAgIGlmIChzd2l0Y2hTY3JpcHQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaFNjcmlwdC5zZXRTdGF0ZSgwKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmxvd2luZyAmJiB0aGlzLmJyaWRnZU5vZGUgJiYgdGhpcy5wbGF5ZXJOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLmJyaWRnZU5vZGUueCAtIHRoaXMucGxheWVyTm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gdGhpcy5icmlkZ2VOb2RlLnkgLSB0aGlzLnBsYXllck5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiQnJpZGdlIGRpc3RhbmNlOlwiLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMzAwICYmIHRoaXMuYnJpZGdlTm9kZS55IDwgMTIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTY3JpcHQuc2V0U3RhdGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTY3JpcHQuc2V0U3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZikge1xyXG4gICAgICAgICAgICAvLyDpoqjli5XnlavlkozlkLnnrrHlrZDlip/og73vvIjpgJnoo6HkuI3liKTmlrcgaWNlQ3JlYXRlZO+8iVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+56ys5LiA5YCL5YuV55WrXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbmltICYmIGFuaW0uZ2V0Q2xpcHMoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RDbGlwID0gYW5pbS5nZXRDbGlwcygpW3RoaXMuYW5pbWF0aW9uX2lkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5wbGF5KGZpcnN0Q2xpcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOiLpeW3sue2k+mhr+ekuu+8jOeiuuS/neWLleeVq+aMgee6jOaSpeaUvlxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbSAmJiBhbmltLmdldENsaXBzKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2xpcCA9IGFuaW0uZ2V0Q2xpcHMoKVt0aGlzLmFuaW1hdGlvbl9pZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5pbS5nZXRBbmltYXRpb25TdGF0ZShmaXJzdENsaXAubmFtZSkuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW0ucGxheShmaXJzdENsaXAubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG93aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWPquacieWGsOWhiueUn+aIkOmAmeauteimgeWIpOaWtyBpY2VDcmVhdGVkXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICF0aGlzLmljZUNyZWF0ZWQgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uTm9kZSAmJiB0aGlzLmdyb3VuZE5vZGUgJiYgdGhpcy5wbGF5ZXJOb2RlICYmIHRoaXMuaWNlSW1hZ2VOb2RlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8g5Lul5LiW55WM5bqn5qiZ6KiI566X6Led6ZuiXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdpb25Qb3MgPSB0aGlzLnJlZ2lvbk5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMucGxheWVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSByZWdpb25Qb3MueCAtIHBsYXllclBvcy54O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSByZWdpb25Qb3MueSAtIHBsYXllclBvcy55O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IDUwMCAmJiBkeCA+IDAgJiYgdGhpcy5wbGF5ZXJOb2RlLnNjYWxlWCA+IDApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGRpc3RhbmNlIDwgNTAwICYmIGR4IDwgMCAmJiB0aGlzLnBsYXllck5vZGUuc2NhbGVYIDwgMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlkIzmmYLpoa/npLrlhrDloYrlnJbniYfoiIfllZ/nlKggR3JvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY2VJbWFnZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDnlJ/miJDmmYLmkq3mlL7pn7PmlYhcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iZWNvbWVJY2VBdWRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmVjb21lSWNlQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuaWNlSW1hZ2VOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHNwcml0ZS5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEuNSwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZE5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ncm91bmROb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMS41LCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdpZEJvZHkgPSB0aGlzLmdyb3VuZE5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2lkQm9keSkgcmlnaWRCb2R5LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJveENvbGxpZGVyID0gdGhpcy5ncm91bmROb2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3hDb2xsaWRlcikgYm94Q29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY2VDcmVhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmuIXpmaTliY3kuIDmrKHnmoR0aW1lb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaWNlUmVtb3ZlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pY2VSZW1vdmVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY2VSZW1vdmVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gNeenkuW+jOWQjOaZgua3oeWHuuiIh+mXnOmWiVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNlUmVtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5pY2VJbWFnZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHNwcml0ZS5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY2VJbWFnZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWNlSW1hZ2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ3JvdW5kTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZE5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5raI5aSx5pmC5Lmf5pKt5pS+6Z+z5pWIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJlY29tZUljZUF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmVjb21lSWNlQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmljZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5mKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0Jsb3dpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5zcGFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCbG93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Signup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaWdudXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBOEZBLENBQUM7SUE1Rkcsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUU1Qiw0Q0FBNEM7SUFDNUMsc0JBQUssR0FBTDtRQUNJLDZCQUE2QjtRQUM3QixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkQsSUFBSSxVQUFVLEVBQUU7WUFDWixVQUFVLENBQUMsRUFBRSxDQUNULEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUNQLENBQUM7U0FDTDtRQUVELCtCQUErQjtRQUMvQixFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxDQUNoQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQzVCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FDUCxDQUFDO1FBRUYsa0RBQWtEO1FBQ2xELDBDQUEwQztRQUMxQyxzQkFBc0I7UUFDdEIsSUFBSTtJQUNSLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsOEJBQWEsR0FBYjtRQUNJLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxJQUFJLFVBQVUsRUFBRTtZQUNaLFVBQVUsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM1RjthQUFNO1lBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBRUQsc0RBQXNEO0lBQ3RELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQzthQUMxRCxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGdEQUFnRDtJQUNoRCxJQUFJO0lBRUosaUNBQWlDO0lBQ3pCLDhCQUFhLEdBQXJCO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUM7YUFDcEQsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQzthQUMxRCxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO2FBQzFELFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRW5DLDJDQUEyQztRQUMzQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsOEJBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQzthQUMxRCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsdUNBQXVDO1lBQ3ZDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkQsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3pCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxXQUFXLEVBQUUsQ0FBQztnQkFDZCxTQUFTLEVBQUUsQ0FBQzthQUNmLENBQUMsQ0FBQztZQUVILEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQ3BELElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixXQUFXLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUM5RjtpQkFBTTtnQkFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsb0NBQW9DO1lBQ3BDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLFdBQVcsRUFBRSxRQUFRO2FBQ3hCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixnQkFBZ0I7WUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3RmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4RjFCO0lBQUQsYUFBQztDQTlGRCxBQThGQyxDQTlGbUMsRUFBRSxDQUFDLFNBQVMsR0E4Ri9DO2tCQTlGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbnVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIC8vIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICAvLyBDYWxsZWQgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgZW5hYmxlZFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgcXVpdCBidXR0b24gZXZlbnRcclxuICAgICAgICBjb25zdCBxdWl0QnV0dG9uID0gY2MuZmluZChcInNtYWxsX2NhbnZhc19iZy9xdWl0XCIpO1xyXG4gICAgICAgIGlmIChxdWl0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHF1aXRCdXR0b24ub24oXHJcbiAgICAgICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZW51U2NlbmUsXHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWdpc3RlciBzdWJtaXQgYnV0dG9uIGV2ZW50XHJcbiAgICAgICAgY2MuZmluZChcInNtYWxsX2NhbnZhc19iZy9zdWJtaXRcIikub24oXHJcbiAgICAgICAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWNjb3VudCxcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIC8vIFBsYXkgYmFja2dyb3VuZCBtdXNpYyBpZiBub3QgYWxyZWFkeSBwbGF5aW5nXHJcbiAgICAgICAgLy8gaWYgKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkcyB0aGUgbWVudSBzY2VuZVxyXG4gICAgbG9hZE1lbnVTY2VuZSgpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gY2MuZmluZChcIkNhbnZhcy9UcmFuc2l0aW9uXCIpO1xyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24uZ2V0Q29tcG9uZW50KFwiVHJhbnNpdGlvbk1hbmFnZXJcIikucGxheVRyYW5zT3V0QW5kQ2hhbmdlU2NlbmUoXCJTY2VuZTAwMF9NZW51XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlNjZW5lMDAwX01lbnVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGxlZCBldmVyeSBmcmFtZSwgbG9ncyB0aGUgY3VycmVudCB1c2VybmFtZSBpbnB1dFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBjYy5maW5kKFwic21hbGxfY2FudmFzX2JnL3VzZXJuYW1lL1RFWFRfTEFCRUxcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIGNjLmxvZyh1c2VybmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy8gUGxheXMgYmFja2dyb3VuZCBtdXNpY1xyXG4gICAgLy8gcGxheUJHTSgpIHtcclxuICAgIC8vICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIEhhbmRsZXMgYWNjb3VudCBjcmVhdGlvbiBsb2dpY1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVBY2NvdW50KCkge1xyXG4gICAgICAgIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlc1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gY2MuZmluZChcInNtYWxsX2NhbnZhc19iZy9lbWFpbC9URVhUX0xBQkVMXCIpXHJcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGNjLmZpbmQoXCJzbWFsbF9jYW52YXNfYmcvdXNlcm5hbWUvVEVYVF9MQUJFTFwiKVxyXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjYy5maW5kKFwic21hbGxfY2FudmFzX2JnL3Bhc3N3b3JkL1RFWFRfTEFCRUxcIilcclxuICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdXNlciB3aXRoIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB1c2VyIGRhdGEgaW4gRmlyZWJhc2UgRGF0YWJhc2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXJfbGlzdC8nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsS2V5ID0gZW1haWwucmVwbGFjZShcIi5cIiwgXCItXCIpO1xyXG4gICAgICAgICAgICAgICAgdXNlcnNSZWYuY2hpbGQoZW1haWxLZXkpLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhfc3RhZ2U6IFwiU2NlbmUwMDFfSG9tZV9PdXRzaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVhdGhfY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheV90aW1lOiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIHRoZSBhY2NvdW50IVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb24yID0gY2MuZmluZChcIkNhbnZhcy9UcmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjIuZ2V0Q29tcG9uZW50KFwiVHJhbnNpdGlvbk1hbmFnZXJcIikucGxheVRyYW5zT3V0QW5kQ2hhbmdlU2NlbmUoXCJTY2VuZTAwMF9Mb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU2NlbmUwMDBfTG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHVzZXIgcHJvZmlsZSB3aXRoIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnVzZXIudXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4da677y89CoYaRo5Za3EB3', 'Player');
// Script/Player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var AudioManager_1 = require("./AudioManager");
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveSpeed = 300;
        _this.jumpForce = 850;
        _this.gravity = 1500;
        _this.maxFallSpeed = 800;
        _this.groundY = -300;
        _this.moveDirection = 0;
        _this.onGround = false;
        _this.isJumping = false;
        _this.isFalling = false;
        _this.anim = null;
        _this.verticalVelocity = 0;
        _this.horizontalVelocity = 0;
        _this.rigidbody = null;
        _this.collider = null;
        _this.currentAnimation = "idle";
        _this.groundCheckDistance = 10;
        _this.lastVerticalVelocity = 0;
        _this.footstepSoundId = -1;
        _this.lastFootstepTime = 0;
        _this.footstepInterval = 0.3;
        _this.isDied = false;
        _this.footstepSound = null; // 走路音效
        _this.jumpSound = null; // 跳跃音效
        _this.dieSound = null; // 新增：死亡音效
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        this.isDied = false;
        cc.director.getCollisionManager().enabled = true;
        // 初始化物理系統
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        manager.gravity = cc.v2(0, -1200);
        manager.debugDrawFlags = 0; // 關閉碰撞顯示
        // 獲取組件
        this.anim = this.getComponent(cc.Animation);
        if (this.anim) {
            var clips = this.anim.getClips();
            clips.forEach(function (clip) {
                clip.wrapMode = cc.WrapMode.Loop;
            });
        }
        // 初始化物理組件
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        if (this.rigidbody) {
            this.rigidbody.type = cc.RigidBodyType.Dynamic;
            this.rigidbody.fixedRotation = true;
            this.rigidbody.enabledContactListener = true;
            this.rigidbody.gravityScale = 0;
            this.rigidbody.linearDamping = 0;
            this.rigidbody.allowSleep = false;
        }
        if (this.collider) {
            this.collider.enabled = true;
            this.collider.sensor = false;
            this.collider.friction = 0.3;
            this.collider.restitution = 0;
            // 調整碰撞箱大小
            var size = this.node.getContentSize();
            this.collider.size = cc.size(size.width * 0.8, size.height * 0.8);
            this.collider.offset = cc.v2(0, -size.height * 0.1);
        }
        // 註冊鍵盤事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // 預設播放待機動畫
        if (this.anim) {
            this.anim.play("idle");
        }
    };
    PlayerController.prototype.playAnimation = function (animName) {
        if (this.isDied)
            return;
        if (this.anim && this.currentAnimation !== animName) {
            var state = this.anim.getAnimationState(animName);
            if (state) {
                state.wrapMode = cc.WrapMode.Loop;
                state.speed = 1.0;
                this.anim.play(animName);
                this.currentAnimation = animName;
            }
        }
    };
    PlayerController.prototype.onKeyDown = function (event) {
        if (this.isDied)
            return;
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                this.moveDirection = -1;
                this.horizontalVelocity = -this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX > 0 && !cc.director.isPaused()) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                this.moveDirection = 1;
                this.horizontalVelocity = this.moveSpeed;
                if (!this.isJumping) {
                    this.playAnimation("move");
                }
                if (this.node.scaleX < 0 && !cc.director.isPaused()) {
                    this.node.scaleX *= -1;
                }
                break;
            case cc.macro.KEY.up:
            case cc.macro.KEY.space:
                if (this.onGround) {
                    this.jump();
                }
                break;
        }
    };
    PlayerController.prototype.onKeyUp = function (event) {
        if (this.isDied)
            return;
        switch (event.keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                if (this.moveDirection < 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                        this.stopFootstepSound(); // 停止走路音效
                    }
                }
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                if (this.moveDirection > 0) {
                    this.moveDirection = 0;
                    this.horizontalVelocity = 0;
                    if (!this.isJumping) {
                        this.playAnimation("idle");
                        this.stopFootstepSound(); // 停止走路音效
                    }
                }
                break;
        }
    };
    PlayerController.prototype.playJumpSound = function () {
        if (this.jumpSound) {
            cc.audioEngine.play(this.jumpSound, false, cc.audioEngine.getVolume(AudioManager_1.default.audioId));
        }
    };
    PlayerController.prototype.jump = function () {
        if (this.onGround) {
            this.onGround = false;
            this.isJumping = true;
            this.isFalling = false;
            this.verticalVelocity = this.jumpForce;
            this.playAnimation("jump");
            this.playJumpSound(); // 播放跳跃音效
        }
    };
    PlayerController.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            var normal = contact.getWorldManifold().normal;
            if (normal.y < 0) {
                this.onGround = true;
                this.isJumping = false;
                this.isFalling = false;
                this.verticalVelocity = 0;
                if (this.moveDirection !== 0) {
                    this.playAnimation("move");
                }
                else {
                    this.playAnimation("idle");
                }
            }
        }
        // 新增：碰到 DieArea 就 reload 當前場景
        if (otherCollider.node.name === 'DieArea') {
            this.isDied = true;
            var sceneName_1 = cc.director.getScene().name;
            // 播放死亡音效
            if (this.dieSound) {
                cc.audioEngine.playEffect(this.dieSound, false);
            }
            // 讓玩家慢慢跌倒（0.5秒內旋轉90度）
            cc.tween(this.node)
                .to(0.5, { angle: 90 })
                .start();
            setTimeout(function () {
                cc.director.loadScene(sceneName_1);
            }, 2000);
        }
    };
    PlayerController.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            var normal = contact.getWorldManifold().normal;
            if (normal.y < 0) {
                this.onGround = false;
                if (this.verticalVelocity < 0) {
                    this.isFalling = true;
                    this.playAnimation("fall");
                }
            }
        }
    };
    PlayerController.prototype.playFootstepSound = function () {
        var currentTime = Date.now() / 1000; // 转换为秒
        if (currentTime - this.lastFootstepTime >= this.footstepInterval) {
            if (this.footstepSound) {
                // 如果之前的音效还在播放，先停止它
                if (this.footstepSoundId !== -1) {
                    cc.audioEngine.stop(this.footstepSoundId);
                }
                // 播放新的音效，使用配置的音量
                this.footstepSoundId = cc.audioEngine.play(this.footstepSound, false, cc.audioEngine.getVolume(AudioManager_1.default.audioId));
                this.lastFootstepTime = currentTime;
            }
        }
    };
    PlayerController.prototype.stopFootstepSound = function () {
        if (this.footstepSoundId !== -1) {
            cc.audioEngine.stop(this.footstepSoundId);
            this.footstepSoundId = -1;
        }
    };
    PlayerController.prototype.update = function (dt) {
        if (this.isDied)
            return;
        // 檢查是否在地面上
        if (!this.onGround) {
            var startPos = cc.v2(this.node.position.x, this.node.position.y);
            var rayStart = cc.v2(startPos.x, startPos.y);
            var rayEnd = cc.v2(startPos.x, startPos.y - this.groundCheckDistance);
            var results = cc.director.getPhysicsManager().rayCast(rayStart, rayEnd, cc.RayCastType.All);
            if (results.length > 0) {
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    if (result.collider.node.name === 'Ground') {
                        // 確保只有在地面Y座標附近才判定為著地
                        if (Math.abs(result.point.y - this.groundY) < 10) {
                            this.onGround = true;
                            this.isFalling = false;
                            this.isJumping = false;
                            this.verticalVelocity = 0;
                            this.node.y = this.groundY; // 確保角色位置正確
                            break;
                        }
                    }
                }
            }
        }
        // 應用重力
        if (!this.onGround) {
            this.verticalVelocity -= this.gravity * dt;
            if (this.verticalVelocity < -this.maxFallSpeed) {
                this.verticalVelocity = -this.maxFallSpeed;
            }
            // 檢測跳躍到最高點
            if (this.lastVerticalVelocity > 0 && this.verticalVelocity <= 0) {
                this.isJumping = false;
                this.isFalling = true;
                this.playAnimation("fall");
            }
            // 更新下落狀態
            if (this.verticalVelocity < 0 && !this.isFalling) {
                this.isFalling = true;
                this.isJumping = false;
                this.playAnimation("fall");
            }
        }
        // 更新位置
        var newX = this.node.x + this.horizontalVelocity * dt;
        var newY = this.node.y + this.verticalVelocity * dt;
        // 如果在地面上且正在移动，播放走路音效
        if (this.onGround && this.moveDirection !== 0) {
            this.playFootstepSound();
        }
        else {
            this.stopFootstepSound(); // 如果不在移动，停止音效
        }
        // 防止角色掉出地面
        if (newY < this.groundY) {
            newY = this.groundY;
            this.onGround = true;
            this.isFalling = false;
            this.isJumping = false;
            this.verticalVelocity = 0;
        }
        this.node.setPosition(newX, newY);
        // 更新動畫
        if (this.anim) {
            if (this.isJumping) {
                this.playAnimation("jump");
            }
            else if (this.isFalling) {
                this.playAnimation("fall");
            }
            else if (this.moveDirection !== 0) {
                this.playAnimation("move");
            }
            else {
                this.playAnimation("idle");
            }
        }
        // 保存當前垂直速度用於下一幀比較
        this.lastVerticalVelocity = this.verticalVelocity;
    };
    PlayerController.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    PlayerController.prototype.onCollisionEnter = function (other, self) {
        cc.log('onCollisionEnter:', other.node.name);
        if (other.node.name === "JumpArea") {
            cc.tween(self.node)
                .to(0.5, { y: self.node.y + 500 })
                .start();
            cc.log('JumpArea triggered, moving up 500');
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "footstepSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "jumpSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PlayerController.prototype, "dieSound", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsK0NBQTBDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBaVdDO1FBaFdHLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQzNCLGFBQU8sR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUVoQixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUMxQixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLGNBQVEsR0FBMEIsSUFBSSxDQUFDO1FBQ3ZDLHNCQUFnQixHQUFXLE1BQU0sQ0FBQztRQUNsQyx5QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsMEJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLHFCQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0Isc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLHNCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUMvQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBSWhDLG1CQUFhLEdBQWlC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LyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSAnLi9BdWRpb01hbmFnZXInO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBtb3ZlU3BlZWQ6IG51bWJlciA9IDMwMDtcclxuICAgIGp1bXBGb3JjZTogbnVtYmVyID0gODUwO1xyXG4gICAgZ3Jhdml0eTogbnVtYmVyID0gMTUwMDtcclxuICAgIG1heEZhbGxTcGVlZDogbnVtYmVyID0gODAwO1xyXG4gICAgZ3JvdW5kWTogbnVtYmVyID0gLTMwMDtcclxuXHJcbiAgICBwdWJsaWMgbW92ZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNKdW1waW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzRmFsbGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbFZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBob3Jpem9udGFsVmVsb2NpdHk6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRBbmltYXRpb246IHN0cmluZyA9IFwiaWRsZVwiO1xyXG4gICAgcHJpdmF0ZSBncm91bmRDaGVja0Rpc3RhbmNlOiBudW1iZXIgPSAxMDtcclxuICAgIHByaXZhdGUgbGFzdFZlcnRpY2FsVmVsb2NpdHk6IG51bWJlciA9IDA7IFxyXG4gICAgcHJpdmF0ZSBmb290c3RlcFNvdW5kSWQ6IG51bWJlciA9IC0xOyBcclxuICAgIHByaXZhdGUgbGFzdEZvb3RzdGVwVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZm9vdHN0ZXBJbnRlcnZhbDogbnVtYmVyID0gMC4zOyBcclxuICAgIHByaXZhdGUgaXNEaWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZm9vdHN0ZXBTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDsgIC8vIOi1sOi3r+mfs+aViFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBqdW1wU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7ICAvLyDot7Pot4Ppn7PmlYhcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIGRpZVNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsOyAvLyDmlrDlop7vvJrmrbvkuqHpn7PmlYhcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0RpZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW54mp55CG57O757WxXHJcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBtYW5hZ2VyLmdyYXZpdHkgPSBjYy52MigwLCAtMTIwMCk7XHJcbiAgICAgICAgbWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9IDA7ICAvLyDpl5zplonnorDmkp7poa/npLpcclxuXHJcbiAgICAgICAgLy8g542y5Y+W57WE5Lu2XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5hbmltKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaXBzID0gdGhpcy5hbmltLmdldENsaXBzKCk7XHJcbiAgICAgICAgICAgIGNsaXBzLmZvckVhY2goY2xpcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGlwLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbniannkIbntYTku7ZcclxuICAgICAgICB0aGlzLnJpZ2lkYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJpZ2lkYm9keSkge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmxpbmVhckRhbXBpbmcgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5hbGxvd1NsZWVwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLnNlbnNvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLmZyaWN0aW9uID0gMC4zO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLnJlc3RpdHV0aW9uID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIOiqv+aVtOeisOaSnueuseWkp+Wwj1xyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoc2l6ZS53aWR0aCAqIDAuOCwgc2l6ZS5oZWlnaHQgKiAwLjgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDAsIC1zaXplLmhlaWdodCAqIDAuMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDoqLvlhorpjbXnm6Tkuovku7ZcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDpoJDoqK3mkq3mlL7lvoXmqZ/li5XnlatcclxuICAgICAgICBpZiAodGhpcy5hbmltKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5QW5pbWF0aW9uKGFuaW1OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RpZWQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5hbmltICYmIHRoaXMuY3VycmVudEFuaW1hdGlvbiAhPT0gYW5pbU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMS4wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoYW5pbU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gYW5pbU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaWVkKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gLXRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSnVtcGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCA+IDAgJiYgIWNjLmRpcmVjdG9yLmlzUGF1c2VkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuc2NhbGVYIDwgMCAmJiAhY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Hcm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaWVkKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlRGlyZWN0aW9uIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0p1bXBpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wRm9vdHN0ZXBTb3VuZCgpOyAgLy8g5YGc5q2i6LWw6Lev6Z+z5pWIXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZURpcmVjdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNKdW1waW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcEZvb3RzdGVwU291bmQoKTsgIC8vIOWBnOatoui1sOi3r+mfs+aViFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlKdW1wU291bmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanVtcFNvdW5kKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5qdW1wU291bmQsIGZhbHNlLCBjYy5hdWRpb0VuZ2luZS5nZXRWb2x1bWUoQXVkaW9NYW5hZ2VyLmF1ZGlvSWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkdyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uR3JvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gdGhpcy5qdW1wRm9yY2U7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImp1bXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUp1bXBTb3VuZCgpOyAgLy8g5pKt5pS+6Lez6LeD6Z+z5pWIXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09PSAnR3JvdW5kJykge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWwgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobm9ybWFsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNKdW1waW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlRGlyZWN0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwibW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOaWsOWinu+8mueisOWIsCBEaWVBcmVhIOWwsSByZWxvYWQg55W25YmN5aC05pmvXHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09PSAnRGllQXJlYScpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBzY2VuZU5hbWUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XHJcbiAgICAgICAgICAgIC8vIOaSreaUvuatu+S6oemfs+aViFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaWVTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZVNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g6K6T546p5a625oWi5oWi6LeM5YCS77yIMC4156eS5YWn5peL6L2JOTDluqbvvIlcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBhbmdsZTogOTAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG5vcm1hbC55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWxWZWxvY2l0eSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZmFsbFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5Rm9vdHN0ZXBTb3VuZCgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCkgLyAxMDAwOyAgLy8g6L2s5o2i5Li656eSXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0Rm9vdHN0ZXBUaW1lID49IHRoaXMuZm9vdHN0ZXBJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mb290c3RlcFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzkuYvliY3nmoTpn7PmlYjov5jlnKjmkq3mlL7vvIzlhYjlgZzmraLlroNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvb3RzdGVwU291bmRJZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuZm9vdHN0ZXBTb3VuZElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOaSreaUvuaWsOeahOmfs+aViO+8jOS9v+eUqOmFjee9rueahOmfs+mHj1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb290c3RlcFNvdW5kSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZm9vdHN0ZXBTb3VuZCwgZmFsc2UsIGNjLmF1ZGlvRW5naW5lLmdldFZvbHVtZShBdWRpb01hbmFnZXIuYXVkaW9JZCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Rm9vdHN0ZXBUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wRm9vdHN0ZXBTb3VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mb290c3RlcFNvdW5kSWQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5mb290c3RlcFNvdW5kSWQpO1xyXG4gICAgICAgICAgICB0aGlzLmZvb3RzdGVwU291bmRJZCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGllZCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIOaqouafpeaYr+WQpuWcqOWcsOmdouS4ilxyXG4gICAgICAgIGlmICghdGhpcy5vbkdyb3VuZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJheVN0YXJ0ID0gY2MudjIoc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJheUVuZCA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgLSB0aGlzLmdyb3VuZENoZWNrRGlzdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkucmF5Q2FzdChyYXlTdGFydCwgcmF5RW5kLCBjYy5SYXlDYXN0VHlwZS5BbGwpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2xsaWRlci5ub2RlLm5hbWUgPT09ICdHcm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeiuuS/neWPquacieWcqOWcsOmdolnluqfmqJnpmYTov5HmiY3liKTlrprngrrokZflnLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJlc3VsdC5wb2ludC55IC0gdGhpcy5ncm91bmRZKSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ncm91bmRZOyAgLy8g56K65L+d6KeS6Imy5L2N572u5q2j56K6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5oeJ55So6YeN5YqbXHJcbiAgICAgICAgaWYgKCF0aGlzLm9uR3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxWZWxvY2l0eSAtPSB0aGlzLmdyYXZpdHkgKiBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWxWZWxvY2l0eSA8IC10aGlzLm1heEZhbGxTcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZlbG9jaXR5ID0gLXRoaXMubWF4RmFsbFNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDmqqLmuKzot7Pouo3liLDmnIDpq5jpu55cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFZlcnRpY2FsVmVsb2NpdHkgPiAwICYmIHRoaXMudmVydGljYWxWZWxvY2l0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZmFsbFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5pu05paw5LiL6JC954uA5oWLXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPCAwICYmICF0aGlzLmlzRmFsbGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0p1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcImZhbGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOS9jee9rlxyXG4gICAgICAgIGxldCBuZXdYID0gdGhpcy5ub2RlLnggKyB0aGlzLmhvcml6b250YWxWZWxvY2l0eSAqIGR0O1xyXG4gICAgICAgIGxldCBuZXdZID0gdGhpcy5ub2RlLnkgKyB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgKiBkdDtcclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5Zyo5Zyw6Z2i5LiK5LiU5q2j5Zyo56e75Yqo77yM5pKt5pS+6LWw6Lev6Z+z5pWIXHJcbiAgICAgICAgaWYgKHRoaXMub25Hcm91bmQgJiYgdGhpcy5tb3ZlRGlyZWN0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUZvb3RzdGVwU291bmQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BGb290c3RlcFNvdW5kKCk7ICAvLyDlpoLmnpzkuI3lnKjnp7vliqjvvIzlgZzmraLpn7PmlYhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmYsuatouinkuiJsuaOieWHuuWcsOmdolxyXG4gICAgICAgIGlmIChuZXdZIDwgdGhpcy5ncm91bmRZKSB7XHJcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLmdyb3VuZFk7XHJcbiAgICAgICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzSnVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1gsIG5ld1kpO1xyXG5cclxuICAgICAgICAvLyDmm7TmlrDli5XnlatcclxuICAgICAgICBpZiAodGhpcy5hbmltKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSnVtcGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwianVtcFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRmFsbGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZmFsbFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVEaXJlY3Rpb24gIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUFuaW1hdGlvbihcIm1vdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oXCJpZGxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkv53lrZjnlbbliY3lnoLnm7TpgJ/luqbnlKjmlrzkuIvkuIDluYDmr5TovINcclxuICAgICAgICB0aGlzLmxhc3RWZXJ0aWNhbFZlbG9jaXR5ID0gdGhpcy52ZXJ0aWNhbFZlbG9jaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGNjLmxvZygnb25Db2xsaXNpb25FbnRlcjonLCBvdGhlci5ub2RlLm5hbWUpO1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT09IFwiSnVtcEFyZWFcIikge1xyXG4gICAgICAgICAgICBjYy50d2VlbihzZWxmLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHk6IHNlbGYubm9kZS55ICsgNTAwIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2MubG9nKCdKdW1wQXJlYSB0cmlnZ2VyZWQsIG1vdmluZyB1cCA1MDAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fcd7dzYXhKYoTqqS8pN7ZJ', 'Camera');
// Script/Camera.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Reference to the player node
        _this.player = null;
        return _this;
    }
    // Called when the script instance is being loaded
    NewClass.prototype.onLoad = function () {
        // Find the player node in the scene
        this.player = cc.find("Player");
    };
    // Called every frame, dt is the delta time since last frame
    NewClass.prototype.update = function (dt) {
        // Get the target position (player's position)
        var playerPos = this.player.getPosition();
        // Offset the camera to the left by 100 units (adjust as needed)
        var targetPos = playerPos.clone();
        targetPos.x -= 400;
        targetPos.y -= 400;
        // Get the current camera position
        var cameraPos = this.node.getPosition();
        // Smoothly interpolate camera position towards target position
        cameraPos.lerp(targetPos, 0.1, cameraPos);
        // Smoothly interpolate camera's y position towards target y (for softer vertical movement)
        cameraPos.y = cc.misc.lerp(cameraPos.y, targetPos.y, 0.5);
        // Clamp the camera's x position between 0 and 8000
        if (cameraPos.x < 0) {
            cameraPos.x = 0;
        }
        else if (cameraPos.x > 3072) {
            cameraPos.x = 3072;
        }
        if (cameraPos.y < 0) {
            cameraPos.y = 0;
        }
        else if (cameraPos.y > 2500) {
            cameraPos.y = 2500;
        }
        // Set the camera's new position
        this.node.setPosition(cameraPos);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5Q0M7UUF4Q0csK0JBQStCO1FBQy9CLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBdUMzQixDQUFDO0lBckNHLGtEQUFrRDtJQUNsRCx5QkFBTSxHQUFOO1FBQ0ksb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNERBQTREO0lBQzVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsOENBQThDO1FBQzlDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUMsZ0VBQWdFO1FBQ2hFLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNuQixTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUVuQixrQ0FBa0M7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QywrREFBK0Q7UUFDL0QsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLDJGQUEyRjtRQUMzRixTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUxRCxtREFBbUQ7UUFDbkQsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQixTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjthQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFDM0IsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdEI7UUFDRCxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtZQUMzQixTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBeENnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUM1QjtJQUFELGVBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBeUNqRDtrQkF6Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gUmVmZXJlbmNlIHRvIHRoZSBwbGF5ZXIgbm9kZVxyXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBDYWxsZWQgd2hlbiB0aGUgc2NyaXB0IGluc3RhbmNlIGlzIGJlaW5nIGxvYWRlZFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIHBsYXllciBub2RlIGluIHRoZSBzY2VuZVxyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZChcIlBsYXllclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsZWQgZXZlcnkgZnJhbWUsIGR0IGlzIHRoZSBkZWx0YSB0aW1lIHNpbmNlIGxhc3QgZnJhbWVcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIEdldCB0aGUgdGFyZ2V0IHBvc2l0aW9uIChwbGF5ZXIncyBwb3NpdGlvbilcclxuICAgICAgICBsZXQgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBPZmZzZXQgdGhlIGNhbWVyYSB0byB0aGUgbGVmdCBieSAxMDAgdW5pdHMgKGFkanVzdCBhcyBuZWVkZWQpXHJcbiAgICAgICAgbGV0IHRhcmdldFBvcyA9IHBsYXllclBvcy5jbG9uZSgpO1xyXG4gICAgICAgIHRhcmdldFBvcy54IC09IDQwMDtcclxuICAgICAgICB0YXJnZXRQb3MueSAtPSA0MDA7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBjYW1lcmEgcG9zaXRpb25cclxuICAgICAgICBsZXQgY2FtZXJhUG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgLy8gU21vb3RobHkgaW50ZXJwb2xhdGUgY2FtZXJhIHBvc2l0aW9uIHRvd2FyZHMgdGFyZ2V0IHBvc2l0aW9uXHJcbiAgICAgICAgY2FtZXJhUG9zLmxlcnAodGFyZ2V0UG9zLCAwLjEsIGNhbWVyYVBvcyk7XHJcblxyXG4gICAgICAgIC8vIFNtb290aGx5IGludGVycG9sYXRlIGNhbWVyYSdzIHkgcG9zaXRpb24gdG93YXJkcyB0YXJnZXQgeSAoZm9yIHNvZnRlciB2ZXJ0aWNhbCBtb3ZlbWVudClcclxuICAgICAgICBjYW1lcmFQb3MueSA9IGNjLm1pc2MubGVycChjYW1lcmFQb3MueSwgdGFyZ2V0UG9zLnksIDAuNSk7XHJcblxyXG4gICAgICAgIC8vIENsYW1wIHRoZSBjYW1lcmEncyB4IHBvc2l0aW9uIGJldHdlZW4gMCBhbmQgODAwMFxyXG4gICAgICAgIGlmIChjYW1lcmFQb3MueCA8IDApIHtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2FtZXJhUG9zLnggPiAzMDcyKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYVBvcy54ID0gMzA3MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbWVyYVBvcy55IDwgMCkge1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjYW1lcmFQb3MueSA+IDI1MDApIHtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnkgPSAyNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXQgdGhlIGNhbWVyYSdzIG5ldyBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYW1lcmFQb3MpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TransitionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b146UPRx5HzLUWwOPnWvae', 'TransitionManager');
// Script/TransitionManager.ts

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
var TransitionManager = /** @class */ (function (_super) {
    __extends(TransitionManager, _super);
    function TransitionManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transitionAnim = null;
        return _this;
    }
    TransitionManager.prototype.onLoad = function () {
        this.playTransIn();
    };
    TransitionManager.prototype.playTransIn = function () {
        if (this.transitionAnim) {
            this.transitionAnim.play('TransIn');
        }
    };
    TransitionManager.prototype.playTransOutAndChangeScene = function (sceneName) {
        if (this.transitionAnim) {
            this.transitionAnim.play('TransOut');
            this.transitionAnim.once('finished', function () {
                cc.director.loadScene(sceneName);
            });
        }
        else {
            cc.director.loadScene(sceneName);
        }
    };
    TransitionManager.prototype.update = function () {
        // 讓 Transition 節點跟隨 Main Camera 的 x, y
        var camera = cc.director.getScene().getChildByName('Canvas').getChildByName('Main Camera');
        if (camera) {
            this.node.x = camera.x;
            this.node.y = camera.y;
        }
    };
    __decorate([
        property(cc.Animation)
    ], TransitionManager.prototype, "transitionAnim", void 0);
    TransitionManager = __decorate([
        ccclass
    ], TransitionManager);
    return TransitionManager;
}(cc.Component));
exports.default = TransitionManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUcmFuc2l0aW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQWlDQztRQS9CRyxvQkFBYyxHQUFpQixJQUFJLENBQUM7O0lBK0J4QyxDQUFDO0lBN0JHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQsc0RBQTBCLEdBQTFCLFVBQTJCLFNBQWlCO1FBQ3hDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSx1Q0FBdUM7UUFDdkMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdGLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZEQUNhO0lBRm5CLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBaUNyQztJQUFELHdCQUFDO0NBakNELEFBaUNDLENBakM4QyxFQUFFLENBQUMsU0FBUyxHQWlDMUQ7a0JBakNvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpdGlvbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIHRyYW5zaXRpb25BbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlUcmFuc0luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVRyYW5zSW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbkFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQW5pbS5wbGF5KCdUcmFuc0luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUcmFuc091dEFuZENoYW5nZVNjZW5lKHNjZW5lTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbkFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQW5pbS5wbGF5KCdUcmFuc091dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25BbmltLm9uY2UoJ2ZpbmlzaGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lTmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8g6K6TIFRyYW5zaXRpb24g56+A6bue6Lef6ZqoIE1haW4gQ2FtZXJhIOeahCB4LCB5XHJcbiAgICAgICAgY29uc3QgY2FtZXJhID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuZ2V0Q2hpbGRCeU5hbWUoJ01haW4gQ2FtZXJhJyk7XHJcbiAgICAgICAgaWYgKGNhbWVyYSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IGNhbWVyYS54O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IGNhbWVyYS55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2249vTRl9If5fEFrRAIxwo', 'AudioManager');
// Script/AudioManager.ts

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
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalBGM = null;
        _this.endingBGM = null;
        _this.volume = 0.5;
        _this.loop = true;
        return _this;
    }
    AudioManager_1 = AudioManager;
    Object.defineProperty(AudioManager, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.onLoad = function () {
        if (AudioManager_1._instance === null) {
            AudioManager_1._instance = this;
            cc.game.addPersistRootNode(this.node);
            // 只在第一次 persist 時自動播放
            this.playNormalBGM();
            cc.log(AudioManager_1.audioId);
        }
        else {
            this.node.destroy();
        }
    };
    AudioManager.prototype.playNormalBGM = function () {
        if (this.normalBGM) {
            this.stopBGM();
            AudioManager_1.audioId = cc.audioEngine.play(this.normalBGM, this.loop, this.volume);
        }
    };
    AudioManager.prototype.playEndingBGM = function () {
        if (this.endingBGM) {
            this.stopBGM();
            AudioManager_1.audioId = cc.audioEngine.play(this.endingBGM, this.loop, this.volume);
        }
    };
    AudioManager.prototype.stopBGM = function () {
        if (AudioManager_1.audioId !== -1) {
            cc.audioEngine.stop(AudioManager_1.audioId);
            AudioManager_1.audioId = -1;
        }
    };
    AudioManager.prototype.setVolume = function (volume) {
        this.volume = volume;
        // 只要有正在播放的 BGM，立即調整音量
        if (AudioManager_1.audioId !== -1) {
            cc.audioEngine.setVolume(AudioManager_1.audioId, volume);
        }
    };
    // 可選：切換 BGM 時自動用目前 volume
    AudioManager.prototype.switchToNormalBGM = function () {
        this.playNormalBGM();
        this.setVolume(this.volume);
    };
    AudioManager.prototype.switchToEndingBGM = function () {
        this.playEndingBGM();
        this.setVolume(this.volume);
    };
    AudioManager.prototype.onDestroy = function () {
        if (AudioManager_1._instance === this) {
            AudioManager_1._instance = null;
        }
    };
    var AudioManager_1;
    AudioManager._instance = null;
    AudioManager.audioId = -1;
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioManager.prototype, "normalBGM", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioManager.prototype, "endingBGM", void 0);
    __decorate([
        property
    ], AudioManager.prototype, "volume", void 0);
    __decorate([
        property
    ], AudioManager.prototype, "loop", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE2RUM7UUF4RUcsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUdyQixVQUFJLEdBQVksSUFBSSxDQUFDOztJQStEekIsQ0FBQztxQkE3RW9CLFlBQVk7SUFnQjdCLHNCQUFrQix3QkFBUTthQUExQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELDZCQUFNLEdBQU47UUFDSSxJQUFJLGNBQVksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ2pDLGNBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixjQUFZLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEY7SUFDTCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixjQUFZLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEY7SUFDTCxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNJLElBQUksY0FBWSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM3QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsY0FBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixzQkFBc0I7UUFDdEIsSUFBSSxjQUFZLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLHdDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxjQUFZLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUNqQyxjQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUNqQztJQUNMLENBQUM7O0lBM0VjLHNCQUFTLEdBQWlCLElBQUksQ0FBQztJQUNoQyxvQkFBTyxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzttREFDRjtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7bURBQ0Y7SUFHL0I7UUFEQyxRQUFRO2dEQUNZO0lBR3JCO1FBREMsUUFBUTs4Q0FDWTtJQWRKLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2RWhDO0lBQUQsbUJBQUM7Q0E3RUQsQUE2RUMsQ0E3RXlDLEVBQUUsQ0FBQyxTQUFTLEdBNkVyRDtrQkE3RW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEF1ZGlvTWFuYWdlciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBhdWRpb0lkOiBudW1iZXIgPSAtMTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIG5vcm1hbEJHTTogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIGVuZGluZ0JHTTogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHZvbHVtZTogbnVtYmVyID0gMC41O1xuXG4gICAgQHByb3BlcnR5XG4gICAgbG9vcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBBdWRpb01hbmFnZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAoQXVkaW9NYW5hZ2VyLl9pbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLl9pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICAgICAgLy8g5Y+q5Zyo56ys5LiA5qyhIHBlcnNpc3Qg5pmC6Ieq5YuV5pKt5pS+XG4gICAgICAgICAgICB0aGlzLnBsYXlOb3JtYWxCR00oKTtcbiAgICAgICAgICAgIGNjLmxvZyhBdWRpb01hbmFnZXIuYXVkaW9JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheU5vcm1hbEJHTSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsQkdNKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BCR00oKTtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5hdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm5vcm1hbEJHTSwgdGhpcy5sb29wLCB0aGlzLnZvbHVtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5RW5kaW5nQkdNKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRpbmdCR00pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEJHTSgpO1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZW5kaW5nQkdNLCB0aGlzLmxvb3AsIHRoaXMudm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3BCR00oKSB7XG4gICAgICAgIGlmIChBdWRpb01hbmFnZXIuYXVkaW9JZCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoQXVkaW9NYW5hZ2VyLmF1ZGlvSWQpO1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmF1ZGlvSWQgPSAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgLy8g5Y+q6KaB5pyJ5q2j5Zyo5pKt5pS+55qEIEJHTe+8jOeri+WNs+iqv+aVtOmfs+mHj1xuICAgICAgICBpZiAoQXVkaW9NYW5hZ2VyLmF1ZGlvSWQgIT09IC0xKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoQXVkaW9NYW5hZ2VyLmF1ZGlvSWQsIHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlj6/pgbjvvJrliIfmj5sgQkdNIOaZguiHquWLleeUqOebruWJjSB2b2x1bWVcbiAgICBzd2l0Y2hUb05vcm1hbEJHTSgpIHtcbiAgICAgICAgdGhpcy5wbGF5Tm9ybWFsQkdNKCk7XG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMudm9sdW1lKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUb0VuZGluZ0JHTSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RW5kaW5nQkdNKCk7XG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMudm9sdW1lKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmIChBdWRpb01hbmFnZXIuX2luc3RhbmNlID09PSB0aGlzKSB7XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuX2luc3RhbmNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0gIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Crate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3d8ecnBrlNMIW0UfdvhbEj', 'Crate');
// Script/Crate.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Crate = /** @class */ (function (_super) {
    __extends(Crate, _super);
    function Crate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rigidbody = null;
        _this.collider = null;
        _this.onGround = false;
        return _this;
    }
    Crate.prototype.onLoad = function () {
        // 啟用物理系統
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
        // 初始化剛體
        this.rigidbody = this.getComponent(cc.RigidBody);
        if (!this.rigidbody) {
            this.rigidbody = this.node.addComponent(cc.RigidBody);
        }
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
        this.rigidbody.fixedRotation = true;
        this.rigidbody.gravityScale = 10; // 箱子很重但不會過重
        this.rigidbody.linearDamping = 0.5;
        this.rigidbody.enabledContactListener = true;
        this.rigidbody.allowSleep = false;
        // 初始化碰撞器
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        if (!this.collider) {
            this.collider = this.node.addComponent(cc.PhysicsBoxCollider);
        }
        this.collider.enabled = true;
        this.collider.sensor = false;
        this.collider.friction = 1.0;
        this.collider.restitution = 0;
        // 自動調整碰撞箱大小與位置
        var size = this.node.getContentSize();
        this.collider.size = cc.size(size.width, size.height);
        this.collider.offset = cc.v2(0, 0);
        this.collider.apply();
    };
    // 只允許箱子在地板上停止，不能被推動
    Crate.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name === 'Ground') {
            this.onGround = true;
            this.rigidbody.linearVelocity = cc.v2(0, 0);
            this.rigidbody.angularVelocity = 0;
        }
    };
    // 讓 Wind.ts 可以呼叫這個方法
    Crate.prototype.applyWindForce = function (dir) {
        this.rigidbody.linearVelocity = cc.v2(dir * 800, 0);
    };
    Crate = __decorate([
        ccclass
    ], Crate);
    return Crate;
}(cc.Component));
exports.default = Crate;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDcmF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWlEQztRQWhEVyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixjQUFRLEdBQTBCLElBQUksQ0FBQztRQUN2QyxjQUFRLEdBQVksS0FBSyxDQUFDOztJQThDdEMsQ0FBQztJQTVDRyxzQkFBTSxHQUFOO1FBQ0ksU0FBUztRQUNULElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixRQUFRO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLGVBQWU7UUFDZixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLDhCQUFjLEdBQWQsVUFBZSxPQUEwQixFQUFFLFlBQWdDLEVBQUUsYUFBaUM7UUFDMUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELHFCQUFxQjtJQUNkLDhCQUFjLEdBQXJCLFVBQXNCLEdBQVc7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFoRGdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FpRHpCO0lBQUQsWUFBQztDQWpERCxBQWlEQyxDQWpEa0MsRUFBRSxDQUFDLFNBQVMsR0FpRDlDO2tCQWpEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIG9uR3JvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOWVn+eUqOeJqeeQhuezu+e1sVxyXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5Ymb6auUXHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICghdGhpcy5yaWdpZGJvZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZGJvZHkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmlnaWRib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkuZ3Jhdml0eVNjYWxlID0gMTA7IC8vIOeuseWtkOW+iOmHjeS9huS4jeacg+mBjumHjVxyXG4gICAgICAgIHRoaXMucmlnaWRib2R5LmxpbmVhckRhbXBpbmcgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkuYWxsb3dTbGVlcCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOWIneWni+WMlueisOaSnuWZqFxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGlmICghdGhpcy5jb2xsaWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5mcmljdGlvbiA9IDEuMDtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLnJlc3RpdHV0aW9uID0gMDtcclxuICAgICAgICAvLyDoh6rli5Xoqr/mlbTnorDmkp7nrrHlpKflsI/oiIfkvY3nva5cclxuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5zaXplID0gY2Muc2l6ZShzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5vZmZzZXQgPSBjYy52MigwLCAwKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+q5YWB6Kix566x5a2Q5Zyo5Zyw5p2/5LiK5YGc5q2i77yM5LiN6IO96KKr5o6o5YuVXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xyXG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ0dyb3VuZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiukyBXaW5kLnRzIOWPr+S7peWRvOWPq+mAmeWAi+aWueazlVxyXG4gICAgcHVibGljIGFwcGx5V2luZEZvcmNlKGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihkaXIgKiA4MDAsIDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Switch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3feevXGKlBp7sf5mKRrXq7', 'Switch');
// Script/Switch.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.spriteNode = null;
        _this.sprite1 = null;
        _this.sprite2 = null;
        _this.state = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.setState = function (state) {
        if (!this.spriteNode)
            return;
        var sprite = this.spriteNode.getComponent(cc.Sprite);
        if (!sprite)
            return;
        if (state === 0 && this.sprite1) {
            sprite.spriteFrame = this.sprite1;
        }
        else if (state === 1 && this.sprite2) {
            sprite.spriteFrame = this.sprite2;
        }
    };
    NewClass.prototype.update = function (dt) {
        if (!this.spriteNode)
            return;
        var sprite = this.spriteNode.getComponent(cc.Sprite);
        if (!sprite)
            return;
        if (this.state === 0 && this.sprite1) {
            sprite.spriteFrame = this.sprite1;
        }
        else if (this.sprite2) {
            sprite.spriteFrame = this.sprite2;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "spriteNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "sprite1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "sprite2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTd2l0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErQ0M7UUE1Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBZ0M5QixDQUFDO0lBOUJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFTSwyQkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM3QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BCLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQzthQUFNLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDN0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQztJQUNMLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dEQUNEO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQWJkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQzVCO0lBQUQsZUFBQztDQS9DRCxBQStDQyxDQS9DcUMsRUFBRSxDQUFDLFNBQVMsR0ErQ2pEO2tCQS9Db0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KVxyXG4gICAgc3ByaXRlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzcHJpdGUxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzcHJpdGUyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3ByaXRlTm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuc3ByaXRlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBpZiAoIXNwcml0ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCAmJiB0aGlzLnNwcml0ZTEpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IDEgJiYgdGhpcy5zcHJpdGUyKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcml0ZU5vZGUpIHJldHVybjtcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLnNwcml0ZU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgaWYgKCFzcHJpdGUpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gMCAmJiB0aGlzLnNwcml0ZTEpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcHJpdGUyKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Fire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78e89msvlJASJMziwDj8Qp9', 'Fire');
// Script/Fire.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    NewClass.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    NewClass.prototype.onKeyDown = function (event) {
        // 測試用，按G可以讓火熄滅
        if (event.keyCode === cc.macro.KEY.g) {
            this.fadeOutAndDeactivate();
        }
    };
    NewClass.prototype.start = function () {
    };
    // update (dt) {}
    /**
     * Fades out this node and deactivates it.
     */
    NewClass.prototype.fadeOutAndDeactivate = function (duration) {
        var _this = this;
        if (duration === void 0) { duration = 0.5; }
        cc.tween(this.node)
            .to(duration, { opacity: 0 })
            .call(function () {
            _this.node.active = false;
            _this.node.opacity = 255; // Reset for next activation
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGaXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMkNDO1FBeENHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFxQzNCLENBQUM7SUFuQ0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTyw0QkFBUyxHQUFqQixVQUFrQixLQUE2QjtRQUMzQyxlQUFlO1FBQ2YsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVqQjs7T0FFRztJQUNJLHVDQUFvQixHQUEzQixVQUE0QixRQUFzQjtRQUFsRCxpQkFRQztRQVIyQix5QkFBQSxFQUFBLGNBQXNCO1FBQzlDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDNUIsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLDRCQUE0QjtRQUN6RCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJDNUI7SUFBRCxlQUFDO0NBM0NELEFBMkNDLENBM0NxQyxFQUFFLENBQUMsU0FBUyxHQTJDakQ7a0JBM0NvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICAvLyDmuKzoqabnlKjvvIzmjIlH5Y+v5Lul6K6T54Gr54aE5ruFXHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dEFuZERlYWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmFkZXMgb3V0IHRoaXMgbm9kZSBhbmQgZGVhY3RpdmF0ZXMgaXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmYWRlT3V0QW5kRGVhY3RpdmF0ZShkdXJhdGlvbjogbnVtYmVyID0gMC41KSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTsgLy8gUmVzZXQgZm9yIG5leHQgYWN0aXZhdGlvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Lake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15137dMDnNMNLXUyHt+37Ck', 'Lake');
// Script/Lake.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // public fadeInAndActivate(duration: number = 0.5) {
        //     cc.tween(this.node)
        //         .to(duration, { opacity: 255 })
        //         .call(() => {
        //             this.node.active = true;
        //             //this.node.opacity = 255; // Reset for next activation
        //         })
        //         .start();
        // }
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.node.active = false;
        this.node.opacity = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    NewClass.prototype.onKeyDown = function (event) {
        // 測試用，按H可以讓水出現
        if (event.keyCode === cc.macro.KEY.h) {
            this.fadeInAndActivate();
        }
    };
    /**
     * Fades in this node from transparent and activates it.
     */
    NewClass.prototype.fadeInAndActivate = function (duration) {
        if (duration === void 0) { duration = 0.5; }
        this.node.active = true;
        this.node.opacity = 0;
        cc.tween(this.node)
            .to(duration, { opacity: 255 })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFtQ3ZCLHFEQUFxRDtRQUNyRCwwQkFBMEI7UUFDMUIsMENBQTBDO1FBQzFDLHdCQUF3QjtRQUN4Qix1Q0FBdUM7UUFDdkMsc0VBQXNFO1FBQ3RFLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsSUFBSTtRQUVKLGlCQUFpQjtJQUNyQixDQUFDO0lBNUNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVPLDRCQUFTLEdBQWpCLFVBQWtCLEtBQTZCO1FBQzNDLGVBQWU7UUFDZixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQWlCLEdBQXhCLFVBQXlCLFFBQXNCO1FBQXRCLHlCQUFBLEVBQUEsY0FBc0I7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQzlCLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0Q1QjtJQUFELGVBQUM7Q0FwREQsQUFvREMsQ0FwRHFDLEVBQUUsQ0FBQyxTQUFTLEdBb0RqRDtrQkFwRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICAvLyDmuKzoqabnlKjvvIzmjIlI5Y+v5Lul6K6T5rC05Ye654++XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZUluQW5kQWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYWRlcyBpbiB0aGlzIG5vZGUgZnJvbSB0cmFuc3BhcmVudCBhbmQgYWN0aXZhdGVzIGl0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmFkZUluQW5kQWN0aXZhdGUoZHVyYXRpb246IG51bWJlciA9IDAuNSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50byhkdXJhdGlvbiwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICAvLyBwdWJsaWMgZmFkZUluQW5kQWN0aXZhdGUoZHVyYXRpb246IG51bWJlciA9IDAuNSkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgIC8vICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgLy8gICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIC8vdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7IC8vIFJlc2V0IGZvciBuZXh0IGFjdGl2YXRpb25cclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
