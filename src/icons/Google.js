import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Google = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      className={clsx('icon default')}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-2 -2 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M4.474 9.665h.688v.967a2.587 2.587 0 01-.767.106c-1.142 0-1.814-.978-1.814-1.933 0-.936.608-1.593 1.455-1.593.536 0 .847.181 1.126.434v.315l.524-.523c-.331-.224-.81-.436-1.495-.436C2.687 7.002 2 8.077 2 8.962c0 1.257.916 2.015 2.068 2.015.558 0 1.054-.085 1.627-.244v-.999a.15.15 0 01.056-.117l.18-.18H4.705l-.23.228z"
        fillOpacity=".8"
      ></path>
      <path
        d="M7.557 8.352c-.866 0-1.402.632-1.402 1.303 0 .58.432 1.268 1.307 1.268.842 0 1.359-.634 1.359-1.317 0-.636-.505-1.254-1.264-1.254zm-.144.184c.61 0 .882.795.882 1.362 0 .843-.633.86-.708.86-.29 0-.492-.175-.644-.405a2.027 2.027 0 01-.263-.988c0-.382.125-.569.322-.706a.755.755 0 01.41-.123h.001z"
        fillOpacity=".8"
      ></path>
      <path
        d="M13.213 8.352c-.755 0-1.164.478-1.164 1.012 0 .407.291.866.892.866h.152s-.041.1-.041.198c0 .143.051.224.16.348-1.034.063-1.45.48-1.45.928 0 .393.376.78 1.167.78.935 0 1.42-.52 1.42-1.03 0-.359-.18-.556-.633-.896-.133-.103-.159-.17-.159-.247 0-.11.066-.184.09-.212.044-.045.118-.097.146-.122.152-.129.367-.32.367-.701 0-.261-.108-.486-.356-.697h.302l.228-.227h-1.12zm-.208.17c.137 0 .252.048.372.149.135.12.349.446.349.848a.518.518 0 01-.806.466c-.202-.131-.402-.479-.402-.892 0-.373.223-.571.487-.571zm.3 2.418c.057 0 .098.005.098.005s.136.097.231.17c.222.175.36.309.36.547 0 .327-.304.584-.796.584-.54 0-.953-.252-.953-.662 0-.34.283-.633 1.06-.644z"
        fillOpacity=".8"
      ></path>
      <path
        d="M14.497 10.848h1.038l.158-.159-.298-.037a.146.146 0 01-.127-.146V7.372c0-.062.028-.093.05-.113l.186-.187h-.885l-.23.23h.344v3.246a.145.145 0 01-.046.11l-.19.19z"
        fillOpacity=".8"
      ></path>
      <path
        d="M16.94 8.352c-.579 0-1.194.441-1.194 1.234 0 .655.441 1.336 1.266 1.336.206 0 .376-.026.534-.099.17-.078.334-.206.454-.366-.226.114-.41.19-.654.19-.465 0-.913-.336-1.07-.953l1.642-.664c-.095-.338-.363-.678-.977-.678zm-.107.181c.311 0 .536.256.536.456 0 .065-.04.099-.12.13l-1.01.409s-.028-.127-.028-.265c0-.576.417-.73.622-.73z"
        fillOpacity=".8"
      ></path>
      <path
        d="M10.493 8.352c-.865 0-1.402.632-1.402 1.303 0 .58.432 1.268 1.308 1.268.841 0 1.358-.634 1.358-1.317 0-.636-.505-1.254-1.264-1.254zm-.144.184c.61 0 .882.795.882 1.362 0 .843-.632.86-.708.86-.29 0-.492-.175-.643-.405a2.027 2.027 0 01-.264-.988c0-.382.125-.569.322-.706a.755.755 0 01.411-.123z"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

Google.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Google.defaultProps = {
  color: 'currentColor',
  size: '20',
  className: '',
  style: {}
};

export default Google;
