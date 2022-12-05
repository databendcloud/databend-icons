import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ColumnIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <rect x="6" y="3" width="8" height="14"></rect>
      <rect x="6" y="7.5" width="8" height="5"></rect>
    </svg>
  );
};

ColumnIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ColumnIcon;
