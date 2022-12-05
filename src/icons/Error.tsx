import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ErrorIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 4.583L4.583 2.5 10 7.917 15.417 2.5 17.5 4.583 12.083 10l5.417 5.417-2.083 2.083L10 12.083 4.583 17.5 2.5 15.417 7.917 10 2.5 4.583z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

ErrorIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ErrorIcon;
