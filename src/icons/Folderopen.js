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
function FolderopenIcon(props) {
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
      <path d="M3.333 5v10.667L5 9h10.167V7a.667.667 0 00-.667-.667H10l-1.667-2H4A.667.667 0 003.333 5z"></path>
      <path d="M15.333 15.667L16.667 9H4.937l-1.604 6.667h12z"></path>
    </svg>
  );
}

FolderopenIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default FolderopenIcon;
