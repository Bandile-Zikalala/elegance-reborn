<script>
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

// Your search code stays here unchanged...
</script>