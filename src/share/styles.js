export const size = {
    mobile: "414px",
    mobileBigger: "550px",
    tablet: "744px",
    tabletBigger: "1024px",
    desktop: "1280px",
    desktopBigger: "1440px",
    temporalDskMaxSize: "1600px",
    desktopMaxBigger: "2048px",
  };
  
  export const maxWidthQueries = {
    mobile: { query: `(max-width: ${size.mobile})` },
    mobileBigger: { query: `(max-width: ${size.mobileBigger})` },
    tablet: { query: `(max-width: ${size.tablet})` },
    tabletBigger: { query: `(max-width: ${size.tabletBigger})` },
    desktop: { query: `(max-width: ${size.desktop})` },
  };
  
  export const minWidthQueries = {
    mobile: { query: `(min-width: ${size.mobile})` },
    mobileBigger: { query: `(min-width: ${size.mobileBigger})` },
    tablet: { query: `(min-width: ${size.tablet})` },
    tabletBigger: { query: `(min-width: ${size.tabletBigger})` },
    desktop: { query: `(min-width: ${size.desktop})` },
  };