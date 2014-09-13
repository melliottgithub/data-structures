var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.traverse = function(iterator){

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


  // ORIGINAL METHOD
  // var findChild = function(node) {
  //   if (node.children.length > 0) {
  //     for (var i = 0; i < node.children.length; i++){
  //       if (node.children[i].value === target) {
  //         result = true;
  //       }
  //       findChild(node.children[i]);
  //     }
  //   }
  // };

  // findChild(this);

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
