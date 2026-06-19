let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const countEls = document.querySelectorAll('#cartCount');
    countEls.forEach(el => el.textContent = cart.length);
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    const btn = document.getElementById('searchToggle');
    const input = document.getElementById('searchInput');
    
    if (btn && input) {
        btn.onclick = function() {
            input.classList.toggle('active');
            if (input.classList.contains('active')) input.focus();
        };
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const q = input.value.toLowerCase().trim();
                if (q === '') return;
                const basePath = window.location.pathname.replace(/[^/]*$/, '');
                window.location.href = window.location.origin + basePath + 'products.html?search=' + encodeURIComponent(q);
            }
        });
    }
});