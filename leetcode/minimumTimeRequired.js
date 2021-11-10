/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function (jobs, k) {
    let result = Number.MAX_SAFE_INTEGER;
    // jobs = jobs.sort((a, b) => b - a)
    const jobLength = jobs.length;
    const workerState = (new Array(k)).fill(0);
    const process = (currentPos, workers) => {
        if (currentPos >= jobLength) {
            result = Math.min(result, Math.max(...workers));
            return;
        }
        for (let i = 0; i < k; i++) {
            workers[i] += jobs[currentPos];
            process(currentPos + 1, workers);
            workers[i] -= jobs[currentPos];
        }
    };
    process(0, workerState);
    return result;
};

console.log(minimumTimeRequired([1, 2, 4, 7, 8], 3))