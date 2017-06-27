var app=angular.module("mainapplication");
app.controller("productscontroller",function($scope,$resource,productsservice){
  productsservice.getProducts().$promise.then(function(product){

   $scope.product=product;
   console.log(product);
},function(response){

   console.log()

  })






});