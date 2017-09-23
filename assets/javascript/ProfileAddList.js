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

$("#submit-user").on("click", function(event) {

  event.preventDefault();

  // Grabs user input
  var userNew = $("#userName").val().trim();
  var itemCategory = $("#itemCategory").val().trim();
  var itemName = $("#item_name").val().trim();

  var itemReview = $("#review").val().trim();
  var user = $("#userName").val().trim();

  // Creates local "temporary" object for holding train data
  var newPerson = {
    username: user,
    location: '',
    image: '',
    items: 
      [
        {
          item_category: itemCategory,
          item_name:  itemName,
          item_review:   itemReview,
          item_id: ''
        }
      ]
  };

  console.log(newPerson);

  // $("#createInitial").attr('data', userName);

  var ref = database.ref("/users/");
  var createPerson = ref.push([newPerson]);
  var path = createPerson.toString();
  alert(path);

});