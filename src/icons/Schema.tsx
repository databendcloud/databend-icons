import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const SchemaIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M5.833 5.417H2.5v9.166h3.333"></path>
      <path d="M5.833 12.083H17.5v5H5.833v-5z"></path>
      <path d="M5.833 2.917H17.5v5H5.833v-5z"></path>
    </svg>
  );
};

SchemaIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SchemaIcon;
