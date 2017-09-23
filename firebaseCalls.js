  var config = {
    apiKey: "AIzaSyD3-Zb_Tz77e-IKjzD4aBnImWcONmlP37E",
    authDomain: "litlist-2373c.firebaseapp.com",
    databaseURL: "https://litlist-2373c.firebaseio.com",
    projectId: "litlist-2373c",
    storageBucket: "litlist-2373c.appspot.com",
    messagingSenderId: "912928174463"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//////////////////////////////////////////////////////////////////////////////
//                     New LitList item Submitted                           //
//////////////////////////////////////////////////////////////////////////////

// submit button for final item details
$("#itemSubmit").on("click", function(event) {
  event.preventDefault();

// Grabs user input
  var item_category = $("#itemCategory").val().trim();
  var item_name = $("#item_name").val().trim();
  var item_id = $("#item_id").val().trim();
  var review = $("#review").val().trim();
  var username = $("#username").val().trim();


// Creates local "temporary" object for holding item data
  var newItem = {
    item_category: item_category,
    item_id: item_id,
    item_name: item_name,
    item_review: review,
    username: username
  };
//keys need to match the database
var newItem = {
    nitemCategory: item_category,
    nitemName: item_name,
    nitemReview: review,
  };
// Uploads item data to the database
  database.ref().push(newItem);

  console.log(newItem.item_category);
  //console.log(newItem.item_id);
  console.log(newItem.item_name);
  console.log(newItem.review);
  //console.log(newItem.username);

  //modal goes here
  
  $("#itemCategory").val("");
  $("#item_name").val("");
  $("item_id").val("");
  $("#review").val("");
  $("#username").val("");

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  // Store everything into a variable.
  var itemCategory = childSnapshot.val().name;
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

  var timeRemaining = moment().diff(moment.unix(trainTime), "minutes") % trainFrequency;
  var tMinutesTillTrain = trainFrequency - timeRemaining;

  var nextTrain = moment().add(tMinutesTillTrain, "m").format("hh:mm A");
  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);
  // Format the train time start
  var trainTimeFormatted = moment.unix(trainTime).format("HH:mm");
  
  // Add each train's data into the table
  $("#userInput > tbody")
  .append("<tr>").data("id", childSnapshot.key) 
  .append($("<td>").text(trainName))
  .append($("<td>" + trainDestination + "</td>"))
  .append($("<td>" + trainFrequency + "</td>"))
  .append($("<td>" + nextTrain + "</td>"))
  .append($("<td>" + tMinutesTillTrain + "</td>"))
  .append($("<td>"));
   
});
//////////////////////////////////////////////////////////////////////////////
//                          User Info Submitted                             //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//                          Category Requested                              //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//                         User LitList Requested                           //
//////////////////////////////////////////////////////////////////////////////