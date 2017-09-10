var app = angular.module("myAirlineRoute", ['ngRoute','ngAnimate','ngMessages','ngMaterial','ngAria']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm",
        controller : "mainCtrl"
    })
    .when("/book", {
        templateUrl : "book.htm",
        controller : "bookCtrl"
    })
    .when("/manage", {
        templateUrl : "manage.htm",
        controller : "manageCtrl"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});

app.controller('myctrl', function($scope,$timeout,$mdSidenav,$mdUtil){
    $scope.sidenavvar="side-nav-hidden";
    $scope.today = new Date();
    $scope.toggleSidenav = function() {
            if ($scope.sidenavvar == "side-nav-hidden")
                $scope.sidenavvar = "side-nav-show";
            else
                $scope.sidenavvar = "side-nav-hidden";
        };

   
});

app.controller('mainCtrl', function($scope,$timeout,$mdSidenav,$mdUtil){
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

app.controller('bookCtrl', function($scope,$timeout,$mdSidenav,$mdUtil){
     $scope.available = "Yes";
     $scope.ticketprice= 200;
     
});

app.controller('manageCtrl', function($scope,$timeout,$mdSidenav,$mdUtil){
     $scope.available = "Yes";
     $scope.ticketprice= 200;
     
});