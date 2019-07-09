/* eslint-disable jsx-a11y/anchor-is-valid, react/prop-types */
import React, { useContext } from 'react';
import InView from './InView';
import ClientContext from '../contexts/client';

const toArray = value => (Array.isArray(value) ? value : [value]);
const getStartIndex = (isMobile, isTablet) => {
  if (isTablet) {
    return 1;
  }

  return isMobile ? 0 : 2;
};
const getValidSize = (sizes, index) => {
  const currentValue = sizes[index];

  if (!currentValue && index !== 0) {
    return getValidSize(sizes, index - 1);
  }

  return currentValue || '';
};
export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  const sizesArray = toArray(sizes);
  const startIndex = getStartIndex(isMobile, isTablet);

  return getValidSize(sizesArray, startIndex);
};

const getTorbitizedSource = (source, size) => {
  const separator = source.includes('?') ? '&' : '?';

  return `${source}${separator}orlinWidth=${size}`;
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
  const { isMobile, isTablet } = useContext(ClientContext);
  // console.log('mobile and tablet', isMobile, isTablet);
  const size = getSize(sizes, isMobile, isTablet);
  // console.log('sizee', size);
  const src = getTorbitizedSource(source, size);

  return (
    <InView>
      <img
        alt={alt}
        aria-hidden={ariaHidden}
        className={className}
        src={src}
        style={style}
      />
    </InView>
  );
};

export default PerformantImage;
