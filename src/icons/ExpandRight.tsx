import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ExpandRightIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M2.5 3.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V3.75z"></path>
      <path d="M13.333 2.5v15"></path>
      <path d="M6.667 8.333L8.333 10l-1.666 1.667"></path>
      <path d="M10.833 2.5h5"></path>
      <path d="M10.833 17.5h5"></path>
    </svg>
  );
};

ExpandRightIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ExpandRightIcon;
