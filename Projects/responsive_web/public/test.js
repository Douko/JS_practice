let array = [1, 2, 3];
const iterat = array[Symbol.iterator]();

console.log(iterat.next().value);
