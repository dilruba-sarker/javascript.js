// function max(x,y,z){
//     if(x>y && x>z){
//         return "max-number is " +x
//     } else if(y>x && y>z ){ return "max-number is " + y}
//         else { return "max-number is " + z }
       
// }

// let givenNumber=max(23,45,98)
// console.log(givenNumber)
// // min.........
// function min(x,y,z){
//     if(x<y && x<z){
//         return "min-number is " +x
//     } else if(y<x && y<z ){ return "min-number is " + y}
//         else { return "min-number is " + z }
       
// }

// let number=min(23,45,98)
// console.log(number)


// // math.max
// // function max( x,y,z){
// //     let findLargest=Math.max(x,y,z)
// //     return findLargest

// // }
// // console.log(max(2,23,43))
// // math.min
// // function min( x,y,z){
// //     let findLargest=Math.min(x,y,z)
// //     return findLargest

// // }
// // console.log(min(2,23,43)) 

// function add(a, b){
    
//  return a + b;
 
// }




// function maxInArray(arr){
//     let tallest=arr[0];
//     for(let i=0;i<arr.length; i++){
//         let x =arr[i];
//         if (x<tallest){
//             tallest=x
//         }
//     }
//        return tallest
// }

// let array=[123,120,140,143,132,167]
//     console.log (maxInArray(array))

// function reverseString(text){
//     let reverse= "";
//     for(let i=text.length-1;i>=0; i--){
//         let element= text[i];
//          reverse = reverse+element
//     }
//     return reverse
// }

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)


// function reverseWords(str){
//     let words=str.split(" ")
//     let result=[];
//     for(let i=words.length-1; i>=0; i--){
//         let element= words[i]
//         result.push(element)
       
//     }
//     let reverse=result.join(" ")
//   return reverse
// }
// const fibo=[0,1];
// for(let i=2;i<25; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
//     console.log(fibo)
// }

// let string="i am from bangladesh";
// let vowel= ["a","e","i","o",'u'] ;
// let count=0;
// for( let i=0;i<string.length;i++){
// let char=string[i].toLocaleLowerCase();
// if(vowel.includes(char)){
//     count++
// }
// }

// console.log(count)


// // const indices = [];
// // const array = ["a", "b", "a", "c", "a", "d"];
// // const element = "g";
// // let idx = array.indexOf(element);
// // while (idx === -1) {
// //   indices.push(idx);
// //   idx = array.indexOf(element, idx + 1);
// // }
// // console.log(indices);
// // [0, 2, 4]
// function removeDuplicate(names){
//     let unique=[];
//     for(let i=0;i<names.length; i++){
//       let name=names[i];
//       if( unique.includes(name)===false){
//         unique.push(name)
//       }
// //     }

// // return unique
// // }

// // const nameArray=["abul", "Babul","kabul","momo","tipu","abul",'babul',"kabul","Babul"]
// // console.log(removeDuplicate(nameArray))

// for(i=1; i<=50; i++){


// if(i % 3 === 0 && i% 5===0){
  
//  console.log("foobar")
// }
// else if(i % 5 ===0){
// console.log('bar')
// }
// else if(i % 3 ===0){
// console.log('foo')
// }
// else{console.log(i)}
// }
// const shoppingCarts=[
//     {name:"Shari", price: 500, quantity: 3},
//     {name:"Sho", price: 1000, quantity: 2},
//     {name:"paint", price: 500, quantity:  3 },
// ]


// function totalCost(shoppingCarts){
//     let sum=0;
   
// for(let i=0;i<shoppingCarts.length;i++){
//     let product=shoppingCarts[i]
//    let totalCost= product.price * product.quantity
//    sum=sum+totalCost 
// }
// return sum
// }
// console.log(totalCost(shoppingCarts))

// function paperRequirements(book1Quantity,book2Quantity,book3Quantity){
// // const firstPageNumber=100;
// // const secondPageNumber=200;
// // const thirdPageNumber=100;
// // // const totalPageOfFirstBook= firstPageNumber*book1Quantity;
// // // const totalPageOfSecondtBook= secondPageNumber*book2Quantity;
// // // const totalPageOfThirdBook = thirdPageNumber*book3Quantity;
// // // const total=totalPageOfFirstBook+totalPageOfSecondtBook+totalPageOfThirdBook;
// // // return total;

// // // }

// // // console.log(paperRequirements(2,4,1))

// // function bestFriends(array){
// //      let bestFrnd=[0]
// //     for(let i=1;i<array.length;i++){

// //         let curerntValue=array[i]
// //         if(curerntValue>bestFrnd){
// //             bestFrnd=curerntValue
// //         }
// //     }
// // return bestFrnd
// // }
// // let friends=['siku',"Jitue","mittue","mosaddekHossain", 'jasd']
// // let sendFriends=bestFriends(friends);
// // console.log(sendFriends)


// //  function onlyPositive(array){
// //     for(let i=0;i<array.length;i++){
// //         let x=array[i];
// //         if(x<0){
// //             break;
// //         }
// //     }
// //     return x
// //  }
// // let array=[45,87,56,32,44,45,51,-23,32,87,90]
// // console.log(onlyPositive(array))
//         //    var numbers=[45,87,56,32,44,45,51]
//         //    for(var i=0; i<numbers.length; i++){
//         //     var number=numbers[i];
//         //     if(number>50){
//         //         break
//         //     }
        

  
//         //    console.log(numbers)
//         //  
//         // for(let i=0; i<arr.length;i++){
//         //     if(arr[i]<0){
//         //         break;
//         //     }
//         //     console.log(arr[i])
//         // }
// //         function onlyPositive(arr){
// //             let result=[];
// //             for(let i=0;i<arr.length;i++){
// //                 let number=arr[i]
// // //                 if(number<0){
// // //                     break;
              
// // //             }else {  result.push(number)}
// // //             }
// // //             return result
// // //         }

// // //         let arr=[1,2,3,9,6,7,8,10,11,23,45,-67,89]
// // // console.log(onlyPositive(arr))
// // function m2k(d) {
// //     return (d * 104).toFixed(1);  // returns a string
// //   }
// //   console.log( m2k(500))
  
// //    function feetToInch(f){
// //     return(f*12)
// //    }
// //    console.log( feetToInch(3))

// // let sum=0; 
// // for( let i = 0; i<=3;i++){ 
// // sum = sum + i; 
// // }
// // // console.log(sum)
// // let arry = [2, 4, 6, 8, 10, 12, 14, 16];
// // let lastElement = arry[arry.length - 1]=1;
// // console.log(arry)


// const shoppingCarts={
//     name:"Samsung",
//     model:231,
//     price:20000,
//     barand: "New"

// }
// const keys=Object.keys(shoppingCarts)
// const value=Object.values(shoppingCarts)
// console.log(keys)
// console.log(value)
//  for(let i=0; i<keys.length; i++){

//     let propertyName=keys[i];
//     let propertyValue=shoppingCarts[propertyName];
//     console.log(propertyName,propertyValue)
//  }

// function leapYear(arr){
//     let year=[]
//  for(let i=0;i<arr.length; i++){
//     let index=i;
//     let element=arr[i]
//     if(element% 4===0 && element% 100 !==0 || element %400===0){
// //         console.log( index,element, year.push(element))
// //     }
// //  }
// //  return year
// // }


// // console.log(leapYear([2020,2016,1005]))

// function sumOfOdd(arr){
//     let sum=0
//     for(let i of arr){
//         if( i % 2 === 1)
//         sum=sum+i;
//     }
//     return sum
// // }
// // let num=[2,3,4,5,]
// console.log(sumOfOdd(num))

// // function findOddNumber(arr){
// //     let odd=[];
// //     for( let i of arr){
// //         if(i % 2 ===1){
// //             console.log(odd.push(i))
// //         }
       
// //     } return odd
// // }

// // let num=[2,3,4,5,9,12,13,15,14,12                                                       ]
// // console.log(findOddNumber(num))
// function findVowel(sent){
//     let vowel=["a",'e','i','o','u'];
//     let arr=0;
//     let count=[];
    
//     for(let i=0;i<sent.length;i++){
//        let element = sent[i].toLowerCase();
//        if(vowel.includes(element)){
//         console.log(  arr++, count.push(element))
//        }
//     }
//              return arr,count
// }
// let arr='i am from Bangladesh';
// console.log(findVowel(arr))


// function reverseString(sente){
//     let reverse= "";
//     for(let i=sente.length-1;i>=0;i--){
//         reverse=reverse+sente[i];
//         console.log(reverse)
//     }
//     return reverse
// }


// function reverseWords(str){
//     let words= str.split(' ')
    // console.log(words)
//     let newArr=[];
//     for(let i=words.length-1;i>=0; i--){
//         let element=words[i];
//        newArr.push(element)
       
//     }
//     let reverse = newArr.join ( ' ')
//     return reverse
// }
// let str="I am dilruba Srker Mukta";
// console.log(reverseWords(str))

// const fibo=[0,1];
// for(let i=2; i<=14;i++){
// fibo[i]=fibo[i-1]+fibo[i-2]

// }
// console.log(fibo)
function removeDuplicate(arr){
    let unique=[];
    for(let i=0; i<arr.length; i++)
    { element=arr[i];
        if(unique.includes(element)==false)
        unique.push(element)
      
    }
    return unique
}
let arr=[1,1,2,3,3,4,4,5,5,6,6,7,7,8,89,9,9,];
console.log(removeDuplicate(arr))