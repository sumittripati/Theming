// export const themes = {
//   light: {
//     background: "#f5f5f5",
//     text: "#000",
//     cardBg: "#fff",
//     buttonBg: "#61ff18ff",
//     buttonText: "#000",
//     border: "1px solid gray",
//   },
//   dark: {
//     background: "#1e1e1e",
//     text: "#fff",
//     cardBg: "#333",
//     buttonBg: "#c62a37ff",
//     buttonText: "#fff",
//     border: "1px solid #444",
//   },
// };



// export const lightTheme = {
//   background: "#f5f5f5",
//   pageBg: "#de6969bc",
//   text: "#000",
//   cardBg: "#fff",
//   buttonBg: "#61ff18ff",
//   buttonText: "#000",
//   accentColor: "#181cf3ff",
//   homebuttonBg: "#2418ffff",
//   homebuttonText: "#ff0f0fff",
//   bordercl: "gray",
//   homebordercl: "yellow",
// };


// export const darkTheme = {
//   background: "#1e1e1e",
//   pageBg: "#534f4fd5",
//   text: "#fff",
//   cardBg: "#333",
//   buttonBg: "#c62a37ff",
//   buttonText: "#fff",
//   accentColor: "#c7f318ff",
//   homebuttonBg: "#ecff18ff",
//   homebuttonText: "#ff0f0fff",
//   bordercl: "#444",
//   homebordercl: "yellow",
// };



export const lightTheme = {
  background: "#f5f5f5",
  pageBg: "#de6969bc",
  text: "#000",
  cardBg: "#fff",
  buttonBg: "#61ff18ff",
  buttonText: "#000",
  accentColor: "#181cf3ff",
  homebuttonBg: "#2418ffff",
  homebuttonText: "#ff0f0fff",
  bordercl: "gray",
  homebordercl: "yellow",

  // ✅ ADVANCED COLORS
  colors: {
    black: "#27282C",
    white: "#FFFFFF",
    grey: {
      dark: "#7D7F81",
      extraLight: "#F3F3F3",
    },
    blue: {
      dark: "#3094ea",
      gradient: "rgba(48, 148, 234, 0.12)",
    },
  },

  // ✅ ADVANCED BORDERS
  borders: {
    border1: "1px solid rgba(123, 116, 133, 0.2)",
    border5: "1px solid #ECECEC",
  },

  // ✅ SHADOWS
  shadows: {
    shadow1: "0px 0px 15px rgba(0, 0, 0, 0.05)",
  },

  // ✅ TYPOGRAPHY
  typography: {
    title3: "32px",
    text2: "18px",
  },
};


export const darkTheme = {
  // Basic Dark Mode Overrides
  background: "#1e1e1e",
  pageBg: "#534f4fd5",
  text: "#fff",
  cardBg: "#2a2a2a",
  buttonBg: "#c62a37ff",
  buttonText: "#fff",
  accentColor: "#c7f318ff",
  homebuttonBg: "#ecff18ff",
  bordercl: "#444",
  homebordercl: "yellow",

  // ✅ ADVANCED COLORS (dark friendly)
  colors: {
    black: "#FFFFFF",        // inverted for dark mode
    white: "#1E1E1E",        // dark background
    grey: {
      dark: "#B0B0B0",       // lighter grey for readability
      extraLight: "#2F2F2F", // dark neutral tone
    },
    blue: {
      dark: "#7FB3FF",       // lighter blue for contrast
      gradient: "rgba(100, 150, 255, 0.15)",  // gentle blue gradient
    },
  },

  // ✅ ADVANCED DARK BORDERS
  borders: {
    border1: "1px solid rgba(255, 255, 255, 0.15)",
    border5: "1px solid rgba(255, 255, 255, 0.08)",
  },

  // ✅ DARK SHADOWS
  shadows: {
    shadow1: "0px 0px 15px rgba(0, 0, 0, 0.5)", // deeper shadow
  },

  // ✅ TYPOGRAPHY (same)
  typography: {
    title3: "32px",
    text2: "18px",
  },
};
