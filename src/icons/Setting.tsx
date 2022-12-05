import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const SettingIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M7.618 17.988a8.331 8.331 0 01-3.623-2.21 2.5 2.5 0 00-2.16-4.1A8.371 8.371 0 012.049 7.5h.035a2.5 2.5 0 002.244-3.604 8.32 8.32 0 013.445-1.928 2.5 2.5 0 004.456 0 8.32 8.32 0 013.445 1.928A2.5 2.5 0 0017.952 7.5a8.373 8.373 0 01.213 4.18 2.5 2.5 0 00-2.16 4.1 8.331 8.331 0 01-3.623 2.208 2.501 2.501 0 00-4.764 0z"></path>
      <path d="M10 12.917a2.917 2.917 0 100-5.834 2.917 2.917 0 000 5.834z"></path>
    </svg>
  );
};

SettingIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SettingIcon;
