// Modern JS for Zara-like Interactions

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Search Functionality (Basic)
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// Filter Products
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.product-card').forEach(card => {
            const category = card.getAttribute('data-category');
            card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
        });
    });
});

// Cart Counter
let cartCount = 0;
const cartCountEl = document.getElementById('cart-count');
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click