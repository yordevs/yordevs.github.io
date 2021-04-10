const config = {
  color: {
    text: "#000000",
    background: "#FFFFFF",
    accent: "#FF5715",
    success: "#1E8800",
    error: "#A4243B",
  },
  font: {
    size: { base: "16px" },
    weight: { normal: "400", semibold: "600", bold: "700" },
    family: {
      sans: "Poppins, Arial, Helvetica, sans-serif",
      mono: "IBM Plex Mono, Courier, monospace",
    },
  },
  breakpoint: {
    //sm: "0px" and higher
    md: "min-width: 540px",
    lg: "min-width: 1072px",
  },
  transition: {
    standard: "0.15s ease-in-out",
  },
};

export default config;
