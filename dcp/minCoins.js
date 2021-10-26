/**
 * Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.
 */

const denoms = [25, 10, 5, 1];

const minCoinsRequired = (n) => {
  const denominationCoinsNeeded = (n, denomIdx, count) => {
    if (denoms.length === denomIdx) {
      return count + 1;
    }
    if (n % denoms[denomIdx] === 0) {
      return count + (n / denoms[denomIdx]);
    }
    if (n <= denoms[denomIdx]) {
      return denominationCoinsNeeded(n, denomIdx + 1, count);
    }
    return denominationCoinsNeeded(n % denoms[denomIdx], denomIdx + 1, count + 1);
  }
  console.log(denominationCoinsNeeded(n, 0, 0));
}

minCoinsRequired(7);