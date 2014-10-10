//Functional-shared method of binary search tree

var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  extend(newTree, BinarySearchTreeMethods);
  return newTree;
};

var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.direction = function(target, value){
  var direction;
  return direction = target < value ? 'left' : 'right';
};

BinarySearchTreeMethods.insert = function(value, node){
  var node = node || this;
  var direction = this.direction(value, node.value);
  if (!node[direction]){
    node[direction] = makeBinarySearchTree(value);
  } else {
    this.insert(value, node[direction]);
  }
};

BinarySearchTreeMethods.contains = function(target){
  var direction = this.direction(target, this.value);
  if (this.value === target) {
    return true
  } else{
    if (this[direction]){
      return this[direction].contains(target);
    }
  }
  return false;
};

BinarySearchTreeMethods.depthFirstLog = function(callback, node){
  var node = node || this;
  callback(node.value);
  if (node.right){
    this.depthFirstLog(callback, node.right);
  }
  if (node.left){
    this.depthFirstLog(callback, node.left);
  }
};
