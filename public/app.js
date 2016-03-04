angular.module("InventoryApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('List',{
        url:"/list",
        views:{
          'main':{
            templateUrl:'public/views/partials/list.html',
            controller:'TestController'
          }
        }
      }).state('single',{
        url:"/list/:singleId",
        views:{
          'main':{
            templateUrl:'public/views/partials/list.single.html',
            controller:'TestController'
          }
        }
      }).state('Home',{
        url:"/",
        views:{
          'main':{
            templateUrl:'public/views/partials/home.html'
          }
        }
      });
  })
  .controller("TestController", function($scope, $stateParams){
    $scope.singleId = $stateParams.singleId;
    $scope.datas = [
      {
      title:"Sean",
      desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      },
      {
      title:"Sean",
      desc:"AJDKLaksjdkajsk",
      a:{href:"http://youtube.com", display:"Youtube"}
      },
      {
      title:"Bill",
      desc:"i32980v0qbnv0",
      a:{href:"http://google.ca", display:"Google"}
      },
      {
      title:"Adam",
      desc:"vishv02h1-0h-ahia",
      a:{href:"http://yahoo.ca", display:"Yahoo"}
      },
      {
      title:"Dylan",
      desc:"jva;289hlskhv01hv",
      a:{href:"http://cnn.com", display:"CNN"}
      },
      {
      title:"James",
      desc:"dav02hv02h48ha8vh",
      a:{href:"http://reddit.com", display:"Reddit"}
      }

    ];
  });
