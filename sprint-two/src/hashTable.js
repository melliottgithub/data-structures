var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  //if there is no bucket, make an array and set the bucket
  if ( !bucket ) {
    bucket = [];
    this._storage.set(i, bucket);
  } 

  var found = false;

  //if there is collision, look through bucket to see if it is there
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }

  //if not already there before, push into the bucket
  if ( !found ) {
    bucket.push([k,v]);
    this._count++;
    if ( this._count/this._limit > 0.75) {
      this.resize( this._limit * 2);
    }
  }

};



HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if ( !bucket ) {
    return null;
  }

  //go through the bucket and find the key
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === k ) {
      return tuple[1];
    }
  }
  return null;
};


HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if ( !bucket ) {
    return null;
  }

  //go through the bucket and if found, splice it out
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._count--;
      if ( this._count/this._limit < 0.25 ) {
        this.resize(this._limit/2);
      }
      return tuple[1];
    }
  }
  return null;
};



HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
  oldStorage.each( function(bucket){
    if ( !bucket ) {
      return;
    };
    for ( var i = 0; i < bucket.length; i++ ){
      var tuple = bucket[i];
      this.insert.apply(this, tuple);
    }
  }.bind(this) );
};

