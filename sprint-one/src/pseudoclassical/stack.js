var Stack = function() {
  this.storage = {};
  this.sizeOfStorage = 0;
};
Stack.prototype.push = function(value){
  this.storage[this.sizeOfStorage] = value;
  this.sizeOfStorage++;
},
Stack.prototype.pop = function(){
  this.sizeOfStorage && this.sizeOfStorage--;
  var result = this.storage[this.sizeOfStorage];
  delete this.storage[this.sizeOfStorage];
  return result;
},
Stack.prototype.size = function(){
  return this.sizeOfStorage;
}
