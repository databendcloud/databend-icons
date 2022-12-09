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
const WechatIcon: FC<IProps | any> = props => {
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
      <path
        d="M13.265 7.793V2.47s-2.604-1.396-5.644-.32l5.644 5.642zm.493 3.13V2.69s3.079 1.396 3.946 4.785l-3.946 3.449zm-1.656 2.394l5.683-5.345s1.006 1.635-.494 5.345h-5.19zm-2.902.677h7.676s-.927 2.512-4.243 3.549L9.2 13.994zM6.694 12.3v5.003s1.994 1.277 5.408.42l-5.408-5.423zm-4.44.259l3.888-3.49v7.935s-2.35-.816-3.889-4.445zm-.1-.558s-.889-2.87.355-5.363h5.348L2.155 12zm.691-5.922S3.97 3.528 7.03 2.33l3.65 3.748H2.845z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

WechatIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default WechatIcon;
