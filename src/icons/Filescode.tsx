import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const FilescodeIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M14.667 9.333v-3l-3-3.333h-7A.667.667 0 004 3.667v12c0 .368.298.666.667.666h4"></path>
      <path d="M13.667 12l1.666 1.667-1.666 1.666"></path>
      <path d="M11.667 12L10 13.667l1.667 1.666"></path>
      <path d="M11.333 3v3.333h3.334"></path>
    </svg>
  );
};

FilescodeIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default FilescodeIcon;
