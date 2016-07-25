var r = require('./createNewArray.js').r;
var assert = require('assert');
var test = {};
exports.test = test;

test.createNewArray_creates_an_empty_array = function(){
	assert.deepEqual(r.createNewArray(),[]);
};
