"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LikeButton() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      liked = _React$useState2[0],
      setLiked = _React$useState2[1];

  var text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setLiked(!liked);
    }
  }, text);
}

function Container() {
  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      count = _React$useState4[0],
      setCount = _React$useState4[1];

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: 'red'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCount(count - 1);
    }
  }, "\uAC10\uC18C")));
}

var domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);