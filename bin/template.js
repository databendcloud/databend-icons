const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '-2 -2 24 24',
  }
  const fillAttrs = {
    fill: 'color',
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    otherProps: '...otherProps'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';
  import clsx from 'clsx';

  const ${ComponentName} = (props) => {
    const { color, size, className,  ...otherProps } = props;
    return (
      <svg className={clsx("icon default", className)} ${attrs}>
        ${svgCode}
      </svg>
    )
  };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string,
    style: PropTypes.any,
    onClick: PropTypes.func,
    children: PropTypes.node
  }

  ${ComponentName}.defaultProps = {
    color: 'currentColor',
    size: '20',
    className: '',
    style: {}
  }

  export default ${ComponentName}
`

module.exports = { getAttrs, getElementCode }
