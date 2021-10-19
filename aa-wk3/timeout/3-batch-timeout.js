function batchTimeouts(tasks, delays) {
    return tasks.map(function(cb, indx) {
        return setTimeout(cb, delays[indx])
    });
}