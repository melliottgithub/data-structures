var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage.get(i)) {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(i, bucket);
  }
  else {
    var prevBucket = this._storage.get(i);
    prevBucket.push([k,v]);
  }
    
    this._count ++;
    if (this._count/this._limit > 0.75){
      this.resize(this._limit*2);
    }

};

//class version
// var i = getIndexBelowMaxForKey(k, this._limit);
//
// var bucket = this._storage.get(i);
// if (!bucket) {
//   bucket = [];
//   this._storage.set(i, bucket);
// }
// var found = false;
//
// for (var i = 0; i < bucket.length; i++){
//  var tuple = bucket[i];
//  if (tuple[0]===k) {
//    tuple[1] = v; 
//    found=true; 
//    break;
//  }
// }
// if (!found) {
//   bucket.push([k, v])
//   this._count++;
//   if (this._count > 0.75 * this._limit){
//    this._resize(this._limit*2)
//   }
// };

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);

  if (result){
    for (var j = 0; j < result.length; j++){
      if (result[j][0] === k) {
        return result[j][1];
      }
    }
  }

};

//class version
// var i = getIndexBelowMaxForKey(k, this._limit);
//
// var bucket = this._storage.get(i);
// if (!bucket) {
//  return;
// }
//
// for (var i = 0; i < bucket.length; i++){
//  var tuple = bucket[i];
//  if (tuple[0]===k) {
//    return tuple[1];
//  }
// }
// return null;
// };


HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);

  if (result){
    for (var j = 0; j < result.length; j++){
      if (result[j][0] === k) {
        result[j][1] = null;
        this._count --;
        if (this._count/this._limit < 0.25){
          this.resize(this._limit/2);
        }
      }
    }
  }
};

//class version
// var i = getIndexBelowMaxForKey(k, this._limit);
//
// var bucket = this._storage.get(i);
// if (!bucket) {
//  return null;
// }
//
// for (var i = 0; i < bucket.length; i++){
//  var tuple = bucket[i];
//  if (tuple[0]===k) {
//   bucket.splice[i,1];
//   this._count--;
//   if (this._count < 0.25 * this._limit){
//    this._resize(this._limit/2)
//   }
//    return tuple[1];
//  }
// };

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;

  //set new limit
  this._limit = newLimit;
  this._count = 0;
  //make new storage with new size
  this._storage = makeLimitedArray(this._limit);

  //walk through current storage
  oldStorage.each( function(bucket){
    if (!bucket) {
      return;
    };
    //for each bucket
    for (var i = 0; i<bucket.length; i++){
      //for each tuple
      var tuple = bucket[i];
      //call insert with tuple
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));

};



/*
 * Complexity: What is the time complexity of the above functions?

*/
