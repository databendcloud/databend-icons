import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const LabelIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M5 3.333h10v13.334l-5-3.524-5 3.524V3.333z"></path>
      <path d="M15 3.333H5v4h10v-4z"></path>
    </svg>
  );
};

LabelIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default LabelIcon;
