// // number-------1
// function cubeNumber(number){
//     if(typeof number !=="number"){
//         return "please provide me valid number"
//     }else{
//         if(number>0){
//             return number **3
//         }
//         else{ return "Invalid input. Please provide a positive number."}
//     }
// }

// console.log(cubeNumber("hjrher"));
// console.log(cubeNumber(4));
// console.log(cubeNumber(-2));

// 2 problem..............

// function matchFinder(string1, string2) {
//     if(typeof string1 !=="string" || typeof string2 !== "string"){
//         return" please provide a valid input"
//     }
//     if(string1.includes(string2)){return true}
//     else{return false}
// }

// const string1="Javascript "
// const string2=  123;

// console.log(matchFinder(string1, string2));

// // ----------- problem 3




// function sortMaker(arr) {
//     if (arr[0] < 0 || arr[1] < 0) {
//         return "Invalid Input";
//     } else if (arr[0] === arr[1]) {
//         return "equal";
//     } else if ( arr[0]>0 && arr[1]>0) {
      
//         return [ arr[1],arr[0]]
//     } else {
//         return arr;
//     }
// }

// console.log(sortMaker([2, 3]));   
// console.log(sortMaker([4, 2]));  
// console.log(sortMaker([4, 4]));   
// console.log(sortMaker([1, 2])); 
// console.log(sortMaker([4, -2]));  

// // ----------- problem 4

// function findAddress(obj) {

//     const street=obj.street || "__";
//     const house=obj. house || "__";
//     const society=obj.society || "__";
//     return street + ","+ house + "," + society;
// }

// const obj={
    
//     society: "Earth Perfect" 
// }

// console.log(findAddress(obj));


// 5problem----------------

// function canPay(changeArray, totalDue) {
//     if(changeArray.length===0){
//         return " please provide a valid input"; 
// //     }else{

// // let sum=0
// // for(let i=0;i<changeArray.length;i++)  {
// //    sum=sum+changeArray[i]


// // }      

// // if(sum>=totalDue){
// //     return true
// // }
// // else{return false}
// // }



// // }



// // const changeArray=[1,4,1];
// // const  totalDue =10;
// // console.log( canPay(changeArray, totalDue));


// // function sortMaker(arr) {
// //     if (arr[0] < 0 || arr[1] < 0) {
// //         return "Invalid Input";
// //     } else if (arr[0] === arr[1]) {
// //         return "equal";
// //     } 
    
// //     else if (arr[1] > 0) {
// //         if (arr[0] > arr[1]) {
// //             return [arr[0], arr[1]];
// //         } else {
// //             return [arr[1], arr[0]];
// //         }
// //     }
    
// //     else {
// //         return [arr[0], arr[1]];
// //     }
// // }

// // console.log(sortMaker([2, 3]));   // Output: [3, 2]
// // console.log(sortMaker([4, 2]));   // Output: [4, 2]
// // console.log(sortMaker([4, 4]));   // Output: equal
// // console.log(sortMaker([1, 2]));   // Output: [2, 1]
// // console.log(sortMaker([4, -2]));  // Output: Invalid Input
// function sortMaker(arr) {
//     if (arr[0] < 0 || arr[1] < 0) {
//         return "Invalid Input";
//     } else if (arr[0] === arr[1]) {
//         return "equal";
//     } else if (arr[0]<arr[1]){
//         return[arr[1],arr[0]]
//     }
    
//     else {
//         return [arr[0], arr[1]];
//     }
// }

// console.log(sortMaker([5, 7]));   // Output: [3, 2]
// console.log(sortMaker([7, 5]));   // Output: [4, 2]
// console.log(sortMaker([2, 2]));   // Output: equal
// console.log(sortMaker([3, 4]));   // Output: [2, 1]
// console.log(sortMaker([-4, -2]));  // Output: Invalid Input
function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    } else if (arr[0] === arr[1]) {
        return "equal";
    } else if (arr[0]<arr[1]){
        return[arr[1],arr[0]]
    }
    
    else {
        return [arr[0], arr[1]];
    }
}

// console.log(sortMaker([2, 3]));   // Output: [3, 2]
// console.log(sortMaker([4, 2]));   // Output: [4, 2]
// console.log(sortMaker([2, 2]));   // Output: equal
// console.log(sortMaker([2, 1]));   // Output: [2, 1]
console.log(sortMaker([4, -2]));