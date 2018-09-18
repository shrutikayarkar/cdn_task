var app = angular.module("myApp",[]);

app.controller('myCtrl', function($scope, $http,$window){

		$scope.alldata = [];
		$scope.newdata = {};


            $scope.add = function(){
            	$http({
            		method:"post",
            		url : "studentWebService",
            		data : $scope.newdata
            	}).then(function(res){
               $scope.alldata.push(res.data);
               $window.location.href = "/login";
				});             
            }

        //     $scope.getdata = function(){
        //        $http({
        //           method :"get",
        //           url :'studentWebService'
        //        }).then(function(res){
        //           $scope.newdata = res.data;
        //           // console.log(res.data);
        //        });
        //     }

        //  $scope.update = function(){
        //     $http({
        //        method :"post",
        //        url :'studentWebService/update',
        //        data : $scope.newdata
        //     }).then(function(res){
        //        console.log(res.data);
        //        $scope.newdata = res.data;
        //        console.log("++++"+$scope.newdata);
        //     });
        //  }     
        
        $scope.getdata = function(){
            $http({
                method:"GET",
                url:"userwebservice"
            }).then(function(res){
                $scope.alldata = res.data;
            });
        }
    
    
        $scope.askdel = function(obj){
            $scope.selectedobj = obj;
        }
    
    
        $scope.delete = function(){
            $http({
                method:"DELETE",
                url:"userwebservice?id="+$scope.selectedobj.id
            }).then(function(res){
                // console.log(res.data);
            });
            $scope.getdata();
        }
    
    
        $scope.updata = function(obj){
            // $scope.newdata = obj;
            angular.copy(obj,$scope.newdata);
        }
    
    });


         });
        