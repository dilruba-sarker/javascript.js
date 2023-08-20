document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            const cartItem = {
                name: productName,
                price: productPrice
            };

            cart.push(cartItem);
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(cartItemElement);

            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }
});
