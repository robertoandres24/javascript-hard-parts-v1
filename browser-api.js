/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below
console.log('beginning of code')
setTimeout(function() { console.log('im in the settimeout'); }, 0)
console.log('end of the code')





console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below
let intervalId = setInterval(function(){
  console.log('interval hello')
},2000)

setTimeout(function() {
  clearInterval(intervalId)
}, 10000)




// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below
function sayHowdy() {
  console.log('Howdy')
}
function everyXsecsForYsecs(func, interval, total) {
  let intervalId = setInterval(func,interval)

  setTimeout(function() {
    clearInterval(intervalId)
  }, total)
}

everyXsecsForYsecs(sayHowdy, 1000, 5000)


console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below

function forEach(arr, cb) {
  for(let i= 0; i < arr.length; i++) {
    cb(arr[i], i)
  }
}
const delays = [2000, 5000, 0, 3500]
function delayLog(delayTime, i) {
  setTimeout(function() {
   console.log(`printing element ${i}`); 
  }, delayTime)
}

forEach(delays, delayLog)


console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below
function changeColor() {
  if(document.body.style.background === 'rgb(221, 238, 255)') {
    console.log('yes')
    document.body.style.background = 'rgb(255, 238, 221)'
  }
  else {
    console.log('nop')
    document.body.style.background = 'rgb(221, 238, 255)'
  }
  
}

let activateBtn = document.querySelector('#activate')
let colorBtn = document.querySelector('#color')

activateBtn.addEventListener('click', function() {
  console.log('clicked #1')
})

colorBtn.addEventListener('click', changeColor)


// ...your code above
//document.body.style.background = '#def';
console.log('End of Challenge 5');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////
/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(function() {
    callback(database[id])
  }, 2000)
}
function storeData(data) {
  dataReceived = data
  console.log(dataReceived)
}

ajaxSimulate(1, storeData)




// ...your code below



console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below
let target = document.querySelector('#ch2')

fetch('https://rest.bandsintown.com/artists/lennon?app_id=jshp')
  .then(response => response.json())
  .then(json => target.style.backgroundImage = `url(${json.thumb_url})` )


console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below






console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

// /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below







console.log('End of Challenge 9');
// */// (do not alter this line)


