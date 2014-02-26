ticTacToe = angular.module 'TicTacToe', []

ticTacToe.controller 'BoardController', ($scope) ->
    $scope.cells = {}

    $scope.mark = (cell) ->
      mark = if object.keys($scope.cells).length % 2 == 0 then 'x' else 'o'
      $scope.cells[cell] = mark

<div id="cell-0" data-index="0" data-ng-click="mark(0)" class="board-cell top left">{{cells.0}}</div>