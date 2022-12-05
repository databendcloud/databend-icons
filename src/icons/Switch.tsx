import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const SwitchIcon: FC<IProps | any> = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.067 5.183a.625.625 0 10-.884.884L13.116 8H5.625a.625.625 0 100 1.25h9a.623.623 0 00.578-.864.623.623 0 00-.132-.199m-3.004-3.004l3 3-3-3z"
        fillOpacity=".8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.388 10.546a.622.622 0 00-.388.602.623.623 0 00.183.419l3 3a.625.625 0 10.884-.884L7.134 11.75h7.491a.625.625 0 100-1.25h-9a.622.622 0 00-.237.046z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

SwitchIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SwitchIcon;
