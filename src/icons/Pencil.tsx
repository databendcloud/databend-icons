import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const PencilIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M3 17h3L17 6l-3-3L3 14v3z"></path>
      <path d="M11 6l3 3"></path>
    </svg>
  );
};

PencilIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default PencilIcon;
