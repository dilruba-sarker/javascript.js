
let total=0;
function handleCLikBtn(target){
    const selectedProductContainer=document.getElementById("selected-product")
   const itemName= target.childNodes[5].innerText ;
   const li= document.createElement("li")
   li.innerText = itemName;

selectedProductContainer.appendChild(li)

// price
const price = target.childNodes[7].innerText.split(" ")[0] ;
total = parseInt(total) + parseInt(price);

const totalPrice= document.getElementById('total-value')
totalPrice.innerText=total;





// Apply Button
const applyButton = document.getElementById("applyButton");
const couponInputCode = document.getElementById("couponCode");
const discountItemPrice = document.getElementById("discount");
const totalPayment = document.getElementById("total-payment")
const purchaseButton= document.getElementById("purchase");

couponInputCode.addEventListener("input", function() {
    console.log("object");
    if (couponInputCode.value === 'SELL200' && total>=200) {
        applyButton.disabled = false;
    } else {
        applyButton.disabled = true;
    }
});

applyButton.addEventListener("click", function() {

    if (couponInputCode.value === 'SELL200') {
        const discount = parseFloat(total * 0.20);
        discountItemPrice.innerText = discount.toFixed(2);
        const netTotal =  total - discount;
            totalPayment.innerText = netTotal 
            if(netTotal > 0 ){
                purchaseButton.disabled=  false    
              }else{purchaseButton.disabled= true  }
         
    } else {
        // Handle the case when the coupon code is not valid
        discountItemPrice.innerText = "0.00"; // Reset the discount display
    }
 
});

 

}


// ------------------------------------------
 document.getElementById("go-home").addEventListener("click",function(){
     window.location.href = "summer.html"
 })

