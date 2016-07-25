var r = {};
exports.r = r;

var pushElement = function(collection, size, element){
	collection.push(element);
	(collection.length == size) ? null : pushElement(collection, size, element)
}

r.createNewArray = function(size, element){
	var collection = [];
	if(element)
		pushElement(collection, size, element)
	if(size && !element)
		collection.length = size
	return collection;
}