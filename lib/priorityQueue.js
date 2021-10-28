/**
 * Implementation of priority Queue
 */

function Node(val) {
  this.nodeVal = val;
  this.priority = null;
}

function PriorityQueue() {
  this.queue = [];
}

PriorityQueue.prototype.enqueue = function (val) {

}

PriorityQueue.prototype.dequeue = function (val) {

}

PriorityQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
}