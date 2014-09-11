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
  var obj = Object.create(stackMethod
    );
  obj.storage = {};
  obj.sizeOfStorage = 0;
  return obj;
};
