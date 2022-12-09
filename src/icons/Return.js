import React from 'react';
// import { FC } from 'react';
import clsx from 'clsx';
/*interface IProps{
    style?: React.CSSProperties;
    className?: string | 'g-icon-defaut-primary';
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode[] | React.ReactNode;
    color: string;
    size: string | number;
  }*/
function ReturnIcon(props) {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      {...otherProps}
    >
      <path d="M5.417 3.333L2.5 5.833 5.417 8.75"></path>
      <path d="M2.5 5.833h9.58c2.869 0 5.304 2.342 5.416 5.209.118 3.029-2.385 5.625-5.415 5.625H4.999"></path>
    </svg>
  );
}

ReturnIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ReturnIcon;
