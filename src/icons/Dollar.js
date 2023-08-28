import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Dollar = props => {
  const { color, size, className, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default', className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20 20"
      fill={color}
      {...otherProps}
    >
      <path
        d="M12.804 11.588c0 .416-.108.808-.324 1.176-.208.36-.52.66-.936.9-.408.232-.892.368-1.452.408v.972h-.768v-.984c-.8-.072-1.444-.312-1.932-.72-.488-.416-.74-.976-.756-1.68h1.8c.048.576.344.924.888 1.044v-2.292a10.55 10.55 0 01-1.392-.432 2.25 2.25 0 01-.912-.696c-.256-.32-.384-.756-.384-1.308 0-.696.248-1.264.744-1.704.504-.44 1.152-.692 1.944-.756v-.972h.768v.972c.768.064 1.38.296 1.836.696.464.4.724.952.78 1.656h-1.812a1.068 1.068 0 00-.252-.6c-.136-.176-.32-.3-.552-.372v2.268c.6.152 1.072.3 1.416.444.352.136.656.364.912.684.256.312.384.744.384 1.296zM8.388 7.892c0 .264.08.48.24.648.16.16.392.292.696.396V6.86c-.288.04-.516.148-.684.324-.168.176-.252.412-.252.708zm1.704 4.836c.304-.056.54-.18.708-.372a.993.993 0 00.264-.696c0-.264-.084-.476-.252-.636-.168-.16-.408-.292-.72-.396v2.1z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Dollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Dollar.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Dollar;
