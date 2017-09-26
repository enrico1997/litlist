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
        var path;

$("#submit-user").on("click", function(event) {

  event.preventDefault();

  // Grabs user input
  var userNew = $("#userName").val().trim();
          var userCityNew = $("#userCity").val().trim();
  var itemCategory = $("#itemCategory").val().trim();
  var itemName = $("#item_name").val().trim();

  var itemReview = $("#review").val().trim();
  var user = $("#userName").val().trim();

  // Creates local "temporary" object for holding user data
  var newPerson = {
    username: user,
    location: userCityNew,
    image: userNew,
    items: []       

            username: user,
            location: userCityNew,
            image: userNew,
            items: []
           

          };
          console.log(newPerson);
          // $("#createInitial").attr('data', userName);

          var ref = database.ref("/users/");
          var createPerson = ref.push(newPerson);

          path = createPerson.key;
          console.log(path);
          sessionStorage.setItem("uid", path);

          addItem(itemCategory, itemName, itemReview);
         
        });

          $("#search-product").on("click", function(e) {
            event.preventDefault();
            // Grabs user input
            var naddCategory = $("#addCategory").val().trim();
            var naddName = $("#addName").val().trim();
            var naddReview = $("#addReview").val().trim();

            addItem(naddCategory, naddName, naddReview);
        });

          function addItem (category, name, review){
            var postObject = {
                nitemCategory: category,
                nitemName: name,
                nitemReview: review,
              };
          var uid = sessionStorage.getItem("uid");

    // Write the new post's data simultaneously in the posts list and the user's post list.
          return firebase.database().ref('/users/' + uid + "/items").push(postObject);
          };

          
          // Creates local "temporary" object for holding train data
    


  // Get a key for a new Post.
 

          // database.ref("user", function(){

          //       list.push(newProduct);
          //  });

  // Store everything into a variable.
  
  $("h3").click(function(){
    alert("clicked")
    //replace id with this.id
  database.ref("/users/" + "-Kuq8MbwRK2fhDe2ARY0").once("value").then(function(snap){
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

        $("#catTable > tbody")
  //.append("<tr>").data("id", .key) 
  .append($("<tr>").text(itemCategory))
  .append($("<td>" + itemId + "</td>"))
  .append($("<td>" + itemName + "</td>"))
  .append($("<td>" + itemReview + "</td>"))
  .append($("<td>"));
      }
      //debugger

  })
  
  
 
 
  
  // Add each users's data into the table
  


});   
