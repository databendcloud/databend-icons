import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';
interface IProps {
  style?: React.CSSProperties;
  className?: string | 'g-icon-defaut-primary';
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode[] | React.ReactNode;
  color: string;
  size: string | number;
}
const SqLuserIcon: FC<IProps | any> = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      {...otherProps}
    >
      <path d="M9.167 3.333v5c0 .92-1.68 1.667-3.75 1.667-2.071 0-3.75-.746-3.75-1.667v-5"></path>
      <path d="M9.167 5.833c0 .92-1.68 1.667-3.75 1.667-2.071 0-3.75-.746-3.75-1.667"></path>
      <path d="M9.167 3.333c0 .92-1.68 1.667-3.75 1.667-2.071 0-3.75-.746-3.75-1.667 0-.92 1.679-1.666 3.75-1.666 2.07 0 3.75.746 3.75 1.666z"></path>
      <path d="M13.333 2.5h2.5c.92 0 1.667.746 1.667 1.667v2.5"></path>
      <path d="M6.667 17.5h-2.5c-.92 0-1.667-.746-1.667-1.667v-2.5"></path>
      <path d="M14.583 14.167a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"></path>
      <path d="M18.333 18.333h-7.5a3.75 3.75 0 017.5 0z"></path>
    </svg>
  );
};

SqLuserIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default SqLuserIcon;
