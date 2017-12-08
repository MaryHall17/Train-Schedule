// "Psuedo code":
// Utilize firebase to send initital train data to the html
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

//Assign the reference to the database
var database = firebase.database();

//Grab user-input with submit button to build train schedule
$(document).ready(function() {
	$(".btn-primary").on("click", function(event){
	//Prevent form from submitting
	event.preventDefault();

	//Grab the input values of the train name and destination
	var trainName = $("#trainName").val().trim();
	var destination = $("#destination").val().trim();
	
	//Test in console
	console.log(trainName);
	console.log(destination);

	//Set the variables in firebase to make sure we're linked
		database.ref().push({
			trainName: trainName,
			destination: destination
		});
	});
});


//Use these inputs for moment.js function
// var firstArrival = $("#firstArrival").val().trim();
// var frequency = $("#frequency").val().trim();

