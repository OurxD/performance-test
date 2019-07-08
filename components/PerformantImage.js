/* eslint-disable jsx-a11y/anchor-is-valid, react/prop-types */
import React from 'react';

const useTorbitizedSource = (source, sizes) => {
  const separator = source.includes('?') ? '&' : '?';

  return {
    src: `${source}${separator}orlinWidth=${sizes[0]}`,
  };
};

const PerformantImage = ({
  source,
  sizes,
  //
  alt,
  className,
  style,
  ariaHidden,
}) => {
  const { src } = useTorbitizedSource(source, sizes);

  return (
    <img
      alt={alt}
      aria-hidden={ariaHidden}
      className={className}
      src={src}
      style={style}
    />
  );
};

export default PerformantImage;
