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
const SkipHeaderIcon: FC<IProps | any> = props => {
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
      <path d="M16.3 4H3.7a.7.7 0 00-.7.7v11.2a.7.7 0 00.7.7h12.6a.7.7 0 00.7-.7V4.7a.7.7 0 00-.7-.7z"></path>
      <path d="M3 8.2h14"></path>
    </svg>
  );
};

SkipHeaderIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SkipHeaderIcon;
