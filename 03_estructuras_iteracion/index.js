// for
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// while
let j = 0;
while (j < 6) {
  j++;
}

// do ..while

let k = 0;
do {
  k++;
} while (k < 6);

// for ..in
const array1 = [1, 2, 3, 4, 5, 6];
for (const pos in array1) {
  console.log(array1[pos]);
}

// for ..of
const array2 = [['Hello'], 2, 3, 4, 5, 6];
for (const value of array2) {
  console.log(value);
}

// break y continue
const array3 = [['Hello'], 2, 3, 4, 5, 6];
for (const value of array3) {
  console.log(value);
  if (value === 3) {
    break;
  }
}
