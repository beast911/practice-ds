function wordLadder(begin, end, wordList) {
    // find index of begin
    let startIndex = wordList.indexOf(begin);
    let len = wordList.length - startIndex;
    let ladderLength = Number.MAX_SAFE_INTEGER;
    while (startIndex < len) {
        for (let s = startIndex; s < len; s++) {
            if (dif(begin, wordList[s]) === 1) {
                
            }
        }
    }
    return 0;
}

function splitWords(s) {
    return s == "" ? [] : s.split(' ');
}
