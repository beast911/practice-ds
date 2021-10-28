const findKaprekarDistance = (n) => {
    let c = 0;
    while (true) {
        if (n === 6174) {
            break;
        }
        // split
        const str = n.toString().split('');
        let asc = Number(str.sort((a, b) => a - b).join(''));
        let desc = Number(str.sort((a, b) => b - a).join(''));
        n = desc - asc;
        c++;
    }
    return c;
}

console.log(findKaprekarDistance(6170));