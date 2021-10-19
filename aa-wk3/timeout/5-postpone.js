function postpone(cb, delay) {
    return function() {
        setTimeout(cb, delay);
    };
}