import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const TriangleRightIcon: FC<IProps | any> = props => {
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
        d="M13.157 9.785a.5.5 0 010 .822L7.035 14.85a.5.5 0 01-.785-.411V5.955a.5.5 0 01.785-.411l6.122 4.241z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

TriangleRightIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default TriangleRightIcon;
