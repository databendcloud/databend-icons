import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const LoadingSpinIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M16 10.415A5.942 5.942 0 004.707 7.83"></path>
      <defs>
        <linearGradient
          id="paint0_linear_420_11"
          x1="4.707"
          y1="10.415"
          x2="16"
          y2="10.415"
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

LoadingSpinIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default LoadingSpinIcon;
