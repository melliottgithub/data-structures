var extend= function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value){
    this.storage[this.size] = value;
    this.size++;
  },
  pop: function(){
    this.size && this.size--;
    var result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  },
  size: function(){
    return this.size;
  },
};

var makeStack = function() {
  var obj = {};
  obj.storage = {};
  obj.size = 0;
  extend(obj, stackMethods);
  return obj;


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};






