const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '-2 -2 24 24',
  }
  const fillAttrs = {
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color?color:"none"',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    otherProps: '...otherProps'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import { FC } from 'react';
  import clsx from 'clsx';
  interface IProps{
    style?: React.CSSProperties;
    className?: string | 'g-icon-defaut-primary';
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode[] | React.ReactNode;
    color: string;
    size: string | number;
  }
  const ${ComponentName}Icon:FC<IProps | any> = (props) => {
    const { color, size, className, ...otherProps } = props;
    return (
        <svg className={clsx('icon default', className)} ${attrs}>
          ${svgCode}
        </svg>
    )
  };

  ${ComponentName}Icon.defaultProps = {
    color: 'currentColor',
    size: '20',
  }

  export default ${ComponentName}Icon
`

module.exports = { getAttrs, getElementCode }
