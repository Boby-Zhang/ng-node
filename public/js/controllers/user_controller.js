angular.module('userCtrl',[])
	.controller('userController',['$scope','$http','Users',function($scope,$http,Users){
		$scope.formData = {};
		$scope.loading = true;
		Users.get().success(function(data){
			$scope.users = data;
			$scope.loading = false;
		});

		$scope.createUser = function(){
			console.log('createUser',$scope.formData.name);
			if($scope.formData.name != undefined){
				$scope.loading = true;
				Users.create($scope.formData)
					.success(function(data){
						$scope.loading = false;
						$scope.formData = {};
						$scope.users = data;
					});
			}
		};

		$scope.deleteUser = function(id){
			$scope.loading = true;
			Users.delete(id)
			.success(function(data){
				$scope.loading = false;
				$scope.users = data;
			})
		};






	}])