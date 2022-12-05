import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const SearchIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M8.75 15.833a7.083 7.083 0 100-14.166 7.083 7.083 0 000 14.166z"></path>
      <path d="M11.107 5.976A3.323 3.323 0 008.75 5c-.92 0-1.754.373-2.357.976"></path>
      <path d="M13.842 13.842l3.536 3.536"></path>
    </svg>
  );
};

SearchIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SearchIcon;
