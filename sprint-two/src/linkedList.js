var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    this.makeNode(value);
    // list.tail =


  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

makeLinkedList();
makeLinkedList.list.addToTail(10);
makeLinkedList.list.addToTail(15);
makeLinkedList.list.addToTail(17);
makeLinkedList.list.addToTail(8);
/*
 * Complexity: What is the time complexity of the above functions?
 */
