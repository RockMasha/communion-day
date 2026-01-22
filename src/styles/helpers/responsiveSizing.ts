type ResponsiveSizing = (
  minSize: number,
  maxSize: number,
  minScreen?: number,
  maxScreen?: number,
) => string;

const responsiveSizing: ResponsiveSizing = (
  minSize,
  maxSize,
  minScreen = 320,
  maxScreen = 1920,
) => {
  return `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen})));`;
};

export default responsiveSizing;
