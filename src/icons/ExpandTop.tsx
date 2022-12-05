import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const ExpandTopIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M16.25 2.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25z"></path>
      <path d="M2.5 6.667h15"></path>
      <path d="M8.333 13.333L10 11.667l1.667 1.666"></path>
      <path d="M2.5 4.167v5"></path>
      <path d="M17.5 4.167v5"></path>
    </svg>
  );
};

ExpandTopIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default ExpandTopIcon;
