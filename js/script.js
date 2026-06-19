// Update cart count in nav
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.textContent = cart.length;
}

// Add to cart - smooth notification, no popup
function addToCart(name, price, size, button) {
    if (!size) {
        alert('Please select a size first!');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price, size: size });
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();

    // Change button text + color for 2 seconds
    const originalText = button.textContent;
    const originalBg = button.style.background;
    
    button.textContent = '✅ Added!';
    button.style.background = '#27ae60';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = originalBg || '#D4A5A5';
        button.disabled = false;
    }, 2000);
}

// Connect all buttons when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            
            // Find selected size for THIS product card only
            const card = this.closest('.product-card');
            const selectedSize = card.querySelector('input[type="radio"]:checked');
            const size = selectedSize ? selectedSize.value : null;

            addToCart(name, price, size, this);
        });
    });
});

// Search functionality
document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// this is the end of cart code

// Form validation for enquiry + contact forms
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');
        
        let isValid = true;
        let errorMsg = '';
        
        // Check name
        if (!name || name.value.trim().length < 2) {
            errorMsg += 'Name must be at least 2 characters.\n';
            isValid = false;
            if (name) name.style.border = '2px solid red';
        } else if (name) name.style.border = '1px solid #ccc';
        
        // Check email
        if (!email || !email.value.includes('@') || !email.value.includes('.')) {
            errorMsg += 'Please enter a valid email address.\n';
            isValid = false;
            if (email) email.style.border = '2px solid red';
        } else if (email) email.style.border = '1px solid #ccc';
        
        // Check message
        if (message && message.value.trim().length < 10) {
            errorMsg += 'Message must be at least 10 characters.';
            isValid = false;
            message.style.border = '2px solid red';
        } else if (message) message.style.border = '1px solid #ccc';
        
        if (!isValid) {
            alert('Please fix these errors:\n\n' + errorMsg);
        } else {
            alert('Form submitted successfully! We will contact you soon.');
            form.reset();
        }
    });
}

// Run validation when page loads
document.addEventListener('DOMContentLoaded', function() {
    validateForm('enquiryForm');
    validateForm('contactForm');
});
// Lightbox gallery for product images
document.querySelectorAll('.product-card img').forEach(img => {
    img.style.cursor = 'pointer'; // show hand cursor
    
    img.addEventListener('click', function() {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;justify-content:center;align-items:center;z-index:9999;cursor:pointer';
        
        // Create big image
        const bigImg = document.createElement('img');
        bigImg.src = this.src;
        bigImg.style = 'max-width:90%;max-height:90%;border-radius:12px;box-shadow:0 0 30px rgba(255,255,255,0.3)';
        
        // Create close X button
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style = 'position:absolute;top:20px;right:40px;color:white;font-size:50px;cursor:pointer;font-weight:bold';
        
        overlay.appendChild(bigImg);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
        
        // Close when click X or background
        closeBtn.onclick = () => overlay.remove();
        overlay.onclick = (e) => e.target === overlay && overlay.remove();
    });
});