'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var clsx = _interopDefault(require('clsx'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

var _excluded = ["color", "size", "className"];
var Worksheet = function Worksheet(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.4 17V3h8.05l3.15 3.675V17H4.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.95 11.4h-2.1v2.45h2.1V11.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13.85h7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.05 9.65h-2.1v4.2h2.1v-4.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.15 7.9h-2.1v5.95h2.1V7.9z"
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

var _excluded$1 = ["color", "size", "className"];
var Data = function Data(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 5.45v9.45c0 1.16-3.134 2.1-7 2.1s-7-.94-7-2.1V5.45"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 11.75c0 1.16-3.134 2.1-7 2.1s-7-.94-7-2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8.6c0 1.16-3.134 2.1-7 2.1s-7-.94-7-2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 7.2c3.866 0 7-.94 7-2.1C17 3.94 13.866 3 10 3s-7 .94-7 2.1c0 1.16 3.134 2.1 7 2.1z"
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

var _excluded$2 = ["color", "size", "className"];
var Support = function Support(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M14.95 14.95a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9zm-1.98-7.92a4.2 4.2 0 11-5.94 5.94 4.2 4.2 0 015.94-5.94z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.95 14.95l-1.98-1.98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.05 14.95l1.98-1.98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.05 5.05l1.98 1.98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.95 5.05l-1.98 1.98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.97 12.97a4.2 4.2 0 10-5.94-5.94 4.2 4.2 0 005.94 5.94z"
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

var _excluded$3 = ["color", "size", "className"];
var Compute = function Compute(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$3);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 3H3v5.6h14V3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 11.4H3V17h14v-5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.6 6v-.4H6V6h-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.6 14.4V14H6v.4h-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.4 6v-.4h.4V6h-.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.4 14.4V14h.4v.4h-.4z"
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

var _excluded$4 = ["color", "size", "className"];
var Setting = function Setting(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$4);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M8 16.457A6.998 6.998 0 014.955 14.6a2.1 2.1 0 00-1.814-3.443 7.031 7.031 0 01.179-3.51h.029a2.1 2.1 0 001.885-3.028A6.989 6.989 0 018.128 3a2.1 2.1 0 003.744 0 6.989 6.989 0 012.893 1.62 2.1 2.1 0 001.914 3.027 7.03 7.03 0 01.178 3.51 2.1 2.1 0 00-1.814 3.443 6.998 6.998 0 01-3.042 1.857 2.101 2.101 0 00-4.002 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.197a2.45 2.45 0 100-4.9 2.45 2.45 0 000 4.9z"
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

var _excluded$5 = ["color", "size", "className"];
var Notifications = function Notifications(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$5);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 10a7 7 0 01-7 7H3v-7a7 7 0 1114 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 7.9h6.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 10.7h6.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13.5H10"
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

var _excluded$6 = ["color", "size", "className"];
var Search = function Search(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$6);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.312 15.624A6.312 6.312 0 109.312 3a6.312 6.312 0 000 12.624z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.412 6.84a2.961 2.961 0 00-2.1-.87c-.82 0-1.563.333-2.1.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.85 13.85L17 17"
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

var _excluded$7 = ["color", "size", "className"];
var Close = function Close(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$7);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$8 = ["color", "size", "className"];
var Error = function Error(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$8);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 4.944L4.944 3 10 8.056 15.056 3 17 4.944 11.944 10 17 15.056 15.056 17 10 11.944 4.944 17 3 15.056 8.056 10 3 4.944z",
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

var _excluded$9 = ["color", "size", "className"];
var Check = function Check(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$9);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 9.75L4.75 8l3.5 3.5 7-7L17 6.25 8.25 15 3 9.75z",
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

var _excluded$a = ["color", "size", "className"];
var Hidden = function Hidden(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$a);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.368 7c.234.45.588.866 1.04 1.236 1.266 1.038 3.299 1.71 5.59 1.71s4.324-.672 5.59-1.71c.452-.37.806-.787 1.04-1.236"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.832 9.947l.762 2.846"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.916 8.972L17 11.055"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11.055l2.084-2.083"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.393 12.793l.763-2.846"
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

var _excluded$b = ["color", "size", "className"];
var Show = function Show(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$b);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 14.6c4.418 0 8-4.8 8-4.8S14.418 5 10 5 2 9.8 2 9.8s3.582 4.8 8 4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.8a2 2 0 100-4 2 2 0 000 4z"
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

var _excluded$c = ["color", "size", "className"];
var Loading = function Loading(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$c);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$d = ["color", "size", "className"];
var Share = function Share(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$d);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 6.889A1.944 1.944 0 1014.5 3a1.944 1.944 0 000 3.889z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.944 11.944a1.944 1.944 0 100-3.888 1.944 1.944 0 000 3.888z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.556 5.946L7.631 8.929"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.632 10.997l5.188 3.066"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 13.111a1.944 1.944 0 110 3.889 1.944 1.944 0 010-3.889z"
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

var _excluded$e = ["color", "size", "className"];
var Begin = function Begin(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$e);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$f = ["color", "size", "className"];
var Export = function Export(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$f);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.633 11.105c0 2.21-1.473 5.895-6.631 5.895S3.37 13.316 3.37 11.105"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.004 3.037v10.279"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.58 7.421L10.003 3l4.42 4.421"
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

var _excluded$g = ["color", "size", "className"];
var Download = function Download(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$g);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M10.002 11.474L5.58 7.053h2.947V3h2.947v4.053h2.948l-4.421 4.42z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.633 14.421H3.37"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.686 17H6.317"
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

var _excluded$h = ["color", "size", "className"];
var Refresh = function Refresh(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$h);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16 4.667V10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10v5.333"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10a6 6 0 0010.167 4.317"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10A6 6 0 005.683 5.833"
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

var _excluded$i = ["color", "size", "className"];
var AddSheet = function AddSheet(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$i);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 9.65V6.5L12.45 3H5.1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h4.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.15 11.75v4.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.7 14.2h4.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.1 3v3.5h3.5"
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

var _excluded$j = ["color", "size", "className"];
var Pin = function Pin(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$j);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.62 7.842c1.004-1.004 2.198-.977 3.495-.265l4.852-2.69L12.692 3 17 7.308l-1.884-.27-2.693 4.847c.68 1.385.74 2.491-.265 3.496l-2.962-2.962L3 17l4.567-6.21L4.62 7.842z"
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

var _excluded$k = ["color", "size", "className"];
var Table = function Table(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$k);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15.95 3H4.05C3.47 3 3 3.47 3 4.05v11.9c0 .58.47 1.05 1.05 1.05h11.9c.58 0 1.05-.47 1.05-1.05V4.05C17 3.47 16.53 3 15.95 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.667 3v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.333 3v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7.667h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12.333h14"
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

var _excluded$l = ["color", "size", "className"];
var Schema = function Schema(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$l);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 5.723H3v8.556h3.111"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 11.946H17v4.666H6.111v-4.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 3.39H17v4.667H6.111V3.39z"
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

var _excluded$m = ["color", "size", "className"];
var ExpandTop = function ExpandTop(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$m);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$n = ["color", "size", "className"];
var ExpandDown = function ExpandDown(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$n);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$o = ["color", "size", "className"];
var ExpandRight = function ExpandRight(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$o);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$p = ["color", "size", "className"];
var ExpandLeft = function ExpandLeft(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$p);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$q = ["color", "size", "className"];
var Link = function Link(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$q);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10.034 4.138l-5.973 5.974a3.62 3.62 0 105.12 5.12l7.112-7.111a2.414 2.414 0 10-3.414-3.414l-7.112 7.112a1.207 1.207 0 001.707 1.707l5.974-5.974"
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

var _excluded$r = ["color", "size", "className"];
var Help = function Help(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$r);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 16.5a6.48 6.48 0 004.596-1.904A6.48 6.48 0 0016.5 10a6.48 6.48 0 00-1.904-4.596A6.48 6.48 0 0010 3.5a6.48 6.48 0 00-4.596 1.904A6.48 6.48 0 003.5 10a6.48 6.48 0 001.904 4.596A6.48 6.48 0 0010 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.503v-1.3a1.95 1.95 0 10-1.95-1.95"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 14.428a.813.813 0 100-1.625.813.813 0 000 1.625z",
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

var _excluded$s = ["color", "size", "className"];
var More = function More(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$s);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$t = ["color", "size", "className"];
var String = function String(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$t);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4 16l6-12 6 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.571 10.857h6.858"
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

var _excluded$u = ["color", "size", "className"];
var Number = function Number(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$u);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$v = ["color", "size", "className"];
var AddFolder = function AddFolder(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$v);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 3.737C3 3.33 3.33 3 3.737 3h4.42L10 5.21h6.263c.407 0 .737.33.737.737v9.58c0 .406-.33.736-.737.736H3.737A.737.737 0 013 15.526V3.736z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.863 10.295h4.421"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.074 8.084v4.421"
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

var _excluded$w = ["color", "size", "className"];
var Add = function Add(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$w);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$x = ["color", "size", "className"];
var WareHouse = function WareHouse(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$x);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.632 17H17V3H6.316v3.684"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6.684h6.632V17H3V6.684z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.947 14.79h.737"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.474 14.79h.736"
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

var _excluded$y = ["color", "size", "className"];
var Folder = function Folder(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$y);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 3.737C3 3.33 3.33 3 3.737 3h4.42L10 5.21h6.263c.407 0 .737.33.737.737v9.58c0 .406-.33.736-.737.736H3.737A.737.737 0 013 15.526V3.736z"
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

var _excluded$z = ["color", "size", "className"];
var Switch = function Switch(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$z);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$A = ["color", "size", "className"];
var Book = function Book(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$A);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4 15.5V4.25C4 3.007 5.075 2 6.4 2H16v12H6.4c-1.89 0-2.4.257-2.4 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M5.5 17H16v-3H5.5a1.5 1.5 0 000 3z"
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

var _excluded$B = ["color", "size", "className"];
var Copy = function Copy(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$B);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6.526 6.347V4.888c0-.49.398-.888.888-.888h7.698c.49 0 .888.398.888.888v7.697c0 .491-.398.889-.888.889h-1.475"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.585 6.526H4.888A.888.888 0 004 7.414v7.698c0 .49.398.888.888.888h7.697c.491 0 .889-.398.889-.888V7.414a.888.888 0 00-.889-.888z"
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

var _excluded$C = ["color", "size", "className"];
var HamburgerButton = function HamburgerButton(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$C);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$D = ["color", "size", "className"];
var CardShow = function CardShow(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$D);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$E = ["color", "size", "className"];
var ListShow = function ListShow(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$E);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$F = ["color", "size", "className"];
var Smiling = function Smiling(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$F);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 17a7 7 0 100-14 7 7 0 000 14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.45 12.45s-.7 1.4-2.45 1.4c-1.75 0-2.45-1.4-2.45-1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.45 7.9v1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.48 7.48v1.4"
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

var _excluded$G = ["color", "size", "className"];
var Delete = function Delete(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$G);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 5.722L6.967 3h6.066l.467 2.722"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5.722h14"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M15.056 5.722l-.778 12.056H5.722L4.944 5.722h10.111z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.056 14.667h3.889"
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

var _excluded$H = ["color", "size", "className"];
var Upload = function Upload(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$H);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.705 8.324a3.525 3.525 0 101.781 6.818"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.295 8.324a3.525 3.525 0 11-1.781 6.818"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.275 8.228a4.228 4.228 0 10-8.456 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.604 11.005l2.443-2.451 2.513 2.493"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.047 14.57V9.8"
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

var _excluded$I = ["color", "size", "className"];
var Wallet = function Wallet(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$I);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M7.894 5.79L12.724 3l1.615 2.796-6.445-.007z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6.5a.7.7 0 01.7-.7h12.6a.7.7 0 01.7.7v9.8a.7.7 0 01-.7.7H3.7a.7.7 0 01-.7-.7V6.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.938 13.15H17v-3.5h-3.063c-1.014 0-1.837.784-1.837 1.75s.823 1.75 1.838 1.75z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7.375v8.4"
  }));
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

var _excluded$J = ["color", "size", "className"];
var Collaborators = function Collaborators(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$J);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M8.25 8.9a2.45 2.45 0 100-4.9 2.45 2.45 0 000 4.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.013 4.35a2.449 2.449 0 010 4.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 16.18v.42h10.5v-.42c0-1.568 0-2.352-.305-2.951a2.8 2.8 0 00-1.224-1.224c-.599-.305-1.383-.305-2.951-.305H7.48c-1.568 0-2.352 0-2.951.305a2.8 2.8 0 00-1.224 1.224C3 13.828 3 14.612 3 16.18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.6v-.42c0-1.568 0-2.352-.305-2.951a2.8 2.8 0 00-1.224-1.224"
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

var _excluded$K = ["color", "size", "className"];
var Organization = function Organization(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$K);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 3h14v2.8l-.49.294a2.45 2.45 0 01-2.52 0L13.5 5.8l-.49.294a2.45 2.45 0 01-2.52 0L10 5.8l-.49.294a2.45 2.45 0 01-2.52 0L6.5 5.8l-.49.294a2.45 2.45 0 01-2.52 0L3 5.8V3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.3 10H3.7v6.3h12.6V10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.75 6.85V10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.25 6.85V10"
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

var _excluded$L = ["color", "size", "className"];
var Analysis = function Analysis(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$L);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 5.05C17 4.47 16.53 4 15.95 4H4.05C3.47 4 3 4.47 3 5.05V8.2h14V5.05z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.04 14.86l4.26-4.305 2.304 2.206 2.815-2.461 1.568 1.529"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7.5v6.65c0 .58-.47 1.05-1.05 1.05H5.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.29 6.1h6.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.489 6.1h.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7.5v3.15"
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

var _excluded$M = ["color", "size", "className"];
var Reduction = function Reduction(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$M);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$N = ["color", "size", "className"];
var Question = function Question(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$N);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$O = ["color", "size", "className"];
var SqLuser = function SqLuser(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$O);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.3 4.4v4.2c0 .773-1.41 1.4-3.15 1.4S3 9.373 3 8.6V4.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.3 6.5c0 .773-1.41 1.4-3.15 1.4S3 7.273 3 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.3 4.4c0 .773-1.41 1.4-3.15 1.4S3 5.173 3 4.4C3 3.627 4.41 3 6.15 3s3.15.627 3.15 1.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.8 3.7h2.1a1.4 1.4 0 011.4 1.4v2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.2 16.3H5.1a1.4 1.4 0 01-1.4-1.4v-2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.85 13.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 17h-6.3a3.15 3.15 0 116.3 0z"
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

var _excluded$P = ["color", "size", "className"];
var Suspended = function Suspended(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$P);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$Q = ["color", "size", "className"];
var Dev = function Dev(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$Q);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$R = ["color", "size", "className"];
var Unlink = function Unlink(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$R);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10.74 6.88L7.72 3.858c-1.112-1.112-2.878-1.15-3.944-.083-1.066 1.066-1.03 2.832.083 3.944l3.02 3.02"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.08 9.225l3.02 3.02c1.111 1.112 1.256 2.825.082 3.944-1.173 1.12-2.832 1.029-3.944-.083l-3.02-3.02"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.933 8.838l-1.51-1.51"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.457 12.362l-1.51-1.51"
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

var _excluded$S = ["color", "size", "className"];
var Calendar = function Calendar(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$S);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 8.526h14v7.737c0 .407-.33.737-.737.737H3.737A.737.737 0 013 16.263V8.526z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4.842c0-.407.33-.737.737-.737h12.526c.407 0 .737.33.737.737v3.684H3V4.842z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.053 3v2.947"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.947 3v2.947"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.474 14.053h2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.316 14.053h2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.474 11.105h2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.316 11.105h2.21"
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

var _excluded$T = ["color", "size", "className"];
var Time = function Time(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$T);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 17a7 7 0 100-14 7 7 0 000 14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.003 5.8v4.203l2.967 2.968"
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

var _excluded$U = ["color", "size", "className"];
var Chart = function Chart(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$U);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 10s.7-7 3.5-7 3.15 5.25 3.5 7c.35 1.75 1.4 7 3.85 7S17 10 17 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.45 10h2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.45 10h2.1"
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

var _excluded$V = ["color", "size", "className"];
var Preferences = function Preferences(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$V);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.263 4.474h-2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.105 3v2.947"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.105 4.474H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.947 9.632H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.895 8.158v2.947"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9.632H8.895"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.263 14.79h-2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.105 13.316v2.947"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.105 14.79H3"
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

var _excluded$W = ["color", "size", "className"];
var Enter = function Enter(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$W);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$X = ["color", "size", "className"];
var Return = function Return(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$X);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.722 4L3 6.333l2.722 2.723"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6.333h8.942c2.677 0 4.95 2.186 5.054 4.861.11 2.827-2.225 5.25-5.054 5.25h-6.61"
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

var _excluded$Y = ["color", "size", "className"];
var Queryhistory = function Queryhistory(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$Y);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 10V4.167C17 3.522 16.478 3 15.833 3H4.167C3.522 3 3 3.522 3 4.167v11.666C3 16.478 3.522 17 4.167 17H10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.111 15.444a2.333 2.333 0 100-4.666 2.333 2.333 0 000 4.666z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.056 14.667L17 16.222"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 6.889h7.778"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.111 10h3.111"
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

var _excluded$Z = ["color", "size", "className"];
var Send = function Send(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$Z);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 3l-4.9 14-2.8-6.3L3 7.9 17 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 3l-7.7 7.7"
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

var _excluded$_ = ["color", "size", "className"];
var ChartsScorecard = function ChartsScorecard(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$_);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$$ = ["color", "size", "className"];
var ChartsPie = function ChartsPie(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$$);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17 10a7 7 0 11-7-7v7h7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.68 7.9H12.1V3.32a7.017 7.017 0 014.58 4.58z"
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

var _excluded$10 = ["color", "size", "className"];
var ChartsPieDoughnut = function ChartsPieDoughnut(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$10);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M10 17a7 7 0 007-7h-2.8A4.2 4.2 0 1110 5.8V3a7 7 0 100 14z"
  }), /*#__PURE__*/React.createElement("path", {
    clipRule: "evenodd",
    d: "M13.638 7.9h3.042a7.016 7.016 0 00-4.58-4.58v3.042c.638.369 1.17.9 1.538 1.538z"
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

var _excluded$11 = ["color", "size", "className"];
var ChartsBar = function ChartsBar(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$11);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.333 15.5h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.183 11.563h-2.1V15.5h2.1v-3.938z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.383 8.938h-2.1V15.5h2.1V8.937z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.583 5h-2.1v10.5h2.1V5z"
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

var _excluded$12 = ["color", "size", "className"];
var ChartsBarVertical = function ChartsBarVertical(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$12);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6.85 11.563h-2.1V15.5h2.1v-3.938z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.05 8.938h-2.1V15.5h2.1V8.937z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.25 5h-2.1v10.5h2.1V5z"
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

var _excluded$13 = ["color", "size", "className"];
var ChartsBarHorizontal = function ChartsBarHorizontal(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$13);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$14 = ["color", "size", "className"];
var DataNum = function DataNum(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$14);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$15 = ["color", "size", "className"];
var ChartsLine = function ChartsLine(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$15);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$16 = ["color", "size", "className"];
var DataString = function DataString(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$16);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$17 = ["color", "size", "className"];
var DataTime = function DataTime(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$17);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 6v4l3 1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "6.5"
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

var _excluded$18 = ["color", "size", "className"];
var DataBool = function DataBool(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$18);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$19 = ["color", "size", "className"];
var DataVariant = function DataVariant(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$19);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1a = ["color", "size", "className"];
var Mail = function Mail(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1a);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 15.5h14V5H3v10.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5l7 5.25L17 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 5H3v5.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 10.25V5h-7"
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

var _excluded$1b = ["color", "size", "className"];
var Markdown = function Markdown(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1b);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1c = ["color", "size", "className"];
var Label = function Label(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1c);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.75 3h10.5v14L10 13.3 4.75 17V3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.25 3H4.75v4.2h10.5V3z"
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

var _excluded$1d = ["color", "size", "className"];
var Column = function Column(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1d);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1e = ["color", "size", "className"];
var Row = function Row(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1e);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1f = ["color", "size", "className"];
var Stereo = function Stereo(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1f);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1g = ["color", "size", "className"];
var Person = function Person(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1g);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 8.6A2.8 2.8 0 1010 3a2.8 2.8 0 000 5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.3 17a6.3 6.3 0 10-12.6 0"
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

var _excluded$1h = ["color", "size", "className"];
var FullScreen = function FullScreen(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1h);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1i = ["color", "size", "className"];
var OffScreen = function OffScreen(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1i);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1j = ["color", "size", "className"];
var Comma = function Comma(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1j);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1k = ["color", "size", "className"];
var Percent = function Percent(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1k);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.802 8.282c0 .606.053 1.059.157 1.36.11.295.284.443.523.443.233 0 .405-.148.514-.444.115-.295.172-.748.172-1.359 0-1.191-.229-1.787-.686-1.787-.239 0-.413.147-.523.443-.104.29-.157.739-.157 1.344zm3.168-.014c0 .515-.05.978-.15 1.388-.095.41-.246.755-.45 1.037a2.065 2.065 0 01-.78.65c-.315.148-.689.222-1.123.222-.405 0-.763-.074-1.072-.222a2.157 2.157 0 01-.773-.65 3.008 3.008 0 01-.465-1.037A5.608 5.608 0 014 8.268c0-.515.048-.975.143-1.38a2.83 2.83 0 01.443-1.023c.205-.281.463-.496.773-.643.31-.148.68-.222 1.108-.222.41 0 .77.074 1.08.222.315.147.577.362.787.643.21.277.367.618.472 1.023.11.405.164.865.164 1.38zm4.77-3.118l-5.8 10.456H6.231l5.8-10.456h1.71zm-.908 7.309c0 .605.052 1.058.157 1.359.11.295.284.443.522.443.234 0 .406-.148.515-.443.115-.296.172-.749.172-1.36 0-1.191-.229-1.787-.687-1.787-.238 0-.412.148-.522.443-.105.291-.157.74-.157 1.345zM16 12.445c0 .514-.05.977-.15 1.387a2.825 2.825 0 01-.45 1.03 2.064 2.064 0 01-.78.65c-.315.148-.69.222-1.123.222-.405 0-.76-.074-1.066-.222a2.156 2.156 0 01-.772-.65 3.01 3.01 0 01-.465-1.03 5.607 5.607 0 01-.157-1.387c0-.515.048-.975.143-1.38.095-.406.243-.747.443-1.023.2-.282.456-.496.766-.644.31-.148.679-.222 1.108-.222.41 0 .77.074 1.08.222.315.148.577.362.787.644.21.276.367.617.471 1.022.11.406.165.866.165 1.38z",
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

var _excluded$1l = ["color", "size", "className"];
var Applications = function Applications(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1l);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4.105 10.632v4.79c0 .61.495 1.104 1.106 1.104h9.579c.61 0 1.105-.494 1.105-1.105v-4.79"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6.947c0-.407.33-.736.737-.736h12.526c.407 0 .737.33.737.736v2.948c0 .407-.33.737-.737.737H3.737A.737.737 0 013 9.895V6.947z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.579 6.21V4.738A.737.737 0 0011.842 4H8.158a.737.737 0 00-.737.737V6.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.684 9.895v2.21"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.316 9.895v2.21"
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

var _excluded$1m = ["color", "size", "className"];
var Activity = function Activity(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1m);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 9.158h2.864L8.056 3l3.5 12.727 2.58-6.569H17"
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

var _excluded$1n = ["color", "size", "className"];
var Recent = function Recent(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1n);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M8.2 9.981V5.8a1.8 1.8 0 013.6 0v.602"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.8 10.001V14.2a1.8 1.8 0 01-3.6 0v-.609"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.8H5.795A1.798 1.798 0 014 10c0-.994.804-1.8 1.795-1.8h.602"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8.2h4.197C15.193 8.2 16 9.006 16 10s-.807 1.8-1.803 1.8h-.577"
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

var _excluded$1o = ["color", "size", "className"];
var Myworksheet = function Myworksheet(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1o);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15.2 9.65V6.5L12.05 3H4.7a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.1 14.2a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.9 17a2.8 2.8 0 10-5.6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.7 3v3.5h3.5"
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

var _excluded$1p = ["color", "size", "className"];
var Getstart = function Getstart(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1p);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M14.9 16.3l1.187-3.264a.7.7 0 00-.345-.865l-5.429-2.714a.7.7 0 00-.626 0L4.258 12.17a.7.7 0 00-.345.865L5.1 16.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.85 6.5h-7.7a.7.7 0 00-.7.7v4.2l4.257-1.965a.7.7 0 01.586 0L14.55 11.4V7.2a.7.7 0 00-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.75 6.5V3.7a.7.7 0 00-.7-.7h-2.1a.7.7 0 00-.7.7v2.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.8v2.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17c1.4 0 1.4-.7 2.45-.7 1.05 0 1.05.7 2.1.7s1.225-.7 2.45-.7 1.4.7 2.45.7c1.05 0 1.05-.7 2.1-.7s1.05.7 2.45.7"
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

var _excluded$1q = ["color", "size", "className"];
var Folderopen = function Folderopen(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1q);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 4.7v11.2l1.75-7h10.675V6.8a.7.7 0 00-.7-.7H10L8.25 4H3.7a.7.7 0 00-.7.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 15.9l1.4-7H4.684L3 15.9h12.6z"
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

var _excluded$1r = ["color", "size", "className"];
var Filescode = function Filescode(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1r);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15.2 9.65V6.5L12.05 3H4.7a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h4.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.15 12.45l1.75 1.75-1.75 1.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.05 12.45L10.3 14.2l1.75 1.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.7 3v3.5h3.5"
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

var _excluded$1s = ["color", "size", "className"];
var Terminal = function Terminal(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1s);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.3 4.667H3.7a.7.7 0 00-.7.7v9.8a.7.7 0 00.7.7h12.6a.7.7 0 00.7-.7v-9.8a.7.7 0 00-.7-.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.8 8.167l2.45 2.1-2.45 2.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.65 13.067h4.55"
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

var _excluded$1t = ["color", "size", "className"];
var Tickets = function Tickets(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1t);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3 4.4h2.45s.35 1.75 2.1 1.75 2.1-1.75 2.1-1.75H17v11.2H9.65s-.35-1.75-2.1-1.75-2.1 1.75-2.1 1.75H3V4.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.55 8.25v.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.55 11.05v.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.35 8.95h3.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.35 11.05h3.85"
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

var _excluded$1u = ["color", "size", "className"];
var Level = function Level(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1u);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 16.6L3 8.375 4.993 4h10.014L17 8.375 10 16.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.8 8.2L10 11.35 7.2 8.2"
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

var _excluded$1v = ["color", "size", "className"];
var ChartsBarStacked = function ChartsBarStacked(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1v);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11.2 13.6H8.8V16h2.4v-2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.2 6.4H8.8v7.2h2.4V6.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.4 8.8H4v4.8h2.4V8.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.4 13.6H4V16h2.4v-2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13.6h-2.4V16H16v-2.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 4h-2.4v9.6H16V4z"
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

var _excluded$1w = ["color", "size", "className"];
var Credentials = function Credentials(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1w);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1x = ["color", "size", "className"];
var Coupon = function Coupon(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1x);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1y = ["color", "size", "className"];
var ThumbsUp = function ThumbsUp(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1y);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1z = ["color", "size", "className"];
var ThumbsDown = function ThumbsDown(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1z);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1A = ["color", "size", "className"];
var Pencil = function Pencil(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1A);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1B = ["color", "size", "className"];
var DocTitle = function DocTitle(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1B);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M3.75 4v11.556"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.25 4v11.556"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.111 9.778H9.89"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.139 9.778v5.777"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.139 12.314c0-.926.722-1.814 1.805-1.814 1.084 0 1.806.851 1.806 1.814v3.246"
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

var _excluded$1C = ["color", "size", "className"];
var DocParagraph = function DocParagraph(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1C);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1D = ["color", "size", "className"];
var DocPage = function DocPage(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1D);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1E = ["color", "size", "className"];
var RecordDelimiter = function RecordDelimiter(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1E);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1F = ["color", "size", "className"];
var FieldDelimiter = function FieldDelimiter(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1F);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1G = ["color", "size", "className"];
var SkipHeader = function SkipHeader(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1G);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1H = ["color", "size", "className"];
var Locked = function Locked(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1H);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1I = ["color", "size", "className"];
var Ueue = function Ueue(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1I);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$1J = ["color", "size", "className"];
var Details = function Details(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1J);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M15.833 3H4.167C3.522 3 3 3.522 3 4.167v11.666C3 16.478 3.522 17 4.167 17h11.666c.645 0 1.167-.522 1.167-1.167V4.167C17 3.522 16.478 3 15.833 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.833 5.722h-3.11v3.111h3.11v-3.11z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.167 5.722h3.11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.167 8.444h3.11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.722 11.556h8.556"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.722 14.278h8.556"
  }));
};
Details.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Details.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1K = ["color", "size", "className"];
var Equal = function Equal(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1K);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11.5",
    width: "14",
    height: "3",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5.5",
    width: "14",
    height: "3",
    fillOpacity: ".8"
  }));
};
Equal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Equal.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1L = ["color", "size", "className"];
var ColorWheel = function ColorWheel(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1L);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M5.917 15.833a1.75 1.75 0 001.75-1.75V9.858m-1.75 5.975a1.75 1.75 0 01-1.75-1.75V4.167h3.5v5.691m-1.75 5.975h9.916v-3.5h-5.691M7.667 9.858l5.546-5.546.137-.145 2.48 2.479-5.688 5.687m0 0l-2.988 2.988a1.75 1.75 0 01-2.475 0"
  }));
};
ColorWheel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
ColorWheel.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1M = ["color", "size", "className"];
var Effects = function Effects(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1M);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 14.942a3.5 3.5 0 103.208-5.998"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.792 8.944a3.501 3.501 0 00.875 6.89 3.5 3.5 0 003.258-4.781"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11.167a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
  }));
};
Effects.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Effects.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1N = ["color", "size", "className"];
var IdentityCard = function IdentityCard(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1N);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.2 4H2.8a.8.8 0 00-.8.8V16a.8.8 0 00.8.8h14.4a.8.8 0 00.8-.8V4.8a.8.8 0 00-.8-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.2 10.8a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.6 13.2a2.4 2.4 0 10-4.8 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.6 8.8h3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.4 12h2.4"
  }));
};
IdentityCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
IdentityCard.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1O = ["color", "size", "className"];
var Phone = function Phone(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1O);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4 12.4h12.8v4.8a.8.8 0 01-.8.8H4.8a.8.8 0 01-.8-.8v-4.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.8 12.4V2.8A.8.8 0 0016 2H4.8a.8.8 0 00-.8.8v9.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.6 15.2h1.6"
  }));
};
Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Phone.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1P = ["color", "size", "className"];
var Password = function Password(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1P);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.623 9.766a3.288 3.288 0 01.876 3.196 3.309 3.309 0 01-2.355 2.343 3.33 3.33 0 01-3.213-.872 3.288 3.288 0 01.04-4.626 3.33 3.33 0 014.651-.04h0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.667 9.667L15.333 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.102 7.3l1.81 1.8 2.11-2.1-1.81-1.8-2.11 2.1z"
  }));
};
Password.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Password.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1Q = ["color", "size", "className"];
var Func = function Func(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1Q);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.43 6.77a.18.18 0 00-.014-.258.187.187 0 00-.12-.047h-1.65a.178.178 0 00-.14.063l-2.792 3.3a.18.18 0 01-.304-.044l-1.443-3.21a.18.18 0 00-.165-.107H6.97l.02-.107.182-.961c.239-1.259.863-1.85 1.95-1.85.422 0 .806.04 1.108.107l.32-1.517A5.318 5.318 0 009.305 2C6.957 2 5.751 3.007 5.308 5.347l-.214 1.122H2.876a.18.18 0 00-.177.146l-.245 1.177a.183.183 0 00.177.22h2.143L2.75 17.78a.183.183 0 00.178.22h1.504a.18.18 0 00.177-.145l2.038-9.84h3.086l1.55 3.16a.18.18 0 01-.028.2l-4.104 4.612a.183.183 0 00.016.257c.034.03.078.045.12.045h1.653a.178.178 0 00.138-.064l2.81-3.333a.183.183 0 01.258-.022c.02.018.036.038.047.063l1.495 3.242c.03.064.093.107.166.107h1.468a.182.182 0 00.163-.261l-2.163-4.52a.18.18 0 01.03-.2l4.076-4.532z",
    fillOpacity: ".8"
  }));
};
Func.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Func.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1R = ["color", "size", "className"];
var Ag = function Ag(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1R);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M7.914 10.916H4.977l-.47 1.27H2.5L5.347 5h2.22l2.846 7.185H8.384l-.47-1.269zM7.42 9.565l-.975-2.63-.964 2.63h1.94z",
    fillOpacity: ".8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.656 6.392c.44 0 .825.082 1.154.246.336.163.594.378.773.644v-.808H17.5v5.701c0 .525-.116 1-.348 1.423-.224.43-.571.77-1.042 1.023-.463.253-1.042.379-1.737.379-.927 0-1.678-.201-2.253-.604-.575-.396-.904-.935-.986-1.617h1.894c.06.218.202.389.426.512.224.13.5.194.83.194.395 0 .71-.106.94-.317.24-.205.36-.536.36-.993v-.809a2.108 2.108 0 01-.774.655c-.329.164-.714.246-1.154.246-.516 0-.983-.12-1.401-.358a2.683 2.683 0 01-.998-1.034c-.24-.45-.359-.969-.359-1.556 0-.586.12-1.102.359-1.545a2.61 2.61 0 01.998-1.024 2.776 2.776 0 011.4-.358zm1.927 2.938c0-.437-.134-.782-.403-1.034a1.335 1.335 0 00-.964-.379c-.381 0-.706.126-.975.379-.262.245-.392.587-.392 1.023 0 .437.13.785.392 1.044.269.253.594.38.975.38s.702-.127.964-.38c.269-.252.403-.597.403-1.033z",
    fillOpacity: ".8"
  }));
};
Ag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Ag.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1S = ["color", "size", "className"];
var SidebarLeft = function SidebarLeft(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1S);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm8 1H8v10h6a1 1 0 001-1V6a1 1 0 00-1-1z",
    fillOpacity: ".8"
  }));
};
SidebarLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
SidebarLeft.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1T = ["color", "size", "className"];
var SidebarTop = function SidebarTop(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1T);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6zm-1 8V8H5v6a1 1 0 001 1h8a1 1 0 001-1z",
    fillOpacity: ".8"
  }));
};
SidebarTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
SidebarTop.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1U = ["color", "size", "className"];
var SidebarBottom = function SidebarBottom(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1U);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8zm1-8v6h10V6a1 1 0 00-1-1H6a1 1 0 00-1 1z",
    fillOpacity: ".8"
  }));
};
SidebarBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
SidebarBottom.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1V = ["color", "size", "className"];
var Dollar = function Dollar(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1V);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M12.804 11.588c0 .416-.108.808-.324 1.176-.208.36-.52.66-.936.9-.408.232-.892.368-1.452.408v.972h-.768v-.984c-.8-.072-1.444-.312-1.932-.72-.488-.416-.74-.976-.756-1.68h1.8c.048.576.344.924.888 1.044v-2.292a10.55 10.55 0 01-1.392-.432 2.25 2.25 0 01-.912-.696c-.256-.32-.384-.756-.384-1.308 0-.696.248-1.264.744-1.704.504-.44 1.152-.692 1.944-.756v-.972h.768v.972c.768.064 1.38.296 1.836.696.464.4.724.952.78 1.656h-1.812a1.068 1.068 0 00-.252-.6c-.136-.176-.32-.3-.552-.372v2.268c.6.152 1.072.3 1.416.444.352.136.656.364.912.684.256.312.384.744.384 1.296zM8.388 7.892c0 .264.08.48.24.648.16.16.392.292.696.396V6.86c-.288.04-.516.148-.684.324-.168.176-.252.412-.252.708zm1.704 4.836c.304-.056.54-.18.708-.372a.993.993 0 00.264-.696c0-.264-.084-.476-.252-.636-.168-.16-.408-.292-.72-.396v2.1z",
    fillOpacity: ".8"
  }));
};
Dollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Dollar.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1W = ["color", "size", "className"];
var Rmb = function Rmb(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1W);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11.688 9.092h1.368v1.164l-1.98.024-.42.804v.108h2.4v1.164h-2.4V14h-1.68v-1.644h-2.4v-1.164h2.4v-.108l-.42-.816-1.98-.012V9.092h1.368L6.132 5.624h1.896l1.788 3.912 1.776-3.912h1.896l-1.8 3.468z",
    fillOpacity: ".8"
  }));
};
Rmb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Rmb.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1X = ["color", "size", "className"];
var Trace = function Trace(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1X);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10 4a6 6 0 106 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 7a3 3 0 103 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10l2.1-2.102"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.1 5.809V7.9h2.108L16 6.1h-2.099V4L12.1 5.809z"
  }));
};
Trace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Trace.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1Y = ["color", "size", "className"];
var Filter = function Filter(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1Y);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M4 5l4.8 5.606v4.209L11.2 16v-5.394L16 5H4z"
  }));
};
Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Filter.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1Z = ["color", "size", "className"];
var Select = function Select(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1Z);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M6 8.5l4.034-3L14 8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11.5l4.034 3 3.966-3"
  }));
};
Select.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Select.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1_ = ["color", "size", "className"];
var Rename = function Rename(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1_);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16 10.667v4.666a.667.667 0 01-.667.667H4.667A.667.667 0 014 15.333V4.667C4 4.298 4.298 4 4.667 4h4.666"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.667 10.907v2.426h2.439L16 6.436 13.565 4l-6.898 6.907z"
  }));
};
Rename.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Rename.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$1$ = ["color", "size", "className"];
var DataLock = function DataLock(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$1$);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M18 12.6a4 4 0 11-8 0 4 4 0 018 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 5v3.6a3.99 3.99 0 00-2.977 1.328 3.985 3.985 0 00-.966 3.351 4.004 4.004 0 001.973 2.803c-1.065.322-2.479.518-4.03.518-3.314 0-6-.895-6-2V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 5c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 11.4c0 1.105 2.686 2 6 2 .723 0 1.416-.043 2.057-.12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 8.2c0 1.105 2.686 2 6 2 1.103 0 2.136-.1 3.023-.272"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 12.6a2 2 0 11-4 0h4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 10.6a1.2 1.2 0 011.2 1.2v.8h-2.4v-.8a1.2 1.2 0 011.2-1.2z"
  }));
};
DataLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DataLock.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$20 = ["color", "size", "className"];
var Owner = function Owner(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$20);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M10.368 8.158a2.579 2.579 0 100-5.158 2.579 2.579 0 000 5.158z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 16.632c0-3.256 2.97-5.895 6.632-5.895"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.842 12.284c0-.393 2.579-1.179 2.579-1.179S17 11.891 17 12.285C17 15.427 14.421 17 14.421 17s-2.579-1.572-2.579-4.716z"
  }));
};
Owner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Owner.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$21 = ["color", "size", "className"];
var Right = function Right(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$21);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$22 = ["color", "size", "className"];
var Down = function Down(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$22);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$23 = ["color", "size", "className"];
var Up = function Up(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$23);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$24 = ["color", "size", "className"];
var Left = function Left(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$24);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$25 = ["color", "size", "className"];
var ArrowLeft = function ArrowLeft(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$25);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$26 = ["color", "size", "className"];
var ArrowRight = function ArrowRight(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$26);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$27 = ["color", "size", "className"];
var ArrowTop = function ArrowTop(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$27);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$28 = ["color", "size", "className"];
var ArrowDown = function ArrowDown(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$28);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$29 = ["color", "size", "className"];
var SortUp = function SortUp(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$29);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.684 5.316H16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7.526L6.526 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.526 5v10.737"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.684 8.474h5.053"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.684 11.632h3.79"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.684 14.79h2.527"
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

var _excluded$2a = ["color", "size", "className"];
var SortDown = function SortDown(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2a);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.514 4.324H16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.595 15.027L4 12.432"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.595 4v11.027"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.514 7.568h5.189"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.514 10.81h3.891"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.514 14.054h2.594"
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

var _excluded$2b = ["color", "size", "className"];
var TriangleRight = function TriangleRight(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2b);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2c = ["color", "size", "className"];
var TriangleDown = function TriangleDown(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2c);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2d = ["color", "size", "className"];
var LoadingSpin = function LoadingSpin(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2d);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2e = ["color", "size", "className"];
var Github = function Github(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2e);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2f = ["color", "size", "className"];
var Aws = function Aws(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2f);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2g = ["color", "size", "className"];
var Google = function Google(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2g);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2h = ["color", "size", "className"];
var Twitter = function Twitter(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2h);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2i = ["color", "size", "className"];
var Slack = function Slack(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2i);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2j = ["color", "size", "className"];
var WeChat = function WeChat(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2j);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M12.831 7.902c.184 0 .366.014.546.033C12.887 5.678 10.447 4 7.663 4 4.55 4 2 6.1 2 8.766c0 1.539.849 2.802 2.266 3.783L3.7 14.235l1.98-.983c.708.139 1.276.281 1.983.281.178 0 .354-.008.529-.022a4.127 4.127 0 01-.175-1.174c0-2.448 2.124-4.435 4.814-4.435zm-3.044-1.52c.426 0 .708.278.708.7 0 .42-.282.702-.708.702-.425 0-.85-.282-.85-.702 0-.422.425-.7.85-.7zM5.823 7.784c-.424 0-.852-.28-.852-.7 0-.423.428-.7.852-.7.425 0 .707.277.707.7 0 .42-.282.7-.707.7zM18 12.27c0-2.24-2.266-4.067-4.81-4.067-2.694 0-4.816 1.826-4.816 4.067 0 2.244 2.121 4.066 4.816 4.066.564 0 1.133-.14 1.699-.28l1.553.84-.426-1.4C17.153 14.653 18 13.534 18 12.27zm-6.372-.702c-.282 0-.566-.277-.566-.56 0-.28.284-.56.566-.56.428 0 .709.28.709.56 0 .283-.28.56-.709.56zm3.115 0c-.28 0-.563-.277-.563-.56 0-.28.283-.56.563-.56.425 0 .709.28.709.56 0 .283-.284.56-.71.56z",
    fillOpacity: ".8"
  }));
};
WeChat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
WeChat.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2k = ["color", "size", "className"];
var WeChatMoments = function WeChatMoments(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2k);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M13.265 7.793V2.47s-2.604-1.396-5.644-.32l5.644 5.642zm.493 3.13V2.69s3.079 1.396 3.946 4.785l-3.946 3.449zm-1.656 2.394l5.683-5.345s1.006 1.635-.494 5.345h-5.19zm-2.902.677h7.676s-.927 2.512-4.243 3.549L9.2 13.994zM6.694 12.3v5.003s1.994 1.277 5.408.42l-5.408-5.423zm-4.44.259l3.888-3.49v7.935s-2.35-.816-3.889-4.445zm-.1-.558s-.889-2.87.355-5.363h5.348L2.155 12zm.691-5.922S3.97 3.528 7.03 2.33l3.65 3.748H2.845z",
    fillOpacity: ".8"
  }));
};
WeChatMoments.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
WeChatMoments.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2l = ["color", "size", "className"];
var Youtube = function Youtube(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2l);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
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

var _excluded$2m = ["color", "size", "className"];
var Airbyte = function Airbyte(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2m);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.276 3.941c1.712-1.923 4.546-2.487 6.877-1.377 3.096 1.475 4.225 5.232 2.54 8.13L12.9 17.209a1.608 1.608 0 01-2.181.58l4.59-7.886a4.202 4.202 0 00-1.84-5.904c-1.683-.806-3.742-.403-4.986.982a4.202 4.202 0 00.316 5.946L6.12 15.54a1.588 1.588 0 01-.97.738 1.606 1.606 0 01-1.211-.158l2.91-5.007a5.751 5.751 0 01-.885-1.98L4.18 12.208a1.607 1.607 0 01-2.181.58l4.61-7.93c.193-.326.416-.632.666-.916zm5.322 2.525a2.303 2.303 0 01.851 3.155l-4.421 7.586a1.608 1.608 0 01-2.181.58l4.105-7.062a2.333 2.333 0 01-1.564-1.156 2.298 2.298 0 01.42-2.76 2.329 2.329 0 011.84-.645c.334.031.659.134.95.302zM10.99 7.89a.721.721 0 00.21 1.26.734.734 0 00.782-.207.723.723 0 00-.453-1.196.735.735 0 00-.54.143z",
    fillOpacity: ".8"
  }));
};
Airbyte.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Airbyte.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2n = ["color", "size", "className"];
var Dbt = function Dbt(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2n);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M17.32 2.665c.376.362.622.84.68 1.36 0 .217-.058.362-.188.637s-1.736 3.052-2.213 3.819a2.914 2.914 0 000 3.01c.477.766 2.083 3.558 2.213 3.833.13.275.188.405.188.622a2.14 2.14 0 01-.666 1.345 2.14 2.14 0 01-1.345.666c-.217 0-.362-.058-.622-.189-.26-.13-3.096-1.692-3.863-2.17-.057-.028-.115-.072-.188-.1l-3.79-2.243c.087.723.405 1.418.926 1.924.101.101.203.188.318.275-.086.043-.188.087-.275.145-.766.477-3.558 2.083-3.833 2.213-.275.13-.405.188-.637.188a2.14 2.14 0 01-1.345-.666 2.232 2.232 0 01-.68-1.36c.014-.216.072-.433.188-.621.13-.275 1.736-3.067 2.213-3.834.275-.449.42-.97.42-1.505 0-.535-.145-1.056-.42-1.504-.477-.796-2.097-3.588-2.213-3.863A1.357 1.357 0 012 4.025c.058-.52.29-.998.665-1.36.362-.376.84-.607 1.36-.665.217.014.434.072.637.188.231.101 2.271 1.288 3.356 1.924l.246.145c.087.058.16.101.217.13l.116.072 3.862 2.286a3.184 3.184 0 00-1.23-2.199c.088-.043.189-.087.276-.145.766-.477 3.558-2.097 3.833-2.213.188-.116.405-.174.637-.188.506.058.983.29 1.345.665zm-7.117 8.362l.824-.824a.28.28 0 000-.406l-.824-.824a.28.28 0 00-.406 0l-.824.824a.28.28 0 000 .405l.824.825c.102.101.29.101.405 0z",
    fillOpacity: ".8"
  }));
};
Dbt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Dbt.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2o = ["color", "size", "className"];
var Linux = function Linux(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2o);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.721 14.7c-.367-.298-.225-.955-.605-1.279.369-2.242-.665-4.22-1.897-5.488-1.033-1.063-.7-2.097-.7-2.993 0-1.431-.588-2.94-2.367-2.94C8.25 2 7.73 3.587 7.71 4.492c-.045 2.175.44 2.74-.833 4.323-1.498 1.862-1.718 3.72-1.38 4.704a1.957 1.957 0 01-.77.557c-1.102.48-.294 1.283-.599 1.853a1.044 1.044 0 00-.128.494c0 .5.398.933 1.119.868.975-.087 1.873.603 2.454.603.514 0 .935-.292 1.131-.693.918-.227 2.051-.198 2.969.038.165.461.61.761 1.108.761 1.088 0 1.296-1.232 2.544-1.65.45-.15.675-.586.675-.992 0-.26-.093-.507-.279-.659zM9.623 7.722c-.213 0-.389-.173-.667-.38-.352-.26-.71-.41-.706-.685 0-.19.253-.248.58-.455.35-.222.487-.447.832-.447.353 0 .46.179.94.386.472.205.8.285.8.516 0 .236-.493.405-.772.578-.408.252-.618.487-1.007.487zm1.11-3.477c.588.094.654 1.128.373 1.636l-.237-.097c.123-.362.12-.957-.29-.996-.26-.024-.429.32-.465.615a1.125 1.125 0 00-.349-.084c.042-.615.44-1.158.968-1.074zm-2.269.22c.45-.112.717.413.719.957l-.207.128c-.028-.23-.13-.599-.386-.52-.274.085-.23.722-.076.853l-.204.112c-.28-.47-.28-1.42.154-1.53zm-1.41 12.83c-1.309-.596-1.753-.46-2.003-.46-.518 0-.688-.386-.493-.752.165-.31.114-.635.074-.895-.063-.4-.075-.53.318-.701a2.27 2.27 0 00.965-.75c.505-.624 1.015.358 1.433 1.234.272.567.806.854.97 1.483.151.58-.473 1.2-1.264.84zm4.658-1.25c-.923.449-2.098.655-2.978.2-.129-.375-.337-.618-.56-.863.358-.094.625-.542.305-.992-.34-.48-1.036-.816-1.74-1.36-.658-.51-.865-1.762.03-3.165-.436 1.242-.18 2.386.038 2.714.045-.659.098-1.76.998-3.077.454-.666.46-1.545.47-2.094l.414.283c.304.225.558.472.924.472.54 0 .839-.31 1.254-.569.163-.1.409-.2.615-.342.347 1.65 1.784 3.636 1.864 4.767.334-.688-.095-2.343-.095-2.343.562.857.606 1.571.631 2.447.393.16.814.58.853 1.13l-.164-.018c-.084-.613-1.737-1.513-1.886-.36-.793.121-.505 1.378-.665 2.193-.073.373-.21.667-.308.977zm3.23-.027c-.656.253-1.099.792-1.404 1.125-.587.645-1.363.336-1.445-.267-.087-.645.24-.996.381-1.716.129-.658-.015-1.67.288-1.779.196 1.169 1.377.677 1.646.359.438 0 .475.148.573.558.061.256.146.472.385.727.279.297.193.755-.423.993zM9.61 7.348c-.435 0-.759-.29-1.023-.513-.135-.114.033-.325.168-.21.258.219.518.45.855.45.404 0 .76-.346 1.244-.537.165-.065.26.19.096.255-.47.184-.846.555-1.34.555z",
    fillOpacity: ".8"
  }));
};
Linux.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Linux.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2p = ["color", "size", "className"];
var Apple = function Apple(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2p);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11.95 4.518c.935-1.143.726-2.391.623-2.495-.104-.103-1.456.104-2.392 1.352-.832 1.143-.832 2.392-.727 2.496.106.103 1.456 0 2.495-1.353zm2.287 5.823c-.103-1.663 1.456-2.702 1.767-2.911v-.104s-1.353-1.663-3.326-1.559c-1.247.104-1.872.727-2.702.727-1.04 0-1.976-.727-3.119-.727-.936 0-3.638.832-3.845 4.365-.207 3.535 2.286 6.86 3.222 7.483.936.624 1.56.417 2.599-.103.52-.313 2.182-.416 3.118.207 1.143.416 2.806.104 4.678-4.054-.21.002-2.288-.518-2.392-3.324z",
    fillOpacity: ".8"
  }));
};
Apple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Apple.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2q = ["color", "size", "className"];
var Zhihu = function Zhihu(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2q);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M11.113 4v12.2h1.277l.537 1.521 2.266-1.52h2.8V4h-6.88zm5.274 10.584h-1.275l-1.6 1.073-.379-1.073h-.383V5.665h3.635v8.92h.002zM10.29 9.47H7.462c.045-.956.092-2.221.14-3.682h2.788l-.002-.173c0-.013-.004-.313-.049-.62-.044-.319-.14-.743-.447-.743H5.216c.093-.438.334-1.484.626-1.997l.136-.239L5.703 2c-.017 0-.417-.019-.881.226-.76.405-1.101 1.201-1.25 1.797-.392 1.557-.95 2.639-1.187 3.101-.07.136-.112.217-.132.273-.038.104-.017.208.06.277.224.202.813-.062.82-.064l.047-.022c.296-.134 1.173-.532 1.486-1.8h1.208c.015.687.066 2.948.061 3.683H2.933l-.045.032c-.492.36-.65 1.346-.656 1.388l-.03.196H5.76c-.262 1.668-.565 2.415-.724 2.713-.08.15-.156.299-.228.443-.454.9-.925 1.828-2.69 3.272-.077.06-.149.17-.102.291.05.134.198.194.524.194.115 0 .251-.006.413-.021 1.063-.094 2.146-.384 2.877-1.866.362-.747.675-1.527.935-2.319l2.907 3.407.106-.255c.017-.04.405-.986.109-2.042l-.01-.039-2.303-2.62-.468.354a10.3 10.3 0 00.266-1.514h3.38v-.17c0-.854-.394-1.361-.41-1.382l-.05-.064z",
    fillOpacity: ".8"
  }));
};
Zhihu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Zhihu.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2r = ["color", "size", "className"];
var Mysql = function Mysql(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2r);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M9.161 14.587a2.81 2.81 0 01-.256-.198 4.907 4.907 0 01-.238-.22 6.887 6.887 0 01-.442-.478 10.303 10.303 0 01-.768-1.052 13.078 13.078 0 01-.643-1.135 16.343 16.343 0 01-.542-1.188l.37.044a4.908 4.908 0 01-.23.326 1.708 1.708 0 01-.093.11l.013-.014-.001.002-.004.005-.007.01-.016.024a1.694 1.694 0 00-.09.153 2.036 2.036 0 00-.214.678 1.786 1.786 0 00-.01.117v.014l-.001.008v.005l-.002.014-.003.033-.005.067-.023.268-.048.535-.015.176-.172.06-.019.006-.01.003-.015.004a.422.422 0 01-.144.008.546.546 0 01-.125-.028.7.7 0 01-.184-.097c-.1-.074-.17-.155-.231-.234-.06-.08-.11-.16-.155-.241a3.094 3.094 0 01-.17-.363l-.023-.06-.014-.038-.01-.032a5.742 5.742 0 01-.188-.752 5.368 5.368 0 01-.087-1.03c.006-.348.05-.7.143-1.046l.003-.01.011-.03.029-.074.028-.077a8.515 8.515 0 00.153-.464 2.92 2.92 0 00.07-.294.791.791 0 00.013-.13c0 .005.001.014.007.033.007.018.018.05.052.09l-.04-.047-.023-.055.004.01v.001l-.001-.003-.007-.01a.5.5 0 00-.068-.085.95.95 0 00-.129-.114l-.032-.024-.028-.033-.025-.03-.02-.024-.037-.048a3.602 3.602 0 01-.196-.283A5.137 5.137 0 013.63 5.91l-.004-.014-.002-.007v-.001l.003.012v-.002l-.007-.023-.014-.046-.03-.095a9.6 9.6 0 00-.127-.374A6.04 6.04 0 003.31 5a3.25 3.25 0 00-.078-.165 1.48 1.48 0 00-.078-.138c-.013-.02-.02-.028-.044-.061l-.06-.082-.124-.164a37.022 37.022 0 00-.247-.325l-.124-.16a7.585 7.585 0 00-.122-.151l-.028-.034-.014-.016-.003-.003-.001-.002-.014-.016-.003-.004-.012-.016a2.084 2.084 0 01-.212-.335 1.48 1.48 0 01-.108-.277 1.076 1.076 0 01-.032-.175.878.878 0 01.004-.213.766.766 0 01.42-.578l.003-.002c-.024.013.009-.004.003-.001l.016-.008a.65.65 0 01.118-.042 1.201 1.201 0 01.437-.02c.1.012.19.035.277.061.171.054.322.124.463.201l-.044-.021.08.034.076.034a7.29 7.29 0 01.448.221c.1.054.2.11.3.176.054.034.105.07.156.107.052.04.106.083.164.138l.012.012.018.02-.008-.009.003.002a.223.223 0 00.033.027c.016.01.032.019.05.025a.143.143 0 00.078.01l.04-.005.036.001.084.004.08.003a10.203 10.203 0 01.485.039c.11.012.22.026.337.047a2.534 2.534 0 01.288.07c.038.014.078.028.126.052l-.051-.021.038.013.033.013.063.024a6.06 6.06 0 01.36.155 9.48 9.48 0 012.528 1.73c.061.06.122.12.182.182l.045.046.022.024.001.001-.01-.011.002.003.008.007.013.013.093.096a10.423 10.423 0 011.237 1.62c.178.289.343.588.488.897.146.31.275.628.38.956l-.014-.037a75.699 75.699 0 00.648 1.46 27.524 27.524 0 00.424.886l.022.04.005.01.003.006-.008-.013.002.003.012.02.05.081a5.183 5.183 0 00.169.25l.002.002-.006-.005-.02-.016-.035-.023h.002l.004.003.009.005.018.01.04.022a2.652 2.652 0 00.252.12c.114.047.23.085.343.11l.036.008.019.007.488.194.245.1.124.051.064.028.035.015.02.01.026.012.02.01.014.01a91.221 91.221 0 01.845.589c.094.066.187.133.281.203l-.02-.014.056.036.055.036a6.579 6.579 0 01.321.229c.071.055.141.113.213.183.036.036.073.074.111.124a.684.684 0 01.09.16c.009.027.018.06.021.1l.03.329-.324-.02-.03-.001-.033-.002-.067-.002-.135-.003a7.673 7.673 0 00-.812.032 4.796 4.796 0 00-.528.08c-.172.037-.34.084-.495.15l-.029.011-.031.007h-.006l-.01.002-.02.003a.649.649 0 00-.11.033.24.24 0 00-.044.024l-.005.002.003-.01-.04-.186.007.01.005.006.009.012a.623.623 0 01.042.07 1.047 1.047 0 01.109.286l-.022-.053.03.053.033.054a4.63 4.63 0 00.212.315c.05.067.103.131.157.188.028.029.055.056.083.08a.517.517 0 00.081.057l.029.016.02.021c-.002-.002 0 0 0 0l.002.003.006.007.013.014a.96.96 0 00.092.085 4.571 4.571 0 00.426.314c.2.129.41.247.623.36l.163.084a6.572 6.572 0 01.48.28c.103.067.205.137.304.212.098.074.194.153.282.24l-.003-.002a3.196 3.196 0 01.268.24c.027.028.054.058.077.091l-.003-.003.155.084-.163-.067h-.002l-.002-.002a.846.846 0 00-.084-.081 1.96 1.96 0 00-.187-.142 3.055 3.055 0 00-.098-.065l-.002-.002a3.873 3.873 0 00-.61-.385 7.23 7.23 0 00-.49-.232l-.17-.07a7.582 7.582 0 01-.67-.319 4.862 4.862 0 01-.324-.191 2.928 2.928 0 01-.274-.203l-.02-.018-.01-.01-.006-.006-.008-.007.05.036a.816.816 0 01-.143-.084 1.383 1.383 0 01-.116-.096 2.46 2.46 0 01-.199-.205 4.111 4.111 0 01-.335-.444l-.012-.018-.01-.035a.7.7 0 00-.097-.2l-.009-.011-.003-.005-.002-.001.001.001-.067-.083.027-.103a.38.38 0 01.115-.189.603.603 0 01.138-.097.924.924 0 01.23-.083l.017-.004.01-.002.011-.002-.06.018c.186-.093.376-.16.567-.213.192-.052.384-.09.577-.121a7.371 7.371 0 011.015-.088l.074-.001h.077l-.294.309a.173.173 0 00.007.04l.005.012c0 .002-.003-.003-.01-.01a.655.655 0 00-.057-.056 1.98 1.98 0 00-.169-.13 4.092 4.092 0 00-.292-.188l-.05-.03-.049-.027-.004-.002-.017-.011a22.647 22.647 0 00-.282-.183l-.287-.183a89.862 89.862 0 00-.575-.363l.034.02-.096-.037-.12-.044-.243-.087-.49-.173.054.016a2.87 2.87 0 01-.467-.13 3.441 3.441 0 01-.328-.14l-.054-.028-.028-.015-.014-.007-.018-.01-.015-.009-.02-.014a.5.5 0 01-.038-.033l-.013-.012-.01-.01a.873.873 0 01-.078-.089 5.976 5.976 0 01-.194-.27l-.059-.087-.014-.023-.002-.003-.001-.001-.01-.016-.003-.006-.007-.012-.027-.046a23.266 23.266 0 01-.473-.912 57.42 57.42 0 01-.695-1.461l-.006-.014-.008-.024a7.934 7.934 0 00-.818-1.651A9.835 9.835 0 009.255 6.17a4.5 4.5 0 00-.078-.078l-.008-.009-.004-.003-.017-.017-.02-.021-.04-.04a7.89 7.89 0 00-.51-.468 8.685 8.685 0 00-2.253-1.372l-.05-.02-.044-.016-.03-.01-.021-.01-.017-.007a1.604 1.604 0 00-.158-.038 3.918 3.918 0 00-.27-.038 7.422 7.422 0 00-.433-.035l-.073-.003-.07-.003.077-.004a1.081 1.081 0 01-.546-.067 1.188 1.188 0 01-.408-.271l-.014-.015-.008-.008-.013-.015.03.032a.794.794 0 00-.075-.063 3.609 3.609 0 00-.34-.212 6.128 6.128 0 00-.39-.195l-.066-.03-.064-.029-.028-.012-.016-.01c-.1-.055-.2-.102-.291-.13a.789.789 0 00-.126-.031.327.327 0 00-.077-.004c-.002 0-.003 0 0 0l.011-.004.012-.004.01-.005.01-.005c-.005.003.026-.013.001 0 0 0 .006-.003.016-.013a.165.165 0 00.047-.09c.002-.02-.002-.007.005.02a.58.58 0 00.042.108 1.19 1.19 0 00.116.19l.003.005-.012-.015.003.003.005.006.02.024.037.046a8.478 8.478 0 01.262.34l.247.338.122.169.061.085.035.048.04.06c.048.078.086.151.12.223.036.072.066.142.095.212.057.139.107.276.154.413.046.136.09.273.13.411l.03.104.014.052.007.028.006.02.001.006.003.012a4.198 4.198 0 00.311.886 4.193 4.193 0 00.327.561l.026.035.02.026-.06-.057a1.741 1.741 0 01.334.35 1.253 1.253 0 01.073.118l.012.025.007.014.004.008.007.016-.063-.102c.052.063.076.12.092.165a.606.606 0 01.026.116.843.843 0 01.005.157 1.57 1.57 0 01-.032.226 3.671 3.671 0 01-.102.37 6.925 6.925 0 01-.187.509l-.034.083-.036.085.014-.04a3.62 3.62 0 00-.15.865 5.084 5.084 0 00.172 1.567l.013.046.018.053.038.104c.053.137.114.268.183.37.034.051.071.094.1.118.014.012.025.018.027.02H5.58a.175.175 0 00-.024.004l-.008.002-.006.002-.015.005-.187.237.151-1.073a2.413 2.413 0 01.442-1.02l.024-.03.013-.016.016-.02.008-.009.004-.004a2.803 2.803 0 00.225-.258l.072-.095.243-.332.127.376a18.324 18.324 0 00.45 1.195c.166.392.346.78.547 1.155a9.885 9.885 0 00.665 1.094c.122.176.251.346.388.51.07.083.14.163.214.24.074.078.15.155.232.224z",
    fillOpacity: ".8"
  }));
};
Mysql.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Mysql.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2s = ["color", "size", "className"];
var OpenAi = function OpenAi(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2s);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.73 8.55c.2-.55.25-1.1.2-1.65-.05-.55-.25-1.1-.5-1.6-.45-.75-1.1-1.35-1.85-1.7-.8-.35-1.65-.45-2.5-.25-.4-.4-.85-.75-1.35-1-.5-.25-1.1-.35-1.65-.35-.85 0-1.7.25-2.4.75s-1.2 1.2-1.45 2c-.6.15-1.1.4-1.6.7-.45.35-.8.8-1.1 1.25-.45.75-.6 1.6-.5 2.45.1.85.45 1.65 1 2.3-.2.55-.25 1.1-.2 1.65.05.55.25 1.1.5 1.6.45.75 1.1 1.35 1.85 1.7.8.35 1.65.45 2.5.25.4.4.85.75 1.35 1 .5.25 1.1.35 1.65.35.85 0 1.7-.25 2.4-.75s1.2-1.2 1.45-2c.55-.1 1.1-.35 1.55-.7.45-.35.85-.75 1.1-1.25.45-.75.6-1.6.5-2.45-.1-.85-.4-1.65-.95-2.3zm-6 8.4c-.8 0-1.4-.25-1.95-.7 0 0 .05-.05.1-.05l3.2-1.85c.1-.05.15-.1.2-.2.05-.1.05-.15.05-.25V9.4l1.35.8v3.7a2.948 2.948 0 01-2.95 3.05zM4.28 14.2c-.35-.6-.5-1.3-.35-2 0 0 .05.05.1.05l3.2 1.85c.1.05.15.05.25.05s.2 0 .25-.05l3.9-2.25v1.55l-3.25 1.9c-.7.4-1.5.5-2.25.3-.8-.2-1.45-.7-1.85-1.4zm-.85-6.95c.35-.6.9-1.05 1.55-1.3V9.75c0 .1 0 .2.05.25.05.1.1.15.2.2l3.9 2.25-1.35.8-3.2-1.85c-.7-.4-1.2-1.05-1.4-1.8-.2-.75-.15-1.65.25-2.35zM14.48 9.8l-3.9-2.25 1.35-.8 3.2 1.85c.5.3.9.7 1.15 1.2.25.5.4 1.05.35 1.65A3 3 0 0114.68 14v-3.8c0-.1 0-.2-.05-.25 0 0-.05-.1-.15-.15zm1.35-2s-.05-.05-.1-.05l-3.2-1.85c-.1-.05-.15-.05-.25-.05s-.2 0-.25.05l-3.9 2.25V6.6l3.25-1.9c.5-.3 1.05-.4 1.65-.4.55 0 1.1.2 1.6.55.45.35.85.8 1.05 1.3.2.5.25 1.1.15 1.65zm-8.4 2.8l-1.35-.8V6.05c0-.55.15-1.15.45-1.6.3-.5.75-.85 1.25-1.1.5-.25 1.1-.35 1.65-.25.55.05 1.1.3 1.55.65 0 0-.05.05-.1.05l-3.2 1.85c-.1.05-.15.1-.2.2-.05.1-.05.15-.05.25v4.5zm.7-1.6l1.75-1 1.75 1v2l-1.75 1-1.75-1V9z",
    fillOpacity: ".8"
  }));
};
OpenAi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
OpenAi.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2t = ["color", "size", "className"];
var K8s = function K8s(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2t);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.015 4.763c.274.146.494.384.585.677l1.39 5.983a1.25 1.25 0 01-.219.878l-3.86 4.775a.912.912 0 01-.842.385H6.921a1.332 1.332 0 01-.841-.384L2.22 12.3a1.154 1.154 0 01-.202-.878l1.372-6.02a.983.983 0 01.549-.677l5.58-2.69C9.666 2 9.831 2 9.977 2c.146 0 .31.018.457.091l5.58 2.672zm-.311 6.404c0 .018.018.018.036.018a.431.431 0 01.33.384.398.398 0 01-.366.256c-.037 0-.055 0-.092-.018-.018-.018-.018-.018-.036-.018-.022 0-.037-.006-.05-.012a.064.064 0 00-.024-.006c-.054-.014-.098-.038-.147-.064a2.152 2.152 0 00-.054-.028c-.036 0-.073-.018-.11-.037h-.018a3.078 3.078 0 00-.585-.164h-.019a.208.208 0 00-.146.055s0 .018-.018.018l-.147-.018a4.522 4.522 0 01-1.976 2.488l.055.146s-.018 0-.018.019a.216.216 0 00-.018.183c.073.183.164.366.292.53v.037c.037.037.055.055.073.091.055.055.092.11.129.183.018.019.036.037.036.055 0 0 .019 0 .019.019a.47.47 0 01.018.274.306.306 0 01-.165.201 1.292 1.292 0 00-.032.012c-.039.013-.07.025-.114.025a.41.41 0 01-.348-.22c-.018 0-.018-.018-.018-.018-.01-.01-.014-.018-.019-.027-.004-.01-.009-.019-.018-.028a.655.655 0 01-.073-.201l-.037-.11v-.018a3.096 3.096 0 00-.237-.567.285.285 0 00-.147-.11c0-.018 0-.018-.018-.018l-.073-.129-.143.045c-.143.045-.293.093-.443.12-.33.092-.659.128-.988.128-.549 0-1.08-.091-1.592-.293l-.073.147c0 .009 0 .014-.002.016s-.007.002-.016.002a.285.285 0 00-.146.11c-.092.183-.183.366-.238.567l-.037.11c-.01.037-.023.069-.037.1-.013.033-.027.065-.036.101-.018.018-.037.037-.037.055-.018 0-.018.018-.018.018a.41.41 0 01-.348.22.34.34 0 01-.128-.037.377.377 0 01-.146-.494c.018 0 .018-.018.018-.018a.096.096 0 00.019-.027c.004-.01.009-.019.018-.028.024-.032.044-.064.063-.093.024-.037.044-.07.065-.09.036-.037.055-.055.073-.091v-.019c.11-.164.22-.347.293-.53a.216.216 0 00-.018-.183s-.019 0-.019-.018l.092-.129a2.907 2.907 0 01-.494-.329 4.416 4.416 0 01-1.5-2.14l-.165.018s0-.019-.019-.019a.208.208 0 00-.146-.055h-.018c-.22.037-.403.092-.604.165H4.78c-.037 0-.074.018-.11.037l-.068.026c-.042.017-.087.035-.133.047l-.025-.004c-.022-.004-.049-.009-.049.004 0 .009 0 .014-.002.016s-.007.002-.016.002c-.036.018-.055.018-.091.018a.34.34 0 01-.366-.256.357.357 0 01.292-.42c.011-.011.015-.015.02-.017.005-.002.01-.002.017-.002.021 0 .037-.006.05-.011.008-.004.016-.007.023-.007a.883.883 0 00.11-.01c.037-.004.073-.008.11-.008.036-.019.073-.019.11-.019.22-.018.42-.055.622-.11.055-.036.11-.073.128-.127 0 0 .018 0 .018-.019l.146-.036a4.345 4.345 0 01.668-3.047.402.402 0 00.028-.046l-.107-.106c.009-.052-.025-.116-.058-.15-.146-.146-.33-.256-.512-.366l-.11-.055a1.993 1.993 0 01-.201-.11c-.019 0-.055-.036-.055-.036s0-.018-.019-.018a.394.394 0 01-.073-.513c.055-.091.147-.128.256-.128.092 0 .183.037.257.092l.018.018c.009.01.018.014.027.018.01.005.019.01.028.019.027.027.05.055.073.082.023.028.046.055.073.082l.02.018c.019.014.04.03.053.056.128.146.293.292.458.42a.26.26 0 00.11.037c.021 0 .036-.006.049-.011a.066.066 0 01.024-.007h.018l.11.073a4.362 4.362 0 012.25-1.28l.094-.017c.184-.03.356-.06.528-.075l.019-.147V5.55c.055-.037.073-.092.091-.147 0-.22 0-.42-.036-.622v-.018c0-.037 0-.073-.019-.11-.018-.073-.036-.146-.036-.22v-.09c0-.092.036-.184.11-.257.09-.091.2-.146.31-.128.184.018.33.201.312.384v.11a.931.931 0 00-.019.11.891.891 0 01-.018.11.228.228 0 01-.01.054.229.229 0 00-.008.055V4.8c-.037.22-.037.42-.037.622.018.055.037.11.091.146V5.55l.019.146c.86.092 1.701.42 2.378.952.074.073.151.146.23.22.077.072.155.145.228.219l.146-.092h.019c.018.018.054.018.073.018a.26.26 0 00.11-.036c.164-.11.329-.256.457-.403a.209.209 0 01.02-.017.168.168 0 00.053-.056c.037-.055.091-.11.146-.165.019 0 .037-.018.055-.036l.019-.018a.437.437 0 01.256-.092.35.35 0 01.256.128c.128.165.091.384-.073.512 0 .007.002.012.005.015.003.006.006.01-.005.022-.01.01-.019.014-.028.018-.009.005-.018.01-.027.019a1.999 1.999 0 00-.1.055 1.978 1.978 0 01-.101.054l-.11.055c-.183.11-.348.22-.512.366-.037.037-.055.11-.055.165v.018l-.11.11c.293.457.512.97.64 1.5.11.531.147 1.08.073 1.61l.147.037a.22.22 0 00.128.128c.201.055.42.092.622.11h.018a.232.232 0 00.11.018c.073 0 .146 0 .22.018.036 0 .073 0 .073.019zM6.156 7.584l-.003-.003v.018a.093.093 0 00.003-.015zm3.803 3.272l.494-.238.128-.53-.348-.44h-.549l-.347.44.128.53.494.238zm3.55-.275a3.502 3.502 0 00-.074-1.152 3.725 3.725 0 00-.44-1.08l-1.371 1.244a.295.295 0 00-.074.128c-.036.165.055.33.22.366l1.738.494zm-2.562-1.848l1.5-1.06a3.443 3.443 0 00-2.068-.989l.11 1.848c0 .055.018.092.055.128.092.128.274.147.403.073zM9.5 6.666l-.366.073a3.633 3.633 0 00-1.701.933l1.518 1.08.033.01c.038.015.07.026.114.026.164 0 .31-.128.31-.293l.092-1.83zm-1.244 2.89L6.903 8.35a3.851 3.851 0 00-.53 2.232l1.774-.512c.073-.018.11-.037.147-.091a.294.294 0 00-.037-.421zm.146 1.574l-1.811.311a3.6 3.6 0 001.409 1.793l.695-1.683a.216.216 0 00.018-.183c-.018-.146-.164-.238-.31-.238zm1.556 2.671c.274 0 .53-.036.786-.09.128-.037.238-.056.348-.074l-.878-1.592c-.055-.055-.092-.091-.147-.128a.284.284 0 00-.366.073l-.896 1.629a4.1 4.1 0 001.153.183zm1.92-.585c.44-.274.824-.659 1.099-1.098a2.75 2.75 0 00.347-.695l-1.83-.311c-.054 0-.11.018-.164.037a.298.298 0 00-.165.347l.714 1.72z",
    fillOpacity: ".8"
  }));
};
K8s.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
K8s.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

var _excluded$2u = ["color", "size", "className"];
var Nginx = function Nginx(props) {
  var color = props.color,
    size = props.size,
    className = props.className,
    otherProps = _objectWithoutProperties(props, _excluded$2u);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: clsx('icon default', className),
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    viewBox: "0 0 20 20",
    fill: color
  }, otherProps), /*#__PURE__*/React.createElement("path", {
    d: "M16.583 5.406L10.99 2.21c-.48-.28-1.079-.28-1.598 0L3.799 5.406c-.48.28-.799.799-.799 1.398v6.392c0 .56.32 1.119.799 1.398l5.593 3.196c.48.28 1.079.28 1.598 0l5.593-3.196c.48-.28.799-.799.799-1.398V6.804c0-.56-.32-1.079-.799-1.398zm-3.755 8.07c-.36 0-.8-.16-1.079-.48L8.194 8.762v3.955c0 .44-.32.759-.76.759h-.04c-.439 0-.759-.36-.759-.76V7.284c0-.4.36-.759.88-.759.399 0 .798.16 1.078.48l3.556 4.235V7.283c0-.439.36-.759.759-.759h.04c.439 0 .759.36.759.76v5.433c.04.44-.36.759-.88.759z",
    fillOpacity: ".8"
  }));
};
Nginx.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};
Nginx.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

exports.Activity = Activity;
exports.Add = Add;
exports.AddFolder = AddFolder;
exports.AddSheet = AddSheet;
exports.Ag = Ag;
exports.Airbyte = Airbyte;
exports.Analysis = Analysis;
exports.Apple = Apple;
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
exports.ColorWheel = ColorWheel;
exports.Column = Column;
exports.Comma = Comma;
exports.Compute = Compute;
exports.Copy = Copy;
exports.Coupon = Coupon;
exports.Credentials = Credentials;
exports.Data = Data;
exports.DataBool = DataBool;
exports.DataLock = DataLock;
exports.DataNum = DataNum;
exports.DataString = DataString;
exports.DataTime = DataTime;
exports.DataVariant = DataVariant;
exports.Dbt = Dbt;
exports.Delete = Delete;
exports.Details = Details;
exports.Dev = Dev;
exports.DocPage = DocPage;
exports.DocParagraph = DocParagraph;
exports.DocTitle = DocTitle;
exports.Dollar = Dollar;
exports.Down = Down;
exports.Download = Download;
exports.Effects = Effects;
exports.Enter = Enter;
exports.Equal = Equal;
exports.Error = Error;
exports.ExpandDown = ExpandDown;
exports.ExpandLeft = ExpandLeft;
exports.ExpandRight = ExpandRight;
exports.ExpandTop = ExpandTop;
exports.Export = Export;
exports.FieldDelimiter = FieldDelimiter;
exports.Filescode = Filescode;
exports.Filter = Filter;
exports.Folder = Folder;
exports.Folderopen = Folderopen;
exports.FullScreen = FullScreen;
exports.Func = Func;
exports.Getstart = Getstart;
exports.Github = Github;
exports.Google = Google;
exports.HamburgerButton = HamburgerButton;
exports.Help = Help;
exports.Hidden = Hidden;
exports.IdentityCard = IdentityCard;
exports.K8s = K8s;
exports.Label = Label;
exports.Left = Left;
exports.Level = Level;
exports.Link = Link;
exports.Linux = Linux;
exports.ListShow = ListShow;
exports.Loading = Loading;
exports.LoadingSpin = LoadingSpin;
exports.Locked = Locked;
exports.Mail = Mail;
exports.Markdown = Markdown;
exports.More = More;
exports.Mysql = Mysql;
exports.Myworksheet = Myworksheet;
exports.Nginx = Nginx;
exports.Notifications = Notifications;
exports.Number = Number;
exports.OffScreen = OffScreen;
exports.OpenAi = OpenAi;
exports.Organization = Organization;
exports.Owner = Owner;
exports.Password = Password;
exports.Pencil = Pencil;
exports.Percent = Percent;
exports.Person = Person;
exports.Phone = Phone;
exports.Pin = Pin;
exports.Preferences = Preferences;
exports.Queryhistory = Queryhistory;
exports.Question = Question;
exports.Recent = Recent;
exports.RecordDelimiter = RecordDelimiter;
exports.Reduction = Reduction;
exports.Refresh = Refresh;
exports.Rename = Rename;
exports.Return = Return;
exports.Right = Right;
exports.Rmb = Rmb;
exports.Row = Row;
exports.Schema = Schema;
exports.Search = Search;
exports.Select = Select;
exports.Send = Send;
exports.Setting = Setting;
exports.Share = Share;
exports.Show = Show;
exports.SidebarBottom = SidebarBottom;
exports.SidebarLeft = SidebarLeft;
exports.SidebarTop = SidebarTop;
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
exports.Trace = Trace;
exports.TriangleDown = TriangleDown;
exports.TriangleRight = TriangleRight;
exports.Twitter = Twitter;
exports.Ueue = Ueue;
exports.Unlink = Unlink;
exports.Up = Up;
exports.Upload = Upload;
exports.Wallet = Wallet;
exports.WareHouse = WareHouse;
exports.WeChat = WeChat;
exports.WeChatMoments = WeChatMoments;
exports.Worksheet = Worksheet;
exports.Youtube = Youtube;
exports.Zhihu = Zhihu;
