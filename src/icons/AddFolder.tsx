import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const AddFolderIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M2 2.833c0-.46.373-.833.833-.833h5l2.084 2.5H17c.46 0 .833.373.833.833v10.834c0 .46-.373.833-.833.833H2.833A.833.833 0 012 16.167V2.833z"></path>
      <path d="M7.5 10.25h5"></path>
      <path d="M10 7.75v5"></path>
    </svg>
  );
};

AddFolderIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default AddFolderIcon;
