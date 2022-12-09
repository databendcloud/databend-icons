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
function CommaIcon(props) {
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
        d="M12 10.941c-.18.514-.333.94-.461 1.278-.116.35-.231.639-.347.865-.115.238-.23.432-.346.582-.115.15-.256.288-.423.413a5.723 5.723 0 01-.615.395c-.244.138-.539.313-.885.526a19.6 19.6 0 01-.23-.432.897.897 0 00-.155-.263 5.91 5.91 0 00-.192-.263L8 13.647a10.9 10.9 0 00.885-.563c.205-.138.371-.301.5-.489.128-.188.243-.426.346-.714.102-.288.243-.695.423-1.221V9.608H8.308V6H12v4.941z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
}

CommaIcon.defaultProps = {
  color: 'currentColor',
  size: '20'
};

export default CommaIcon;