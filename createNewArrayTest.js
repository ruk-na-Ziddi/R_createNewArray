var r = require('./createNewArray.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.createNewArray_creates_an_empty_array = function(){
	assert.deepEqual(r.createNewArray(),[]);
};

test.createNewArray_creates_an_array_of_given_size = function(){
	var a = r.createNewArray(5);
	assert.deepEqual(a.length,5);
	assert.equal(a[4],undefined);
};
