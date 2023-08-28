import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const WeChat = props => {
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
        d="M12.831 7.902c.184 0 .366.014.546.033C12.887 5.678 10.447 4 7.663 4 4.55 4 2 6.1 2 8.766c0 1.539.849 2.802 2.266 3.783L3.7 14.235l1.98-.983c.708.139 1.276.281 1.983.281.178 0 .354-.008.529-.022a4.127 4.127 0 01-.175-1.174c0-2.448 2.124-4.435 4.814-4.435zm-3.044-1.52c.426 0 .708.278.708.7 0 .42-.282.702-.708.702-.425 0-.85-.282-.85-.702 0-.422.425-.7.85-.7zM5.823 7.784c-.424 0-.852-.28-.852-.7 0-.423.428-.7.852-.7.425 0 .707.277.707.7 0 .42-.282.7-.707.7zM18 12.27c0-2.24-2.266-4.067-4.81-4.067-2.694 0-4.816 1.826-4.816 4.067 0 2.244 2.121 4.066 4.816 4.066.564 0 1.133-.14 1.699-.28l1.553.84-.426-1.4C17.153 14.653 18 13.534 18 12.27zm-6.372-.702c-.282 0-.566-.277-.566-.56 0-.28.284-.56.566-.56.428 0 .709.28.709.56 0 .283-.28.56-.709.56zm3.115 0c-.28 0-.563-.277-.563-.56 0-.28.283-.56.563-.56.425 0 .709.28.709.56 0 .283-.284.56-.71.56z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

WeChat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

WeChat.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default WeChat;
