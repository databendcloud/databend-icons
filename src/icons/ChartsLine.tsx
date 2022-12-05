import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ChartsLineIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M3 3v14h14"></path>
      <path d="M6.111 13.889l3.111-6.222 3.89 3.5L17 3"></path>
    </svg>
  );
};

ChartsLineIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsLineIcon;
