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
const FullScreenIcon: FC<IProps | any> = props => {
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
      <path d="M12 4h4v4"></path>
      <path d="M8 4H4v4"></path>
      <path d="M12 16h4v-4"></path>
      <path d="M8 16H4v-4"></path>
      <path d="M16 4l-4.333 4.333"></path>
      <path d="M8.333 11.667L4 16"></path>
    </svg>
  );
};

FullScreenIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default FullScreenIcon;
