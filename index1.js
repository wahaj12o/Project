function scrollNavbar(amount) {
    const scroller = document.getElementById("navbarScroller");
    // scrollBy modern browsers mein smooth chalta hai
    scroller.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}

let cart = [];

// Cart ko kholne/band karne ke liye
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

// Har 'Add' button par click event
document.querySelectorAll('.b1').forEach(btn => {
    btn.addEventListener('click', function() {
        const box = this.closest('.Pizza');
        const push = this.closest('.pizza');
        const name = box.querySelector('#h1').innerText;
        const price = parseInt(box.querySelector('#p2').innerText.replace(/[^\d]/g, ''));
        const img = box.querySelector('img').src;

        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ name, price, img, qty: 1 });
        }
        
        renderCart();
        document.getElementById('cart-sidebar').classList.add('active'); // Auto-open cart
    });
});

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    const totalDisp = document.getElementById('total-bill');
    const countDisp = document.getElementById('cart-count');
    
    if (cart.length === 0) {
        list.innerHTML = '<p style="text-align:center; padding:20px;">Cart khali hai!</p>';
        totalDisp.innerText = "Rs. 0";
        countDisp.innerText = "0";
        return;
    }

    let total = 0;
    let count = 0;
    list.innerHTML = '';

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        count += item.qty;
        list.innerHTML += `
            <div class="cart-card">
                <img src="${item.img}">
                <div style="flex:1">
                    <h4 style="margin:0; font-size:14px;">${item.name}</h4>
                    <p style="margin:2px 0; color:#b30000; font-weight:bold;">Rs. ${item.price}</p>
                    <div class="qty-controls">
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    totalDisp.innerText = "Rs. " + total;
    countDisp.innerText = count;
}

// Order Now Button Functionality
document.addEventListener('click', function(e) {
    // Check karein ke kya "Order Now" button click hua hai
    if (e.target && e.target.classList.contains('checkout-btn')) {
        
        if (cart.length > 0) {
            // Sweet Alert ya simple alert
            alert("Thank you! Your order has been taken. 🍕");

            // Order hone ke baad cart khali karein
            cart = [];
            updateCartUI();

            // Sidebar band kar dein
            toggleCart();
        } else {
            alert("Aapka cart khali hai! Pehle kuch add toh karein.");
        }
    }
});