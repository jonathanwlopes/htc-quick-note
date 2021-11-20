interface WrapperFlexProps {
  justify: "center" | "space-between" | "space-around"
}

export const theme = {
  colors: {
    lightPurple: "#432874",
    darkPurple: "#36205D",
    lightBlue: "#134CD8",
    mediumGrey: "#C4C4C4",
    white: "#FFFFFF",
  },

  sizes: {
    mobile: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
    },
  },

  mobiles: {
    mobileS: "320px",
    tablet: "768px",
    laptopS: "1024px",
  },

  margins: {
    auto: "auto",
    m0: "0",
    m1: ".25rem",
    m2: ".50rem",
    m3: ".75rem",
    m4: "1rem",
    m5: "1.25rem",
    m6: "1.50rem",
    m7: "1.75rem",
    m8: "2rem",
    m9: "2.25rem",
    m10: "2.50rem"
  },

  paddings: {
    p0: "0",
    p1: ".25rem",
    p2: ".50rem",
    p3: ".75rem",
    p4: "1rem",
    p5: "1.25rem",
  },

  flex: {} as WrapperFlexProps,
}
