  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD43oZfYX_igbsUwjewJtrNGQr4bpCrzBk",
    authDomain: "litlist-306a8.firebaseapp.com",
    databaseURL: "https://litlist-306a8.firebaseio.com",
    projectId: "litlist-306a8",
    storageBucket: "litlist-306a8.appspot.com",
    messagingSenderId: "188274961247"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//////////////////////////////////////////////////////////////////////////////
//                     New LitList item Submitted                           //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//                          User Info Submitted                             //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//                          Category Requested                              //
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//                         User LitList Requested                           //
//////////////////////////////////////////////////////////////////////////////


// Load names on images
database.ref("/users").on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
  
  // Store everything into a variable.
  var userName = childSnapshot.val().username;
  var userImage = childSnapshot.val().image
  var userGuid = database.ref("/users");

  console.log(userName + " " + userGuid)

  $("#pplRows").append("<div>").addClass("col-sm-4 col-xs-6 col-lg-3").attr('id', userGuid).val(username);
  $("#" + userGuid).append("img").addClass("img img-thumbnail img-responsive center-block").attr("src", userImage)


}); // end of fb listener

// $("img").on("click", function(this) {



//   var personGuid = this.id
//   console.log(pplButtSel)

//   $("#trainTable > tbody").append("<tr><td>" 
//                                   + retName + "</td><td>" 
//                                   + retDest + "</td><td>" 
//                                   + retFreq + "</td><td>" 
//                                   + nextTrain + "</td><td>" 
//                                   + minToTrain + "</td></tr>"
//                                   );


// });