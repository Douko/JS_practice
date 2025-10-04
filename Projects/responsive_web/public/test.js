let array = [1, 2, 3];
const iterat = array[Symbol.iterator]();

console.log(iterat.next().value);
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (a of array3) {
  console.log(a[0] + a[1]);
}
