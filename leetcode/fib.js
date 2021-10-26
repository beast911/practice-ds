const fib = (n) => {
    let left = 1;
    let right = 2;
    let curr = 3; let prev = 0; let sum = 0;
    while (curr < n) {
        prev = curr;
        left = right;
        right = curr;
        if (prev % 2 === 0) {
            sum += prev;
        }
        curr = left + right;
    }
    return sum + 2;
}

console.log(fib(4000000))