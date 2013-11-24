/********************************************************************************
FUNCTION FOR CROSS DOMAIN AJAX REQUEST USING JQUERY 1.5+
********************************************************************************/  
function loadContents(url, callback) {  
 
    //CONFIRM A URL WAS PROVIDED  
    if(url) {  
 
	    //SET URL FOR YAHOO YQL QUERY
	    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + url + '"') + '&format=xml&callback=?';  
 
		//MAKE YAHOO YQL QUERY  
	   	$.getJSON(yql,function(data) {
 
			//BUILD CALLBACK FUNCTION
			if(typeof callback === 'function') {  
			    callback(data.results[0]);  
			}  
 
		//WRITES ERROR TO LOG	
	    }).error(function(jqXHR, textStatus, errorThrown) { 
	    	console.log(errorThrown); }
	    );
 
  	//LOG ERROR IF NO URL WAS PASSED TO THE SCRIPT
  	} else {
  		 console.log('No site was passed to the script.'); 
  	}
 
} 
 
var app = angular.module('trhsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
			templateUrl: 'schedule.html',
			controller: schedCtrl
	});

	$routeProvider.when('/weather', {
			templateUrl: 'weather.html',
			controller: weatherCtrl
	});

	$routeProvider.when('/dates', {
			templateUrl: 'dates.html', 
			controller: dateCtrl
	});

	$routeProvider.when('/more', {
			templateUrl: 'more.html', 
			controller: moreCtrl
	});

	$routeProvider.when('/policies', {
			templateUrl: 'policies.html', 
			controller: policyCtrl
	});

	$routeProvider.when('/feedback', {
			templateUrl: 'feedback.html',
			controller: feedbackCtrl
	});
});

function viewCtrl($scope, $http) {

}

function schedCtrl($scope) {
	$scope.pOne = localStorage.pOne;
	$scope.pTwo = localStorage.pTwo;
	$scope.pThree = localStorage.pThree;
	$scope.pFour = localStorage.pFour;
	$scope.pFive = localStorage.pFive;
	$scope.pSix = localStorage.pSix;
	$scope.pSeven = localStorage.pSeven;
	$scope.pEight = localStorage.pEight;

	$('.schedSubmit').click(function() {
		localStorage.pOne = $scope.pOne;
		localStorage.pTwo = $scope.pTwo;
		localStorage.pThree = $scope.pThree;
		localStorage.pFour = $scope.pFour;
		localStorage.pFive = $scope.pFive;
		localStorage.pSix = $scope.pSix;
		localStorage.pSeven = $scope.pSeven;
		localStorage.pEight = $scope.pEight;
		alert('Saved!');
	});
}

function weatherCtrl($scope) {
	loadContents('https://www.dcsdk12.org/schoolclosureinformation/', function(results) {  
   		$('.weatherDeets').html(results); 
	});
}

function dateCtrl($scope, $http) {
	$http({method: 'GET', url: 'dates.json'}).success(function(data) {
		$scope.dates = data;
	});
}

function moreCtrl($scope) {

}

function policyCtrl($scope){

}

function feedbackCtrl($scope){
	
}