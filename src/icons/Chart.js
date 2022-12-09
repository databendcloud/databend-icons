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
function ChartIcon(props) {
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
      <path d="M1.667 10S2.5 1.667 5.833 1.667c3.334 0 3.75 6.25 4.167 8.333.417 2.083 1.667 8.333 4.583 8.333 2.917 0 3.75-8.333 3.75-8.333"></path>
      <path d="M4.583 10h2.5"></path>
      <path d="M12.917 10h2.5"></path>
    </svg>
  );
}

ChartIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartIcon;
