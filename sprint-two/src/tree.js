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

  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++){
      if(this.contains(this.children[i])) {
        return this.contains(this.children[i]);
      }
    }
  }
  return false;
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
