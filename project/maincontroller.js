
var app=angular.module("mainapplication");
app.controller("maincontroller",function($scope,$location,$locale){
  $scope.products=function(){
  	$location.path("/products");
  };
  $scope.gettingReview=function(reviews){
  	$location.path("/gettingReviews");
  	$scope.review=reviews;
  	$scope.splitreview=$scope.review.split(".");
  };

   $scope.date = Date.now();
      $scope.myFormat=$locale.DATETIME_FORMATS.fullDate;

  
   $scope.y={};
	$scope.add=function(){
      $scope.information.newreviews.push($scope.y);
      $scope.y={};
	};
 $scope.information={
        newreviews:[
        
         ]
     };

      $scope.buyPage=function(image,product,stock,price,shipping,thereview)
      {
    $location.path("/buy");
    $scope.productImage=image;
    $scope.productDiscription=product;
    $scope.productStock=stock;
    $scope.productPrice=price;
    $scope.productShipping=shipping;
    $scope.productReview=thereview;
    $scope.splitreview2=$scope.productReview.split(".");
  };
  $scope.confirm=function(product,shipping){
    $location.path("/confirmPage");
  };

  $scope.pay=function(product,price){
     $location.path("/orderConfirmed");
      

   var card=document.getElementById("cardNumber").value;
  if(card.length<16||card.length>16||card.match(/^[0-9]/gi)){
    alert("card number is wrong");
  } 
  var name=document.getElementById("cardName").value;
  if(name.match(/[0-9]/gi)){
    alert("name can not contain numbers");
  }
  var cvv=document.getElementById("cvv").value;
  if(cvv.length<3||cvv.length>3||cvv.match(/[A-Z]/gi)){
    alert("cvv number should contain 3 digits");
  }
  var zipcode=document.getElementById("zip").value;
  if(zipcode.match(/^[A-Z]/gi)||zipcode.length<6||zipcode.length>6){
    alert("zipcode should contain only numbers");
  }
};

 });









