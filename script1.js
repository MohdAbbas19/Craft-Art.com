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

// Generate UPI QR Code
function generateQRCode() {
    const totalAmount = parseFloat(document.getElementById("cart-total").textContent);

    if (isNaN(totalAmount) || totalAmount === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Replace 'yourupi@upi' with your actual UPI ID
    const upiId = "abbaskhanjarvis79@okaxis"; // Example: "merchant@upi"
    const upiName = "Craft RAW material 🌸"; // Business or individual name
    const transactionNote = "Shopping Payment"; // Description for payment
    const currency = "INR"; // Indian Rupees

    // UPI Payment URL
    const upiQRData = `upi://pay?pa=${upiId}&pn=${upiName}&tn=${transactionNote}&am=${totalAmount}&cu=${currency}`;

    // Generate QR Code
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiQRData)}`;

    // Update QR Code Image
    const qrImage = document.getElementById("qrcode");
    qrImage.src = qrCodeURL;
    qrImage.style.display = "block";

    document.getElementById("qrcode-container").style.display = "block";
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

// Send Cart & Form Data via WhatsApp
function sendToWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (name === "" || phone === "" || address === "") {
        alert("⚠️ Please fill all the details.");
        return;
    }
 // ✅ Fetch updated cart data
 let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

 if (!cartItems || cartItems.length === 0) {
     alert("⚠️ Your cart is empty!");
     return;
 }

 console.log("Cart Data:", cartItems); // ✅ Debugging line

    let cartText = cartItems.map((item, index) =>
        `🛍️ ${index + 1}. ${item.name} x ${item.quantity} - ₹${item.price}`
    ).join("\n");

    let totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let message = `*New Order Received!*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🏠 *Address:* ${address}\n\n🛒 *Cart Items:*\n${cartText}\n\n💰 *Total Amount:* ₹${totalAmount}\n\n🚀 *Please confirm the order!*`;

    let ownerNumber = "91XXXXXXXXXX";  // Replace with your WhatsApp number
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


