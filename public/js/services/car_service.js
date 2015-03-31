angular.module('carService',[]).factory('Cars',['$http',function($http){
	return {
		get    : function(){
			return $http.get('/api/cars');
		},
		create : function(carData){
			return $http.post('/api/cars',carData);
		},
		delete : function(id){
			return $http.delete('/api/cars/'+id);
		}
	}
}])