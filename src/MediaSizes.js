// src/styles/deviceQuery.js

export const sizeNumbers = {
  mobile: 480,    // up to 480px
  tablet: 768,    // up to 768px
  laptop: 1024,   // up to 1024px
  desktop: 1280,  // up to 1280px
};

export const size = {
  mobile: `${sizeNumbers.mobile}px`,
  tablet: `${sizeNumbers.tablet}px`,
  laptop: `${sizeNumbers.laptop}px`,
  desktop: `${sizeNumbers.desktop}px`,
};

export const deviceQuery = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
