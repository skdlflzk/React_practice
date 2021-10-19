"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Button = _interopRequireDefault(require("./Button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Container() {
  return /*#__PURE__*/_react["default"].createElement('div', null, /*#__PURE__*/_react["default"].createElement('p', null, '버튼 클릭'), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: '좋아좋아'
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: '싫다'
  }));
}

var domContainer = document.getElementById('root');

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Container), domContainer);