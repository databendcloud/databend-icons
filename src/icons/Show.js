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
function ShowIcon(props) {
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
      <path d="M10 15c4.602 0 8.333-5 8.333-5S14.603 5 10 5c-4.602 0-8.333 5-8.333 5s3.73 5 8.333 5z"></path>
      <path d="M10 12.083a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"></path>
    </svg>
  );
}

ShowIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ShowIcon;
