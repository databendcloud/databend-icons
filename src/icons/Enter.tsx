import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const EnterIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M18.333 18.333V1.667H10v6.666H1.667v10h16.666z"></path>
      <path d="M8.75 11.667l-1.667 1.666L8.75 15"></path>
      <path d="M14.167 9.583v3.75H7.083"></path>
    </svg>
  );
};

EnterIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default EnterIcon;
