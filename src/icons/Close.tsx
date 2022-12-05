import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const CloseIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M5 5l10 10"></path>
      <path d="M5 15L15 5"></path>
    </svg>
  );
};

CloseIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default CloseIcon;
