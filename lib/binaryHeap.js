/**
 * Binary Heap
 * parent(i) -> a[(i-1)/2]
 * left(i) -> a[(2*i)+1]
 * right(i) -> a[(2*i)+2]
 */
function MinHeap() {
  this.heap_arr = [];
}


MinHeap.prototype.parent = function (idx) {
  const parentIdx = (idx - 1) / 2;
  return this.heap_arr[parentIdx];
}

MinHeap.prototype.left = function (idx) {
  const l_Idx = (2 * idx) + 1;
  return this.heap_arr[l_Idx];
}

MinHeap.prototype.right = function (idx) {
  const r_Idx = (2 * idx) + 2;
  return this.heap_arr[r_Idx];
}

MinHeap.prototype.insert = function (val) {

}

MinHeap.prototype.remove = function (val) {

}

MinHeap.prototype.decreaseKey = function (idx, n_val) {

}

MinHeap.prototype.heapify = function () {

}

MinHeap.prototype.getTop = function () {
  return this.heap_arr[0];
}


function MaxHeap() {
  this.heap_arr = [];
}

MaxHeap.prototype.insert = function (val) {

}

MaxHeap.prototype.remove = function (val) {

}

MaxHeap.prototype.increaseKey = function (idx, n_val) {

}

MinHeap.prototype.heapify = function () {

}

MaxHeap.prototype.getTop = function () {
  return this.heap_arr[0];
}

module.exports = {
  MinHeap, MaxHeap
}