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
function SendIcon(props) {
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
      <path d="M17.917 2.083l-5.542 15.834-3.167-7.125-7.125-3.167 15.834-5.542z"></path>
      <path d="M17.917 2.083l-8.709 8.709"></path>
    </svg>
  );
}

SendIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SendIcon;
