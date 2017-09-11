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
    .when("/adminpanel", {
        templateUrl : "adminpanel.htm",
        controller : "experienceCtrl"
    })
    .when("/experience", {
        templateUrl : "experience.htm",
        controller : "experienceCtrl"
    })
    .when("/flights", {
        templateUrl : "flights.htm",
        controller : "flightsCtrl"
    })
    .when("/classes", {
        templateUrl : "classes.htm",
        controller : "classesCtrl"
    })
    .when("/managerpanel", {
        templateUrl : "managerpanel.htm",
        controller : "experienceCtrl"
    })
    .when("/mflights", {
        templateUrl : "mflights.htm",
        controller : "mflightsCtrl"
    })
    .when("/approvals", {
        templateUrl : "approvals.htm",
        controller : "approvalCtrl"
    })
    .when("/mclasses", {
        templateUrl : "mclasses.htm",
        controller : "mclassesCtrl"
    })


});

app.controller('myctrl', function($scope,$timeout,$mdUtil){
    $scope.sidenavvar="side-nav-hidden";
    $scope.today = new Date();
    $scope.toggleSidenav = function() {
            if ($scope.sidenavvar == "side-nav-hidden")
                $scope.sidenavvar = "side-nav-show";
            else
                $scope.sidenavvar = "side-nav-hidden";
        };

   
});

app.controller('mainCtrl', function($scope,$timeout,$mdUtil){
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

app.controller('bookCtrl', function($scope,$timeout,$mdUtil){
     $scope.available = "Yes";
     $scope.ticketprice= 200;
     
});

app.controller('manageCtrl', function($scope,$timeout,$mdUtil){

     
});


app.controller('experienceCtrl', function($scope,$timeout,$mdUtil){

});


app.controller('flightsCtrl', function($scope,$timeout,$mdUtil){
    $scope.flights = [
            {id : "NM204", seats : 200},
            {id : "NM207", seats : 140},
            {id : "NM214", seats : 160}
        ];
    $scope.editorEnabled = false;
    
    $scope.enableEditor = function(title) {
      $scope.editorEnabled = true;
    };
    
    $scope.disableEditor = function() {
      $scope.editorEnabled = false;
    };
    
    $scope.save = function(title) {
      title = $scope.editableTitle;
      $scope.disableEditor();
    };
});

app.controller('mflightsCtrl', function($scope,$timeout,$mdUtil){
    $scope.flights = [
            {id : "NM204", seats : 200},
            {id : "NM207", seats : 140},
            {id : "NM214", seats : 160}
        ];
    $scope.editorEnabled = false;
    
    $scope.enableEditor = function(title) {
      $scope.editorEnabled = true;
    };
    
    $scope.disableEditor = function() {
      $scope.editorEnabled = false;
    };
    
    $scope.save = function(title) {
      title = $scope.editableTitle;
      $scope.disableEditor();
    };
});

app.controller('approvalCtrl', function($scope,$timeout,$mdUtil){
    $scope.pending = [
            {id : "NM204", seats : 200, i:1, approved:true},
            {id : "NM207", seats : 140, i:2, approved:false},
            {id : "NM214", seats : 160, i:3, approved:false}
        ];

   
});



app.controller('classesCtrl', function($scope,$timeout,$mdUtil){
        $scope.price = {first:400, business:300, economy:200};
         $scope.firstfeatures = [
           "Feature 1",
           "Feature 2",
           "Feature 3",
           "Feature 4",
         ];
         $scope.businessfeatures = [
           "Feature 1",
           "Feature 2",
           "Feature 3",
           "Feature 4",
         ];
         $scope.economyfeatures = [
           "Feature 1",
           "Feature 2",
           "Feature 3",
           "Feature 4",
         ];
      $scope.editorEnabled = false;
      
      $scope.enableEditor = function(title) {
        $scope.editorEnabled = true;
      };
      
      $scope.disableEditor = function() {
        $scope.editorEnabled = false;
      };
      
      $scope.save = function(title) {
        title = $scope.editableTitle;
        $scope.disableEditor();
      };
});

app.controller('mclassesCtrl', function($scope,$timeout,$mdUtil){
        $scope.price = {first:400, business:300, economy:200};
         $scope.firstfeatures = [
           "Feature 1",
           "Feature 2",
           "Feature 3",
           "Feature 4",
         ];
         $scope.businessfeatures = [
           "Feature 1",
           "Feature 2",
           "Feature 3",
           "Feature 4",
         ];
         $scope.economyfeatures = [
           "Feature 1",
           "Feature 2",
           "Feature 3",
           "Feature 4",
         ];
      $scope.editorEnabled = false;
      
      $scope.enableEditor = function(title) {
        $scope.editorEnabled = true;
      };
      
      $scope.disableEditor = function() {
        $scope.editorEnabled = false;
      };
      
      $scope.save = function(title) {
        title = $scope.editableTitle;
        $scope.disableEditor();
      };
});