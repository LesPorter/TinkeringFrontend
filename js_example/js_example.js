var x = "Hey";
var y = 10;

alert(x); 
alert(y);

alert(x + y);

y = "bro";

alert(x + y);

var integer = 100; 
var float = 3.34;
var message = "This is a string.";
var enabled = false;

function someFunction(){
  var y = "This is a local variable.";
  
  alert(x);
  alert(y);
  
  x = "This isn't good. It's a global variable.";
}

// This is a one-line comment.
/* This is a mult-line
comment */


// Conditional statement
var x = 10;
var y = 5;
if (x > y) {
  alert("x is greater than y");
} else if (x < y){
  alert("x is less than y");
} else {
  alert("x is equal to y");
};

// Case statement
var x = [1, 2, 3, 4, 5];

switch (x.length){
  case 1:
    alert("x is small");
    break;   // Include at the end of each case
    
  case 5: 
    alert("x is moderate");
    break;
    
  case 10:
    alert("x is pretty larger");
    break;
    
  default:
    alert("x is giant");
}


// Loop
var x = [1, 2, 3, 4, 5];

for (var i = 0; i < x.length; i++){
  alert(x[i]);
};

// New loop for modern browsers
x.forEach(function (element){
  alert(element);
});


// Function within a function
var quadruple = function (number){
  alert(number * 4);
};

var someNumbers = [1, 2, 3, 4, 5,];
someNumbers.forEach(quadruple);