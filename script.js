// Product Data
const products = [
    {
        id: 1,
        name: "Berluti Light Brown",
        price: 26000,
        image: "images/beerluti lightbrown.JPG",
        description: "Comfortable cotton t-shirt, perfect for everyday wear"
    },
    {
        id: 2,
        name: "Berluti Black",
        price: 26000,
        image: "images/berluti black.JPG",
        description: "Stylish denim jacket for all seasons"
    },
    {
        id: 3,
        name: "Berluti Blue",
        price: 26000,
        image: "images/berluti blue.JPG",
        description: "Classic black jeans, slim fit"
    },
    {
        id: 4,
        name: "Berluti Boot",
        price: 33000,
        image: "images/berluti boot.JPG",
        description: "Comfortable running shoes for active lifestyle"
    },
    {
        id: 5,
        name: "Berluti Boot Black",
        price: 33000,
        image: "images/berluti bootblack.JPG",
        description: "Beautiful summer dress, perfect for warm weather"
    },
    {
        id: 6,
        name: "Berluti Brown",
        price: 25000,
        image: "images/berluti brown.JPG",
        description: "Premium leather jacket, timeless style"
    },
    {
        id: 7,
        name: "Berluti Gray",
        price: 25000,
        image: "images/berluti gray.JPG",
        description: "Casual sneakers for everyday comfort"
    },
    {
        id: 8,
        name: "Berluti",
        price: 25000,
        image: "images/berluti.JPG",
        description: "Warm and cozy hoodie for cooler days"
    },
    {
        id: 9,
        name: "Boot Set",
        price: 35000,
        image: "images/boot set.JPG",
        description: "Elegant formal shirt for business occasions"
    },
    {
        id: 10,
        name: "Celine Boot Set",
        price: 38000,
        image: "images/celine bootset.JPG",
        description: "Comfortable shorts for summer"
    },
    {
        id: 11,
        name: "Celine Boot White",
        price: 33000,
        image: "images/celine bootwhite.JPG",
        description: "Warm winter coat to keep you cozy"
    },
    {
        id: 12,
        name: "Classic Louboutin",
        price: 20000,
        image: "images/classic louboutin.JPG",
        description: "Stylish casual sneakers"
    },
    {
        id: 13,
        name: "Classic Piana",
        price: 22000,
        image: "images/classic piana.JPG",
        description: "Classic polo shirt for casual elegance"
    },
    {
        id: 14,
        name: "Classic Set",
        price: 22000,
        image: "images/classic set.JPG",
        description: "Trendy skinny jeans in classic blue"
    },
    {
        id: 15,
        name: "Dark Brown Boot",
        price: 30000,
        image: "images/dark brownboot.JPG",
        description: "Modern bomber jacket with sleek design"
    },
    {
        id: 16,
        name: "Emmaculate Piana",
        price: 20000,
        image: "images/emmaculate piana.JPG",
        description: "Elegant for special occasions"
    },
    {
        id: 17,
        name: "Loafers Set",
        price: 25000,
        image: "images/loafers set.JPG",
        description: "Comfortable tank top for warm days"
    },
    {
        id: 18,
        name: "Loafers",
        price: 25000,
        image: "images/loafers.JPG",
        description: "Professional blazer for business attire"
    },
    {
        id: 19,
        name: "Loropiana Black",
        price: 20000,
        image: "images/loropiana black.JPG",
        description: "Comfortable leggings for workouts and casual wear"
    },
    {
        id: 20,
        name: "Loropiana Blue",
        price: 20000,
        image: "images/loropiana blue.JPG",
        description: "Warm beanie for cold weather"
    },
    {
        id: 21,
        name: "Loropiana Green",
        price: 20000,
        image: "images/loropiana green.JPG",
        description: "Cozy cardigan for layering"
    },
    {
        id: 22,
        name: "Loropiana Pink",
        price: 20000,
        image: "images/loropiana pink.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 23,
        name: "Loropiana Red",
        price: 20000,
        image: "images/loropiana red.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 24,
        name: "Loropiana set",
        price: 20000,
        image: "images/loropiana set.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 25,
        name: "Loropiana Yellow",
        price: 20000,
        image: "images/loropiana yellow.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 26,
        name: "Louboutin Black",
        price: 22000,
        image: "images/louboutin black.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 27,
        name: "Louboutin Brown",
        price: 22000,
        image: "images/louboutin brown.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 28,
        name: "Louboutin Green",
        price: 22000,
        image: "images/louboutin green.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 29,
        name: "Louboutin Set",
        price: 22000,
        image: "images/louboutin set.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 30,
        name: "Louboutin",
        price: 22000,
        image: "images/louboutin.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 31,
        name: "Low Loropiana",
        price: 22000,
        image: "images/low loropiana.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 32,
        name: "Piana Loafers",
        price: 20000,
        image: "images/piana loafers.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 33,
        name: "Piana Set",
        price: 20000,
        image: "images/piana set.JPG",
        description: "Comfortable sandals for summer"
    },
     {
        id: 34,
        name: "Berluti Sets",
        price: 26000,
        image: "images/berluti sets.JPG",
        description: "Comfortable sandals for summer"
    },
     {
        id: 35,
        name: "Casual Berluti",
        price: 24000,
        image: "images/casual berluti.JPG",
        description: "Comfortable sandals for summer"
    },
     {
        id: 36,
        name: "Gong De",
        price: 20000,
        image: "images/gong de.JPG",
        description: "Comfortable sandals for summer"
    },
     {
        id: 37,
        name: "Coperate",
        price: 26000,
        image: "images/coperate.JPG",
        description: "Comfortable sandals for summer"
    },
     {
        id: 38,
        name: "Timberland Gray",
        price: 28000,
        image: "images/timberland.JPG",
        description: "Comfortable sandals for summer"
    },
     {
        id: 39,
        name: "Ferragamo Brown",
        price: 22000,
        image: "images/feragamo.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 40,
        name: "Hermes Black",
        price: 20000,
        image: "images/hermes black.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 41,
        name: "Wak Crop",
        price: 18000,
        image: "images/wak crop.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 42,
        name: "Ferragamo Green",
        price: 28000,
        image: "images/ferragamo green.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 43,
        name: "Ferragamo Brown Slick",
        price: 26000,
        image: "images/ferragamo brown.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 44,
        name: "Hermes Casual",
        price: 18000,
        image: "images/hermes casual.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 45,
        name: "Mak Njay",
        price: 18000,
        image: "images/mak njay.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 46,
        name: "Berluti Formal Brown",
        price: 25000,
        image: "images/berluti formalbrown.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 47,
        name: "Berluti Formals",
        price: 25000,
        image: "images/berluti formals.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 48,
        name: "Berluti Loafers Brown",
        price: 22000,
        image: "images/berluti loaferbrown.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 49,
        name: "Berluti Loafers",
        price: 22000,
        image: "images/berluti loafers.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 50,
        name: "Berluti Flops",
        price: 18000,
        image: "images/berluti flops.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 51,
        name: "Black Croc Skin",
        price: 29000,
        image: "images/black crocskin.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 52,
        name: "Black skin",
        price: 28000,
        image: "images/black skin.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 53,
        name: "Casual Black Crocskin",
        price: 20000,
        image: "images/black.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 54,
        name: "Casual Blue Crocskin",
        price: 20000,
        image: "images/blue skin.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 55,
        name: "Casual Brown Crocskin",
        price: 20000,
        image: "images/brown skin.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 56,
        name: "Celine Boots",
        price: 30000,
        image: "images/celine boots.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 57,
        name: "Gong Di",
        price: 25000,
        image: "images/gong di.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 58,
        name: "Hermes Flop Blue",
        price: 18000,
        image: "images/hermes flopblue.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 59,
        name: "Hermes Flop Brown",
        price: 18000,
        image: "images/hermes flopbrown.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 60,
        name: "Hermes Flops",
        price: 25000,
        image: "images/hermes flops.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 61,
        name: "Piana Black Net",
        price: 22000,
        image: "images/piana blacknet.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 62,
        name: "Piana Flop Brown",
        price: 18000,
        image: "images/piana flopbrown.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 63,
        name: "Piana Flop Clair",
        price: 18000,
        image: "images/piana flopclair.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 64,
        name: "Piana Flops",
        price: 18000,
        image: "images/piana flops.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 65,
        name: "Piana Green net",
        price: 20000,
        image: "images/piana greennet.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 66,
        name: "R.M Boot black",
        price: 30000,
        image: "images/rm bootblack.JPG",
        description: "Comfortable sandals for summer"
    },
    {
        id: 67,
        name: "R.M Boot Brown",
        price: 30000,
        image: "images/rm bootbrown.JPG",
        description: "Comfortable sandals for summer"
    }
];

// Cart State
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCart();
    updateCartUI();
    setupCartOptionListeners();
});

// Setup cart option radio button listeners (only once)
function setupCartOptionListeners() {
    // Use event delegation for dynamically added radio buttons
    document.addEventListener('change', function(e) {
        if (e.target && e.target.name === 'cartOption') {
            // Remove selected class from all option items
            document.querySelectorAll('.option-item').forEach(item => {
                item.classList.remove('selected');
            });
            // Add selected class to the checked option's parent
            if (e.target.checked) {
                e.target.closest('.option-item').classList.add('selected');
            }
        }
    });
}

// Render Products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='images/placeholder.jpg'; this.style.objectFit='cover';">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}.FCFA</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Ajouter au panier
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} ajouté au panier!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// Update Cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    // Show/hide cart options and checkout form based on cart content
    const cartOptions = document.getElementById('cartOptions');
    const checkoutForm = document.getElementById('checkoutForm');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        if (cartOptions) {
            cartOptions.style.display = 'none';
        }
        if (checkoutForm) {
            checkoutForm.style.display = 'none';
        }
        // Reset radio buttons when cart is empty
        const radioButtons = document.querySelectorAll('input[name="cartOption"]');
        radioButtons.forEach(radio => radio.checked = false);
        // Reset form
        const form = document.getElementById('customerInfoForm');
        if (form) {
            form.reset();
        }
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='images/placeholder.jpg'; this.style.objectFit='cover';">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}.FCFA</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');
        if (cartOptions) {
            cartOptions.style.display = 'block';
        }
        if (checkoutForm) {
            checkoutForm.style.display = 'block';
        }
    }

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
    
    // Clear selected state when cart is updated
    if (cart.length === 0) {
        document.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
    }
}

// Cart Sidebar Toggle
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Validate and collect form data
    const customerName = document.getElementById('customerName')?.value.trim();
    const customerPhone = document.getElementById('customerPhone')?.value.trim();
    const customerSize = document.getElementById('customerSize')?.value.trim();
    const customerCity = document.getElementById('customerCity')?.value.trim();
    const customerTown = document.getElementById('customerTown')?.value.trim();
    
    // Validate form fields
    if (!customerName || !customerPhone || !customerSize || !customerCity || !customerTown) {
        showNotification('Veuillez remplir tous les champs du formulaire.', 'error');
        return;
    }
    
    // Check if an option is selected
    const selectedOption = document.querySelector('input[name="cartOption"]:checked');
    if (!selectedOption) {
        showNotification('Veuillez sélectionner une option de paiement avant de continuer à checkout.', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const selectedOptionValue = selectedOption.value;
    
    // Format order details for WhatsApp message
    let orderMessage = `🛍️ *Nouvelle Commande*\n\n`;
    orderMessage += `👤 *Informations Client:*\n`;
    orderMessage += `Nom: ${customerName}\n`;
    orderMessage += `Téléphone: ${customerPhone}\n`;
    orderMessage += `Taille: ${customerSize}\n`;
    orderMessage += `Ville: ${customerCity}\n`;
    orderMessage += `Quartier: ${customerTown}\n\n`;
    orderMessage += `📋 *Détails de la commande:*\n\n`;
    
    cart.forEach((item, index) => {
        orderMessage += `${index + 1}. ${item.name}\n`;
        orderMessage += `   Quantité: ${item.quantity}\n`;
        orderMessage += `   Prix: ${item.price}.FCFA each\n`;
        orderMessage += `   Subtotal: ${(item.price * item.quantity)}.FCFA\n\n`;
    });
    
    orderMessage += `💰 *Montant Total: ${total}.FCFA*\n\n`;
    orderMessage += `📦 *Option de Paiement: ${selectedOptionValue}*\n\n`;
    orderMessage += `Merci pour votre commande!`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(orderMessage);
    
    // Create WhatsApp link with phone number and pre-filled message
    // Phone number format: remove + sign and use international format
    const phoneNumber = '237691735093'; // +237689731267 without the +
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp with pre-filled order message
    window.open(whatsappLink, '_blank');
    
    // Show confirmation
    showNotification('Redirection vers WhatsApp avec les détails de votre commande...');
    
    // Clear cart after a short delay
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
        closeCartSidebar();
    }, 1000);
});

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from LocalStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Show Notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? '#e74c3c' : '#27ae60'; // Error: red, Success: green
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
            // Update active navigation state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (this.classList.contains('nav-link')) {
                this.classList.add('active');
            }
            
            // Calculate offset for sticky header (approximately 80px)
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

