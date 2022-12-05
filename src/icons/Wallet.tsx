import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const WalletIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <g clipPath="url(#clip0_122_16)">
        <path
          clipRule="evenodd"
          d="M7.493 4.987l5.75-3.32 1.922 3.328-7.672-.008z"
        ></path>
        <path d="M1.667 5.833c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833V17.5c0 .46-.373.833-.833.833h-15a.833.833 0 01-.833-.833V5.833z"></path>
        <path d="M14.688 13.75h3.645V9.583h-3.645c-1.209 0-2.188.933-2.188 2.084 0 1.15.98 2.083 2.188 2.083z"></path>
        <path d="M18.333 6.875v10"></path>
      </g>
      <defs>
        <clipPath id="clip0_122_16">
          <rect width="20" height="20"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

WalletIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default WalletIcon;
