angular.module('carCtrl',[])
	.controller('carController',['$scope','$http','Cars',function($scope,$http,Cars){
		$scope.formData = {};
		$scope.loading = true;
		Cars.get().success(function(data){
			$scope.cars = data;
			$scope.loading = false;
		});

		$scope.createCar = function(){
			console.log('createCar',$scope.formData.name);
			if($scope.formData.name != undefined){
				$scope.loading = true;
				Cars.create($scope.formData)
					.success(function(data){
						$scope.loading = false;
						$scope.formData = {};
						$scope.cars = data;
					});
			}
		};

		$scope.deleteCar = function(id){
			$scope.loading = true;
			Cars.delete(id)
			.success(function(data){
				$scope.loading = false;
				$scope.cars = data;
			})
		};






	}])