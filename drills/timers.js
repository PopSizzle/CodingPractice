setTimeout(fiveSeconds, 1000*5);
setTimeout(tenSeconds, 1000*10);
setTimeout(timeUp, 1000*15);

// Step 2:
// Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  $('#time-left').append('<h2>About 10 Seconds Left!</h2>')
  // console log 10 seconds left
  console.log('10 seconds left');
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  
  
  $('#time-left').append('<h2>About 5 Seconds Left!</h2>')
  // console log 5 seconds left
  console.log('5 seconds left');
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  $('#time-left').append(`<h2>Time's up!</h2>`);
  // console log done
  console.log('done!');
}