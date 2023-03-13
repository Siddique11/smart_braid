export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -1500,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const pageAnimation1 = {
  hidden: {
    opacity: 0,
    x: -1500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delayChildren: 0.5,
    },
  },
};

export const imageAnimation1 = {
  hidden: {
    scale: 1,
  },
  show: {
    scale: 1.2,
    transition: {
      duration: 20,
    },
  },
};

export const productAnimation1 = {
  hidden: {
    opacity: 0,
    y: -1500,
  },
  show: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 0.5,
    },
  },
};
