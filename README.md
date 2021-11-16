### Techniques

#### # Backtracking [31/10/2021]

##### Definition

Backtracking is a method of solving any algorithmic problem that involves going through all the possible combinations of a solution and picking the valid ones. Best example to think of in visual terms is Depth first search in a Binary tree.

**_Note_**: Recursion is usually involved in backtracking

All backtracking type of problems generally will involve two steps:

1. generating all possible subsets/candidates for solution.
2. finding/extracting valid solutions out of it.

*Optional*: Optimization involves remiving unnecessary branches created under generation subset step.

_Examples_ :

- Given `n` pairs of parentheses, write a function to _generate all combinations of well-formed parentheses_.

- Given a directed acyclic graph (**DAG**) of `n` nodes labeled from `0` to `n - 1`, find all possible paths from node `0` to node `n - 1` and return them in **any order**. **[Learned]**

  **Note**: When processing DAG, remember that everything will point to an empty location with no further nodes, i.e: [] element, also remember, no cycles in the graph.

- You have `n` `tiles`, where each tile has one letter `tiles[i]` printed on it.

  Return _the number of possible non-empty sequences of letters_ you can make using the letters printed on those `tiles`. **[Learned]**

- A **happy string** is a string that:

  - consists only of letters of the set `['a', 'b', 'c']`.
  - `s[i] != s[i + 1]` for all values of `i` from `1` to `s.length - 1` (string is 1-indexed).

  For example, strings **"abc", "ac", "b"** and **"abcbabcbcb"** are all happy strings and strings **"aa", "baa"** and **"ababbc"** are not happy strings.

  Given two integers `n` and `k`, consider a list of all happy strings of length `n` sorted in lexicographical order.

  Return _the kth string_ of this list or return an **empty string** if there are less than `k` happy strings of length `n`. **[Solved]**

- Given a string `s`, we can transform every letter individually to be lowercase or uppercase to create another string.

  Return _a list of all possible strings we could create_. You can return the output in **any order**. **[Solved]**

- Given an array `nums` of distinct integers, return _all the possible permutations_. You can return the answer in **any order**. **[Solved]**

- Given an integer array `nums` of **unique** elements, return _all possible subsets (the power set)_.

  The solution set **must not** contain duplicate subsets. Return the solution in **any order**. **[Learned]**

- Given `n` pairs of parentheses, write a function to _generate all combinations of well-formed parentheses_. **[Solved]**

- In a gold mine `grid` of size `m x n`, each cell in this mine has an integer representing the amount of gold in that cell, `0` if it is empty.

  Return the maximum amount of gold you can collect under the conditions:

  - Every time you are located in a cell you will collect all the gold in that cell.
  - From your position, you can walk one step to the left, right, up, or down.
  - You can't visit the same cell more than once.
  - Never visit a cell with `0` gold.
  - You can start and stop collecting gold from **any** position in the grid that has some gold.

- Suppose you have `n` integers labeled `1` through `n`. A permutation of those `n` integers `perm` (**1-indexed**) is considered a **beautiful arrangement** if for every `i` (`1 <= i <= n`), **either** of the following is true:

  - `perm[i]` is divisible by `i`.
  - `i` is divisible by `perm[i]`.

  Given an integer `n`, return _the **number** of the **beautiful arrangements** that you can construct_. **[Learned]**

- Find all valid combinations of `k` numbers that sum up to `n` such that the following conditions are true:

  - Only numbers `1` through `9` are used.
  - Each number is used **at most once**.

  Return _a list of all possible valid combinations_. The list must not contain the same combination twice, and the combinations may be returned in any order. **[Solved]**

- Given an array of strings `nums` containing `n` **unique** binary strings each of length `n`, return _a binary string of length_ `n` _that **does not appear** in_ `nums`_. If there are multiple answers, you may return **any** of them_. **[Solved but may need to optimize]**

- You are given an integer array `jobs`, where `jobs[i]` is the amount of time it takes to complete the `ith` job.

  There are `k` workers that you can assign jobs to. Each job should be assigned to **exactly** one worker. The **working time** of a worker is the sum of the time it takes to complete all jobs assigned to them. Your goal is to devise an optimal assignment such that the **maximum working time** of any worker is **minimized**.

  _Return the **minimum** possible **maximum working time** of any assignment._ **[Learned]**

  **Note**: Creating all possible combinations of valid scenarios is the key. optimization involves removing unnecessary branches.

  This is a NP-complete problem, i.e solution is obtained in polynomial time.

- Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal. **[Learned]**

  _Note_:  need different type of optimization here because the result is a binary form of either true or false and not a collection from k^n to k*2^n

- __[1774. Closest Dessert Cost]__ You would like to make dessert and are preparing to buy the ingredients. You have `n` ice cream base flavors and `m` types of toppings to choose from. You must follow these rules when making your dessert:

  - There must be **exactly one** ice cream base.
  - You can add **one or more** types of topping or have no toppings at all.
  - There are **at most two** of **each type** of topping.

  You are given three inputs:

  - `baseCosts`, an integer array of length `n`, where each `baseCosts[i]` represents the price of the `ith` ice cream base flavor.
  - `toppingCosts`, an integer array of length `m`, where each `toppingCosts[i]` is the price of **one** of the `ith` topping.
  - `target`, an integer representing your target price for dessert.

  You want to make a dessert with a total cost as close to `target` as possible.

  Return *the closest possible cost of the dessert to* `target`. If there are multiple, return *the **lower** one.*

- __[494. Target Sum]__ You are given an integer array `nums` and an integer `target`.

  You want to build an **expression** out of nums by adding one of the symbols `'+'` and `'-'` before each integer in nums and then concatenate all the integers.

  - For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a `'-'` before `1` and concatenate them to build the expression `"+2-1"`.

  Return the number of different **expressions** that you can build, which evaluates to `target`. [**Solved**](leetcode/findTargetSumWays.js)

- **[37. Sudoku Solver]** Write a program to solve a Sudoku puzzle by filling the empty cells.

  A sudoku solution must satisfy **all of the following rules**:

  1. Each of the digits `1-9` must occur exactly once in each row.
  2. Each of the digits `1-9` must occur exactly once in each column.
  3. Each of the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.

  The `'.'` character indicates empty cells.



#### # Sliding Window [16/11/2021]

##### Definition 

As its name suggests, this technique involves taking a subset of data from a given array or string, expanding or shrinking that subset to satisfy certain conditions, hence the **sliding** effect.

***When can we use it ?*** Generally speaking, the sliding window technique is useful when you need to keep track of a **contiguous** sequence of elements, such as summing up the values in a subarray.

_Examples_:

- **[1876. Substrings of Size Three with Distinct Characters]**  A string is **good** if there are no repeated characters.

  Given a string `s`, return *the number of **good substrings** of length **three** in* `s`.

  Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

  A **substring** is a contiguous sequence of characters in a string. [**Solved**](leetcode/countGoodSubstrings.js)

- **[1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold]**  Given an array of integers `arr` and two integers `k` and `threshold`.

  Return *the number of sub-arrays* of size `k` and average greater than or equal to `threshold`. [**Solved**](leetcode/numOfSubarrays.js)

- **[1004. Max Consecutive Ones III]**  Given a binary array `nums` and an integer `k`, return *the maximum number of consecutive* `1`*'s in the array if you can flip at most* `k` `0`'s. [**Learned**](leetcode/longestOnes.js)

- **[1358. Number of Substrings Containing All Three Characters]** Given a string `s` consisting only of characters *a*, *b* and *c*.

  Return the number of substrings containing **at least** one occurrence of all these characters *a*, *b* and *c*.
