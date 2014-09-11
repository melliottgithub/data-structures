var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var current = 0;
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[key] = value;
    size ++;
    key ++;
  };

  someInstance.dequeue = function(){
    size && size--;
    var result = storage[current];
    delete storage[current];
    current ++;
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
