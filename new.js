

function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Invalid input. Please provide a valid number.";
    }
    
    return Math.pow(number, 3);
}


 


function matchFinder(string1, string2) {
    if(typeof string1 !=="string" || typeof string2 !== "string"){
        return" please provide a valid input"
    }
    if(string1.includes(string2)){return true}
    else{return false}
}





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




function findAddress(obj) {

    const street=obj.street || "__";
    const house=obj. house || "__";
    const society=obj.society || "__";
    return street + ","+ house + "," + society;
}






function canPay(changeArray, totalDue) {
    if(changeArray.length===0){
        return " please provide a valid input"; 
    }else{

let sum=0;
for(let i=0;i<changeArray.length;i++)  {
   sum=sum+changeArray[i]
}      

if(sum>=totalDue){
    return true
}
else{return false}
}

}









