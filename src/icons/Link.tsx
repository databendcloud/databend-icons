import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps {
  style?: React.CSSProperties;
  className?: string | 'g-icon-defaut-primary';
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode[] | React.ReactNode;
  color: string;
  size: string | number;
}
const LinkIcon: FC<IProps | any> = props => {
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
      <path d="M10.295 3.985l-6.188 6.188a3.75 3.75 0 005.304 5.303l7.365-7.366a2.5 2.5 0 00-3.535-3.535L5.875 11.94a1.25 1.25 0 001.768 1.768l6.187-6.187"></path>
    </svg>
  );
};

LinkIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default LinkIcon;
