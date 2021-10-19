function intervalCount(cb, delay, amount) {
    const interval = setInterval(function() {
        cb();
        amount--;
        if (amount === 0) {
            clearInterval(interval);
        }
    }, delay);
}