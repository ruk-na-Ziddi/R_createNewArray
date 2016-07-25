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

test.createNewArray_creates_an_array_of_given_size_with_given_value = function(){
	var a = r.createNewArray(2,25);
	assert.deepEqual(a.length,2);
	assert.equal(a[0],25);
	assert.equal(a[1],25);
};

test.createNewArray_creates_an_array_of_given_size_with_given_object = function(){
	var a = r.createNewArray(2,{a:1});
	assert.deepEqual(a.length,2);
	assert.deepEqual(a[0],{a:1});
	assert.deepEqual(a[1],{a:1});
};

test.createNewArray_creates_an_array_of_given_size_with_copies_of_object = function(){
	var o = {a:1};
	var a = r.createNewArray(2,o);
	assert.deepEqual(a.length,2);
	assert.deepEqual(a[0],o);//values are same
	assert.deepEqual(a[1],o);
	assert.notEqual(a[0],o);//not same object
	assert.notEqual(a[1],o);
};
