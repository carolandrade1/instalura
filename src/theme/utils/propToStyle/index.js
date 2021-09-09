import breakpointsMedia from '../breakpointsMedia';

// eslint-disable-next-line consistent-return
const propToStyle = (propName) => (props) => {
  const propValue = props[propName];
  if (typeof propValue === 'string' || typeof propValue === 'number') {
    return {
      [propName]: props[propName],
    };
  }

  if (typeof propValue === 'object') {
    const breakpoints = {};

    if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
    if (propValue.md) breakpoints.md = { [propName]: propValue.md };

    return breakpointsMedia(breakpoints);
  }

  //   return breakpointsMedia({
  //     xs: {
  //       [propName]: propValue.xs,
  //     },
  //     sm: {
  //       [propName]: propValue.sm,
  //     },
  //     md: {
  //       [propName]: propValue.md,
  //     },
  //     lg: {
  //       [propName]: propValue.lg,
  //     },
  //     xl: {
  //       [propName]: propValue.xl,
  //     },
  //   });
};

export default propToStyle;
