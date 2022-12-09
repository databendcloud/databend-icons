import React from 'react';
// import { FC } from 'react';
import clsx from 'clsx';
/*interface IProps{
    style?: React.CSSProperties;
    className?: string | 'g-icon-defaut-primary';
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode[] | React.ReactNode;
    color: string;
    size: string | number;
  }*/
function TwitterIcon(props) {
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
        d="M7.032 16.008c6.038 0 9.34-5.004 9.34-9.343 0-.142-.003-.284-.01-.425A6.677 6.677 0 0018 4.54a6.542 6.542 0 01-1.885.517 3.296 3.296 0 001.443-1.817 6.582 6.582 0 01-2.084.798A3.284 3.284 0 009.88 7.033 9.32 9.32 0 013.113 3.6 3.282 3.282 0 004.13 7.985a3.257 3.257 0 01-1.486-.41v.041a3.284 3.284 0 002.633 3.22 3.287 3.287 0 01-1.482.056 3.286 3.286 0 003.066 2.28 6.584 6.584 0 01-4.077 1.406c-.262 0-.523-.015-.783-.045a9.29 9.29 0 005.032 1.475"
        fillOpacity=".8"
      ></path>
    </svg>
  );
}

TwitterIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default TwitterIcon;
