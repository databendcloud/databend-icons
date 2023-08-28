import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Zhihu = props => {
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
        d="M11.113 4v12.2h1.277l.537 1.521 2.266-1.52h2.8V4h-6.88zm5.274 10.584h-1.275l-1.6 1.073-.379-1.073h-.383V5.665h3.635v8.92h.002zM10.29 9.47H7.462c.045-.956.092-2.221.14-3.682h2.788l-.002-.173c0-.013-.004-.313-.049-.62-.044-.319-.14-.743-.447-.743H5.216c.093-.438.334-1.484.626-1.997l.136-.239L5.703 2c-.017 0-.417-.019-.881.226-.76.405-1.101 1.201-1.25 1.797-.392 1.557-.95 2.639-1.187 3.101-.07.136-.112.217-.132.273-.038.104-.017.208.06.277.224.202.813-.062.82-.064l.047-.022c.296-.134 1.173-.532 1.486-1.8h1.208c.015.687.066 2.948.061 3.683H2.933l-.045.032c-.492.36-.65 1.346-.656 1.388l-.03.196H5.76c-.262 1.668-.565 2.415-.724 2.713-.08.15-.156.299-.228.443-.454.9-.925 1.828-2.69 3.272-.077.06-.149.17-.102.291.05.134.198.194.524.194.115 0 .251-.006.413-.021 1.063-.094 2.146-.384 2.877-1.866.362-.747.675-1.527.935-2.319l2.907 3.407.106-.255c.017-.04.405-.986.109-2.042l-.01-.039-2.303-2.62-.468.354a10.3 10.3 0 00.266-1.514h3.38v-.17c0-.854-.394-1.361-.41-1.382l-.05-.064z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Zhihu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Zhihu.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Zhihu;
