// let arr=["apple","orang","apple","orang","apple","grapes"]
// let obj={};
// for(let i=0;i<arr.length;i++){
//     let count=arr[i];
//     if(obj[count]){
//         obj[count]+=1;
//     }else{
//         obj[count]=1;
//     }
// }

// console.log(obj);

//1-100

// let arr=[]
// for(let i=1;i<100;i++){
//     if(i%5==0 && i%3==0){
//         arr.push("fizzbuzz");
//     }
//     else if (i%3==0){
//         arr.push("fizz");
//     }
//     else if (i%5==0){
//          arr.push("buzz");
//     }
//     else{
//         arr.push(i);
//     }

// }
// console.log(arr);


// let arr=[[5,7,9],[3,2,6],[4,7,3]]
// let sum=0
// for(let i=0; i<arr.length;i++){
//     sum+=arr[i][i]
// }
// console.log(sum);

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// let list1 = [1,2,4], list2 = [1,3,4]
// let arr=[]
// for(let i=0;i<list1.length;i++){
//     arr.push(list1[i])

// }
// for(let j=0;j<list2.length;j++){
//     arr.push(list2[j])
// }   
// arr.sort((a,b)=>a-b)
// console.log(arr);




// function mergeSortedLists(list1, list2) {
//   let mergedList = [];
//   let i = 0; 
//   let j = 0; 
//   while (i < list1.length && j < list2.length) {
//     if (list1[i] <= list2[j]) {
//       mergedList.push(list1[i]);
//       i++;
//     } else {
//       mergedList.push(list2[j]);
//       j++;
//     }
//   }
//   while (i < list1.length) {
//     mergedList.push(list1[i]);
//     i++;
//   }
//   while (j < list2.length) {
//     mergedList.push(list2[j]);
//     j++;
//   }

//   return mergedList;
//   console.log(mergedList);
// }



// let digits = [4,3,2,1]
// let len = digits.length
// function plusOne(digits, len){
//   for(let i = len-1; i >= 0; i--){
//     if(digits[i] < 9){
//       digits[i] = digits[i]+1
//       break
//     }else{
//       if(i !== 0){
//         digits[i] = 0;
//       }else{
//         digits[i] = digits[i]+1
//       }
//     }
//   };
//   if(digits[0]>9){
//     digits[0] = 0
//     digits.unshift(1)
//   }
//   console.log(digits)
// };
// plusOne(digits, len)

// Counter
//  n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// let arr =["call","call","call"]
// let count=n;
// let res=[]  
// for(let i=0;i<arr.length;i++){
//     if(arr[i]=="call"){  
//         res.push(count)
//         count++;
//     }
// // }
// console.log(res);   
// let n=10
// var createCounter = function(n) {
//     let arr=[]
//     for(let i=n;i<10;i++){
//         arr.push(i)
//         console.log(arr);
//     }
//     return function (i) {
//         n++;
//         return n-1;     
//     };
// };
// let counter = createCounter(n); 
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12           


// let init=5
// let arr=[]
// var createCounter = function(init) {
//     for(let i=init;i<10;i++){   
//         arr.push(i+=1);
//     }
//     console.log(arr);
//     else if( init>10){
//      i=init i<+

//     }
   
// };
// let counter = createCounter(init); 
