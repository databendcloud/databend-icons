'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
require('clsx');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var Dashboard = function Dashboard(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 3.333h-15a.833.833 0 00-.833.834v11.666c0 .46.373.834.833.834h15c.46 0 .833-.373.833-.834V4.167a.833.833 0 00-.833-.834z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.333 10.417v2.916"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 6.667v6.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.667 8.333v5"
  }));
};

Dashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Dashboard.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Worksheet = function Worksheet(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 18.333V1.667h9.584l3.75 4.375v12.291H3.333z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 11.667h-2.5v2.916h2.5v-2.916z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 14.583h8.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.25 9.583h-2.5v5h2.5v-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.75 7.5h-2.5v7.083h2.5V7.5z"
  }));
};

Worksheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Worksheet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Data = function Data(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 4.583v11.25c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5V4.583"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 12.083c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 8.333c0 1.381-3.73 2.5-8.333 2.5-4.602 0-8.333-1.119-8.333-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.667c4.602 0 8.333-1.12 8.333-2.5 0-1.381-3.73-2.5-8.333-2.5-4.602 0-8.333 1.119-8.333 2.5 0 1.38 3.73 2.5 8.333 2.5z"
  }));
};

Data.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Data.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Support = function Support(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M15.893 15.893A8.333 8.333 0 104.107 4.107a8.333 8.333 0 0011.785 11.785zm-2.357-9.429a5 5 0 11-7.071 7.071 5 5 0 017.07-7.07z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.893 15.893l-2.357-2.357"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.107 15.893l2.357-2.357"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.107 4.107l2.357 2.357"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.893 4.107l-2.357 2.357"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.536 13.536a5 5 0 10-7.072-7.072 5 5 0 007.072 7.072z"
  }));
};

Support.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Support.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Compute = function Compute(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 1.667H1.667v6.666h16.666V1.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 11.667H1.667v6.666h16.666v-6.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.667 5.333v-.666h.666v.666h-.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.667 15.333v-.666h.666v.666h-.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5.333v-.666h.667v.666H8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15.333v-.666h.667v.666H8z"
  }));
};

Compute.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Compute.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Setting = function Setting(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7.618 17.988a8.331 8.331 0 01-3.623-2.21 2.5 2.5 0 00-2.16-4.1A8.371 8.371 0 012.049 7.5h.035a2.5 2.5 0 002.244-3.604 8.32 8.32 0 013.445-1.928 2.5 2.5 0 004.456 0 8.32 8.32 0 013.445 1.928A2.5 2.5 0 0017.952 7.5a8.373 8.373 0 01.213 4.18 2.5 2.5 0 00-2.16 4.1 8.331 8.331 0 01-3.623 2.208 2.501 2.501 0 00-4.764 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.917a2.917 2.917 0 100-5.834 2.917 2.917 0 000 5.834z"
  }));
};

Setting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Setting.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Notifications = function Notifications(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 10A8.333 8.333 0 0110 18.333H1.667V10a8.333 8.333 0 1116.666 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 7.5h7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 10.833h7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 14.167H10"
  }));
};

Notifications.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Notifications.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Search = function Search(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 15.833a7.083 7.083 0 100-14.166 7.083 7.083 0 000 14.166z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.107 5.976A3.323 3.323 0 008.75 5c-.92 0-1.754.373-2.357.976"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.842 13.842l3.536 3.536"
  }));
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Search.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Close = function Close(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 5l10 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 15L15 5"
  }));
};

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Close.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Error = function Error(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.5 4.583L4.583 2.5 10 7.917 15.417 2.5 17.5 4.583 12.083 10l5.417 5.417-2.083 2.083L10 12.083 4.583 17.5 2.5 15.417 7.917 10 2.5 4.583z",
    fillOpacity: ".8"
  }));
};

Error.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Error.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Check = function Check(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.667 10L3.75 7.917l4.167 4.166L16.25 3.75l2.083 2.083L7.917 16.25 1.667 10z",
    fillOpacity: ".8"
  }));
};

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Check.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Hidden = function Hidden(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.667c.264.508.665.979 1.176 1.398C5.11 9.239 7.408 10 10 10c2.592 0 4.891-.761 6.324-1.935.51-.419.911-.89 1.176-1.398"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.074 10l.863 3.22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.564 8.897l2.357 2.357"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.083 11.254L4.44 8.897"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.053 13.22L7.916 10"
  }));
};

Hidden.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Hidden.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Show = function Show(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 15c4.602 0 8.333-5 8.333-5S14.603 5 10 5c-4.602 0-8.333 5-8.333 5s3.73 5 8.333 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.083a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"
  }));
};

Show.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Show.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Loading = function Loading(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 10.941A6.994 6.994 0 003.707 7.897"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_2_104",
    x1: "3.707",
    y1: "10.941",
    x2: "17",
    y2: "10.941",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C6CACD",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".399",
    stopColor: "#C6CACD",
    stopOpacity: ".5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C6CACD"
  }))));
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Loading.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Share = function Share(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M14.583 6.667a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.417 12.083a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 5.656L7.224 8.852"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.224 11.068l5.559 3.285"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.583 13.333a2.083 2.083 0 110 4.167 2.083 2.083 0 010-4.167z"
  }));
};

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Share.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Begin = function Begin(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6 16V4l9 6-9 6z"
  }));
};

Begin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Begin.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Export = function Export(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 11.25c0 2.5-1.667 6.667-7.5 6.667S2.5 13.75 2.5 11.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.003 2.125V13.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 7.083l5-5 5 5"
  }));
};

Export.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Export.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Download = function Download(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M10 12.083l-5-5h3.333V2.5h3.334v4.583H15l-5 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 15.417h-15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.167 18.333H5.833"
  }));
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Download.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Refresh = function Refresh(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 3.333V10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 10v6.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 10a7.5 7.5 0 0012.708 5.397"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10A7.5 7.5 0 004.604 4.792"
  }));
};

Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Refresh.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var AddSheet = function AddSheet(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.667 9.583v-3.75l-3.75-4.166h-8.75a.833.833 0 00-.834.833v15c0 .46.373.833.834.833h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.75 12.083v5.834"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.833 15h5.834"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 1.667v4.166h4.167"
  }));
};

AddSheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
AddSheet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Pin = function Pin(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.457 7.293c1.1-1.099 2.406-1.069 3.826-.29l5.309-2.943-.3-2.065 4.713 4.714-2.061-.296-2.947 5.304c.743 1.516.809 2.727-.29 3.826l-3.242-3.24-6.78 5.012 4.998-6.796-3.226-3.226z"
  }));
};

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Pin.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Table = function Table(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.375 2.5H3.625c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V3.625c0-.621-.504-1.125-1.125-1.125z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 2.5v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 2.5v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7.5h15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 12.5h15"
  }));
};

Table.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Table.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Schema = function Schema(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 5.417H2.5v9.166h3.333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 12.083H17.5v5H5.833v-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 2.917H17.5v5H5.833v-5z"
  }));
};

Schema.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Schema.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ExpandTop = function ExpandTop(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.667h15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.333 13.333L10 11.667l1.667 1.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4.167v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 4.167v5"
  }));
};

ExpandTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ExpandTop.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ExpandDown = function ExpandDown(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4.167c0-.92.746-1.667 1.667-1.667h11.666c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H4.167c-.92 0-1.667-.746-1.667-1.667V4.167z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 13.333h15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.333 6.667L10 8.333l1.667-1.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 10.833v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10.833v5"
  }));
};

ExpandDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ExpandDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ExpandRight = function ExpandRight(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 3.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V3.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.333 2.5v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.667 8.333L8.333 10l-1.666 1.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.833 2.5h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.833 17.5h5"
  }));
};

ExpandRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ExpandRight.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ExpandLeft = function ExpandLeft(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 2.5v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.583 2.5H15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.583 17.5H15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.333 8.333L11.667 10l1.666 1.667"
  }));
};

ExpandLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ExpandLeft.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Link = function Link(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10.295 3.985l-6.188 6.188a3.75 3.75 0 005.304 5.303l7.365-7.366a2.5 2.5 0 00-3.535-3.535L5.875 11.94a1.25 1.25 0 001.768 1.768l6.187-6.187"
  }));
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Link.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Help = function Help(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 18.333a8.307 8.307 0 005.893-2.44A8.307 8.307 0 0018.332 10a8.307 8.307 0 00-2.44-5.893A8.307 8.307 0 0010 1.667a8.307 8.307 0 00-5.893 2.44A8.307 8.307 0 001.667 10c0 2.301.932 4.384 2.44 5.893A8.307 8.307 0 0010 18.332z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.927V10.26a2.5 2.5 0 10-2.5-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 15.677a1.042 1.042 0 100-2.083 1.042 1.042 0 000 2.083z",
    fillOpacity: ".8"
  }));
};

Help.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Help.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var More = function More(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z",
    fillOpacity: ".8"
  }));
};

More.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
More.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var String = function String(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l7-14 7 14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11h8"
  }));
};

String.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
String.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Number = function Number(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4 3v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 6H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8.48s1.12-1.08 1.866 0S3 11 3 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13.65s.632-1.156 1.579-.385c.947.771 0 1.735 0 1.735s.947.964 0 1.735C3.632 17.506 3 16.349 3 16.349"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 3L3 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5h9"
  }));
};

Number.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Number.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var AddFolder = function AddFolder(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M2 2.833c0-.46.373-.833.833-.833h5l2.084 2.5H17c.46 0 .833.373.833.833v10.834c0 .46-.373.833-.833.833H2.833A.833.833 0 012 16.167V2.833z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 10.25h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 7.75v5"
  }));
};

AddFolder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
AddFolder.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Add = function Add(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 10h10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 5v10"
  }));
};

Add.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Add.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var WareHouse = function WareHouse(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 17.917h8.334V2.083H5.833V6.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.083 6.25h7.5v11.667h-7.5V6.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.417 15.417h.833"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.667 15.417h.833"
  }));
};

WareHouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
WareHouse.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Folder = function Folder(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M2.083 3.333c0-.46.373-.833.834-.833h5L10 5h7.083c.46 0 .834.373.834.833v10.834c0 .46-.373.833-.834.833H2.917a.833.833 0 01-.834-.833V3.333z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 9.167l2.084 2.083-2.084 2.083"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.833 13.333h3.334"
  }));
};

Folder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Folder.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Switch = function Switch(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.067 5.183a.625.625 0 10-.884.884L13.116 8H5.625a.625.625 0 100 1.25h9a.623.623 0 00.578-.864.623.623 0 00-.132-.199m-3.004-3.004l3 3-3-3z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.388 10.546a.622.622 0 00-.388.602.623.623 0 00.183.419l3 3a.625.625 0 10.884-.884L7.134 11.75h7.491a.625.625 0 100-1.25h-9a.622.622 0 00-.237.046z",
    fillOpacity: ".8"
  }));
};

Switch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Switch.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Book = function Book(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 16.667v-12.5c0-1.381 1.194-2.5 2.667-2.5h10.667V15H6c-2.099 0-2.667.285-2.667 1.667z"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M5 18.333h11.667V15H5a1.667 1.667 0 000 3.333z"
  }));
};

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Book.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Copy = function Copy(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.417 5.18V3.255c0-.647.524-1.172 1.172-1.172h10.156c.647 0 1.172.525 1.172 1.172v10.156c0 .648-.525 1.172-1.172 1.172h-1.947"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.412 5.417H3.255c-.647 0-1.172.524-1.172 1.172v10.156c0 .647.525 1.172 1.172 1.172h10.157c.647 0 1.171-.525 1.171-1.172V6.589c0-.648-.524-1.172-1.171-1.172z"
  }));
};

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Copy.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var HamburgerButton = function HamburgerButton(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.312 4.98h13.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.312 9.98h13.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.312 14.98h13.334"
  }));
};

HamburgerButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
HamburgerButton.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var CardShow = function CardShow(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 5.417H5.417V8.75H8.75V5.417z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.583 5.417H11.25V8.75h3.333V5.417z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 11.25H5.417v3.333H8.75V11.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.583 11.25H11.25v3.333h3.333V11.25z"
  }));
};

CardShow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
CardShow.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ListShow = function ListShow(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.25 9.9h5.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.25 9.9h1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.25 13h5.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.25 13h1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.25 6.8h5.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.25 6.8h1"
  }));
};

ListShow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ListShow.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Smiling = function Smiling(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.917 12.917s-.834 1.666-2.917 1.666c-2.083 0-2.917-1.666-2.917-1.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.917 7.5v1.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 7v1.667"
  }));
};

Smiling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Smiling.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Delete = function Delete(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6.25 5l.5-2.917h6.5L13.75 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 5h15"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M15.417 5l-.834 12.917H5.417L4.583 5h10.834z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.917 14.583h4.166"
  }));
};

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Delete.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Upload = function Upload(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.866 8.446a4.168 4.168 0 102.106 8.063"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.023 8.446a4.168 4.168 0 11-2.106 8.063"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 8.333a5 5 0 00-10 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.11 11.617L10 8.718l2.972 2.949"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15.833v-5.64"
  }));
};

Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Upload.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Wallet = function Wallet(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_122_16)"
  }, /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M7.493 4.987l5.75-3.32 1.922 3.328-7.672-.008z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.667 5.833c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833V17.5c0 .46-.373.833-.833.833h-15a.833.833 0 01-.833-.833V5.833z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.688 13.75h3.645V9.583h-3.645c-1.209 0-2.188.933-2.188 2.084 0 1.15.98 2.083 2.188 2.083z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 6.875v10"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_122_16"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "20"
  }))));
};

Wallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Wallet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Collaborators = function Collaborators(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7.917 8.333a2.917 2.917 0 100-5.833 2.917 2.917 0 000 5.833z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.586 2.917a2.915 2.915 0 010 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.667 17v.5h12.5V17c0-1.867 0-2.8-.364-3.513a3.333 3.333 0 00-1.456-1.457c-.713-.363-1.647-.363-3.514-.363H7c-1.867 0-2.8 0-3.513.363-.628.32-1.137.83-1.457 1.457-.363.713-.363 1.646-.363 3.513z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 17.5V17c0-1.867 0-2.8-.363-3.513a3.333 3.333 0 00-1.457-1.457"
  }));
};

Collaborators.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Collaborators.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Organization = function Organization(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M1.667 2.083h16.666v3.334l-.582.35a2.917 2.917 0 01-3.002 0l-.582-.35-.583.35a2.917 2.917 0 01-3.001 0L10 5.416l-.583.35a2.917 2.917 0 01-3.001 0l-.583-.35-.582.35a2.917 2.917 0 01-3.002 0l-.582-.35V2.083z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10.417h-15v7.5h15v-7.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.75 6.667v3.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.25 6.667v3.75"
  }));
};

Organization.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Organization.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Analysis = function Analysis(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 4.583c0-.69-.56-1.25-1.25-1.25H2.917c-.69 0-1.25.56-1.25 1.25v3.75h16.666v-3.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.713 16.262l5.074-5.125 2.741 2.625 3.351-2.929 1.867 1.82"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 7.5v7.917c0 .69-.56 1.25-1.25 1.25H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.963 5.833h7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.63 5.833h.833"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.667 7.5v3.75"
  }));
};

Analysis.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Analysis.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Reduction = function Reduction(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "8.5",
    width: "14",
    height: "3",
    fillOpacity: ".8"
  }));
};

Reduction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Reduction.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Question = function Question(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11.636 14.62a.35.35 0 01-.124.267.421.421 0 01-.293.113H9.273a.42.42 0 01-.293-.113.35.35 0 01-.123-.267v-1.423a.35.35 0 01.123-.267.42.42 0 01.293-.113h1.946c.113 0 .211.037.293.113a.35.35 0 01.124.267v1.423zM10.293 5c.576 0 1.116.075 1.62.225.515.141.958.343 1.329.606.38.254.68.559.895.915.216.348.324.733.324 1.155 0 .338-.061.634-.185.888a2.75 2.75 0 01-.478.69 4.214 4.214 0 01-.618.563c-.226.16-.448.32-.664.48-.206.159-.396.328-.571.506a1.361 1.361 0 00-.34.563.65.65 0 01-.154.268.32.32 0 01-.263.113H9.304a.42.42 0 01-.293-.113.35.35 0 01-.124-.268c0-.31.067-.586.201-.83.144-.245.32-.465.525-.662.206-.207.427-.395.664-.564.247-.169.474-.328.68-.479a3.3 3.3 0 00.509-.479.763.763 0 00.216-.52.718.718 0 00-.34-.634c-.226-.16-.576-.24-1.05-.24-.463 0-.797.066-1.003.197-.196.122-.34.258-.432.409-.093.15-.175.29-.248.422-.061.122-.19.183-.386.183H6.34a.39.39 0 01-.247-.084A.29.29 0 016 8.085c.01-.33.113-.672.309-1.029.195-.366.473-.7.834-1 .37-.31.818-.563 1.343-.76C9.011 5.099 9.613 5 10.292 5z",
    fillOpacity: ".8"
  }));
};

Question.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Question.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var SqLuser = function SqLuser(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.167 3.333v5c0 .92-1.68 1.667-3.75 1.667-2.071 0-3.75-.746-3.75-1.667v-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.167 5.833c0 .92-1.68 1.667-3.75 1.667-2.071 0-3.75-.746-3.75-1.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.167 3.333c0 .92-1.68 1.667-3.75 1.667-2.071 0-3.75-.746-3.75-1.667 0-.92 1.679-1.666 3.75-1.666 2.07 0 3.75.746 3.75 1.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.333 2.5h2.5c.92 0 1.667.746 1.667 1.667v2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.667 17.5h-2.5c-.92 0-1.667-.746-1.667-1.667v-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.583 14.167a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 18.333h-7.5a3.75 3.75 0 017.5 0z"
  }));
};

SqLuser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
SqLuser.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Suspended = function Suspended(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 4.5h3v11h-3v-11z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 4.5h3v11h-3v-11z"
  }));
};

Suspended.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Suspended.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Dev = function Dev(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.706 4l4.941 4.941-4.941 4.941"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.53 16h7.764"
  }));
};

Dev.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Dev.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Unlink = function Unlink(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10.789 6.68L7.548 3.438c-1.194-1.194-3.088-1.234-4.232-.09-1.145 1.145-1.105 3.04.089 4.233l3.24 3.24"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.298 9.196l3.241 3.241c1.194 1.193 1.348 3.031.09 4.232-1.26 1.201-3.04 1.104-4.233-.089l-3.24-3.24"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.85 8.782l-1.621-1.62"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.63 12.563l-1.62-1.62"
  }));
};

Unlink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Unlink.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Calendar = function Calendar(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M2.083 7.917h15.834v8.75c0 .46-.373.833-.834.833H2.917a.833.833 0 01-.834-.833v-8.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.083 3.75c0-.46.373-.833.834-.833h14.166c.46 0 .834.373.834.833v4.167H2.083V3.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.667 1.667V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.333 1.667V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.667 14.167h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 14.167h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.667 10.833h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 10.833h2.5"
  }));
};

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Calendar.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Time = function Time(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.004 5l-.001 5.004 3.533 3.533"
  }));
};

Time.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Time.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Chart = function Chart(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M1.667 10S2.5 1.667 5.833 1.667c3.334 0 3.75 6.25 4.167 8.333.417 2.083 1.667 8.333 4.583 8.333 2.917 0 3.75-8.333 3.75-8.333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.583 10h2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.917 10h2.5"
  }));
};

Chart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Chart.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Preferences = function Preferences(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.292 4.167h-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.458 2.5v3.333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.458 4.167H2.292"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.625 10H2.292"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.958 8.333v3.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.125 10H8.958"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.292 15.833h-2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.458 14.167V17.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.458 15.833H2.292"
  }));
};

Preferences.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Preferences.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Enter = function Enter(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M18.333 18.333V1.667H10v6.666H1.667v10h16.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 11.667l-1.667 1.666L8.75 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.167 9.583v3.75H7.083"
  }));
};

Enter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Enter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Return = function Return(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.417 3.333L2.5 5.833 5.417 8.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 5.833h9.58c2.869 0 5.304 2.342 5.416 5.209.118 3.029-2.385 5.625-5.415 5.625H4.999"
  }));
};

Return.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Return.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Queryhistory = function Queryhistory(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10V3.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.333 15.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.417 15l2.083 1.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 6.667h8.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 10h3.334"
  }));
};

Queryhistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Queryhistory.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Send = function Send(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.917 2.083l-5.542 15.834-3.167-7.125-7.125-3.167 15.834-5.542z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.917 2.083l-8.709 8.709"
  }));
};

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Send.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsScorecard = function ChartsScorecard(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15 4H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.667 7.333L8 12.667l2-4.334 2 4.334 1.333-5.334"
  }));
};

ChartsScorecard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsScorecard.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsPie = function ChartsPie(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.667 10A6.667 6.667 0 1110 3.333V10h6.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.361 8H12V3.639A6.682 6.682 0 0116.361 8z"
  }));
};

ChartsPie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsPie.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsPieDoughnut = function ChartsPieDoughnut(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.667 10h.5a.5.5 0 00-.5-.5v.5zM14 10v-.5a.5.5 0 00-.5.5h.5zm-4-4v.5a.5.5 0 00.5-.5H10zm0-2.667h.5a.5.5 0 00-.5-.5v.5zM16.167 10A6.167 6.167 0 0110 16.167v1A7.167 7.167 0 0017.167 10h-1zM14 10.5h2.667v-1H14v1zm-.5-.5a3.5 3.5 0 01-3.5 3.5v1a4.5 4.5 0 004.5-4.5h-1zM10 13.5A3.5 3.5 0 016.5 10h-1a4.5 4.5 0 004.5 4.5v-1zM6.5 10A3.5 3.5 0 0110 6.5v-1A4.5 4.5 0 005.5 10h1zm3-6.667V6h1V3.333h-1zM3.833 10A6.167 6.167 0 0110 3.833v-1A7.167 7.167 0 002.833 10h1zM10 16.167A6.167 6.167 0 013.833 10h-1A7.167 7.167 0 0010 17.167v-1z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.361 8v.5a.5.5 0 00.477-.65l-.477.15zm-2.896 0l-.433.25a.5.5 0 00.433.25V8zM12 3.639l.15-.478a.5.5 0 00-.65.478h.5zm0 2.896h-.5a.5.5 0 00.25.433l.25-.433zm4.361.965h-2.896v1h2.896v-1zm-4.51-3.384a6.182 6.182 0 014.033 4.034l.954-.3a7.182 7.182 0 00-4.688-4.689l-.3.955zm.649 2.42V3.638h-1v2.896h1zm-.75.432c.531.307.975.75 1.282 1.282l.866-.5a4.52 4.52 0 00-1.648-1.648l-.5.866z",
    fillOpacity: ".8"
  }));
};

ChartsPieDoughnut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsPieDoughnut.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsBar = function ChartsBar(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 15h13.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11.25H5V15h2v-3.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 8.75H9V15h2V8.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 5h-2v10h2V5z"
  }));
};

ChartsBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsBar.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsBarVertical = function ChartsBarVertical(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7 11.25H5V15h2v-3.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 8.75H9V15h2V8.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 5h-2v10h2V5z"
  }));
};

ChartsBarVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsBarVertical.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsBarHorizontal = function ChartsBarHorizontal(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M8.75 15v-2H5v2h3.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.25 11V9H5v2h6.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 7V5H5v2h10z"
  }));
};

ChartsBarHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsBarHorizontal.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DataNum = function DataNum(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8.636V7.158h2.826v6.786H3.51V8.636H2.5z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.458 12.67a37.017 37.017 0 001.887-1.469 6.06 6.06 0 00.98-1.012c.265-.354.398-.698.398-1.032 0-.254-.065-.453-.194-.595-.13-.143-.323-.214-.581-.214a.754.754 0 00-.613.27c-.142.173-.214.421-.214.743H6.438c.013-.527.136-.967.367-1.32.238-.353.548-.613.929-.78a3.21 3.21 0 011.285-.252c.81 0 1.418.19 1.826.567.415.378.622.871.622 1.478 0 .664-.248 1.28-.744 1.85-.497.564-1.13 1.116-1.898 1.655h2.755v1.292H6.458v-1.18z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.41 9.073c.026-.663.264-1.174.713-1.534.45-.36 1.058-.539 1.826-.539.51 0 .946.08 1.306.242.368.16.643.38.827.66.19.279.285.592.285.939 0 .409-.112.743-.336 1.004a1.718 1.718 0 01-.786.52v.037c.388.118.694.313.918.586.225.273.337.623.337 1.05 0 .385-.099.726-.296 1.023-.19.291-.473.52-.847.688-.367.167-.806.251-1.316.251-.816 0-1.469-.183-1.959-.549-.482-.365-.738-.917-.765-1.654h1.694c.007.272.092.49.255.65.163.155.401.233.714.233.265 0 .47-.068.612-.205a.735.735 0 00.225-.557c0-.298-.106-.512-.317-.642-.204-.136-.534-.204-.99-.204h-.326V9.78h.327c.347 0 .626-.053.836-.158.218-.112.327-.307.327-.586 0-.223-.068-.397-.204-.52-.136-.125-.323-.187-.561-.187-.259 0-.453.072-.582.214a.928.928 0 00-.214.53h-1.704z",
    fillOpacity: ".8"
  }));
};

DataNum.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DataNum.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsLine = function ChartsLine(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v14h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 13.889l3.111-6.222 3.89 3.5L17 3"
  }));
};

ChartsLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsLine.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DataString = function DataString(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.91 12.147H3.79l-.34 1.036H2l2.057-5.865H5.66l2.057 5.865H6.25l-.34-1.036zm-.355-1.103L4.85 8.897l-.696 2.147h1.4z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.727 9.18c.13-.216.316-.392.559-.526.243-.133.52-.2.834-.2.372 0 .71.097 1.012.292.302.195.54.474.713.836.178.362.267.782.267 1.262 0 .479-.09.902-.268 1.27-.172.362-.41.643-.712.844-.302.194-.64.292-1.012.292a1.73 1.73 0 01-.834-.192 1.522 1.522 0 01-.559-.527v.652H8.342V7h1.385v2.18zm1.976 1.664c0-.357-.097-.635-.292-.836a.917.917 0 00-.704-.31.933.933 0 00-.705.31c-.189.206-.283.487-.283.844 0 .356.094.638.283.844.195.206.43.309.705.309.275 0 .51-.103.704-.31.195-.21.292-.495.292-.851z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.563 10.852c0-.485.094-.908.283-1.27.194-.362.462-.64.802-.836.345-.195.74-.292 1.182-.292.567 0 1.04.153 1.417.46.383.306.634.738.753 1.295h-1.474c-.124-.357-.364-.535-.72-.535a.716.716 0 00-.608.309c-.15.2-.226.49-.226.869s.075.671.226.877c.152.2.354.301.608.301.356 0 .596-.178.72-.535H18c-.119.546-.37.975-.753 1.287-.383.312-.856.468-1.417.468-.443 0-.837-.098-1.182-.292a2.064 2.064 0 01-.802-.836c-.189-.362-.283-.785-.283-1.27z",
    fillOpacity: ".8"
  }));
};

DataString.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DataString.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DataTime = function DataTime(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 6.667V10l2.5 1.25"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "5.5"
  }));
};

DataTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DataTime.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DataBool = function DataBool(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7.746 7.099l-2.125 4.11v2.03H4.125v-2.03L2 7.1h1.697L4.886 9.67 6.066 7.1h1.68z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.453 5l-2.396 9.725H8.27L10.657 5h.796z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13.238h-1.495l-2.502-3.786v3.786h-1.495V7.1h1.495l2.502 3.804V7.1H18v6.14z",
    fillOpacity: ".8"
  }));
};

DataBool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DataBool.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DataVariant = function DataVariant(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 9.846c.36-.014.625-.091.794-.231.17-.147.254-.353.254-.618 0-.199-.037-.592-.11-1.18l-.067-.563a7.795 7.795 0 01-.055-.871c0-.625.191-1.11.574-1.456.382-.353.893-.53 1.533-.53h.794v1.544h-.43c-.235 0-.404.052-.507.155-.103.103-.155.261-.155.474 0 .162.03.53.089 1.103.066.714.099 1.18.099 1.401 0 .405-.1.74-.298 1.004-.191.265-.485.434-.882.508v.022c.397.08.69.253.882.518.199.257.298.592.298 1.004 0 .22-.033.688-.1 1.4-.058.56-.088.924-.088 1.093 0 .213.052.371.155.474.103.11.272.166.507.166h.43v1.544h-.794c-.64 0-1.15-.176-1.533-.53-.383-.345-.574-.834-.574-1.467 0-.257.019-.544.055-.86l.067-.574c.073-.588.11-.981.11-1.18a.749.749 0 00-.254-.596c-.169-.154-.434-.239-.794-.253v-1.5z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.388 4L9.43 16.542h-1.82L10.568 4h1.82z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 11.347c-.36.014-.625.099-.794.253a.749.749 0 00-.254.596c0 .199.037.592.11 1.18.008.06.03.25.066.574.037.316.056.603.056.86 0 .633-.192 1.122-.574 1.467-.382.354-.893.53-1.533.53h-.794v-1.544h.43c.235 0 .404-.056.507-.166.103-.103.155-.26.155-.474 0-.17-.03-.533-.089-1.092-.066-.713-.099-1.18-.099-1.401 0-.412.096-.747.287-1.004.198-.265.496-.438.893-.518v-.023c-.397-.073-.695-.242-.893-.507-.191-.265-.287-.6-.287-1.004 0-.22.033-.687.1-1.4.058-.574.088-.942.088-1.104 0-.213-.052-.371-.155-.474-.103-.103-.272-.155-.507-.155h-.43V4.397h.794c.64 0 1.15.177 1.533.53.383.345.574.83.574 1.456 0 .257-.019.548-.056.871-.036.316-.058.504-.066.563-.073.588-.11.981-.11 1.18 0 .265.085.47.254.618.169.14.434.217.794.231v1.5z",
    fillOpacity: ".8"
  }));
};

DataVariant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DataVariant.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Mail = function Mail(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 15h13.334V5H3.333v10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 5L10 10l6.667-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 5H3.333v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.667 10V5H10"
  }));
};

Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Mail.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Markdown = function Markdown(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.846 14.846H3.154A1.155 1.155 0 012 13.692V6.154C2 5.518 2.518 5 3.154 5h13.692C17.483 5 18 5.518 18 6.154v7.538c0 .637-.517 1.154-1.154 1.154zm-11-2.307v-3l1.539 1.923 1.538-1.923v3h1.539V7.308H8.923L7.385 9.23 5.846 7.308H4.308v5.23h1.538zm10.308-2.616h-1.539V7.308h-1.538v2.615h-1.539l2.308 2.692 2.308-2.692z",
    fillOpacity: ".8"
  }));
};

Markdown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Markdown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Label = function Label(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 3.333h10v13.334l-5-3.524-5 3.524V3.333z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 3.333H5v4h10v-4z"
  }));
};

Label.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Label.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Column = function Column(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "3",
    width: "8",
    height: "14"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "7.5",
    width: "8",
    height: "5"
  }));
};

Column.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Column.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Row = function Row(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "14",
    height: "4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "14",
    height: "4"
  }));
};

Row.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Row.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Stereo = function Stereo(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 17V6.5L6.5 3H17v10.5L13.5 17H3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 6.5V17"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 3v10.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6.5h10.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3l-3.5 3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l3.5-3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13.5H17"
  }));
};

Stereo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Stereo.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Person = function Person(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 8.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 16.667a6 6 0 00-12 0"
  }));
};

Person.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Person.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var FullScreen = function FullScreen(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M12 4h4v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 4H4v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16h4v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16H4v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4l-4.333 4.333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.333 11.667L4 16"
  }));
};

FullScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
FullScreen.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var OffScreen = function OffScreen(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M13 4v3h3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 4v3H4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16v-3H4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 16v-3h2.966"
  }));
};

OffScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
OffScreen.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Comma = function Comma(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.941c-.18.514-.333.94-.461 1.278-.116.35-.231.639-.347.865-.115.238-.23.432-.346.582-.115.15-.256.288-.423.413a5.723 5.723 0 01-.615.395c-.244.138-.539.313-.885.526a19.6 19.6 0 01-.23-.432.897.897 0 00-.155-.263 5.91 5.91 0 00-.192-.263L8 13.647a10.9 10.9 0 00.885-.563c.205-.138.371-.301.5-.489.128-.188.243-.426.346-.714.102-.288.243-.695.423-1.221V9.608H8.308V6H12v4.941z",
    fillOpacity: ".8"
  }));
};

Comma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Comma.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Percent = function Percent(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.969 7.586c0 .661.057 1.156.172 1.484.12.323.31.485.57.485.255 0 .443-.162.562-.485.125-.323.188-.817.188-1.484 0-1.302-.25-1.953-.75-1.953-.26 0-.45.161-.57.484-.115.318-.172.807-.172 1.469zm3.46-.016c0 .563-.054 1.068-.163 1.516a3.09 3.09 0 01-.493 1.133 2.256 2.256 0 01-.851.71c-.344.162-.753.243-1.227.243-.442 0-.833-.08-1.172-.242a2.357 2.357 0 01-.843-.711 3.287 3.287 0 01-.508-1.133A6.127 6.127 0 013 7.57c0-.562.052-1.065.156-1.508.104-.442.266-.815.485-1.117.224-.307.505-.541.843-.703C4.823 4.081 5.227 4 5.695 4c.448 0 .841.08 1.18.242.344.162.63.396.86.703.229.302.4.675.515 1.117.12.443.18.946.18 1.508zm5.212-3.406L7.305 15.586H5.438l6.335-11.422h1.868zm-.993 7.984c0 .662.058 1.157.172 1.485.12.323.31.484.57.484.256 0 .443-.161.563-.484.125-.323.188-.818.188-1.485 0-1.302-.25-1.953-.75-1.953-.26 0-.45.162-.57.485-.115.317-.173.807-.173 1.468zm3.461-.015c0 .562-.054 1.068-.164 1.515a3.089 3.089 0 01-.492 1.125 2.255 2.255 0 01-.851.711c-.344.162-.753.243-1.227.243-.443 0-.83-.081-1.164-.243a2.357 2.357 0 01-.844-.71 3.29 3.29 0 01-.508-1.126 6.126 6.126 0 01-.171-1.515c0-.563.052-1.065.156-1.508a3.09 3.09 0 01.484-1.117c.219-.307.498-.542.836-.703.339-.162.742-.242 1.211-.242.448 0 .841.08 1.18.242.343.161.63.396.86.703.228.302.4.674.515 1.117.12.443.18.945.18 1.508z",
    fillOpacity: ".8"
  }));
};

Percent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Percent.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Applications = function Applications(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.667 10.333v4.334a1 1 0 001 1h8.666a1 1 0 001-1v-4.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.667 7c0-.368.298-.667.666-.667h11.334c.368 0 .666.299.666.667v2.667a.667.667 0 01-.666.666H4.333a.667.667 0 01-.666-.666V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.333 6.333V5a.667.667 0 00-.666-.667H8.333A.667.667 0 007.667 5v1.333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9.667v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 9.667v2"
  }));
};

Applications.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Applications.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Activity = function Activity(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 9.452h3L8.296 3l3.667 13.333 2.704-6.881h3"
  }));
};

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Activity.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Recent = function Recent(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7.667 9.646V5a2 2 0 114 0v.669"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.667 9.668v4.665a2 2 0 01-4 0v-.676"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.667 11.667H4.995a1.997 1.997 0 01-1.995-2c0-1.105.893-2 1.995-2h.668"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.667 7.667h4.663c1.106 0 2.003.895 2.003 2 0 1.104-.897 2-2.003 2h-.641"
  }));
};

Recent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Recent.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Myworksheet = function Myworksheet(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15.333 9.667v-3l-3-3.334h-7A.667.667 0 004.667 4v12c0 .368.298.667.666.667h3.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.333 14a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 16.667a2.667 2.667 0 10-5.333 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3.333v3.334h3.333"
  }));
};

Myworksheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Myworksheet.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Getstart = function Getstart(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M14.333 15.667l1.13-3.109a.667.667 0 00-.328-.824L9.965 9.15a.667.667 0 00-.596 0l-5.17 2.585a.667.667 0 00-.33.824L5 15.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.333 6.333H6A.667.667 0 005.333 7v4l4.054-1.871a.667.667 0 01.559 0L14 11V7a.667.667 0 00-.667-.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.333 6.333V3.667A.667.667 0 0010.667 3h-2A.667.667 0 008 3.667v2.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.667 12.333V15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 16.333c1.333 0 1.333-.666 2.333-.666 1 0 1 .666 2 .666s1.167-.666 2.334-.666c1.166 0 1.333.666 2.333.666 1 0 1-.666 2-.666s1 .666 2.333.666"
  }));
};

Getstart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Getstart.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Folderopen = function Folderopen(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 5v10.667L5 9h10.167V7a.667.667 0 00-.667-.667H10l-1.667-2H4A.667.667 0 003.333 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.333 15.667L16.667 9H4.937l-1.604 6.667h12z"
  }));
};

Folderopen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Folderopen.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Filescode = function Filescode(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M14.667 9.333v-3l-3-3.333h-7A.667.667 0 004 3.667v12c0 .368.298.666.667.666h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.667 12l1.666 1.667-1.666 1.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.667 12L10 13.667l1.667 1.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.333 3v3.333h3.334"
  }));
};

Filescode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Filescode.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Terminal = function Terminal(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16 4.667H4a.667.667 0 00-.667.666v9.334c0 .368.299.666.667.666h12a.667.667 0 00.667-.666V5.333A.667.667 0 0016 4.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 8l2.333 2L6 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.667 12.667H14"
  }));
};

Terminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Terminal.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Tickets = function Tickets(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 4.667h2.334s.333 1.666 2 1.666c1.666 0 2-1.666 2-1.666h7v10.666h-7s-.334-1.666-2-1.666c-1.667 0-2 1.666-2 1.666H3.333V4.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.667 8.333V9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.667 11v.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.333 9H14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.333 11H14"
  }));
};

Tickets.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Tickets.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Level = function Level(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 16L3.333 8.167 5.232 4h9.536l1.899 4.167L10 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.667 8L10 11 7.333 8"
  }));
};

Level.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Level.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ChartsBarStacked = function ChartsBarStacked(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11 13H9v2h2v-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 7H9v6h2V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9H5v4h2V9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 13H5v2h2v-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 13h-2v2h2v-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 5h-2v8h2V5z"
  }));
};

ChartsBarStacked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ChartsBarStacked.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Credentials = function Credentials(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M8 16V9a2 2 0 114 0v7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 15V9a4 4 0 018 0v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 13.333V9a6 6 0 0112 0v4.333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 16.333V12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9.875v-.917"
  }));
};

Credentials.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Credentials.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Coupon = function Coupon(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.75 7.5L13.5 4l1.4 3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7.5h14v2.1c-1.05 0-2.1.7-2.1 1.925S15.95 13.8 17 13.8v2.1H3v-2.1c1.05 0 2.1-.7 2.1-2.1 0-1.4-1.05-2.1-2.1-2.1V7.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.55 10.785h2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.55 12.885h4.9"
  }));
};

Coupon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Coupon.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ThumbsUp = function ThumbsUp(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11.39 7.894V5.098C11.39 3.939 10.451 3 9.293 3L6.496 9.293v7.691h8.125c.697.008 1.294-.5 1.398-1.189l.965-6.292a1.4 1.4 0 00-1.398-1.609H11.39z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.496 9.215H4.629C3.81 9.201 3.11 9.88 3 10.691v4.894c.11.812.81 1.413 1.63 1.399h1.866V9.215z"
  }));
};

ThumbsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ThumbsUp.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ThumbsDown = function ThumbsDown(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M8.61 12.09v2.797c0 1.158.939 2.097 2.097 2.097l2.797-6.292V3H5.379A1.398 1.398 0 003.981 4.19l-.965 6.293a1.398 1.398 0 001.398 1.608H8.61z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.504 3h1.867c.819-.014 1.52.587 1.629 1.399v4.894c-.11.812-.81 1.49-1.63 1.476h-1.866V3z"
  }));
};

ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ThumbsDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Pencil = function Pencil(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 17h3L17 6l-3-3L3 14v3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 6l3 3"
  }));
};

Pencil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Pencil.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DocTitle = function DocTitle(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 4v12.444"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 4v12.444"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.389 10.222H9.61"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.111 10.222v6.222"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.111 12.954c0-.998.778-1.954 1.945-1.954 1.166 0 1.944.917 1.944 1.954v3.496"
  }));
};

DocTitle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DocTitle.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DocParagraph = function DocParagraph(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 5h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8.333h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 11.667h12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 15h12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.596 7.417H4.738l.929-1.858.929 1.858z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8.333l.333-.666m3 .666L7 7.667m-2.667 0L5.667 5 7 7.667m-2.667 0H7"
  }));
};

DocParagraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DocParagraph.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var DocPage = function DocPage(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 3.7a.7.7 0 01.7-.7h8.4a.7.7 0 01.7.7V17l-2.45-1.75L9.9 17l-2.45-1.75L5 17V3.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.8 9.3H12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.8 12.1H12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.8 6.5H12"
  }));
};

DocPage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DocPage.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var RecordDelimiter = function RecordDelimiter(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 10.158h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.895 15.316h2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.79 15.316H17"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.895 5h2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 15.316h2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5h2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.79 5H17"
  }));
};

RecordDelimiter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
RecordDelimiter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var FieldDelimiter = function FieldDelimiter(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4 3v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.6 3v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.8 6.85h7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.8 13.15h9.8"
  }));
};

FieldDelimiter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
FieldDelimiter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var SkipHeader = function SkipHeader(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.3 4H3.7a.7.7 0 00-.7.7v11.2a.7.7 0 00.7.7h12.6a.7.7 0 00.7-.7V4.7a.7.7 0 00-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8.2h14"
  }));
};

SkipHeader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
SkipHeader.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Locked = function Locked(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15.9 9.3H4.7a.7.7 0 00-.7.7v6.3a.7.7 0 00.7.7h11.2a.7.7 0 00.7-.7V10a.7.7 0 00-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.8 9.3V6.5a3.5 3.5 0 017 0v2.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 12.1v2.1"
  }));
};

Locked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Locked.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Ueue = function Ueue(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.333V10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12.333h14V17H3v-4.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5.528v-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7.667v-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3.389V3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5.528v-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7.667v-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3.389V3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7.667h-.389"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.389 7.667H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.389 3H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 3h-.389"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.833 3h-.389"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.833 7.667h-.389"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.556 3h-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 7.667h-.389"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.556 7.667h-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.278 3h-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.278 7.667h-.39"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3h-.389"
  }));
};

Ueue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Ueue.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Right = function Right(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7.917 5l5 5-5 5"
  }));
};

Right.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Right.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Down = function Down(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15 8l-5 5-5-5"
  }));
};

Down.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Down.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Up = function Up(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5-5 5 5"
  }));
};

Up.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Up.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Left = function Left(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 14.5l-5-5 5-5"
  }));
};

Left.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Left.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ArrowLeft = function ArrowLeft(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.997h10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 5l-5 5 5 5"
  }));
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ArrowRight = function ArrowRight(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15 9.997H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 15l5-5-5-5"
  }));
};

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ArrowRight.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ArrowTop = function ArrowTop(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15 10l-5-5-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.997 5v10"
  }));
};

ArrowTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ArrowTop.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var ArrowDown = function ArrowDown(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5 10l5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.003 15V5"
  }));
};

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ArrowDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var SortUp = function SortUp(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 3.75h8.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.083 6.667l3.334-3.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.417 3.333V17.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 7.917h6.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 12.083h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 16.25h3.334"
  }));
};

SortUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
SortUp.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var SortDown = function SortDown(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 3.333h8.334"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 17.083L2.5 13.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.833 2.917v14.166"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 7.5h6.667"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 11.667h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.583 15.833h3.334"
  }));
};

SortDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
SortDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var TriangleRight = function TriangleRight(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M13.157 9.785a.5.5 0 010 .822L7.035 14.85a.5.5 0 01-.785-.411V5.955a.5.5 0 01.785-.411l6.122 4.241z",
    fillOpacity: ".8"
  }));
};

TriangleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
TriangleRight.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var TriangleDown = function TriangleDown(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10.411 13.353a.5.5 0 01-.822 0L5.348 7.23a.5.5 0 01.41-.785h8.483a.5.5 0 01.412.785l-4.242 6.122z",
    fillOpacity: ".8"
  }));
};

TriangleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
TriangleDown.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var LoadingSpin = function LoadingSpin(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16 10.415A5.942 5.942 0 004.707 7.83"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear_420_11",
    x1: "4.707",
    y1: "10.415",
    x2: "16",
    y2: "10.415",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C6CACD",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".399",
    stopColor: "#C6CACD",
    stopOpacity: ".5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C6CACD"
  }))));
};

LoadingSpin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
LoadingSpin.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Github = function Github(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.177 3A7.175 7.175 0 003 10.177a7.172 7.172 0 004.907 6.81c.36.062.494-.153.494-.342 0-.17-.01-.735-.01-1.336-1.802.332-2.269-.44-2.413-.844-.08-.206-.43-.843-.735-1.013-.251-.135-.61-.467-.01-.476.566-.009.97.52 1.104.736.646 1.085 1.678.78 2.09.592.063-.467.252-.78.458-.96-1.597-.18-3.265-.798-3.265-3.544 0-.78.278-1.426.735-1.929-.072-.179-.323-.915.072-1.901 0 0 .601-.189 1.974.735a6.66 6.66 0 011.794-.242c.61 0 1.22.08 1.794.242 1.373-.933 1.974-.735 1.974-.735.395.986.144 1.722.072 1.901.457.503.735 1.14.735 1.93 0 2.754-1.677 3.364-3.274 3.543.26.224.484.655.484 1.328 0 .96-.009 1.731-.009 1.973 0 .189.135.413.494.341a7.189 7.189 0 004.89-6.809A7.175 7.175 0 0010.176 3z",
    fillOpacity: ".8"
  }));
};

Github.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Github.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Aws = function Aws(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6.51 9.075c-.018.567.265.817.272.977a.204.204 0 01-.102.156l-.32.224a.267.267 0 01-.141.048c-.01 0-.205.046-.512-.64a1.965 1.965 0 01-1.565.736c-.407.022-1.51-.23-1.453-1.405-.04-.957.851-1.551 1.773-1.501.177 0 .54.009 1.175.157v-.391c.067-.661-.368-1.175-1.12-1.098-.06 0-.486-.012-1.147.253-.184.085-.207.07-.268.07-.186 0-.11-.536-.074-.604.13-.16.897-.46 1.649-.455a1.921 1.921 0 011.392.432 1.757 1.757 0 01.442 1.309v1.732zm-2.16.81c.81-.012 1.154-.5 1.232-.762.062-.251.051-.41.051-.685a4.297 4.297 0 00-.989-.121c-.378-.029-1.07.14-1.043.806a.694.694 0 00.749.762zm4.273.576c-.197.018-.288-.121-.317-.259L7.06 6.086a.955.955 0 01-.048-.215.115.115 0 01.096-.131h.557c.219-.022.29.15.313.26l.893 3.52.83-3.52c.013-.081.073-.277.32-.257h.428c.055-.004.278-.012.317.26l.836 3.565.922-3.565c.011-.055.068-.285.316-.26h.494c.02-.003.153-.02.13.215-.01.046.086-.267-1.318 4.247-.029.138-.12.277-.317.26h-.467c-.274.028-.313-.242-.317-.27l-.83-3.427-.819 3.424c-.004.027-.043.298-.317.269h-.457zm6.837.141c-.147 0-.848-.008-1.434-.307a.32.32 0 01-.195-.298v-.269c0-.211.155-.172.22-.147.251.102.412.179.72.24.917.188 1.32-.057 1.419-.112a.575.575 0 00.13-.874c-.261-.22-.386-.228-1.328-.525-.116-.032-1.092-.34-1.094-1.309-.015-.706.626-1.404 1.738-1.398.317 0 1.16.103 1.389.39.034.052.05.114.048.176v.253c0 .11-.04.166-.122.166-.192-.021-.535-.279-1.229-.268-.172-.01-.997.022-.96.624-.01.474.665.652.742.672.912.274 1.217.32 1.579.74.428.556.197 1.207.108 1.386-.477.937-1.71.86-1.731.86zm1.005 2.621c-1.75 1.293-4.292 1.982-6.462 1.982a11.728 11.728 0 01-7.932-3.018c-.163-.148-.02-.35.179-.237a15.935 15.935 0 007.922 2.103 15.756 15.756 0 006.04-1.239c.294-.125.544.195.253.41zm.73-.832c-.224-.288-1.482-.134-2.046-.067-.17.02-.198-.128-.044-.237 1.001-.704 2.646-.502 2.835-.265.19.236-.05 1.885-.989 2.672-.143.122-.281.058-.217-.102.21-.531.685-1.712.46-2z",
    fillOpacity: ".8"
  }));
};

Aws.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Aws.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Google = function Google(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.474 9.665h.688v.967a2.587 2.587 0 01-.767.106c-1.142 0-1.814-.978-1.814-1.933 0-.936.608-1.593 1.455-1.593.536 0 .847.181 1.126.434v.315l.524-.523c-.331-.224-.81-.436-1.495-.436C2.687 7.002 2 8.077 2 8.962c0 1.257.916 2.015 2.068 2.015.558 0 1.054-.085 1.627-.244v-.999a.15.15 0 01.056-.117l.18-.18H4.705l-.23.228z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.557 8.352c-.866 0-1.402.632-1.402 1.303 0 .58.432 1.268 1.307 1.268.842 0 1.359-.634 1.359-1.317 0-.636-.505-1.254-1.264-1.254zm-.144.184c.61 0 .882.795.882 1.362 0 .843-.633.86-.708.86-.29 0-.492-.175-.644-.405a2.027 2.027 0 01-.263-.988c0-.382.125-.569.322-.706a.755.755 0 01.41-.123h.001z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.213 8.352c-.755 0-1.164.478-1.164 1.012 0 .407.291.866.892.866h.152s-.041.1-.041.198c0 .143.051.224.16.348-1.034.063-1.45.48-1.45.928 0 .393.376.78 1.167.78.935 0 1.42-.52 1.42-1.03 0-.359-.18-.556-.633-.896-.133-.103-.159-.17-.159-.247 0-.11.066-.184.09-.212.044-.045.118-.097.146-.122.152-.129.367-.32.367-.701 0-.261-.108-.486-.356-.697h.302l.228-.227h-1.12zm-.208.17c.137 0 .252.048.372.149.135.12.349.446.349.848a.518.518 0 01-.806.466c-.202-.131-.402-.479-.402-.892 0-.373.223-.571.487-.571zm.3 2.418c.057 0 .098.005.098.005s.136.097.231.17c.222.175.36.309.36.547 0 .327-.304.584-.796.584-.54 0-.953-.252-.953-.662 0-.34.283-.633 1.06-.644z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.497 10.848h1.038l.158-.159-.298-.037a.146.146 0 01-.127-.146V7.372c0-.062.028-.093.05-.113l.186-.187h-.885l-.23.23h.344v3.246a.145.145 0 01-.046.11l-.19.19z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.94 8.352c-.579 0-1.194.441-1.194 1.234 0 .655.441 1.336 1.266 1.336.206 0 .376-.026.534-.099.17-.078.334-.206.454-.366-.226.114-.41.19-.654.19-.465 0-.913-.336-1.07-.953l1.642-.664c-.095-.338-.363-.678-.977-.678zm-.107.181c.311 0 .536.256.536.456 0 .065-.04.099-.12.13l-1.01.409s-.028-.127-.028-.265c0-.576.417-.73.622-.73z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.493 8.352c-.865 0-1.402.632-1.402 1.303 0 .58.432 1.268 1.308 1.268.841 0 1.358-.634 1.358-1.317 0-.636-.505-1.254-1.264-1.254zm-.144.184c.61 0 .882.795.882 1.362 0 .843-.632.86-.708.86-.29 0-.492-.175-.643-.405a2.027 2.027 0 01-.264-.988c0-.382.125-.569.322-.706a.755.755 0 01.411-.123z",
    fillOpacity: ".8"
  }));
};

Google.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Google.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Twitter = function Twitter(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7.032 16.008c6.038 0 9.34-5.004 9.34-9.343 0-.142-.003-.284-.01-.425A6.677 6.677 0 0018 4.54a6.542 6.542 0 01-1.885.517 3.296 3.296 0 001.443-1.817 6.582 6.582 0 01-2.084.798A3.284 3.284 0 009.88 7.033 9.32 9.32 0 013.113 3.6 3.282 3.282 0 004.13 7.985a3.257 3.257 0 01-1.486-.41v.041a3.284 3.284 0 002.633 3.22 3.287 3.287 0 01-1.482.056 3.286 3.286 0 003.066 2.28 6.584 6.584 0 01-4.077 1.406c-.262 0-.523-.015-.783-.045a9.29 9.29 0 005.032 1.475",
    fillOpacity: ".8"
  }));
};

Twitter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Twitter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Slack = function Slack(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_303_60)",
    fillRule: "evenodd",
    clipRule: "evenodd",
    fillOpacity: ".8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.855 2c-.883 0-1.597.717-1.597 1.6 0 .882.715 1.599 1.597 1.6h1.597V3.6A1.6 1.6 0 007.855 2zm0 4.267H3.597c-.883 0-1.598.717-1.597 1.6a1.598 1.598 0 001.596 1.6h4.259c.882-.001 1.597-.717 1.597-1.6 0-.883-.715-1.6-1.597-1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.968 7.866c0-.882-.714-1.599-1.597-1.6-.883.001-1.598.718-1.597 1.6v1.6h1.597c.883 0 1.598-.716 1.597-1.6zm-4.258 0V3.6c0-.882-.714-1.599-1.597-1.6-.882 0-1.597.717-1.597 1.6v4.266a1.598 1.598 0 001.597 1.6c.883 0 1.598-.716 1.597-1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.113 18c.883 0 1.598-.717 1.597-1.6 0-.882-.715-1.599-1.597-1.6h-1.597v1.6a1.6 1.6 0 001.597 1.6zm0-4.267h4.258c.883-.001 1.598-.717 1.597-1.6a1.598 1.598 0 00-1.596-1.6h-4.259c-.882 0-1.597.717-1.597 1.6 0 .883.714 1.599 1.597 1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12.133c0 .883.714 1.599 1.597 1.6.883-.001 1.598-.717 1.597-1.6v-1.6H3.597c-.883.001-1.598.717-1.597 1.6zm4.258 0V16.4A1.598 1.598 0 007.855 18c.882 0 1.597-.717 1.597-1.6v-4.266a1.597 1.597 0 10-3.193-.001z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_303_60"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "15.968",
    height: "16",
    transform: "translate(2 2)"
  }))));
};

Slack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Slack.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Wechat = function Wechat(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M13.265 7.793V2.47s-2.604-1.396-5.644-.32l5.644 5.642zm.493 3.13V2.69s3.079 1.396 3.946 4.785l-3.946 3.449zm-1.656 2.394l5.683-5.345s1.006 1.635-.494 5.345h-5.19zm-2.902.677h7.676s-.927 2.512-4.243 3.549L9.2 13.994zM6.694 12.3v5.003s1.994 1.277 5.408.42l-5.408-5.423zm-4.44.259l3.888-3.49v7.935s-2.35-.816-3.889-4.445zm-.1-.558s-.889-2.87.355-5.363h5.348L2.155 12zm.691-5.922S3.97 3.528 7.03 2.33l3.65 3.748H2.845z",
    fillOpacity: ".8"
  }));
};

Wechat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Wechat.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var Youtube = function Youtube(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    "class": "icon default",
    viewBox: "-2 -2 24 24",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.666 5.72C18 6.949 18 9.51 18 9.51s0 2.56-.334 3.789a1.988 1.988 0 01-1.415 1.392c-1.248.328-6.251.328-6.251.328s-5.003 0-6.25-.329A1.988 1.988 0 012.333 13.3C2 12.07 2 9.509 2 9.509s0-2.56.334-3.788A1.988 1.988 0 013.75 4.329C4.997 4 10 4 10 4s5.004 0 6.252.33a1.988 1.988 0 011.415 1.39zM8.4 11.872l4.157-2.361L8.4 7.149v4.722z",
    fillOpacity: ".8"
  }));
};

Youtube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Youtube.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

exports.Activity = Activity;
exports.Add = Add;
exports.AddFolder = AddFolder;
exports.AddSheet = AddSheet;
exports.Analysis = Analysis;
exports.Applications = Applications;
exports.ArrowDown = ArrowDown;
exports.ArrowLeft = ArrowLeft;
exports.ArrowRight = ArrowRight;
exports.ArrowTop = ArrowTop;
exports.Aws = Aws;
exports.Begin = Begin;
exports.Book = Book;
exports.Calendar = Calendar;
exports.CardShow = CardShow;
exports.Chart = Chart;
exports.ChartsBar = ChartsBar;
exports.ChartsBarHorizontal = ChartsBarHorizontal;
exports.ChartsBarStacked = ChartsBarStacked;
exports.ChartsBarVertical = ChartsBarVertical;
exports.ChartsLine = ChartsLine;
exports.ChartsPie = ChartsPie;
exports.ChartsPieDoughnut = ChartsPieDoughnut;
exports.ChartsScorecard = ChartsScorecard;
exports.Check = Check;
exports.Close = Close;
exports.Collaborators = Collaborators;
exports.Column = Column;
exports.Comma = Comma;
exports.Compute = Compute;
exports.Copy = Copy;
exports.Coupon = Coupon;
exports.Credentials = Credentials;
exports.Dashboard = Dashboard;
exports.Data = Data;
exports.DataBool = DataBool;
exports.DataNum = DataNum;
exports.DataString = DataString;
exports.DataTime = DataTime;
exports.DataVariant = DataVariant;
exports.Delete = Delete;
exports.Dev = Dev;
exports.DocPage = DocPage;
exports.DocParagraph = DocParagraph;
exports.DocTitle = DocTitle;
exports.Down = Down;
exports.Download = Download;
exports.Enter = Enter;
exports.Error = Error;
exports.ExpandDown = ExpandDown;
exports.ExpandLeft = ExpandLeft;
exports.ExpandRight = ExpandRight;
exports.ExpandTop = ExpandTop;
exports.Export = Export;
exports.FieldDelimiter = FieldDelimiter;
exports.Filescode = Filescode;
exports.Folder = Folder;
exports.Folderopen = Folderopen;
exports.FullScreen = FullScreen;
exports.Getstart = Getstart;
exports.Github = Github;
exports.Google = Google;
exports.HamburgerButton = HamburgerButton;
exports.Help = Help;
exports.Hidden = Hidden;
exports.Label = Label;
exports.Left = Left;
exports.Level = Level;
exports.Link = Link;
exports.ListShow = ListShow;
exports.Loading = Loading;
exports.LoadingSpin = LoadingSpin;
exports.Locked = Locked;
exports.Mail = Mail;
exports.Markdown = Markdown;
exports.More = More;
exports.Myworksheet = Myworksheet;
exports.Notifications = Notifications;
exports.Number = Number;
exports.OffScreen = OffScreen;
exports.Organization = Organization;
exports.Pencil = Pencil;
exports.Percent = Percent;
exports.Person = Person;
exports.Pin = Pin;
exports.Preferences = Preferences;
exports.Queryhistory = Queryhistory;
exports.Question = Question;
exports.Recent = Recent;
exports.RecordDelimiter = RecordDelimiter;
exports.Reduction = Reduction;
exports.Refresh = Refresh;
exports.Return = Return;
exports.Right = Right;
exports.Row = Row;
exports.Schema = Schema;
exports.Search = Search;
exports.Send = Send;
exports.Setting = Setting;
exports.Share = Share;
exports.Show = Show;
exports.SkipHeader = SkipHeader;
exports.Slack = Slack;
exports.Smiling = Smiling;
exports.SortDown = SortDown;
exports.SortUp = SortUp;
exports.SqLuser = SqLuser;
exports.Stereo = Stereo;
exports.String = String;
exports.Support = Support;
exports.Suspended = Suspended;
exports.Switch = Switch;
exports.Table = Table;
exports.Terminal = Terminal;
exports.ThumbsDown = ThumbsDown;
exports.ThumbsUp = ThumbsUp;
exports.Tickets = Tickets;
exports.Time = Time;
exports.TriangleDown = TriangleDown;
exports.TriangleRight = TriangleRight;
exports.Twitter = Twitter;
exports.Ueue = Ueue;
exports.Unlink = Unlink;
exports.Up = Up;
exports.Upload = Upload;
exports.Wallet = Wallet;
exports.WareHouse = WareHouse;
exports.Wechat = Wechat;
exports.Worksheet = Worksheet;
exports.Youtube = Youtube;
