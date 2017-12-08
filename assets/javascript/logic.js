// "Psuedo code":
// Build arrays that store initial train information; create for loop that sends this array to the table
// Also store initial train info in fire base
// Build function that grabs user input and sends it to array at the click of the submit button
// Use moment.js to calculate train times


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBpOl76tdjtsbJmbVV4P1A3ut6wXqD94MM",
    authDomain: "train-schedule-cee76.firebaseapp.com",
    databaseURL: "https://train-schedule-cee76.firebaseio.com",
    projectId: "train-schedule-cee76",
    storageBucket: "train-schedule-cee76.appspot.com",
    messagingSenderId: "709168740766"
  };
  firebase.initializeApp(config);

//This array stores our trainNames
var trainNames = ["Thomas", "Generic Name", "Choo Choo Express", "Canadian Bacon", "The Polar Express"];