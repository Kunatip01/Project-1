let cart = []; // Array to store products added to the shopping cart

// Array of product objects with details such as id, name, description, price, image URL, and category
const products = [
    { id: 1, name: 'Vitamin C (1000mg)', description: 'Boosts immune function and fights off infections.', price: 499, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00682/v/23.jpg', category: 'Vitamins & Minerals' },
    { id: 2, name: 'Vitamin D3 (5000 IU)', description: 'Supports bone health and immune support.', price: 399, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00372/y/67.jpg', category: 'Vitamins & Minerals' },
    { id: 3, name: 'Vitamin B12 (Methylcobalamin)', description: 'Essential for energy production and red blood cell formation.', price: 549, img: 'https://m.media-amazon.com/images/I/712y-Dd83oL.jpg', category: 'Vitamins & Minerals' },
    { id: 4, name: 'Vitamin E (400 IU)', description: 'Powerful antioxidant that supports skin and heart health.', price: 349, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00894/v/39.jpg', category: 'Vitamins & Minerals' },
    { id: 5, name: 'Multivitamin for Men', description: 'Formulated specifically for men’s health needs.', price: 649, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now03878/v/45.jpg', category: 'Vitamins & Minerals' },
    { id: 6, name: 'Multivitamin for Women', description: 'Complete vitamins and minerals tailored for women.', price: 699, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now03803/v/76.jpg', category: 'Vitamins & Minerals' },
    { id: 7, name: 'Vitamin A (10,000 IU)', description: 'Promotes healthy vision and supports the immune system.', price: 299, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00330/v/35.jpg', category: 'Vitamins & Minerals' },
    { id: 8, name: 'Vitamin K2 (MK-7)', description: 'Supports bone health and proper calcium utilization.', price: 599, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00992/v/36.jpg', category: 'Vitamins & Minerals' },
    { id: 9, name: 'Calcium with Vitamin D', description: 'Supports bone density and muscle function.', price: 499, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now03097/v/19.jpg', category: 'Vitamins & Minerals' },
    { id: 10, name: 'Daily Vits', description: 'Bridge the nutrient gap in our daily diets.', price: 699, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now03770/v/16.jpg', category: 'Vitamins & Minerals' },
    { id: 11, name: 'Magnesium Citrate', description: 'Supports muscle relaxation and healthy nerve function.', price: 399, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01294/v/77.jpg', category: 'Supplements' },
    { id: 12, name: 'Zinc Picolinate', description: 'Boosts immune function and supports skin health.', price: 349, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01552/v/34.jpg', category: 'Vitamins & Minerals' },
    { id: 13, name: 'Omega-3', description: 'Supports heart health and brain function.', price: 799, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01657/v/73.jpg', category: 'Supplements' },
    { id: 14, name: 'Probiotics-10 (100 Billion CFU)', description: 'Promotes healthy digestion and immune support.', price: 899, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now02931/v/27.jpg', category: 'Supplements' },
    { id: 15, name: 'Turmeric Curcumin', description: 'Natural anti-inflammatory that supports joint health.', price: 599, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now04638/v/46.jpg', category: 'Supplements' },
    { id: 16, name: 'Fitness Resistance Bands', description: 'Great for strength training and improving flexibility.', price: 799, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRI8FGwcpXJRVVwCD7w_aYstaN4_P6vi6x8K7k12jA4q5DBbpXv-JV1J-3jZzHLNRgFgj2VdqVE1HtToi-gsF8KUsnY0gLevOvZZy9O8R5zDQYEtF7ZgDd-&usqp=CAE', category: 'Fitness & Recovery' },
    { id: 17, name: 'Ashwagandha', description: 'Adaptogen that helps reduce stress and anxiety.', price: 649, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now02375/v/8.jpg', category: 'Supplements' },
    { id: 18, name: 'Green Superfood Powder', description: 'Packed with nutrients from greens, fruits, and veggies.', price: 699, img: 'https://m.media-amazon.com/images/I/71t6LwKB+wS.jpg', category: 'Health & Wellness' },
    { id: 19, name: 'Collagen Peptides', description: 'Supports skin elasticity and joint health.', price: 799, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now03086/v/26.jpg', category: 'Supplements' },
    { id: 20, name: 'Sleep Support Formula', description: 'Promotes restful sleep and relaxation.', price: 499, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now04768/v/35.jpg', category: 'Health & Wellness' },
    { id: 21, name: 'Electrolyte Powder', description: 'Replenishes electrolytes lost during exercise.', price: 399, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/uhp/uhp00013/v/19.jpg', category: 'Fitness & Recovery' },
    { id: 22, name: 'MCT Oil', description: 'Supports energy levels and fat metabolism.', price: 999, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now02196/v/24.jpg', category: 'Supplements' },
    { id: 23, name: 'Fiber Supplement', description: 'Promotes digestive health and regularity.', price: 399, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now05993/v/17.jpg', category: 'Supplements' },
    { id: 24, name: 'Detox Tea', description: 'Supports detoxification and digestive health.', price: 299, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now02456/v/8.jpg', category: 'Health & Wellness' },
    { id: 25, name: 'Chia Seeds', description: 'Rich in omega-3 fatty acids and fiber.', price: 499, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nav/nav00028/v/6.jpg', category: 'Supplements' },
    { id: 26, name: 'Protein Powder', description: 'Supports muscle growth and recovery.', price: 1299, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01064/v/114.jpg', category: 'Fitness & Recovery' },
    { id: 27, name: 'BCAA Powder', description: 'Enhance muscle recovery and reduce fatigue during workouts.', price: 899, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02522/v/24.jpg', category: 'Fitness & Recovery' },
    { id: 28, name: 'Yoga Mat', description: 'Provides comfort and support during workouts.', price: 799, img: 'https://m.media-amazon.com/images/I/71b5fW+s18L._AC_UF1000,1000_QL80_.jpg', category: 'Fitness & Recovery' },
    { id: 29, name: 'Herbal Sleep Aid', description: 'Natural blend to promote better sleep.', price: 599, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now04768/v/35.jpg', category: 'Health & Wellness' },
    { id: 30, name: 'Selenium (200 mcg)', description: 'Supports thyroid function and immune health.', price: 399, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now01486/v/56.jpg', category: 'Vitamins & Minerals' }
];

let currentCategory = ''; // Variable to keep track of the selected category

// Function to render product cards dynamically based on the filtered products
function renderProducts(filteredProducts = products) {
    const productList = document.getElementById('product-list'); // Get product list container
    productList.innerHTML = ''; // Clear any existing products

    // Loop through each filtered product and create HTML structure for it
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4', 'mb-4'); // Add Bootstrap classes for responsive layout
        productCard.innerHTML = `
          <div class="card product-card">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text price">Price: ฿${product.price.toFixed(2)}</p>
              <input type="number" class="form-control mb-2 quantity-input" id="qty-${product.id}" value="1" min="1" placeholder="Quantity">
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        `;
        productList.appendChild(productCard); // Add product card to the container
    });
}

// Function to filter products based on the selected category
function filterCategory(category) {
    currentCategory = category; // Update the current category
    const filteredProducts = products.filter(product => product.category === category || category === ''); // Filter products by category
    renderProducts(filteredProducts); // Render the filtered products

    // Update the active category button
    const buttons = document.querySelectorAll('#category-buttons button'); // Get all category buttons
    buttons.forEach(button => {
        button.classList.remove('active'); // Remove active class from all buttons
    });

    // Find the clicked button and add the active class
    const clickedButton = Array.from(buttons).find(button => button.onclick.toString().includes(category));
    if (clickedButton) {
        clickedButton.classList.add('active'); // Highlight the active button
    }
}

// Set "All" as the default active category when the page loads
window.onload = function () {
    document.querySelector('#category-buttons button.active').classList.add('active'); // Set "All" as active on page load
    renderProducts(products); // Render all products initially
}

// Function to search products based on search query and current category
function searchProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase(); // Get the search input
    const filteredProducts = products.filter(product =>
        (product.category === currentCategory || currentCategory === '') && // Check if product matches current category
        product.name.toLowerCase().includes(searchQuery) // Check if product name matches the search query
    );
    renderProducts(filteredProducts); // Render the search results
}

// Filter and render all products when the page first loads
filterCategory('');

// Function to add selected product to the shopping cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId); // Find the selected product by ID
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value) || 1; // Get the quantity input value
    const cartItem = cart.find(item => item.product.id === productId); // Check if product is already in the cart

    if (cartItem) {
        cartItem.quantity += quantity; // Increase quantity if product is already in the cart
    } else {
        cart.push({ product, quantity }); // Add new product to cart if not already present
    }
    updateCart(); // Update the cart display
}

// Function to update the cart display (both count and cart summary)
function updateCart() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total number of items in cart
    document.getElementById('cart-count').innerText = cartCount; // Update the cart icon count

    // Update Cart Modal with item details
    const cartSummary = document.getElementById('cart-summary');
    cartSummary.innerHTML = ''; // Clear previous cart summary
    cart.forEach((item, index) => {
        const row = document.createElement('tr'); // Create table row for each cart item
        row.innerHTML = `
            <td>${item.product.name}</td>
            <td style="width: 80px; text-align: center;">
              <input type="number" class="form-control form-control-sm" min="1" value="${item.quantity}" onchange="updateCartItem(${index}, this.value)" style="width: 60px; text-align: center;" />
            </td>
            <td>฿${(item.product.price * item.quantity).toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button></td>
          `;
        cartSummary.appendChild(row); // Add item row to cart summary
    });

    // Calculate and display total cart price
    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    document.getElementById('cart-total-price').innerText = totalPrice.toFixed(2); // Display total price in cart modal
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart array
    updateCart(); // Update the cart display
}

// Function to update the quantity of a cart item
function updateCartItem(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity); // Update the quantity for the specified cart item
    updateCart(); // Refresh the cart display
}

// Function to view the cart modal
function viewCart() {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal')); // Bootstrap modal for the cart
    cartModal.show(); // Show the cart modal
}

// Function to clear all items from the cart
function clearCart() {
    cart = []; // Empty the cart array
    updateCart(); // Refresh the cart display
}

// Function to handle checkout and show the checkout summary
function checkOut() {
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal')); // Bootstrap modal for checkout
    const checkoutSummary = document.getElementById('checkout-summary');
    checkoutSummary.innerHTML = ''; // Clear existing summary

    // Loop through each item in the cart and create a list item for each
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.quantity} x ${item.product.name}`; // Show quantity and product name
        checkoutSummary.appendChild(listItem); // Add list item to the summary
    });

    // Calculate and display total price in the checkout modal
    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2); // Display total price
    checkoutModal.show(); // Show the checkout modal
}

// Initialize Product Rendering
renderProducts(); // Render all products initially when the page loads