app.factory("reviewsservice",function($resource){
   return{
   	getReviews:function(){
   		return $resource('/project/files/:id',{id:'@id'}).get({id:'products.json'});
   	}
   }
});