var Graph = function(){
	var storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.storage = {};
  this.length = 0;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var currentNode = this.storage[fromNode];
  var index = currentNode[1].indexOf(toNode);
  return (index === -1) ? false : true;
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = [];
  node[0] = newNode;
  node[1] = [];
  if (this.length === 1) {
    for (var key in this.storage) {
      var oneNode = this.storage[key][0];
    }
  }
  this.storage[newNode] = node;

  if (toNode) {
    this.addEdge(newNode, toNode);
  };

  if (this.length === 1) {
    this.addEdge(oneNode, node[0]);
    this.addEdge(node[0], oneNode);
  }
  this.length += 1;

};

Graph.prototype.contains = function(node){
  return (this.storage[node]) ? true : false ;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};


Graph.prototype.addEdge = function(fromNode, toNode){
  var currentNode = this.storage[fromNode];
  currentNode[1].push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var currentNode = this.storage[fromNode];
  var index = currentNode[1].indexOf(toNode);
  currentNode[1].splice(index,1);

  var nextNode = this.storage[toNode];
  var nextIndex = nextNode[1].indexOf(fromNode);
  nextNode[1].splice(nextIndex,1);

  for (var key in this.storage){
    var result = false;
      var edges = this.storage[key][1];
      if (edges.indexOf(fromNode) > -1){
        result = true;
      }
  }
  if (!result) {
    delete this.storage[fromNode];
    delete this.storage[toNode];
  }
};

