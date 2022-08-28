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

    console.log('Y',y);
  }

  console.log('X', x);
})();



//let y const

(function () {
  // IIFE: Expresión de función ejecutada inmediatamente

  {
    const value = {};
    let x = 1;
    let y;

    value.x = 5;
    console.log('VALUE X:', value.x)

    value.x = [];
    console.log('VALUE X:', value.x)

    function modificarXY(value) {
      let x = value + 3;
      y += 2;
    }

    if (x) {
      let y = 2;
      console.log(y);
    }

    modificarXY(5);

    console.log('Y',y);
  }

  let x = null;
  console.log('X', x);
})();