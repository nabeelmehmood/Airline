var app = angular.module("myAirlineRoute", ['ngRoute','ngAnimate','ngMaterial']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/book", {
        templateUrl : "book.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});

app.controller('myctrl', function($scope){
    $scope.sidenavvar="side-nav-hidden";
    $scope.today = new Date();
    $scope.toggleSidenav = function() {
            if ($scope.sidenavvar == "side-nav-hidden")
                $scope.sidenavvar = "side-nav-show";
            else
                $scope.sidenavvar = "side-nav-hidden";
        };

   
});

app.controller('mainCtrl', function($scope){
    $scope.loginmodal = "teal";
    $scope.signupmodal= "grey";
    $scope.loginmodaltoggle = function(){
        $scope.loginmodal="teal";
        $scope.signupmodal="grey";
    };
    $scope.signupmodaltoggle = function(){
        $scope.signupmodal="teal";
        $scope.loginmodal="grey";
    };
    $scope.loginhide = false;
    $scope.signuphide = true;
    $scope.modalshow = "show-signup-modal-hide";
    
});
