// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


function createFunction() {
  function sayHello() {
    console.log('hello')
  }
	return sayHello
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
//function1();



function createFunctionPrinter(input) {
	function print() {
    console.log(input)
  }
  return print
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 const printSample = createFunctionPrinter('sample');
 //printSample();
 const printHello = createFunctionPrinter('hello');
 //printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

 //jasCounter();
 //willCounter();



function addByX(x) {
	function sum(num) {
    return num + x 
  }
  return sum
}

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5
const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14



//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let result
  let executed = false
  
  return function(num) {
  	if(executed === false ) {
    	result = func(num)
      executed = true
  	}
		return result
  }
  
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
//console.log(onceFunc(4));  //should log 6
//console.log(onceFunc(10));  //should log 6
//console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  let innerCount = 1
  return function() {
   	if(innerCount === count) {
      func()
  	}
    innerCount++
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

 //afterCalled(); // -> nothing is printed
 //afterCalled(); // -> nothing is printed
 //afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
	setTimeout(func, wait);
}

//delay(function1, 2000)


function rollCall(names) {
	let counter = 0
  return function() {
    if(counter < names.length) {
    	console.log(names[counter])
    	counter ++ 
    }
    else {
      console.log('Everyone accounted for')
    }
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
 //rollCaller() // -> Should log 'Victoria'
 //rollCaller() // -> Should log 'Juan'
 //rollCaller() // -> Should log 'Ruth'
 //rollCaller() // -> Should log 'Everyone accounted for'

