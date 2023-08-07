function findingBadDate(arr){
if(!Array.isArray===true){return 'please provide a valid array'}
else{
    let count=0;
    
    for(let i=0;i<arr.length;i++){
        let element=arr[i];
        if(typeof element !=="number"){
            return "give me valid number"
        }
        else{
            if(element<0){
            count++;
                
                
               
            }
        }
    }

    return  "total BadDate : " + count
}
    
}

let array=[1,2,3,4,-3,-5,-7,-88,9,-1]
    console.log( findingBadDate(array) )