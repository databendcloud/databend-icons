import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const QueryhistoryIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M17.5 10V3.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H10"></path>
      <path d="M13.333 15.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      <path d="M15.417 15l2.083 1.667"></path>
      <path d="M5.833 6.667h8.334"></path>
      <path d="M5.833 10h3.334"></path>
    </svg>
  );
};

QueryhistoryIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default QueryhistoryIcon;
