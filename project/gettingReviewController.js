var app=angular.module("mainapplication");
app.controller("gettingReviewController",function($scope,$resource,reviewsservice){
  reviewsservice.getReviews().$promise.then(function(review){

   $scope.review=review;
   console.log(review);
},function(response){

   console.log()

  })






});