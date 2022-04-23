let fname = "Hariom";
let lname = "Verma";
let age = prompt("Guess Hariom's age" );

//old way

//let result = fname+' '+lname+' '+age+' years old';
//alert(result);

//using template string
let result =`${fname} ${lname} ${age} year old `;
alert (result);