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
function NumberIcon(props) {
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
      <path d="M4 3v3"></path>
      <path d="M5 6H3"></path>
      <path d="M5 11H3"></path>
      <path d="M3 8.48s1.12-1.08 1.866 0S3 11 3 11"></path>
      <path d="M3 13.65s.632-1.156 1.579-.385c.947.771 0 1.735 0 1.735s.947.964 0 1.735C3.632 17.506 3 16.349 3 16.349"></path>
      <path d="M4 3L3 4"></path>
      <path d="M8 10h9"></path>
      <path d="M8 15h9"></path>
      <path d="M8 5h9"></path>
    </svg>
  );
}

NumberIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default NumberIcon;
