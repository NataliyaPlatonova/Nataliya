app.factory("productsservice",function($resource){
   return{
   	getProducts:function(){
   		return $resource('/project/files/:id',{id:'@id'}).get({id:'products.json'});
   	}
   }
});