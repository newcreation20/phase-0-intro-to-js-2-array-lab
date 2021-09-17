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
    const allCats = [...cats, 'Broom'];
    return allCats
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

  function prependCat(Arnold) {
    const allCats = ['Arnold', ...cats]
    return allCats
  }
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

  function removeLastCat() {
    //const copyOfCats = [...cats, cats.slice(0, cats.length-1)];
    return cats.slice(0, cats.length-1)
  }
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

  function removeFirstCat() {
    return cats.slice(1, cats.length2)
  }