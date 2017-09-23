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

  // Creates local "temporary" object for holding train data
  var newPerson = {
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
