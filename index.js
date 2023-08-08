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




// // ----------- problem 3




// function sortMaker(arr) {
//     if (arr[0] < 0 || arr[1] < 0) {
//         return "Invalid Input";
//     } else if (arr[0] === arr[1]) {
//         return "equal";
//     } else if ( arr[0]>0 && arr[1]>0) {
//         return arr.sort((a, b) => b - a);
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

function findAddress(obj) {

    const street=obj.street || "__";
    const house=obj. house || "__";
    const society=obj.society || "__";
    return `${street},${house},${society}`;
}


const obj={
    
  
    society: "Earth Perfect"
        
}

console.log(findAddress(obj));