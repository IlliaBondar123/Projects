let arr = [
  {name: 'milk', ammount: 1, bought: '+', price: 22},
  {name: 'bread', ammount: 1, bought: '-', price: 11},
  {name: 'fish', ammount: 1, bought: '+', price: 45},
  {name: 'plate', ammount: 1, bought: '-', price: 110},
  {name: 'pillow', ammount: 1, bought: '-', price: 78}
];

let newArr = [];
let secondArr = [];
let thirdArr = [];
let a = '+';

function showMessage () {
  let a = '+';
  for (let i = 0; i < arr.length; i++){
    if (arr[i].bought === a){
      console.log("True:", arr[i]);
      newArr.push(arr[i]);
    } 
    else {
    console.log("False:", arr[i])
    secondArr.push(arr[i]);
  }
  }
  newArr.push(secondArr);
} 

function buyProduct (b) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i].name === b){
        arr[i].bought = '+';
        console.log(arr);
  }
}
}
function deleteProduct () {
  thirdArr.push(arr.splice(3, 4))
};

function addProduct (c) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === c) {
      arr[i].ammount = arr[i].ammount + 1;
      arr[i].price = arr[i].price + arr[i].price;
      arr[i].bought = '+';
      return;
    }
  }
  arr.push({ name: c, ammount: 1, bought: '+', price: 234});
}


buyProduct (b = 'plate');

showMessage();

console.log(newArr);

console.log(secondArr);

alert (JSON.stringify(newArr));

deleteProduct();

console.log(arr);

addProduct(c = 'tea');

addProduct(c = 'fish');
