var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if ( this.tail ) {this.tail.next = makeNode(value);}
    this.tail = makeNode(value);
    if ( !this.head ) {this.head = this.tail;}
  };

  list.removeHead = function(){
    var prevHead = this.head;
    delete this.head;
    this.head = prevHead.next;
    return prevHead.value;
  };

  list.contains = function(target){
    var node = this.head;
    while ( node ){
      if ( node.value === target ){
        return true;
      } else {
        node = node.next;
      }
    }
    if ( this.tail.value === target ) {return true;}
    return false;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};