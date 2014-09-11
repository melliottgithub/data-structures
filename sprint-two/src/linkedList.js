var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    this.value = makeNode(value);
    this[tail.next] = value;




    if(this.tail != null){
      this.tail = value;
    } else {
      this.tail = value;
    }

    if (this.head === null) {
      this.head = value;
    }

    this.tail = value;
  };

  list.removeHead = function(){
    var prevHead = this.head;
    delete this.head;
    this.head = prevHead.next;
    return prevHead;

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

/*
 * Complexity: What is the time complexity of the above functions?
 */
