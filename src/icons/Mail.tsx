import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const MailIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M3.333 15h13.334V5H3.333v10z"></path>
      <path d="M3.333 5L10 10l6.667-5"></path>
      <path d="M10 5H3.333v5"></path>
      <path d="M16.667 10V5H10"></path>
    </svg>
  );
};

MailIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default MailIcon;
