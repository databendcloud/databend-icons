import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const TriangleDownIcon: FC<IProps | any> = props => {
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
        d="M10.411 13.353a.5.5 0 01-.822 0L5.348 7.23a.5.5 0 01.41-.785h8.483a.5.5 0 01.412.785l-4.242 6.122z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

TriangleDownIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default TriangleDownIcon;
