let cart = [];

// Add to Cart
function addToCart(product, price) {
    let item = cart.find(item => item.product === product);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    updateCart();
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Remove from Cart
function removeFromCart(product) {
    let itemIndex = cart.findIndex(item => item.product === product);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    updateCart();
}

// Update Cart Display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.product} - ₹${item.price.toFixed(2)} x ${item.quantity}
            <button class="cart-btn add" onclick="addToCart('${item.product}', ${item.price})">+</button>
            <button class="cart-btn remove" onclick="removeFromCart('${item.product}')">-</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    // Ensure total amount is updated
    cartTotal.textContent = total.toFixed(2);
}

// Clear Cart after Checkout
function clearCart() {
    cart = [];  // Reset cart array
    updateCart();  // Refresh cart UI
    document.getElementById("qrcode-container").style.display = "none"; // Hide QR code
    document.getElementById("qrcode").src = ""; // Remove QR code image
    alert("Thank you for shopping! Your cart is now empty.");
}

// Show the order form when "Shop" is clicked
document.getElementById("shopButton").addEventListener("click", function() {
    document.getElementById("order-form").style.display = "block";
});

// Hide the form when "Cancel" is clicked
function closeForm() {
    document.getElementById("order-form").style.display = "none";
}

function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (!name || !phone || !address) {
        alert("⚠️ Please fill all the details.");
        return;
    }

    // ✅ Fetch cart items directly from the HTML list
    let cartItemsList = document.querySelectorAll("#cart-items li");
    if (cartItemsList.length === 0) {
        alert("⚠️ Your cart is empty!");
        return;
    }

    let cartText = "";
    let totalAmount = 0;

    cartItemsList.forEach((item, index) => {
        let productText = item.textContent.trim(); // Get text inside <li>
        let priceMatch = productText.match(/₹(\d+(\.\d+)?)/); // Extract price using regex
        let price = priceMatch ? parseFloat(priceMatch[1]) : 0;

        cartText += `🛍️ ${index + 1}. ${productText}\n`;
        totalAmount += price;
    });

    let message = `*New Order Received!*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🏠 *Address:* ${address}\n\n🛒 *Cart Items:*\n${cartText}\n\n💰 *Total Amount:* ₹${totalAmount.toFixed(2)}\n\n🚀 *Please confirm the order!*`;

    let ownerNumber = "91XXXXXXXXXX"; // Replace with actual WhatsApp number
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
}




function scrollInsta(amount) {
    document.querySelector('.insta-feed').scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}

const productImages = {
    wedding: [
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"] // Images for second wedding product
    ],
    haldi: [
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"] // Images for second party product
    ],
    Ramazan: [
        ["galary/Rr1.jpg", "galary/Rr2.jpg", "galary/Rr3.jpg"],
        ["galary/rb1.jpg", "galary/rb2.jpg", "galary/rb3.jpg"],
        ["galary/T1.jpg", "galary/T2.jpg"],
        ["galary/Jg1.jpg", "galary/Jb2.jpg", "galary/Jp3.jpg", "galary/Jgb4.jpg", "galary/Jblu6.jpg", "galary/Jg1.jpg"],
        ["galary/Jbl5.jpg", "galary/Jbl5.jpg"],
        ["galary/Rp4.jpg", "galary/R3.jpg", "galary/Rg2.jpg", "galary/Rab1.jpg", "galary/Rw6.jpg", "galary/Rblb7.jpg"] // Images for second casual product
    ],
    other: [
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"],
        ["IMG-20250202-WA0014.jpg", "IMG-20250202-WA0013.jpg", "IMG-20250202-WA0012.jpg"] // Images for second formal product
    ]
};

let currentImageIndex = {
    wedding: [0, 0, 0, 0, 0, 0, 0, 0],
    haldi: [0, 0, 0, 0, 0, 0, 0, 0],
    Ramazan: [0, 0, 0, 0, 0, 0, 0, 0],
    other: [0, 0, 0, 0, 0, 0, 0, 0]
};

function nextImage(section, productIndex) {
    currentImageIndex[section][productIndex] = (currentImageIndex[section][productIndex] + 1) % productImages[section][productIndex].length;
    document.getElementById(`${section}-product-img-${productIndex}`).src = productImages[section][productIndex][currentImageIndex[section][productIndex]];
}

function prevImage(section, productIndex) {
    currentImageIndex[section][productIndex] = (currentImageIndex[section][productIndex] - 1 + productImages[section][productIndex].length) % productImages[section][productIndex].length;
    document.getElementById(`${section}-product-img-${productIndex}`).src = productImages[section][productIndex][currentImageIndex[section][productIndex]];
}


