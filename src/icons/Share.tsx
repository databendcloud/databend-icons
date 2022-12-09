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
const ShareIcon: FC<IProps | any> = props => {
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
      <path d="M14.583 6.667a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"></path>
      <path d="M5.417 12.083a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z"></path>
      <path d="M12.5 5.656L7.224 8.852"></path>
      <path d="M7.224 11.068l5.559 3.285"></path>
      <path d="M14.583 13.333a2.083 2.083 0 110 4.167 2.083 2.083 0 010-4.167z"></path>
    </svg>
  );
};

ShareIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ShareIcon;
