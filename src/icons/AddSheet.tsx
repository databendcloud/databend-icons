import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const AddSheetIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M16.667 9.583v-3.75l-3.75-4.166h-8.75a.833.833 0 00-.834.833v15c0 .46.373.833.834.833h5"></path>
      <path d="M13.75 12.083v5.834"></path>
      <path d="M10.833 15h5.834"></path>
      <path d="M12.5 1.667v4.166h4.167"></path>
    </svg>
  );
};

AddSheetIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default AddSheetIcon;
