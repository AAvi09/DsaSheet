// Find the maximum number in an array

let arr = [10, 25, 30, 40, 50, 60, 70, 80, 90, 100];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

// Find the minimum number in an array
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);

// Find the second maximum number in an array
let arr2 = [
  15, 6, 89, 54, 62, 21, 37, 39, 52, 100, 98, 99, 100, 101, 102, 103, 104, 105,
  106, 107, 108, 109, 110,
];
let firstMax = Math.max(arr2[0], arr2[1]);
let secondMax = Math.min(arr2[0], arr2[1]);

for (i = 2; i < arr2.length; i++) {
  if (max < arr2[i]) {
    secondMax = firstMax;
    firstMax = arr2[i];
  }
}
console.log(secondMax);

// reverse an array
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp = new Array(arr3.length);
let j = 0;
for (let i = arr3.length - 1; i >= 0; i--) {
  temp[j] = arr3[i];
  j++;
}
console.log(temp);

let arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let m = 0;
let k = arr4.length - 1;
while (m < k) {
  let tempo = arr4[m];
  arr4[m] = arr4[k];
  arr4[k] = tempo;
  m++;
  k--;
}
console.log(arr4);

let arr5 = [
  1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0,
  1, 1, 0, 1, 0, 1, 1, 0, 1,
];
let a = 0,
  b = 0;
while (a < arr5.length) {
  if (arr5[a] == 0) {
    let khali = arr5[a];
    arr5[a] = arr5[b];
    arr5[b] = khali;
    b++;
  }
  a++;
}
console.log(arr5);
