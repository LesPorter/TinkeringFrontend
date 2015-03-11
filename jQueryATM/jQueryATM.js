$(document).ready(function() {
  console.log( "document ready" );  
  var checking;
  checking = 0;
  var savings;
  savings = 0;

  $("#balance").click(function() {
      // show the balance in the message area
      $("#message").text("Checking: $" + checking.toString() + " --- Savings: $" + savings.toString());      
  });
  
  // Checking deposit
  $("#deposit").click(function() {
     var amount = parseFloat($("#deposit_amount").val());
     console.log( amount.toString() );  
     checking = checking + amount;
     // show the results in the message area
     $("#message").text("Thank you for your checking deposit!");      
  });
  
  // Savings deposit
  $("#savingsdeposit").click(function() {
     var amount = parseFloat($("#savingsdeposit_amount").val());
     console.log( amount.toString() );  
     savings = savings + amount;
     // show the results in the message area
     $("#message").text("Thank you for your savings deposit!");      
  });
  
  // Checking withdraw
  $("#withdraw").click(function() {
    var amount = parseFloat($("#withdraw_amount").val());
    console.log( amount.toString() );  
    if (amount > checking) {
      $("#message").text("You don't have enough money!"); 
    }
    else {
      // show the results in the message area
      checking = checking - amount;
      $("#message").text("Checking withdrawal complete.  Thank you for your business!"); 
    }
  });
    
  // Savings withdraw
  $("#savingswithdraw").click(function() {
    var amount = parseFloat($("#savingswithdraw_amount").val());
    console.log( amount.toString() );  
    if (amount > savings) {
      $("#message").text("You don't have enough money!"); 
    }
    else {
      // show the results in the message area
      savings = savings - amount;
      $("#message").text("Savings withdrawal complete.  Thank you for your business!"); 
    }
  });
  
  // Transfer from checking to savings
  $("#transfertosavings").click(function() {
    var amount = parseFloat($("#transfertosavings_amount").val());
    console.log( amount.toString() );  
    if (amount > checking) {
      $("#message").text("You don't have enough money in checking!"); 
    }
    else {
      // show the results in the message area
      checking = checking - amount;
      savings = savings + amount;
      $("#message").text("Transfer from checking to savings is complete.  Thank you for your business!"); 
    }
  });
  
  // Transfer from savings to checking
  $("#transfertochecking").click(function() {
    var amount = parseFloat($("#transfertochecking_amount").val());
    console.log( amount.toString() );  
    if (amount > savings) {
      $("#message").text("You don't have enough money in savings!"); 
    }
    else {
      // show the results in the message area
      savings = savings - amount;
      checking = checking + amount;
      $("#message").text("Transfer from savings to checking is complete.  Thank you for your business!"); 
    }
  });
  
  // Free money
  $("#freemoney").click(function() {
     var amount = Math.round(Math.exp(Math.random()*Math.log(10000000-0+1)))+0;
     checking = checking + amount;
     savings = savings + amount;
     // show the results in the message area
     $("#message").text("We just deposited $" + amount + " into both of your accounts. You're welcome.");      
  });
  
});