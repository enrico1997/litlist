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
  var item_name = $("#item_name").val().trim();
  var item_id = $("#item_id").val().trim();
  var review = $("#review").val().trim();
  var username = $("#username").val().trim();

// Creates local "temporary" object for holding employee data
  var newItem = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
  };

// Uploads employee data to the database
  database.ref().push(newEmp);

//////////////////////////////////////////////////////////////////////////////
//                          User Info Submitted                             //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//                          Category Requested                              //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//                         User LitList Requested                           //
//////////////////////////////////////////////////////////////////////////////