/* ================================================================
   DATA - Restaurant Menu Items (All Food Images Fixed)
   ================================================================ */
const menuItems = [
    // ========== STARTERS ==========
    {
        id: 1,
        name: "Garlic Bread",
        category: "Starters",
        description: "Toasted sourdough with herb garlic butter and parmesan.",
        price: 149,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },
    {
        id: 2,
        name: "Bruschetta",
        category: "Starters",
        description: "Grilled bread with tomatoes, garlic, basil and olive oil.",
        price: 189,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
        id: 3,
        name: "Crispy Calamari",
        category: "Starters",
        description: "Lightly fried calamari with lemon aioli and fresh herbs.",
        price: 259,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },

    // ========== MAIN COURSE ==========
    {
        id: 4,
        name: "Grilled Salmon",
        category: "Main Course",
        description: "Norwegian salmon with lemon butter sauce and seasonal vegetables.",
        price: 499,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },
    {
        id: 5,
        name: "Chicken Steak",
        category: "Main Course",
        description: "Grilled chicken breast with mushroom sauce and roasted potatoes.",
        price: 399,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
        id: 6,
        name: "Lamb Chops",
        category: "Main Course",
        description: "Tender lamb chops with rosemary jus and creamy mash.",
        price: 599,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },

    // ========== PIZZA ==========
    {
        id: 7,
        name: "Margherita Pizza",
        category: "Pizza",
        description: "Classic tomato sauce, fresh mozzarella, and fragrant basil.",
        price: 299,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },
    {
        id: 8,
        name: "Pepperoni Pizza",
        category: "Pizza",
        description: "Tomato sauce, mozzarella, and spicy pepperoni.",
        price: 349,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
        id: 9,
        name: "Mushroom Truffle Pizza",
        category: "Pizza",
        description: "Wild mushrooms, truffle oil, mozzarella, and fresh thyme.",
        price: 449,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },

    // ========== BURGERS ==========
    {
        id: 10,
        name: "Classic Burger",
        category: "Burgers",
        description: "Angus beef patty, lettuce, tomato, onion, and house sauce.",
        price: 249,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
        id: 11,
        name: "BBQ Bacon Burger",
        category: "Burgers",
        description: "Beef patty, bacon, cheddar, onion rings, and BBQ sauce.",
        price: 299,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },
    {
        id: 12,
        name: "Veggie Burger",
        category: "Burgers",
        description: "Plant-based patty with avocado, sprouts, and vegan mayo.",
        price: 219,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },

    // ========== PASTA ==========
    {
        id: 13,
        name: "Spaghetti Carbonara",
        category: "Pasta",
        description: "Creamy egg sauce, guanciale, pecorino, and black pepper.",
        price: 349,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },
    {
        id: 14,
        name: "Penne Arrabbiata",
        category: "Pasta",
        description: "Spicy tomato sauce with garlic, chili, and fresh parsley.",
        price: 279,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
        id: 15,
        name: "Fettuccine Alfredo",
        category: "Pasta",
        description: "Creamy parmesan sauce with garlic and fresh herbs.",
        price: 329,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1645112411342-9669d13a7c65?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },

    // ========== DESSERTS ==========
    {
        id: 16,
        name: "Tiramisu",
        category: "Desserts",
        description: "Classic Italian coffee-flavored dessert with mascarpone.",
        price: 199,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },
    {
        id: 17,
        name: "Chocolate Lava Cake",
        category: "Desserts",
        description: "Warm chocolate cake with a molten center and vanilla ice cream.",
        price: 229,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&auto=format",
        isPopular: true
    },
    {
        id: 18,
        name: "Cheesecake",
        category: "Desserts",
        description: "New York-style cheesecake with berry compote.",
        price: 209,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },

    // ========== DRINKS ==========
    {
        id: 19,
        name: "Fresh Lime Soda",
        category: "Drinks",
        description: "Refreshing lime soda with mint and a hint of salt.",
        price: 99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
        id: 20,
        name: "Mango Smoothie",
        category: "Drinks",
        description: "Creamy mango smoothie with yogurt and honey.",
        price: 149,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
        id: 21,
        name: "Classic Mojito",
        category: "Drinks",
        description: "Fresh mint, lime, sugar, and sparkling water (non-alcoholic).",
        price: 129,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop&auto=format",
        isPopular: false
    },
    {
  id: 22,
  name: "New Dish",
  category: "Main Course",
  description: "Delicious description here.",
  price: 349,
  rating: 4.7,
  image: "https://example.com/image.jpg",
  isPopular: true
}

];

/* ================================================================
   STATE MANAGEMENT
   ================================================================ */
let state = {
    category: 'all',
    search: '',
    sort: 'recommended',
    cart: [],
    favorites: [],
    currentSlide: 0
};

/* ================================================================
   DOM REFERENCES
   ================================================================ */
const DOM = {
    menuGrid: document.getElementById('menuGrid'),
    categoryBtns: document.querySelectorAll('.cat-btn'),
    searchInput: document.getElementById('menuSearch'),
    sortSelect: document.getElementById('sortSelect'),
    cartBadge: document.getElementById('cartBadge'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartBody: document.getElementById('cartBody'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartClose: document.getElementById('cartClose'),
    cartToggle: document.getElementById('cartToggle'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    toastContainer: document.getElementById('toastContainer'),
    hamburger: document.getElementById('hamburger'),
    navLinks: document.getElementById('navLinks'),
    mobileSearch: document.getElementById('mobileSearch'),
    searchToggle: document.getElementById('searchToggle'),
    contactForm: document.getElementById('contactForm'),
    header: document.querySelector('.header'),
    splashPage: document.getElementById('splashPage'),
    enterBtn: document.getElementById('enterBtn'),
    slides: document.querySelectorAll('.splash-slide'),
    dots: document.querySelectorAll('.dot'),
    paymentModal: document.getElementById('paymentModal'),
    cancelPayment: document.getElementById('cancelPayment'),
    confirmPayment: document.getElementById('confirmPayment'),
    paymentMethodIcon: document.getElementById('paymentMethodIcon'),
    paymentMethodName: document.getElementById('paymentMethodName'),
    paymentAmount: document.getElementById('paymentAmount'),
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    paymentStatusDetail: document.getElementById('paymentStatusDetail'),
    exploreMenuBtn: document.getElementById('exploreMenuBtn'),
    viewSpecialsBtn: document.getElementById('viewSpecialsBtn')
};

/* ================================================================
   SPLASH PAGE - SLIDING EMERALD & BURNT ORANGE
   ================================================================ */
let slideInterval;

function showSlide(index) {
    DOM.slides.forEach((slide, i) => {
        slide.classList.remove('active', 'exit');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    DOM.dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    state.currentSlide = index;
}

function nextSlide() {
    const next = (state.currentSlide + 1) % DOM.slides.length;
    DOM.slides[state.currentSlide].classList.add('exit');
    setTimeout(() => {
        showSlide(next);
    }, 300);
}

function startSlideshow() {
    slideInterval = setInterval(nextSlide, 4000);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

// Dot clicks
DOM.dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideshow();
        showSlide(index);
        startSlideshow();
    });
});

// Enter button - hide splash and show main content
if (DOM.enterBtn) {
    DOM.enterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        stopSlideshow();
        DOM.splashPage.classList.add('hidden');
        document.getElementById('mainHeader').style.display = 'block';
        setTimeout(() => {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
}

// Initially hide header and show splash
document.getElementById('mainHeader').style.display = 'none';
startSlideshow();

/* ================================================================
   BUTTON FUNCTIONS - FIXED
   ================================================================ */

// Explore Menu Button - Scroll to menu section
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight the menu section with animation
        menuSection.style.transition = 'background 0.5s ease';
        menuSection.style.background = 'rgba(212, 104, 43, 0.05)';
        setTimeout(() => {
            menuSection.style.background = '';
        }, 1500);
    }
}

// View Specials Button - Scroll to specials section
function scrollToSpecials() {
    const specialsSection = document.getElementById('specials');
    if (specialsSection) {
        specialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight the specials section with animation
        specialsSection.style.transition = 'background 0.5s ease';
        specialsSection.style.background = 'rgba(212, 104, 43, 0.08)';
        setTimeout(() => {
            specialsSection.style.background = '';
        }, 1500);
    }
}

// Add event listeners for hero buttons
if (DOM.exploreMenuBtn) {
    DOM.exploreMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToMenu();
        showToast('🍽️ Exploring our delicious menu!', 'info');
    });
}

if (DOM.viewSpecialsBtn) {
    DOM.viewSpecialsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSpecials();
        showToast('⭐ Viewing our special offers!', 'info');
    });
}

/* ================================================================
   UTILITY FUNCTIONS
   ================================================================ */
function formatPrice(amount) {
    return '₹' + amount;
}

function getItemById(id) {
    return menuItems.find(item => item.id === id);
}

function getCartItem(id) {
    return state.cart.find(item => item.id === id);
}

function getCartCount() {
    return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
    return state.cart.reduce((total, item) => {
        const menuItem = getItemById(item.id);
        return total + (menuItem ? menuItem.price * item.quantity : 0);
    }, 0);
}

function getCartItems() {
    return state.cart.map(item => {
        const menuItem = getItemById(item.id);
        return { ...item, ...menuItem };
    }).filter(item => item.name);
}

function isFavorite(id) {
    return state.favorites.includes(id);
}

/* ================================================================
   LOCAL STORAGE
   ================================================================ */
function loadFromStorage() {
    try {
        const cart = localStorage.getItem('restaurantCart');
        const favorites = localStorage.getItem('restaurantFavorites');
        if (cart) state.cart = JSON.parse(cart);
        if (favorites) state.favorites = JSON.parse(favorites);
    } catch (e) {
        console.warn('Failed to load from localStorage:', e);
    }
}

function saveCart() {
    localStorage.setItem('restaurantCart', JSON.stringify(state.cart));
    updateCartBadge();
}

function saveFavorites() {
    localStorage.setItem('restaurantFavorites', JSON.stringify(state.favorites));
}

/* ================================================================
   TOAST NOTIFICATIONS
   ================================================================ */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    toast.innerHTML = `${icons[type] || 'ℹ️'} ${message}`;
    
    DOM.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ================================================================
   FAVORITES
   ================================================================ */
function toggleFavorite(id) {
    const index = state.favorites.indexOf(id);
    if (index === -1) {
        state.favorites.push(id);
        showToast('Added to favorites ❤️', 'success');
    } else {
        state.favorites.splice(index, 1);
        showToast('Removed from favorites', 'info');
    }
    saveFavorites();
    renderMenu();
}

/* ================================================================
   CART FUNCTIONS
   ================================================================ */
function addToCart(id) {
    const existing = getCartItem(id);
    if (existing) {
        existing.quantity += 1;
    } else {
        state.cart.push({ id, quantity: 1 });
    }
    saveCart();
    renderCart();
    updateCartBadge();
    showToast('Added to cart 🛒', 'success');
}

function removeFromCart(id) {
    state.cart = state.cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
    updateCartBadge();
    showToast('Removed from cart', 'info');
}

function updateQuantity(id, delta) {
    const item = getCartItem(id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }
    saveCart();
    renderCart();
    updateCartBadge();
}

function clearCart() {
    if (state.cart.length === 0) return;
    state.cart = [];
    saveCart();
    renderCart();
    updateCartBadge();
    showToast('Cart cleared', 'info');
}

function updateCartBadge() {
    const count = getCartCount();
    DOM.cartBadge.textContent = count;
    DOM.cartBadge.style.display = count > 0 ? 'flex' : 'none';
}

/* ================================================================
   RENDER FUNCTIONS
   ================================================================ */

// Render Menu
function renderMenu() {
    let items = [...menuItems];
    
    if (state.category !== 'all') {
        items = items.filter(item => item.category === state.category);
    }
    
    if (state.search.trim()) {
        const query = state.search.toLowerCase().trim();
        items = items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
    }
    
    switch (state.sort) {
        case 'price-low':
            items.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            items.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            items.sort((a, b) => b.rating - a.rating);
            break;
        default:
            items.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
            break;
    }
    
    if (items.length === 0) {
        DOM.menuGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>😕 No dishes found</h3>
                <p>Try searching for something else.</p>
            </div>
        `;
        DOM.menuGrid.classList.add('empty');
        return;
    }
    
    DOM.menuGrid.classList.remove('empty');
    
    let html = '';
    items.forEach(item => {
        const fav = isFavorite(item.id);
        const inCart = state.cart.some(c => c.id === item.id);
        html += `
            <article class="food-card" role="listitem">
                <img 
                    src="${item.image}" 
                    alt="${item.name}" 
                    class="food-card-image" 
                    loading="lazy"
                    onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23f0ebe5%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2218%22%3ENo Image%3C/text%3E%3C/svg%3E'"
                />
                <div class="food-card-body">
                    <span class="food-card-category">${item.category}</span>
                    <h3 class="food-card-title">${item.name}</h3>
                    <p class="food-card-desc">${item.description}</p>
                    <div class="food-card-footer">
                        <div class="food-card-left">
                            <span class="food-card-rating">⭐ ${item.rating}</span>
                            <span class="food-card-price">${formatPrice(item.price)}</span>
                        </div>
                        <div class="food-card-actions">
                            <button 
                                class="fav-btn ${fav ? 'active' : ''}" 
                                onclick="toggleFavorite(${item.id})" 
                                aria-label="${fav ? 'Remove from' : 'Add to'} favorites"
                            >
                                ${fav ? '❤️' : '♡'}
                            </button>
                            <button 
                                class="add-btn ${inCart ? 'in-cart' : ''}" 
                                onclick="addToCart(${item.id})"
                                aria-label="Add ${item.name} to cart"
                            >
                                ${inCart ? '✓ In Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    });
    
    DOM.menuGrid.innerHTML = html;
}

// Render Cart
function renderCart() {
    const items = getCartItems();
    
    if (items.length === 0) {
        DOM.cartBody.innerHTML = `
            <div class="cart-empty">
                <span>🛒</span>
                <h4>Your cart is empty</h4>
                <p>Add some delicious dishes to get started!</p>
            </div>
        `;
        DOM.cartSubtotal.textContent = '₹0';
        return;
    }
    
    let html = '';
    items.forEach(item => {
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-qty">
                        <button onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">✕</button>
            </div>
        `;
    });
    
    DOM.cartBody.innerHTML = html;
    DOM.cartSubtotal.textContent = formatPrice(getCartTotal());
}

/* ================================================================
   PAYMENT SYSTEM
   ================================================================ */

let selectedPayment = null;
const paymentMethods = [
    { id: 'phonepay', name: 'PhonePe', icon: '📱', color: '#5F259F' },
    { id: 'gpay', name: 'Google Pay', icon: '💳', color: '#4285F4' },
    { id: 'paytm', name: 'Paytm', icon: '🏦', color: '#00BAF2' },
    { id: 'card', name: 'Card', icon: '💳', color: '#1A1A1A' },
    { id: 'cash', name: 'Cash', icon: '💰', color: '#2E7D32' },
    { id: 'upi', name: 'UPI', icon: '📲', color: '#6C63FF' }
];

function initPaymentSystem() {
    const paymentIcons = document.querySelectorAll('.payment-icon');
    paymentIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const method = this.dataset.method;
            selectPaymentMethod(method);
        });
    });
    
    if (DOM.cancelPayment) {
        DOM.cancelPayment.addEventListener('click', closePaymentModal);
    }
    
    if (DOM.confirmPayment) {
        DOM.confirmPayment.addEventListener('click', confirmPayment);
    }
}

function selectPaymentMethod(methodId) {
    document.querySelectorAll('.payment-icon').forEach(icon => {
        icon.classList.remove('selected');
    });
    
    const selectedIcon = document.querySelector(`.payment-icon[data-method="${methodId}"]`);
    if (selectedIcon) {
        selectedIcon.classList.add('selected');
        selectedPayment = methodId;
        const method = paymentMethods.find(m => m.id === methodId);
        showToast(`✅ ${method.name} selected`, 'success');
        
        const paymentStatus = document.getElementById('paymentStatus');
        if (paymentStatus) {
            paymentStatus.textContent = `✅ ${method.name} selected - Ready to pay`;
            paymentStatus.className = 'payment-note success';
        }
        
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.innerHTML = `<i class="fas fa-credit-card"></i> Pay with ${method.name}`;
            checkoutBtn.style.background = method.color;
            checkoutBtn.style.color = '#fff';
            checkoutBtn.disabled = false;
        }
    }
}

function openPaymentModal() {
    if (state.cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    if (!selectedPayment) {
        showToast('Please select a payment method first', 'error');
        const paymentStatus = document.getElementById('paymentStatus');
        if (paymentStatus) {
            paymentStatus.textContent = '⚠️ Please select a payment method';
            paymentStatus.className = 'payment-note error';
        }
        return;
    }
    
    const method = paymentMethods.find(m => m.id === selectedPayment);
    const total = getCartTotal();
    
    if (DOM.paymentMethodIcon) {
        DOM.paymentMethodIcon.textContent = method.icon;
    }
    if (DOM.paymentMethodName) {
        DOM.paymentMethodName.textContent = method.name;
    }
    if (DOM.paymentAmount) {
        DOM.paymentAmount.textContent = formatPrice(total);
    }
    
    if (DOM.progressBar) {
        DOM.progressBar.style.width = '0%';
    }
    if (DOM.progressText) {
        DOM.progressText.textContent = 'Initializing...';
    }
    if (DOM.paymentStatusDetail) {
        DOM.paymentStatusDetail.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Ready to pay`;
        DOM.paymentStatusDetail.className = 'payment-status';
    }
    
    if (DOM.confirmPayment) {
        DOM.confirmPayment.disabled = false;
        DOM.confirmPayment.innerHTML = `<i class="fas fa-check"></i> Confirm Payment`;
        DOM.confirmPayment.style.background = '';
    }
    
    DOM.paymentModal.classList.add('active');
}

function closePaymentModal() {
    DOM.paymentModal.classList.remove('active');
}

function confirmPayment() {
    const method = paymentMethods.find(m => m.id === selectedPayment);
    const total = getCartTotal();
    
    if (DOM.confirmPayment) {
        DOM.confirmPayment.disabled = true;
        DOM.confirmPayment.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing...`;
    }
    
    if (DOM.progressText) {
        DOM.progressText.textContent = 'Connecting to payment gateway...';
    }
    if (DOM.paymentStatusDetail) {
        DOM.paymentStatusDetail.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Connecting to ${method.name}...`;
        DOM.paymentStatusDetail.className = 'payment-status';
    }
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress > 95) progress = 95;
        if (DOM.progressBar) {
            DOM.progressBar.style.width = progress + '%';
        }
    }, 300);
    
    setTimeout(() => {
        if (DOM.progressText) {
            DOM.progressText.textContent = 'Verifying payment details...';
        }
        if (DOM.paymentStatusDetail) {
            DOM.paymentStatusDetail.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Verifying with ${method.name}...`;
        }
    }, 1500);
    
    setTimeout(() => {
        if (DOM.progressText) {
            DOM.progressText.textContent = 'Processing payment...';
        }
        if (DOM.paymentStatusDetail) {
            DOM.paymentStatusDetail.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing payment of ${formatPrice(total)}...`;
        }
    }, 3000);
    
    setTimeout(() => {
        clearInterval(progressInterval);
        if (DOM.progressBar) {
            DOM.progressBar.style.width = '100%';
        }
        if (DOM.progressText) {
            DOM.progressText.textContent = 'Payment successful! ✅';
        }
        if (DOM.paymentStatusDetail) {
            DOM.paymentStatusDetail.innerHTML = `<i class="fas fa-check-circle"></i> Payment of ${formatPrice(total)} via ${method.name} successful!`;
            DOM.paymentStatusDetail.className = 'payment-status success';
        }
        
        if (DOM.confirmPayment) {
            DOM.confirmPayment.innerHTML = '✅ Success!';
            DOM.confirmPayment.style.background = '#4CAF50';
            DOM.confirmPayment.style.color = '#fff';
        }
        
        showToast(`🎉 Payment of ${formatPrice(total)} via ${method.name} successful!`, 'success');
        
        setTimeout(() => {
            state.cart = [];
            saveCart();
            renderCart();
            updateCartBadge();
            
            document.querySelectorAll('.payment-icon').forEach(icon => {
                icon.classList.remove('selected');
            });
            selectedPayment = null;
            
            const paymentStatus = document.getElementById('paymentStatus');
            if (paymentStatus) {
                paymentStatus.textContent = '🔒 Select a payment method to proceed';
                paymentStatus.className = 'payment-note';
            }
            
            const checkoutBtn = document.getElementById('checkoutBtn');
            if (checkoutBtn) {
                checkoutBtn.innerHTML = `<i class="fas fa-check"></i> Place Order`;
                checkoutBtn.style.background = '';
                checkoutBtn.style.color = '';
                checkoutBtn.disabled = false;
            }
            
            setTimeout(() => {
                closePaymentModal();
                closeCart();
                showToast('Thank you for your order! 🍽️', 'success');
            }, 1000);
            
        }, 1500);
        
    }, 4500);
}

/* ================================================================
   FILTER, SEARCH, SORT
   ================================================================ */
function filterMenu(category) {
    state.category = category;
    DOM.categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderMenu();
}

function searchMenu(query) {
    state.search = query;
    renderMenu();
}

function sortMenu(option) {
    state.sort = option;
    renderMenu();
}

/* ================================================================
   CART DRAWER
   ================================================================ */
function openCart() {
    DOM.cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCart();
}

function closeCart() {
    DOM.cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
}

/* ================================================================
   MOBILE NAV
   ================================================================ */
function toggleMobileMenu() {
    const isOpen = DOM.navLinks.classList.toggle('open');
    DOM.hamburger.classList.toggle('active');
    DOM.hamburger.setAttribute('aria-expanded', isOpen);
}

function closeMobileMenu() {
    DOM.navLinks.classList.remove('open');
    DOM.hamburger.classList.remove('active');
    DOM.hamburger.setAttribute('aria-expanded', 'false');
}

/* ================================================================
   CONTACT FORM VALIDATION
   ================================================================ */
function validateForm() {
    const name = document.getElementById('formName');
    const email = document.getElementById('formEmail');
    const message = document.getElementById('formMessage');
    let valid = true;
    
    [name, email, message].forEach(field => {
        field.classList.remove('invalid');
        field.nextElementSibling?.classList.remove('visible');
    });
    
    if (!name.value.trim()) {
        name.classList.add('invalid');
        name.nextElementSibling.textContent = 'Name is required';
        name.nextElementSibling.classList.add('visible');
        valid = false;
    }
    
    if (!email.value.trim() || !email.value.includes('@')) {
        email.classList.add('invalid');
        email.nextElementSibling.textContent = 'Please enter a valid email';
        email.nextElementSibling.classList.add('visible');
        valid = false;
    }
    
    if (!message.value.trim()) {
        message.classList.add('invalid');
        message.nextElementSibling.textContent = 'Message is required';
        message.nextElementSibling.classList.add('visible');
        valid = false;
    }
    
    return valid;
}

/* ================================================================
   EVENT LISTENERS
   ================================================================ */

// Category buttons
DOM.categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterMenu(btn.dataset.category);
        if (window.innerWidth <= 768) closeMobileMenu();
    });
});

// Search
DOM.searchInput.addEventListener('input', (e) => {
    searchMenu(e.target.value);
});

// Sort
DOM.sortSelect.addEventListener('change', (e) => {
    sortMenu(e.target.value);
});

// Cart toggle
DOM.cartToggle.addEventListener('click', openCart);
DOM.cartClose.addEventListener('click', closeCart);
DOM.cartOverlay.addEventListener('click', closeCart);

// Keyboard: Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        closeMobileMenu();
        closePaymentModal();
        if (DOM.mobileSearch.classList.contains('active')) {
            DOM.mobileSearch.classList.remove('active');
        }
    }
});

// Clear cart
DOM.clearCartBtn.addEventListener('click', clearCart);

// Checkout - Open payment modal
DOM.checkoutBtn.addEventListener('click', openPaymentModal);

// Mobile hamburger
DOM.hamburger.addEventListener('click', toggleMobileMenu);

// Search toggle (mobile)
DOM.searchToggle.addEventListener('click', () => {
    DOM.mobileSearch.classList.toggle('active');
    if (DOM.mobileSearch.classList.contains('active')) {
        DOM.mobileSearch.querySelector('input').focus();
    }
});

// Close mobile nav on link click
DOM.navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Sticky header shadow
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        DOM.header.classList.add('scrolled');
    } else {
        DOM.header.classList.remove('scrolled');
    }
});

// Contact form
DOM.contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        showToast('Message sent successfully! ✉️', 'success');
        DOM.contactForm.reset();
    }
});

/* ================================================================
   INITIALIZATION
   ================================================================ */
function init() {
    loadFromStorage();
    renderMenu();
    updateCartBadge();
    renderCart();
    initPaymentSystem();
}

// Start the app
init();

// Make functions available globally for inline onclick handlers
window.toggleFavorite = toggleFavorite;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.selectPaymentMethod = selectPaymentMethod;
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.confirmPayment = confirmPayment;
window.scrollToMenu = scrollToMenu;
window.scrollToSpecials = scrollToSpecials;