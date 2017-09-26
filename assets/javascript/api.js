// getShopDotComProduct($(this).attr("data-name"), "#product-view")
function getShopDotComProduct(productWanted, parentElement, clickCb) {
  $("#search-results").empty();

  console.log("Product Wanted", productWanted);
  var xhr = new XMLHttpRequest();
  var url = 'https://api.shop.com/sites/v1/search/term/{term}'.replace(/{term}/g, encodeURIComponent(productWanted));
  var queryParams = '?' +  encodeURIComponent('count') + '=' + encodeURIComponent('25')+ '&' +  encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xx0de039764ded43259f9986008beec042');
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

   var products = _.filter(response.searchItems, function(o) { return o.prodID !== 0; });
   products = _.orderBy(products, ['caption'], ['asc']);
   console.log(products);

    for (var i = 0; i < 12; i++) {
      // Creating a div to hold the giphys
      var giphyDiv = $("<div class='giphy col-xs-12 col-sm-6 col-md-4 col-lg-4'>");

      // Storing the rating data
      var ItemName = products[i].caption;
      console.log(ItemName);

      var ItemID = products[i].prodID;
      console.log(ItemID);
      giphyDiv.data("itemID", ItemID);

      // Creating an element to have the product name displayed
      var pOne = $("<p>").text(ItemName);

      // Displaying the rating
      giphyDiv.append(pOne);

      // Retrieving the still and animated URLs for the image
      var stillImgURL = products[i].imageURI;
      var animatedImgURL = products[i].imageURI;

      // Creating an element to hold the image
      var a = $("<img>")
        .attr("src", stillImgURL);
      // Adding a data-attributes
      a.attr("data-still", stillImgURL);
      a.attr("data-state", "still");
      a.attr("data-animate", animatedImgURL);
      // Adding a class of gif to image
      a.addClass ("gif");

      giphyDiv.append(a).on('click', clickCb);

      // Putting images of the clicked item
      $(parentElement).append(giphyDiv);
    };
  });  
}