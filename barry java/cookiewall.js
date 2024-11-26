let cart = [];
const productPrice = 1.50;

function checkToegang() {
    const getal = document.getElementById('getalInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const cookieMuur = document.getElementById('cookieMuur');
    const winkel = document.getElementById('winkel');

    if (getal >= 6 && getal <= 10) {
        cookieMuur.style.display = 'none';
        winkel.style.display = 'block';
    } else {
        errorMessage.textContent = 'Toegang geweigerd! Voer een getal in dat groter is dan 5.';
    }
}

function addToCart(product) {

    const existingProduct = cart.find(item => item.product === product);
    
    if (!existingProduct) {
  
        cart.push({ product: product, quantity: 1 });
    } else {

        alert(`${product} is al in je winkelmandje! Pas de hoeveelheid aan in je mandje.`);
    }

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemTotalPrice = item.quantity * productPrice;
        totalPrice += itemTotalPrice; 
        
        const li = document.createElement('li');
        li.innerHTML = `${item.product} - €${productPrice.toFixed(2)} per stuk 
                        (Totaal: €${itemTotalPrice.toFixed(2)})
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)" />
                        <button onclick="removeFromCart(${index})">Verwijder</button>`;
        cartList.appendChild(li);
    });


    document.getElementById('totalPrice').textContent = `Totaal: €${totalPrice.toFixed(2)}`;
}

function updateQuantity(index, quantity) {

    quantity = Math.max(1, parseInt(quantity));
    cart[index].quantity = quantity;
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function openCart() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.style.display = 'flex';
}

function closeCart() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.style.display = 'none';
}
