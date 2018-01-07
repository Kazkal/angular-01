testApp.controller("ajaxController", function ($scope, $http) {  
  
    $scope.loadData = function () {  
        $http.get("products.json").success(function (data) {  
            $scope.products = data;  
        });  
    }  
  
    $scope.loadDataPromise = function () {  
        $http.get("products.json").then(function (response) {  
            console.log("Status: " + response.status);  
            console.log("Type: " + response.headers("content-type"));  
            console.log("Length: " + response.headers("content-length"));  
            $scope.products = response.data;  
        });  
    }  
});  