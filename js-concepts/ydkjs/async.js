// Call back Hell, Pyramid of doom


const wakeUp = (nextTask, cb) => {
    cb(nextTask);
}
const doMorningRoutine = (nextTask, cb) => {
    console.log('waked')
    cb(nextTask);
}
const haveBreakFast = (nextTask, cb) => {
    cb(nextTask, cb);
}

const leaveForOffice = (nextTask, cb) => {
    return cb();
}

wakeUp('waking Up', (nextTask) => {
    doMorningRoutine(nextTask, (nextTask) => {
        haveBreakFast(nextTask, (nextTask)=>{
            leaveForOffice();
        })
    })
})