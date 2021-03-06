export const hexToRGBA = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w{2}/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
