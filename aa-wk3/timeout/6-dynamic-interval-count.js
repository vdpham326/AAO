function dynamicIntervalCount(cb, delay, amount) {
  if (amount === undefined) {
    return setInterval(cb, delay);
  }

  const interval = setInterval(function() {
    cb();
    amount--;
    if (amount === 0) {
      clearInterval(interval);
    }
  }, delay);

  return interval;
}