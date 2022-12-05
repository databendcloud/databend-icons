import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const HamburgerButtonIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M3.312 4.98h13.334"></path>
      <path d="M3.312 9.98h13.334"></path>
      <path d="M3.312 14.98h13.334"></path>
    </svg>
  );
};

HamburgerButtonIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default HamburgerButtonIcon;
