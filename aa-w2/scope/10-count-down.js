function countDownTime(num) {
    return function(day) {
        if (day === 0) {
            return "Happy New Year!";
        } else {
            return;
        }

    }
}

function countDownTimer(num) {
  if (num === 0) return "Happy New Year!";
  const _count = () => {
    num -= 1;
    if (num <= 0) {
      return "Happy New Year!";
    } else {
      return _count;
    }
  };
  return _count;
}
