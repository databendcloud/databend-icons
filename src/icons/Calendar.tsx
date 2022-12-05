import { IComnonProps } from '@/types';
import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps extends IComnonProps {
  color: string;
  size: string | number;
}
const CalendarIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...otherProps}
    >
      <path d="M2.083 7.917h15.834v8.75c0 .46-.373.833-.834.833H2.917a.833.833 0 01-.834-.833v-8.75z"></path>
      <path d="M2.083 3.75c0-.46.373-.833.834-.833h14.166c.46 0 .834.373.834.833v4.167H2.083V3.75z"></path>
      <path d="M6.667 1.667V5"></path>
      <path d="M13.333 1.667V5"></path>
      <path d="M11.667 14.167h2.5"></path>
      <path d="M5.833 14.167h2.5"></path>
      <path d="M11.667 10.833h2.5"></path>
      <path d="M5.833 10.833h2.5"></path>
    </svg>
  );
};

CalendarIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default CalendarIcon;
