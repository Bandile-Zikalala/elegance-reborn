let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.textContent = cart.length;
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        
        const selectedSize = card.querySelector('input[type="radio"]:checked');
        
        if (!selectedSize) {
            alert('⚠️ Please select a size first: XS, S, M, L, or XL');
            return;
        }
        
        const size = selectedSize.value;
        
        cart.push({name, price, size});
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Success message with size
        alert('✅ Successfully added to cart!\n\n' + name + '\nSize: ' + size + '\nPrice: R' + price.toFixed(2));
    });
});

updateCartCount();

// PRODUCT SEARCH - matches your id="searchBox" from products.html
const searchBox = document.getElementById('searchBox');
const productCards = document.querySelectorAll('.product-card');

if (searchBox) {
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        productCards.forEach(card => {
            const productName = card.dataset.name.toLowerCase();
            const productTitle = card.querySelector('h3').textContent.toLowerCase();
            
            // Show card if search matches name OR title OR search is empty
            if (productName.includes(searchTerm) || productTitle.includes(searchTerm) || searchTerm === '') {
                card.style.display = 'block'; // Show - grid auto-fills gaps
            } else {
                card.style.display = 'none'; // Hide completely - no blank space
            }
        });
    });
}