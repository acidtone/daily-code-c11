const isDiviz = (number, denominator) => number % denominator === 0;

for (let i = 1; i <= 100; i++) {

  if (isDiviz(i, 15)) {
    console.log('FizzBuzz');
  } else if (isDiviz(i, 5)) {
    console.log('Buzz');
  } else if (isDiviz(i, 3)) {
    console.log('Fizz')
  } else {
    console.log(i);
  }

}

// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)