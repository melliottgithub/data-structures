var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this._storage){
    this._storage = [];
  }
  this._storage.push(item);
};

setPrototype.contains = function(item){
  for (var i = 0; i < this._storage.length; i++){
    if (item === this._storage[i]){
      return true;
    }
    // }
  }
  return false;
};

setPrototype.remove = function(item){

  var index = this._storage.indexOf(item);

  if (index > -1){
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
