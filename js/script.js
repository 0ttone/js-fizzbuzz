//Scrivi un programma che stampi i numeri da 1 a 100
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

//definizione variabili

var Fizz = "Fizz";
var Buzz = "Buzz";
var FizzBuzz = "FizzBuzz"
var output = document.getElementById("output")
var list

//definizione ciclo output da 1 a 100 con for

for (var i = 1; i <=100; i++){
      output.innerHTML += "</br> " + i;
if (i % 3 === 0){
      output.innerHTML += "Fizz";
} else if (i % 5 === 0){
      output.innerHTML += "Buzz";
} else if (i % 3 === 0 && i % 5 === 0){
      output.innerHTML += "FizzBuzz";
}
}
// condizioni di inserimento multiple

