let arr = [4, 5, 6, 7, 3, 2];
let mapArr = arr.map(function(mapArr){
   return mapArr * 4;
});
console.log(`the map array is ${mapArr}`);

//multiplying the array values
function multiplyArr(arr){
   let result = 1;
   for (let v of arr) {
      result *= v;
   }
   return result;
}
console.log(`own function result is ${multiplyArr(arr)}`);





//multiplying using recursion
const multiplyWithRecursion = arr => {
   let arrClone = [...arr];
   if (arrClone.length === 2){
      return arrClone[0] * arrClone[1];
   }
   return multiplyWithRecursion(arrClone.splice(0, arrClone.length - 1)) * arrClone[arrClone.length - 1];
}
console.log(`recursion result is ${multiplyWithRecursion(arr)}`);

console.log(arr); //checking the array here
