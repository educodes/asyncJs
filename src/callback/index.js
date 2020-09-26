
function sum( num1 , num2 ){
  return num1 + num2;
}

// callback == sum()

function calc( num1 , num2 , callback ){
  return callback( num1 , num2 );
}

console.log(calc( 3, 5 , sum))
console.log(calc( 9, 5 , sum))
console.log(calc( 5, 5 , sum))


// --------------------------------------------------------

// callback == printDate()


function printDate(dateNow) {
  console.log(dateNow);
}

function date(callback){

  console.log('La fecha se imprimirá en 5 segundos');

  setTimeout(()=>{
    let date = new Date;
    callback(date)
  } , 5000);

}

date(printDate);