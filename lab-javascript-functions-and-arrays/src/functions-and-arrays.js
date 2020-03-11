// Progression #1: Greatest of the two numbers
var n1=99;
var n2=100;
function maximun(){
  if(n1>n2)
  console.log(n1+"is greatest");
  else
  console.log(n2+"is greatest");
}
function maximun();
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function words(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}

console.log(words(['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']))
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  if (numbers.length == 1) {
    var add = 0;
    return (add = add + numbers[0]);
  } else {
    var add = 0;
    for (let i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      add = add + num;
    }
    return add;
  }
}

function add(ary) {
  var add = 0;
  var len_of_ary = ary.length;
  if (len_of_ary == 0) {
    return add;
  }
  if (len_of_ary == 1) {
    return (add = add + ary[0]);
  }
  for (let i = 0; i < len_of_ary; i++) {
    if (typeof ary[i] == "string") {
      let len = ary[i].length;
      add = add + len;
    }
    if (typeof ary[i] == "boolean") {
      if (ary[i] == true) {
        add = add + 1;
      }
    }
    if (typeof ary[i] == "number") {
      add = add + ary[i];
    }
  }
  return add;
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function search(array, word) {
  if (array.length == 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == word) {
        return true;
      }
    }

    return false;
  }
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];


function noofrep(array, word) {
  var count = 0;
  if (array.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == word) {
        count = count + 1;
      }
    }
    return count;
  }

console.log(count);
  
}
function noofrep(array,word);



// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
