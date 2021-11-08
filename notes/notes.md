### Techniques

#### Backtracking [31/10/2021]



##### Definition

Backtracking is a method of solving any algorithmic problem that involves going through all the possible combinations of a solution and picking the valid ones. Best example to think of in visual terms is Depth first search in a Binary tree.

___Note___: Recursion is usually involved in backtracking

_Examples_ :

- Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.

  

- Given a directed acyclic graph (**DAG**) of `n` nodes labeled from `0` to `n - 1`, find all possible paths from node `0` to node `n - 1` and return them in **any order**. **[Learned]**

  __Note__: 	When processing DAG, remember that everything will point to an empty location with no further nodes, i.e: [] element, also remember, no cycles in the graph.

  

- You have `n` `tiles`, where each tile has one letter `tiles[i]` printed on it.

  Return *the number of possible non-empty sequences of letters* you can make using the letters printed on those `tiles`. **[Learned]**

  

- A **happy string** is a string that:

  - consists only of letters of the set `['a', 'b', 'c']`.
  - `s[i] != s[i + 1]` for all values of `i` from `1` to `s.length - 1` (string is 1-indexed).

  For example, strings **"abc", "ac", "b"** and **"abcbabcbcb"** are all happy strings and strings **"aa", "baa"** and **"ababbc"** are not happy strings.

  Given two integers `n` and `k`, consider a list of all happy strings of length `n` sorted in lexicographical order.

  Return *the kth string* of this list or return an **empty string** if there are less than `k` happy strings of length `n`. **[Solved]**



- Given a string `s`, we can transform every letter individually to be lowercase or uppercase to create another string.

  Return *a list of all possible strings we could create*. You can return the output in **any order**.  **[Solved]**

  

- Given an array `nums` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**. **[Solved]**



- Given an integer array `nums` of **unique** elements, return *all possible subsets (the power set)*.

  The solution set **must not** contain duplicate subsets. Return the solution in **any order**. **[Learned]**



- Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*. **[Solved]**



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

  Given an integer `n`, return *the **number** of the **beautiful arrangements** that you can construct*. **[Learned]**



- Find all valid combinations of `k` numbers that sum up to `n` such that the following conditions are true:

  - Only numbers `1` through `9` are used.
  - Each number is used **at most once**.

  Return *a list of all possible valid combinations*. The list must not contain the same combination twice, and the combinations may be returned in any order.
