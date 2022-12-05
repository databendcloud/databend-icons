import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ChartsBarStackedIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M11 13H9v2h2v-2z"></path>
      <path d="M11 7H9v6h2V7z"></path>
      <path d="M7 9H5v4h2V9z"></path>
      <path d="M7 13H5v2h2v-2z"></path>
      <path d="M15 13h-2v2h2v-2z"></path>
      <path d="M15 5h-2v8h2V5z"></path>
    </svg>
  );
};

ChartsBarStackedIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ChartsBarStackedIcon;
