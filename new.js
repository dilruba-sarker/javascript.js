// // function factorial(numbers) {
// //          if (numbers === 0 || numbers === 1) {
// //              return 1;
// //         }
    
// //      let result = 1;
    
// //         for (let i = numbers; i >= 1; i--) {
// //              result = result * i;
// // //          }
// // //         return result;
// // //      }
    
// // //      console.log(factorial(5))
// // //     // console.log(factorial(0))
    

// // function factorial(num){
// //     if(num === 0 || num=== 1){
// //         return 1
// // //     }
// // //     let result=1;
// // //     for(let i=num;i>=1;i--){
// // //         result=result*i
// // //     }
// // //     return result
// // // }
// // // console.log( factorial(4))

// // // function findLargest(arr){
// // //     let largest=arr[0];
// // //     for(let i=1; i<arr.length; i++){
// // //         let currentValue=arr[i];
// // //         if(currentValue>largest){
// // //              largest = currentValue
                
            
// // //         }
       
// // //     }
// // //     return largest
// // // }

// // // var array=[16,12,23,14,12,13,60]
// // // console.log(findLargest(array))


// // function boroBondhu(arr){
// //     let boro=arr[0];
// //     for(let i=1;i<arr.length;i++){
    
// //         if(arr[i].length>boro.length){
// //             boro=arr[i]
// //         }
// //     }
// //         return boro
          

// // }
// // let arr=["bok","mukta","minaa","tauhid","mustahidul"]
// // console.log(boroBondhu(arr))

// function add(a,b){
//     if(typeof a !=="number" && typeof b !=="number"){
//         return "please give me number"
//     }
//     return a+b
// }

// console.log( add(9,'2'))


// function sum( arr){
//     if(!Array.isArray(arr)){
//         return "give me valid number"
//     }
//     let sum=0;
//     for(let i of arr){
//         sum+=i
//     }
//     return sum

// }
// let x=[1,2,3,4,5,6]
// console.log(sum(2526))


// const userName="blackPriNt";
// const userInput="blackprinT";
// if( userName.toLowerCase()=== userInput){
//     console.log("valid number")
//   }
//   else{console.log("invalid")
// }
// let a= "Dilruba Sarker"
// let toLowerCase=a.toLowerCase();
// let search= "Sarker".toLowerCase();
// console.log(toLowerCase.includes( search))

// let finalSearce=toLowerCase.indexOf('Sarker')
// console.log(finalSearce)
const sentence="The name of our country is Bangladesh";
let search=sentence.split("")
console.log(search)
// if(search !== -1){
//     console.log("number is in the string")
// }else{console.log("number is not in the string")}
