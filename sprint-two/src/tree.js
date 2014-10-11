//delete later

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.traverse = function(iterator, node){
  var findNode = function (node){
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++){
        iterator(node.children[i].value);
        findNode(node.children[i]);
      }
    }
  };
  findNode(this);
};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
    var result = false;
    this.traverse(function(item){
      if (item === target) {
        result = true;
      }
    });
    return result;
};
