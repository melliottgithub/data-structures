var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value){
    this.storage[this.sizeOfStorage] = value;
    this.sizeOfStorage++;
  },
  pop: function(){
    this.sizeOfStorage && this.sizeOfStorage--;
    var result = this.storage[this.sizeOfStorage];
    delete this.storage[this.sizeOfStorage];
    return result;
  },
  size: function(){
    return this.sizeOfStorage;
  }
};

var makeStack = function() {
  var obj = {};
  obj.storage = {};
  obj.sizeOfStorage = 0;
  extend(obj, stackMethods);
  return obj;


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};






