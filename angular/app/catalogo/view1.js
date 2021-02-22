'use strict';


angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/catalogo', {
    templateUrl: 'catalogo/catalogo.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {

    this.$onInit = () => {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/users/select'
        }).then(function (response){
            $scope.testes = response.data.resultados;
        });
    }

    $scope.variavel = false;
    $scope.openPopUp = function (){
        $scope.variavel = true;
    }

    $scope.addteste = function (){
      $http({
          method: 'POST',
          url: 'http://localhost:3000/users/livros',
          data: {nome: 'Harry Potter', subtitulo: 'E a Pedra Filosofal', resumo: 'harry pega a pedra', isbn: '5235658553',
          preco: '25,50', imagem: 'https://images-na.ssl-images-amazon.com/images/I/816+H9MWtDL.jpg'}
      });
      console.log($http.data);
    };
}]);