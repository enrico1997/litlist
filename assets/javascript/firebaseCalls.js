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
  var userImage = childSnapshot.val().image;
  var userGuid = childSnapshot.key

  console.log("username: " + userName + " userGuid: " + userGuid)

  $("#pplRows").append(
    $("<div>").addClass("col-sm-4 col-xs-6 col-lg-3")
      .append(
        $("<h3>").text(userName).addClass("ppl"))
      .append(
        $("<img>").addClass("img img-thumbnail img-responsive center-block").attr("src", userImage + ".jpg").attr('id', userGuid).attr('val',userName))
      );

     

}); // end of fb listener

  $(document).on('click', 'img', function(){
    alert("clicked")
    //replace id with this.id

    //console.log(database.ref("/users/" + this.id).once("value"));
    database.ref("/users/" + this.id).once("value").then(function(snap){


        console.log(snap);
        var users = snap.val();
        var items = users.items
        for(var key in items){
          console.log("category ", items[key].nitemCategory);
          console.log("Id ", items[key].nitemId);
          console.log("name ", items[key].nitemName);
          console.log("review ", items[key].nitemReview);

          var itemCategory = items[key].nitemCategory;
          var itemId = items[key].nitemId;
          var itemName = items[key].nitemName;
          var itemReview = items[key].nitemReview;

         $("#productRows")
    //.append("<tr>").data("id", .key)
        .append($("<tr>"))
        .append($("<td>" + itemName + "</td>"))
        .append($("<td>" + itemId + "</td>"))
        .append($("<td>" + itemReview + "</td>"))
        .append($("<td>" + itemCategory + "</td>"))
        .append($("</tr>"));
    }

    
    //$("#headerName").text(userName + "'s LiTLiST");
    });
    $('#productRows').empty();
  });

