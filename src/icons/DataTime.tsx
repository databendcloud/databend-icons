import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const DataTimeIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M10 6v4l3 1.5"></path>
      <circle cx="10" cy="10" r="6.5"></circle>
    </svg>
  );
};

DataTimeIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DataTimeIcon;
