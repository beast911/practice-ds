/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    // calculate frequencies of each unique element in list
    const m = new Map();
    arr.forEach(el => {
        if (m.has(el)) {
            const currFreq = m.get(el);
            m.set(el, currFreq + 1);
        } else {
            m.set(el, 1);
        }
    })
    let accumulatedDel = 0;
    const mapList = Array.from(m).sort((a,b) => {
        if (a[1] < b[1]) {
            return 1;
        } else if(a[1] > b[1]) {
            return -1;
        }
        return 0;
    });
    if (mapList.length === 1) {
        return 1;
    }
    for (let i = 0; i < mapList.length; i++) {
        if (accumulatedDel >= (arr.length / 2)) {
            return i;
        }
        accumulatedDel += mapList[i][1];
    }
};

console.log(minSetSize([9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19]));