const debounce = (cb, delay = 700) => {
  let timeoutId = null;

  const returnFn = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    return new Promise((res) => {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        res(cb(...args));
      }, delay);
    });
  };

  returnFn.clear = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return returnFn;
};

export default debounce;
