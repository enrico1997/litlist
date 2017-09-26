// Function for displaying buttons
function renderButtons() {
  // Deleting the images prior to adding new images
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of harryObjects
  for (var i = 0; i < harryObjects.length; i++) {
    // Then dynamicaly generating buttons for each giphy in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>")
      .addClass ("btn btn-primary");
    // Adding a class of giphy to buttons
    a.addClass("giphy");
    // Adding a data-attribute
    a.attr("data-name", harryObjects[i]);
    // Providing the initial button text
    a.text(harryObjects[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

function getShopDotComProduct() {
  var productWanted = $(this).attr("data-name");
  var xhr = new XMLHttpRequest();
  var url = 'https://api.shop.com/sites/v1/search/term/{term}'.replace(/{term}/g, encodeURIComponent(productWanted));
  var queryParams = '?' +  encodeURIComponent('count') + '=' + encodeURIComponent('10')+ '&' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx0de039764ded43259f9986008beec042');
  xhr.open('GET', url + queryParams);
  xhr.onreadystatechange = function (response) {
      if (this.readyState == 4) {
          alert('Status: '+this.status+'\nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'\nBody: '+this.responseText);
      }
  };

  // xhr.send('');


  // Creating an AJAX call for the specific button being clicked
  $.ajax({
    url: url + queryParams,
    method: "GET"
  }).done(function(response) {
    console.log(response);

    for (var i = 0; i < 10; i++) {
      // Creating a div to hold the giphys
      var giphyDiv = $("<div class='giphy col-xs-12 col-sm-6 col-md-4 col-lg-4'>");

      // Storing the rating data
      var ItemName = response.searchItems[i].caption;
      console.log(ItemName);

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Product Name: " + ItemName);

      // Displaying the rating
      giphyDiv.append(pOne);

      // Retrieving the still and animated URLs for the image
      var stillImgURL = response.searchItems[i].imageURI;
      var animatedImgURL = response.searchItems[i].imageURI;

      // Creating an element to hold the image
      var a = $("<img>")
        .attr("src", stillImgURL);
      // Adding a data-attributes
      a.attr("data-still", stillImgURL);
      a.attr("data-state", "still");
      a.attr("data-animate", animatedImgURL);
      // Adding a class of gif to image
      a.addClass ("gif");

      giphyDiv.append(a);
      
      // Putting images of the clicked item
      $("#product-view").prepend(giphyDiv);
    };
  });  

}

// Function re-renders the HTML to display the appropriate content
function displayGiphyInfo() {
  var giphy = $(this).attr("data-name");
  // queryURL for Giphy API
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=914b704852054f13af2d496c8de8b17e&q=" + giphy + "&limit=10&offset=0&rating=PG-13&lang=en";
  console.log("queryURL: " + queryURL);

  // Creating an AJAX call for the specific button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);

    for (var i = 0; i < 10; i++) {
      // Creating a div to hold the giphys
      var giphyDiv = $("<div class='giphy col-xs-12 col-sm-6 col-md-4 col-lg-4'>");

      // Storing the rating data
      var rating = response.data[i].rating.toUpperCase();

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Rating: " + rating);

      // Displaying the rating
      giphyDiv.append(pOne);

      // Retrieving the still and animated URLs for the image
      var stillImgURL = response.data[i].images.fixed_width_still.url;
      var animatedImgURL = response.data[i].images.fixed_width.url;

      // Creating an element to hold the image
      var a = $("<img>")
        .attr("src", stillImgURL);
      // Adding a data-attributes
      a.attr("data-still", stillImgURL);
      a.attr("data-state", "still");
      a.attr("data-animate", animatedImgURL);
      // Adding a class of gif to image
      a.addClass ("gif");

      giphyDiv.append(a);
      
      // Putting images of the clicked item
      $("#product-view").prepend(giphyDiv);
    };
  });
  // Clears chosen items on screen for next set
  $("#product-view").empty();
}

// ******** For testing only **********

// Initial array of Harry Potter objects
var harryObjects = ["Potter", "Pizza", "Pantene"];

// Function for displaying buttons
function renderButtons() {
  // Deleting the images prior to adding new images
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of harryObjects
  for (var i = 0; i < harryObjects.length; i++) {
    // Then dynamicaly generating buttons for each giphy in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>")
      .addClass ("btn btn-primary");
    // Adding a class of giphy to buttons
    a.addClass("giphy");
    // Adding a data-attribute
    a.attr("data-name", harryObjects[i]);
    // Providing the initial button text
    a.text(harryObjects[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}



//Main Process

// Adding a click event listener to all elements with a class of "giphy"
$(document).on("click", ".btn-primary", getShopDotComProduct);

// Calling the renderButtons function to display the initial buttons
renderButtons();