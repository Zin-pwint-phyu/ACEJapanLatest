export const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, delay } },
  // exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
});

export const fadeInFL = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.5,
    },
  };
};

export const fadeInFR = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.5,
    },
  };
};

export const scaleUp = () => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };
};

export const strongUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeOut",
    },
  },
});
