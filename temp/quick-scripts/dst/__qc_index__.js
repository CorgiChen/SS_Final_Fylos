
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
require('./assets/Script/Camere_Ch2');
require('./assets/Script/ChangePicture');
require('./assets/Script/ChatBubbleController');
require('./assets/Script/Crate');
require('./assets/Script/Fire');
require('./assets/Script/Flame');
require('./assets/Script/GainFireController');
require('./assets/Script/GainPlantController');
require('./assets/Script/GainWaterController');
require('./assets/Script/GainWindController');
require('./assets/Script/GotoLeaderboard');
require('./assets/Script/Lake');
require('./assets/Script/Leaderboard');
require('./assets/Script/Login');
require('./assets/Script/LogoutButton');
require('./assets/Script/Menu');
require('./assets/Script/PauseManager');
require('./assets/Script/PauseMenu');
require('./assets/Script/Player');
require('./assets/Script/PressStart');
require('./assets/Script/ProgressManager');
require('./assets/Script/ReloadSceneButton');
require('./assets/Script/Signup');
require('./assets/Script/Switch');
require('./assets/Script/TimeController');
require('./assets/Script/TransitionManager');
require('./assets/Script/Transport');
require('./assets/Script/VideoPlayerController');
require('./assets/Script/Water');
require('./assets/Script/Wind');
require('./assets/Script/Wood');

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