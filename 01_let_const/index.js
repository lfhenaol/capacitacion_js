// var

(function () {
  // IIFE: Expresión de función ejecutada inmediatamente

  {
    var x = 1;

    function modificarXY(value) {
      x = value + 3;
      y += 2;
    }

    if (x) {
      var y = 2;
    }

    modificarXY(5);

    console.log(y);
  }

  console.log(x);
})();

//let y const
