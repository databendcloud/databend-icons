import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const LoadingIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M17 10.941A6.994 6.994 0 003.707 7.897"></path>
      <defs>
        <linearGradient
          id="paint0_linear_2_104"
          x1="3.707"
          y1="10.941"
          x2="17"
          y2="10.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C6CACD" stopOpacity="0"></stop>
          <stop offset=".399" stopColor="#C6CACD" stopOpacity=".5"></stop>
          <stop offset="1" stopColor="#C6CACD"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

LoadingIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default LoadingIcon;
