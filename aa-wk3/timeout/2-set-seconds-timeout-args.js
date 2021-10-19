function setSecondsTimeoutArgs(cb, delayInSeconds, ...anyArgs) {
    setTimeout(function() {
        cb(...anyArgs);
    }, delayInSeconds * 1000);
}


function printSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
setSecondsTimeoutArgs(printSum, 0.25, 5, 1, 4); // should print '10' after 250ms

setSecondsTimeoutArgs(function(arg1, arg2) {
    console.log(arg1 + '-' + arg2);
}, 0.7, 'hello', 'world'); // should print 'hello-world' after 700ms