var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value){
  // debugger;
  var findSpot = function(node){
    if (value > node.value){
      if (!node.right){
        node.right = makeBinarySearchTree(value);
      } else {
        findSpot(node.right);
      }
    }
    if (value < node.value){
      if (!node.left){
        node.left = makeBinarySearchTree(value);
      } else {
        findSpot(node.left);
      }
    }
  };

  findSpot(this);
};

BinarySearchTreeMethods.contains = function(target){

};

BinarySearchTreeMethods.depthFirstLog = function(callback){

};

var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;
  extend(newTree, BinarySearchTreeMethods);
  return newTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
