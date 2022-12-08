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
const BookIcon: FC<IProps | any> = props => {
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
      <path d="M3.333 16.667v-12.5c0-1.381 1.194-2.5 2.667-2.5h10.667V15H6c-2.099 0-2.667.285-2.667 1.667z"></path>
      <path
        clipRule="evenodd"
        d="M5 18.333h11.667V15H5a1.667 1.667 0 000 3.333z"
      ></path>
    </svg>
  );
};

BookIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default BookIcon;
