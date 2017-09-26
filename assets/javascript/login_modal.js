function createModal(title, formId, formData) {
  return $("div#global-modal").append(
    $("<form>").attr("id", formId).append(
        $("<div>").addClass("modal-dialog").append(
            $("<div>").addClass("modal-content").append(
                $("<div>").addClass("modal-header").append(
                    $("<button>").addClass("close").data("dismiss", "modal").attr("aria-hidden", "true")
                ).append(
                    $("<h4>").addClass("modal-title").text(title)
                )
            ).append(
              $("<div>").addClass("modal-body").append(
                  formData
                )
            ).append(
                $("<div>").addClass("modal-footer").append(
                  $("<button>").attr('type', 'button').addClass("btn btn-default").data("dismiss", "modal").text("close").on('click', function(e) {
                  	$(this).closest('.modal').modal('toggle');
                  })
                ).append(
                    $("<button>").addClass("btn btn-primary").text("Save changes")
                )
            )
         )  
     )
  ).modal();
};


function showUserForm() {
  createModal("Login", "Create your Profile", $("<div class='col-lg-12'><div class= 'panel-body' id='createProfile'><div class='form-group'><label for='userName'>Name</label><input class='form-control' id='userName' type='text'></div><div class='form-group'><label for='userCity'>Your Location</label><input class='form-control' id='userCity' type='text'></div></div>"))
    .modal('show');
  $('#createProfile').on('hidden.bs.modal', function(e) { 
  	console.log("The Create Profile Modal was closed", e);
  });
}

//TODO: ADD A BUTTON TO HTML TO ENABLE THIS ONCLICK!!!!!!!!!
$("#InitListButton").on("click", function createInitalLitList(){
  e.preventDefault();
  createModal("Create Initial List", $("<div class='col-lg-12'><div class='panel-body' id='createList'><form role='form'><div class='form-group'><label for='text'>Choose a Category</label><select class='form-control' id='itemCategory'><option value='Books'>Books</option><option value='Beauty'>Beauty</option><option value='Health'>Health</option><option value='Sports'>Sports</option><option value='Home'>Home</option><option value='Toys'>Toys</option></select></div><div class='form-group'><label for='item_name'>Type in your Favourite Product</label><input class='form-control' id='item_name' type='text'></div> <div class='form-group'><label for='review'>Why is this your Favourite?</label><input class='form-control' id='review' type='text'></div>"))        
  .modal("show");
  
  $('#CreateInitial').on('hidden.bs.modal', function(e) { 
    console.log("The Add List was closed", e);
  });
});           


$("#addLit").on("click", function AddLitList(e){

	e.preventDefault();
	createModal("Lit", "Add to Lit List", $("<div class='col-lg-12'><div class='panel-body'><form id='add-item-form'><div><label for='profPgCat'>Category</label><select class='form-control' name='profPgCat'><option value='Books'>Books</option><option value='Movies'>Movies</option><option value='Beauty'>Beauty</option><option value='Health'>Health</option><option value='Sports'>Sports</option><option value='Home'>Home</option><option value='Toys'>Toys</option></select></div><br><div><label for='prodAdd'>Type in your favorite product</label><input class='form-control' name='proAdd' type='text'></div><br><div><label for='revAdd'>Write a review</label><input class='form-control' name='revAdd' type='text></div>"))	
	.modal("show");
  $('#AddtoList').on('hidden.bs.modal', function(e) { 
    console.log("The Add List was closed", e);
  });
});

 //showUserForm();
 //createInitialLitList();
 //AddLitList();

 // sessionStorage.setItem('uid','-KuqD0WCyJsJqpjiKCAD');

  var config = {
    apiKey: "AIzaSyD43oZfYX_igbsUwjewJtrNGQr4bpCrzBk",
    authDomain: "litlist-306a8.firebaseapp.com",
    databaseURL: "https://litlist-306a8.firebaseio.com",
    projectId: "litlist-306a8",
    storageBucket: "litlist-306a8.appspot.com",
    messagingSenderId: "188274961247"
  };

  //firebase.initializeApp(config);

  var database = firebase.database();
  var path;

  //userNew;
  //userCityNew;

  $(".btn btn-primary").on("click", function(event) {

    event.preventDefault();

    // Grabs user input
    var userNew = $("#userName").val().trim();
    var userCityNew = $("#userCity").val().trim();
  });

$(".btn btn-primary").on("click", function(event) {

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

  $("#addLit").on("click", function(e) {
    event.preventDefault();
    // Grabs user input
    var naddCategory = $("#addCategory").val().trim();
    var naddName = $("#addName").val().trim();
    var naddReview = $("#addReview").val().trim();

    addItem(naddCategory, naddName, naddReview);
  });


  function addItem(category, name, review) {
    var postObject = {
      nitemCategory: category,
      nitemName: name,
      nitemReview: review,
    };
    var uid = sessionStorage.getItem("uid");

    if (typeof uid == "string" && uid.length) {
      // Write the new post's data simultaneously in the posts list and the user's post list.
      console.log(uid);
      return firebase.database().ref('/users/' + uid + "/items").push(postObject);
    } else {
      // Cannot add item, no user id!
      console.log('Cannot Add Item - No User');
      return false;
    }
  };

  // "Add List Item" click event
  $("#add-item-form").on("submit", function(event) {

    // prevent the form from submitting on default
    event.preventDefault();

    // using postData object to store the name and the movie.
    if (false !== addItem(
      $(this).find('[name="profPgCat"]').val().trim(),
      $(this).find('[name="proAdd"]').val().trim(),
      $(this).find('[name="revAdd"]').val().trim()
    )) {

      var uid = sessionStorage.getItem("uid");
      database.ref('/users/' + uid + "/items").limitToLast(1).on("child_added", function(snap){
      console.log('Last Item Added: ' + snap.key, snap.val());
        // @TODO: Write the snap.val() items to the page somewhere.

      });

    }


  });


