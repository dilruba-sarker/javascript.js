 function woodCalculator(ChQ,TaQ,BeQ){

    if(typeof ChQ  !=="number" && TaQ  !=="number" && BeQ !=="number"){
        return "provide a valid number"
    }
    
const perChairWood=3;
const perTableWood= 2;
const perBedWood= 50;

let totalWoodOfChaiR=perChairWood*ChQ;
let totalWoodOfTable=perTableWood*TaQ;
let totalWoodOfBed= perBedWood*BeQ;
let totalWood= totalWoodOfChaiR+totalWoodOfTable+totalWoodOfBed
return totalWood;
    }

 
 console.log(woodCalculator( 'st',3,5))
// const phone=[
//     {nmae:"Samsung",camera:12, Storage: " 32 gb", price:20000},
//     {nmae:"oppo",camera:12, Storage: " 32 gb", price:10000},
//     {nmae:"nokya",camera:12, Storage: " 32 gb", price:30000},
//     {nmae:"miximus",camera:12, Storage: " 32 gb", price:2000}
// ]

// function cheppistPhone( phone){
    
// if(!Array.isArray(phone)){return "provide valid arry"}
// // else

//     let cheppist=phone[0];
//     for(let i=0;i<phone.length;i++){
//         const element=phone[i];
//         if(element.price<cheppist.price){
//             cheppist = element
//         }
//     } return cheppist }
   
// console.log(cheppistPhone( phone))