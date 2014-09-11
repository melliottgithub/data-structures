
var queueMethods = {
  enqueue: function(value){
    this.storage[this.key] = value;
    this.sizeOfStorage++;
    this.key++;
  },
  dequeue: function(){
    this.sizeOfStorage && this.sizeOfStorage--;
    var result = this.storage[this.current];
    delete this.storage[this.current];
    this.current++;
    return result;
  },
  size: function(){
    return this.sizeOfStorage;
  }
};


var makeQueue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.sizeOfStorage = 0;
  obj.current = 0;
  obj.key = 0;
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
