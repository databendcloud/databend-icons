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
function SortDownIcon(props) {
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
      <path d="M9.583 3.333h8.334"></path>
      <path d="M5.833 17.083L2.5 13.75"></path>
      <path d="M5.833 2.917v14.166"></path>
      <path d="M9.583 7.5h6.667"></path>
      <path d="M9.583 11.667h5"></path>
      <path d="M9.583 15.833h3.334"></path>
    </svg>
  );
}

SortDownIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SortDownIcon;
