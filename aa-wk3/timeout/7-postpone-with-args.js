function postponeWithArgs(cb, delay) {
    return function(...args) {
        setTimeout(cb, delay, ...args);
    };
}