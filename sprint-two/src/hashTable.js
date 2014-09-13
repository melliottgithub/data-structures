var HashTable = function(){
  this._limit = 8;
  this.occupiedIndex = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(i, bucket);
    // debugger;
  }
  else {
    var prevBucket = this._storage.get(i)
    prevBucket.push([k,v]);
  }
    this.occupiedIndex ++;
    if (this.occupiedIndex/this._limit >= 0.75){
      this.adjust(2);
    }

};

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

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);

  if (result){
    for (var j = 0; j < result.length; j++){
      if (result[j][0] === k) {
        result[j][1] = null;
        ;
      }
    }
  }
};

HashTable.prototype.adjust = function(n){
  debugger;
  //save all elements [k,v] of the table in the array
  //increase the limit of the table
  //put all elements back to the table
  var result = [];
  this._storage.each(function(value, i, storage){
    if (value) {
      result.push(value);
    }
  });

  // this._limit *=n;

}



/*
 * Complexity: What is the time complexity of the above functions?

*/
