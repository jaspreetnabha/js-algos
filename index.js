// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Algos</h1>`;

let obj = { id: '1', name: 'user', age: '26', work: 'programmer' };

// console.log(Object.entries(obj));
console.log('Arry ', Object.entries(obj));
console.log('Keys', Object.keys(obj));
console.log('Values', Object.values(obj));

function convertToArray(onj) {
  const arr = [];
  const keys = [];
  const values = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
    key.push(key);
    values.push(obj[key]]);
  }
  console.log(arr);
}
// convertToArray(obj);

function findDuplicate(inputString) {
  let arrString = inputString.split('');
  let interimObj = {};
  let interimObjDuplicates = [];
  for (let i = 0; i < arrString.length; i++) {
    console.log(interimObj[arrString[i]]);
    if (interimObj[arrString[i]] !== undefined) {
      if (!interimObjDuplicates.includes(arrString[i])) {
        interimObjDuplicates.push(arrString[i]);
      }
    } else {
      interimObj[arrString[i]] = 1;
    }
  }
  console.log(interimObjDuplicates);
}
findDuplicate('Hello World');
