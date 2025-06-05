
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
require('./assets/Script/GotoLeaderboard');
require('./assets/Script/Leaderboard');
require('./assets/Script/Login');
require('./assets/Script/Menu');
require('./assets/Script/Player');
require('./assets/Script/PressStart');
require('./assets/Script/Signup');
require('./assets/Script/TimeController');
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