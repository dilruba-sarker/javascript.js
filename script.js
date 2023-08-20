let total = 0;

function handleCLikBtn(target) {

   const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.parentNode.childNodes[1].innerText
  
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li)
//  if( selectedItemContainer.children.length<10){selectedItemContainer.appendChild(li) } else{alert("excedd")}

    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseInt(total) + parseInt(price);
   document.getElementById("total").innerText = total;

//  const discountRate=.20;
//  const discount = total * .20;
//  document.getElementById('discount').innerText = discount

//   const totalValue= total - discount;
//   document.getElementById('grand-total').innerText = totalValue

//  console.log(totalValue);

 
 }

