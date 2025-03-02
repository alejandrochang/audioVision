/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/audiovisualization.js":
/*!***********************************!*\
  !*** ./app/audiovisualization.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setupAudio = function setupAudio() {
  //Music Genres
  var rootPath = './assets/music/';
  var hiphop = ["".concat(rootPath, "sundaycandy.mp3"), "".concat(rootPath, "babyblue.mp3"), "".concat(rootPath, "tuesday.mp3"), "".concat(rootPath, "tuscanleather.mp3"), "".concat(rootPath, "comebacktoearth.mp3"), "".concat(rootPath, "january28.mp3"), "".concat(rootPath, "anziety.mp3"), "".concat(rootPath, "2009.mp3"), "".concat(rootPath, "allido.mp3"), "".concat(rootPath, "everydayshelter.mp3"), "".concat(rootPath, "slowjamz.mp3"), "".concat(rootPath, "girlsthatdance.mp3"), "".concat(rootPath, "happy.mp3"), "".concat(rootPath, "heavenonlyknows.mp3"), "".concat(rootPath, "ladders.mp3"), "".concat(rootPath, "soho.mp3")];
  var house = ["".concat(rootPath, "randomaccessmemories.mp3"), "".concat(rootPath, "igotu.mp3"), "".concat(rootPath, "comingover.mp3"), "".concat(rootPath, "firestone.mp3"), "".concat(rootPath, "tenniscourt.mp3"), "".concat(rootPath, "redlights.mp3"), "".concat(rootPath, "sleepless.mp3"), "".concat(rootPath, "stayhigh.mp3"), "".concat(rootPath, "tomorrowland.mp3"), "".concat(rootPath, "espoir.mp3"), "".concat(rootPath, "sunandmoon.mp3"), "".concat(rootPath, "hothands.mp3")];
  var randb = ["".concat(rootPath, "thinkingaboutyou.mp3"), "".concat(rootPath, "doyou.mp3"), "".concat(rootPath, "openyoureyes.mp3"), "".concat(rootPath, "getyou.mp3"), "".concat(rootPath, "bananaclip.mp3"), "".concat(rootPath, "loveseason.mp3"), "".concat(rootPath, "sofartogo.mp3")];
  var onehitwonders = ["".concat(rootPath, "staytogether.mp3"), "".concat(rootPath, "dancinginthemoonlight.mp3"), "".concat(rootPath, "icanthelpmyself.mp3"), "".concat(rootPath, "september.mp3"), "".concat(rootPath, "bluesky.mp3"), "".concat(rootPath, "caroline.mp3"), "".concat(rootPath, "cagylove.mp3"), "".concat(rootPath, "iwyouback.mp3"), "".concat(rootPath, "hookedonfeeling.mp3")];
  var classical = ["".concat(rootPath, "thewayyoulooktonight.mp3"), "".concat(rootPath, "youngandbeautiful.mp3")];
  var alternative = ["".concat(rootPath, "outofmyleague.mp3"), "".concat(rootPath, "allthesethingsthativedone.mp3")];
  var study = ["".concat(rootPath, "lofi2.mp3")];

  var randomizeSong = function randomizeSong(genre) {
    return Math.floor(Math.random() * genre.length);
  };

  var randomHipHop = Math.floor(Math.random() * hiphop.length);
  var songs = {
    'hiphop': [hiphop[randomizeSong(hiphop)]],
    'house': [house[randomizeSong(house)]],
    'randb': [randb[randomizeSong(randb)]],
    'onehit': [onehitwonders[randomizeSong(onehitwonders)]],
    'classical': [classical[randomizeSong(classical)]],
    'study': [study[randomizeSong(study)]],
    'alternative-rock': [alternative[randomizeSong(alternative)]]
  };
  window.onload = start;
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();
  var analyser = context.createAnalyser();
  var analyser2 = context.createAnalyser();
  var analyser3 = context.createAnalyser();
  var analyser4 = context.createAnalyser();

  function start() {
    // audio analyzers
    analyser.fftSize = 2048;
    analyser2.fftSize = 32;
    analyser3.fftSize = 512;
    analyser4.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    var bufferLength2 = analyser2.frequencyBinCount;
    var bufferLength3 = analyser3.frequencyBinCount;
    var bufferLength4 = analyser4.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    var dataArray2 = new Uint8Array(bufferLength2);
    var dataArray3 = new Uint8Array(bufferLength3);
    var dataArray4 = new Uint8Array(bufferLength4);
    var canvas = document.getElementById("analyser-render");
    canvas.width = window.innerWidth - 2;
    canvas.height = window.innerHeight - 2;
    var canvasCtx = canvas.getContext("2d");
    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    function draw() {
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);
      analyser.getByteFrequencyData(dataArray2);
      analyser.getByteFrequencyData(dataArray3);
      analyser.getByteFrequencyData(dataArray4);
      canvasCtx.lineWidth = 3.15;

      function r() {
        return Math.floor(Math.random() * 255);
      }

      canvasCtx.strokeStyle = "rgb(" + r() + "," + 0 + "," + r() + ")";
      canvasCtx.beginPath();
      var sliceWidth = canvas.width * 1.0 / bufferLength;
      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] - 128;
        var y = v + canvas.height / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.stroke();

      for (var _i = 0; _i < bufferLength2; _i++) {
        var z = dataArray2[_i];
        var y = dataArray[_i];
        var w = dataArray3[_i];
        var m = dataArray4[_i];
      } // circle canvas (all circles)


      var center_x = canvas.width / 2;
      var center_y = canvas.height / 2;
      var radius = z;
      canvasCtx.lineWidth = 2.3;
      canvasCtx.strokeStyle = "rgb(" + 0 + "," + r() + "," + 0 + ")";
      canvasCtx.beginPath();
      canvasCtx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
      canvasCtx.stroke();
      var cx = canvas.width / 2;
      var cy = canvas.height / 2;
      var radius2 = y;
      canvasCtx.lineWidth = 2.3;
      canvasCtx.strokeStyle = "rgb(" + r() + "," + r() + "," + r() + ")";
      canvasCtx.beginPath();
      canvasCtx.arc(cx, cy, radius2, 0, 2 * Math.PI);
      canvasCtx.stroke();
      var cx2 = canvas.width / 2;
      var cy2 = canvas.height / 2;
      var radius3 = w;
      canvasCtx.lineWidth = 2.2;
      canvasCtx.strokeStyle = "rgb(" + r() + "," + r() + "," + r() + ")";
      canvasCtx.beginPath();
      canvasCtx.arc(cx2, cy2, radius3, 0, 2 * Math.PI);
      canvasCtx.stroke();
      var cx3 = canvas.width / 2;
      var cy3 = canvas.height / 2;
      var radius4 = m;
      canvasCtx.lineWidth = 2.1;
      canvasCtx.strokeStyle = "rgb(" + r() + "," + r() + "," + r() + ")";
      canvasCtx.beginPath();
      canvasCtx.arc(cx3, cy3, radius4, 0, 2 * Math.PI);
      canvasCtx.stroke();
    }

    draw();
  }

  document.getElementById("button-play").addEventListener("click", function () {
    context.resume().then(function () {
      console.log("Playback resumed successfully");
    });
  });
  var audio, playbtn, mutebtn, pausebtn, volumeSlider;

  function initAudioPlayer() {
    audio = new Audio();
    audio.crossOrigin = "anonymous";
    audio.src = hiphop[randomHipHop];
    audio.play();

    var changeGenre = function changeGenre(song) {
      console.log(song);
      audio.src = songs[song];
    };

    var gdropdown = document.getElementById('genre-dropdown');
    gdropdown.addEventListener('change', function (_ref) {
      var value = _ref.target.value;
      return changeGenre(value);
    });
    playbtn = document.getElementById('button-play');
    mutebtn = document.getElementById('mute-button');
    pausebtn = document.getElementById('pause-button');
    volumeSlider = document.getElementById('volume-slider');

    var changeVolume = function changeVolume() {
      audio.volume = this.value / 100;
    };

    volumeSlider.addEventListener('change', changeVolume);
    volumeSlider.addEventListener('input', changeVolume);
    playbtn.addEventListener("click", play);
    mutebtn.addEventListener("click", mute);
    pausebtn.addEventListener("click", pause);

    function play() {
      if (audio.paused) {
        audio.play();
      }

      ;
    }

    function pause() {
      if (!audio.paused) {
        audio.pause();
      }

      ;
    }

    function mute() {
      if (audio.muted) {
        audio.muted = false;
      } else {
        audio.muted = true;
      }
    }

    var source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
  }

  window.addEventListener("load", initAudioPlayer);
};

/* harmony default export */ __webpack_exports__["default"] = (setupAudio);

/***/ }),

/***/ "./app/background.js":
/*!***************************!*\
  !*** ./app/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setupBackground = function setupBackground() {
  var colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
  var step = 0; //color table indices for: (current color left next color left current color right next color right)

  var colorIndices = [0, 1, 2, 3];
  var gradientSpeed = 0.002; //transition speed

  function updateGradient() {
    if ($ === undefined) return;
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];
    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    $('#gradient').css({
      background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
      background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });
    step += gradientSpeed;

    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3]; //pick two new target color indices
      //do not pick the same as the current one

      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
  }

  setInterval(updateGradient, 10);
};

/* harmony default export */ __webpack_exports__["default"] = (setupBackground);

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audiovisualization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audiovisualization */ "./app/audiovisualization.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.js */ "./app/background.js");


document.addEventListener('DOMContentLoaded', function () {
  Object(_audiovisualization__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var canvas = document.getElementById('analyser-render');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  Object(_background_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map