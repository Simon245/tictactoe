// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var cnt;
    cnt = 0;
    return $('.board-cell').on('click', function(e) {
      var mark;
      mark = cnt % 2 === 0 ? 'x' : 'o';
      if ($(this).text() === '') {
        $(this).text(mark);
        $(this).addClass(mark);
        return cnt += 1;
      }
    });
  });

}).call(this);

//# sourceMappingURL=game.map