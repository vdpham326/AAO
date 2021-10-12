function myCurry(func, numArgs) {
    function myCurry(func, numArgs) {
    const args = [];
    return function collector(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return func(...args);
        } else {
            return collector;
        }
    }
}

}