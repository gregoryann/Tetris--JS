"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreAnimation = void 0;

var _fontUtils = require("../fontUtils");

var _Graphics = require("../Graphics");

var _Animation = require("./Animation");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScoreAnimation =
/*#__PURE__*/
function (_AnimationBase) {
  _inherits(ScoreAnimation, _AnimationBase);

  function ScoreAnimation(score) {
    var _this;

    _classCallCheck(this, ScoreAnimation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScoreAnimation).call(this, 30));
    _this.score = score;
    _this.x = Math.random() * 60;
    return _this;
  }

  _createClass(ScoreAnimation, [{
    key: "render",
    value: function render() {
      if (this.done) {
        return;
      }

      _Graphics.Graphics.globalAlpha = 1 - Math.pow(this.relativeT, 2);
      var prefix = this.score > 0 ? '+' : '';
      (0, _fontUtils.drawText)(prefix + this.score, 20 + this.x, 294 - this.t / 2, 2);
      _Graphics.Graphics.globalAlpha = 1;
    }
  }]);

  return ScoreAnimation;
}(_Animation.AnimationBase);

exports.ScoreAnimation = ScoreAnimation;