webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/nurrizkyimani/programming-all/bitcoin_fetch/components/Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

var Prices =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Prices, _React$Component);

  function Prices() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      currency: 'USD'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cryptoLoop", function () {
      var table = [];
      var n = _this.props.cmc.data.length;

      for (var i = 0; i <= n - 1; i++) {
        table.push(__jsx("div", {
          className: "cryptocmc",
          key: _this.props.cmc.data[i].id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, __jsx("ul", {
          className: "list-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, " Price for ", _this.props.cmc.data[i].name, " : ", __jsx("span", {
          className: "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, " USD "), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "    ", _this.props.cmc.data[i].quote.USD.price, " "), __jsx("span", {
          className: "badge badge-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, " VOLUME 24H:  "), __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, "    ", _this.props.cmc.data[i].quote.USD.volume_24h, " ")))));
      }

      return table;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    //render the component 
    value: function render() {
      var _this2 = this;

      console.log('totale iki:' + this.props.cmc.data.length);
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("li", {
        className: "list-group-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Bitcoin rate for  ", this.props.bpi[this.state.currency].description, " : ", __jsx("span", {
        className: "badge badge-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "  ", this.props.bpi[this.state.currency].code, "  "), __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "   ", this.props.bpi[this.state.currency].rate, "  "))), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("option", {
        value: "USD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "USD"), __jsx("option", {
        value: "GBP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "GBP"), __jsx("option", {
        value: "EUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "EUR")), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Also Check current Another cryptocurrencies Price: "), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.cryptoLoop()));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Prices */ "./components/Prices.js");

var _jsxFileName = "/Users/nurrizkyimani/programming-all/bitcoin_fetch/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // const rp = require('request-promise');
// import rp from 'request-promise'

function App(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    hits: []
  }),
      data = _useState[0],
      setData = _useState[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " Welcome to Bitzprice"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Check current Bitcoin Repo Rate: "), __jsx(_components_Prices__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bpi: props.bpi,
    cmc: props.cmc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
}

App.getInitialProps = function _callee() {
  var res, data, apiKey, url, qString, res2, data2;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('https://api.coindesk.com/v1/bpi/currentprice.json'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          apiKey = 'f2b2d0f3-dc44-4a31-86b2-f851da69ac54';
          url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", qString = "?CMC_PRO_API_KEY=" + apiKey + "&sort=market_cap&start=1&cryptocurrency_type=tokens";
          _context.next = 10;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url + qString, {
            mode: "no-cors"
          }));

        case 10:
          res2 = _context.sent;
          _context.next = 13;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res2.json());

        case 13:
          data2 = _context.sent;
          console.log(data2.data[0].quote);
          return _context.abrupt("return", {
            bpi: data.bpi,
            cmc: data2
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.9b09fbd883efdaf8ceed.hot-update.js.map