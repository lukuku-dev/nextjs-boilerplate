/**
 * This js contains the breakpoint variables for responsive stylings
 */
const size = {
  tablet: "768px",
  desktop: "1024px",
};

export const device = {
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};

//Usage Example
// @media ${device.laptop} {
//     max-width: 800px;
// }
