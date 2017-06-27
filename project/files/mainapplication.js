var app=angular.module("mainapplication",['ngRoute', 'ngResource']);
app.config(function($routeProvider){
    $routeProvider.when("/products",{
     templateUrl:"products.html",
     controller:"productscontroller"
    })
    .when("/gettingReviews",{
    	templateUrl:"gettingReview.html",
    	controller:"maincontroller"
    })
    .when("/buy",{
    	templateUrl:"buy.html",
    	controller:"maincontroller"
     
    })
    .when("/confirmPage",{
    	templateUrl:"confirm.html",
    	controller:"maincontroller"
    }) 
    .when("/orderConfirmed",{
    	templateUrl:"orderconfirmed.html",
    	controller:"maincontroller"
     
    });
});
