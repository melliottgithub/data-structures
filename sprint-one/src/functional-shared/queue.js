
var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

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
  },
};

var makeQueue = function() {
  var obj = {};
  obj.storage = {};
  obj.sizeOfStorage = 0;
  obj.current = 0;
  obj.key = 0;
  extend(obj, queueMethods);
  return obj;
};





