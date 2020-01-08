// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return 2 + num
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's'
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	return array.map(item => callback(item))
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
let alphabet = ''
const letters = ['a', 'b','c','d']
function addToAlphabet(char) {
	alphabet += char;
} 
function forEach(array, callback) {
  array.forEach(c => {
    callback(c)
    console.log(alphabet)
  })
}

// see for yourself if your forEach works!
forEach(letters, addToAlphabet)

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	array.forEach(i => callback(i))
}

//mapWith([1,2,3], addTwo)

//Extension 2
function reduce(array, callback, initialValue) {
	return array.reduce(callback, 0)
}
const add = (acc, item) => acc + item
console.log(reduce([4, 1, 3], add , 0))


//Extension 3
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}
function intersection(...arrays) {
	return arrays
	.reduce( (acc, el, i, arr) => acc.concat(el), [])
	.reduce( (acc, n, i, arr) => {
		let hits = getOccurrence(arr, n)
    if (hits === arrays.length) {
    	acc.push(n)
    }
    return [...new Set(acc)]
  } , [])
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
	return arrays.reduce( (acc, el) => [...new Set(acc.concat(el))], [])
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	let objResult = {}
  array1.forEach(str => {
		let strUpper = callback(str)
    if(array2.includes(strUpper)) {
    	objResult[str] = strUpper
    }
  })
  return objResult
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let objResult = {}
  arrVals.forEach((str, i) => {
  	let key = str
  	let vals = arrCallbacks.map(cb => cb(str))
    objResult[str] = vals
  })
  return objResult
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
	let keys = Object.keys(obj)
  let values = Object.values(obj)
  let resultObj = {}
  keys.forEach(k => {
  	if(values.includes(callback(k))) {
    	resultObj[k] = callback(k)
    }	
  })
  return resultObj
}

 const cities = {
 London: 'LONDON',
 LA: 'Los Angeles',
 Paris: 'PARIS',
 };
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}
