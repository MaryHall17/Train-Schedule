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

	//Grab the input values of from the user-input 
	var trainName = $("#trainName").val().trim();
	var destination = $("#destination").val().trim();
	var firstArrival = $("#firstArrival").val().trim();
	var frequency = $("#frequency").val().trim();

	//Create object to locally store user-input
	var newTrain = {
		name: trainName,
		destination: destination,
		firstArrival: firstArrival,
		frequency: frequency
	};
	
	//Test in console
	console.log(trainName);
	console.log(destination);
	console.log(firstArrival);
	console.log(frequency);

	//Push and store the variables to firebase
		database.ref().push(newTrain);

	//Clear user-input boxes
	$("#trainName").val("");
	$("#destination").val("");
	$("#firstArrival").val("");
	$("#frequency").val("");
	});

// Create a Firebase event for adding trains to the database and sending the entry to the html
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

		console.log(childSnapshot.val());

		//Store data into variables
		var trainName = childSnapshot.val().name;
		var destination = childSnapshot.val().destination;
		var firstArrival = childSnapshot.val().firstArrival;
		var frequency = childSnapshot.val().frequency;

		//First arrival formatted, subtracted 1 year to make sure it comes before current time
		var firstArrivalFormatted = moment(firstArrival, "hh:mm").subtract(1, "years");
		console.log(firstArrivalFormatted);
		
		//Current time
		var currentTime = moment();
		console.log("current time: " + moment(currentTime).format("hh:mm"));

		//Calculate the difference between the formatted first arrival and the current time. 
		//Make sure calculated time is in minutes.
		var difference = moment().diff(moment(firstArrivalFormatted), "minutes");
		console.log("Time difference: " + difference); 

		//Calculate remaining time between initial train arrival and the next one
		var remainder = difference % frequency;
		console.log(remainder);

		//Calculate the minutes until the next train
		var minutesTilArrival = frequency - remainder;
		console.log("minutes until arrival: " + minutesTilArrival);

		//The next train
		var nextTrain = moment().add(minutesTilArrival, "minutes");
		console.log("Arrival time: " + moment(nextTrain).format("hh:mm"));

	});
});




