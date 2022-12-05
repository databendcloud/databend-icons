import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ReductionIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <rect x="3" y="8.5" width="14" height="3" fillOpacity=".8"></rect>
    </svg>
  );
};

ReductionIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ReductionIcon;
