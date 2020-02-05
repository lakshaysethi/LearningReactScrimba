"use strict";

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

var ColorDiv =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(ColorDiv, _React$Component);

    function ColorDiv(props) {
      var _this;

      _classCallCheck(this, ColorDiv);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(ColorDiv).call(this, props)
      );
      _this.state = {
        color: _this.props.color
      };
      _this.changeColor = _this.changeColor.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ColorDiv, [
      {
        key: "changeColor",
        value: function changeColor() {
          this.setState({
            color: "red"
          });
        }
      },
      {
        key: "render",
        value: function render() {
          var style = {
            backgroundColor: this.state.color,
            minHeight: 100,
            Width: 100,
            border: "1px solid",
            display: "inline-block"
          };
          return React.createElement(
            "div",
            {
              style: style,
              className: "color-div",
              id: "".concat(this.state.color, "-color-div")
            },
            React.createElement("div", {
              style: style
            }),
            React.createElement(
              "button",
              {
                onClick: this.changeColor
              },
              "Change color Of ",
              "".concat(this.state.color, "-color-div")
            )
          );
        }
      }
    ]);

    return ColorDiv;
  })(React.Component);

var App =
  /*#__PURE__*/
  (function(_React$Component2) {
    _inherits(App, _React$Component2);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(App).apply(this, arguments)
      );
    }

    _createClass(App, [
      {
        key: "render",
        value: function render() {
          return React.createElement(
            "div",
            {
              className: "color-Divs-Holder"
            },
            React.createElement(ColorDiv, {
              key: 1,
              color: "green"
            }),
            React.createElement(ColorDiv, {
              key: 2,
              color: "black"
            }),
            React.createElement(ColorDiv, {
              key: 3,
              color: "blue"
            })
          );
        }
      }
    ]);

    return App;
  })(React.Component);

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
