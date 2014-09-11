var Queue = function() {
  this.storage = {};
  this.sizeOfStorage = 0;
  this.current = 0;
  this.key = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.key] = value;
  this.sizeOfStorage++;
  this.key++;
};

Queue.prototype.dequeue = function(){
  this.sizeOfStorage && this.sizeOfStorage--;
  var result = this.storage[this.current];
  delete this.storage[this.current];
  this.current++;
  return result;
};

Queue.prototype.size = function(){
  return this.sizeOfStorage;
};



