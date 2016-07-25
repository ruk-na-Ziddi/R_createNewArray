var r = {};
exports.r = r;

r.createNewArray = function(size){
	var collection = [];
	size && (collection.length = size)
	return collection;
}