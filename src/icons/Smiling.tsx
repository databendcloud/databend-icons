import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const SmilingIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"></path>
      <path d="M12.917 12.917s-.834 1.666-2.917 1.666c-2.083 0-2.917-1.666-2.917-1.666"></path>
      <path d="M12.917 7.5v1.667"></path>
      <path d="M7 7v1.667"></path>
    </svg>
  );
};

SmilingIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SmilingIcon;
