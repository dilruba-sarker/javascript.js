// number-------1
function cubeNumber(number){
    if(typeof number !=="number"){
        return "please provide me valid number"
    }else{
        if(number>0){
            return number **3
        }
        else{ return "Invalid input. Please provide a positive number."}
    }
}

console.log(cubeNumber("hjrher"));
console.log(cubeNumber(4));
console.log(cubeNumber(-2));