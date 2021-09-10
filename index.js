const cats = ['Milo', 'Otis', 'Garfield']

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(Ralph) {
    cats.push('Ralph');
  }
  
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyPrependCat(Bob) {
      cats.unshift('Bob');
  }
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

  function destructivelyRemoveLastCat() {
      cats.pop('Garfield');
  }
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

  function destructivelyRemoveFirstCat() {
      cats.shift('Milo');
  }
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

  function appendCat(Broom) {
      //const copyOfCats = cats.slice();
      cats.push(Broom);
  }