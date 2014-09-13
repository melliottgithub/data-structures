var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));

};

treeMethods.contains = function(target){

  var result = false;

  var findChild = function(node) {
    if (node.value === target) {
      result = true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++){
        findChild(node.children[i]);
      }
    }
  };

  findChild(this);

  return result;
};


var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
