angular.module("course-rate-app.controllers", []).controller("course-rate-ctrl", function ($scope,$http) {
    $scope.courses = [{
        number: "CS5610",
        title: "Web Development",
    }, {
        number: "CS5010",
        title: "Program Design Paradigm",
    }, {
        number: "CS6200",
        title: "Information Retrieval",
    }]
    $scope.newcourse = {};
    $scope.addcourse = function (number, title) {
        $scope.courses.push({
            number: number,
            title: title,
            score: 0
        });
        console.log($scope.newcourse);
        $http.post("/courselist", $scope.newcourse)
        .success(function (doc) {
            
            console.log(doc);
		$scope.all();
        });
    };
    
    $scope.deletecourse = function (idx) {
        $scope.courses.splice(idx, 1);
    };
    $scope.isEmpty = function (str) {
        return _.isBlank(str);
    };
    _.mixin(_.string.exports());

    var rendercourses = function (response) {
        $scope.courses = response;
    }
$scope.all = function () {
    $http.get("/courselist")
    .success(rendercourses);
}
   
});



angular.module("song-app.controllers", []).controller("song-ctrl", function ($scope,$http) {

        $scope.playsong = function (value) {
        $http.post("/songs",$scope.songs.value);
    };
    $http.post("/", $scope.newcourse)
    $scope.isEmpty = function (str) {
        return _.isBlank(str);
    };
    _.mixin(_.string.exports());

    var rendercourses = function (response) {
        $scope.courses = response;
    }

    $http.get("/courselist")
    .success(rendercourses);

   
});



























