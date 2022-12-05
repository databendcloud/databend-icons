import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ExportIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M17.5 11.25c0 2.5-1.667 6.667-7.5 6.667S2.5 13.75 2.5 11.25"></path>
      <path d="M10.003 2.125V13.75"></path>
      <path d="M5 7.083l5-5 5 5"></path>
    </svg>
  );
};

ExportIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ExportIcon;
