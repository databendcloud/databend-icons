import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const LevelIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M10 16L3.333 8.167 5.232 4h9.536l1.899 4.167L10 16z"></path>
      <path d="M12.667 8L10 11 7.333 8"></path>
    </svg>
  );
};

LevelIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default LevelIcon;
