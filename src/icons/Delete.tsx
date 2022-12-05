import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const DeleteIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M6.25 5l.5-2.917h6.5L13.75 5"></path>
      <path d="M2.5 5h15"></path>
      <path
        clipRule="evenodd"
        d="M15.417 5l-.834 12.917H5.417L4.583 5h10.834z"
      ></path>
      <path d="M7.917 14.583h4.166"></path>
    </svg>
  );
};

DeleteIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default DeleteIcon;
