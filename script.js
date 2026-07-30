// =========================
// BANANA BLISS
// =========================

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;
let customerLocation = "";
   
// =========================
// ADD TO CART
// =========================

function addToCart(name, price){

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = cart.find(product => product.name === name);

    if(item){
        item.qty++;
    }else{
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}


// =========================
// UPDATE CART
// =========================

function updateCart(){

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cartItems");
    const totalAmount = document.getElementById("total");
    const cartCount = document.getElementById("cartCount");

    total = 0;

    if(cartItems){

        cartItems.innerHTML = "";

        if(cart.length === 0){

            cartItems.innerHTML = "<p>Your cart is empty.</p>";

        }else{

            cart.forEach((item,index)=>{

                total += item.price * item.qty;

                cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong><br>
                        ₹${item.price} × ${item.qty} =
                        <strong>₹${item.price * item.qty}</strong>
                    </div>

                    <div class="qty-box">
                        <button onclick="decreaseQty(${index})">➖</button>
                        <span>${item.qty}</span>
                        <button onclick="increaseQty(${index})">➕</button>
                    </div>
                </div>
                `;

            });

        }

    }

    if(totalAmount){
        totalAmount.innerHTML = total;
        const deliveryText = document.getElementById("deliveryText");
const progressFill = document.getElementById("progressFill");

if (deliveryText && progressFill) {

    const target = 100; // Free delivery at ₹100

    let percent = Math.min((total / target) * 100, 100);
    progressFill.style.width = percent + "%";

    if (total >= target) {
        deliveryText.innerHTML = "🎉 Congratulations! You unlocked FREE Delivery!";
    } else {
        deliveryText.innerHTML =
            `🚚 Add ₹${target - total} more to get FREE Delivery!`;
    }
}
    }

    if(cartCount){
        let count = 0;

        cart.forEach(item=>{
            count += item.qty;
        });

        cartCount.innerHTML = count;
    }

}

// =========================
// QUANTITY
// =========================

function increaseQty(index){

    cart[index].qty++;

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

}

function decreaseQty(index){

    cart[index].qty--;

    if(cart[index].qty <= 0){
        cart.splice(index,1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

}
// =========================
// SEARCH PRODUCTS
// =========================

function searchProducts(){

    let input = document.getElementById("searchBox");

    if(!input) return;

    input = input.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product){

        let text = product.innerText.toLowerCase();

        if(text.includes(input)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }

    });

}

// =========================
// SAVE ADDRESS
// =========================

function saveAddress(){

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if(name==="" || phone==="" || address===""){
        alert("Please fill all details.");
        return;
    }

    const user = {
        name: name,
        phone: phone,
        address: address
    };

    localStorage.setItem("customer", JSON.stringify(user));

    loadAddress();

}

// =========================
// LOAD ADDRESS
// =========================

function loadAddress(){

    const user = JSON.parse(localStorage.getItem("customer"));

    const addressForm = document.getElementById("addressForm");
    const savedAddress = document.getElementById("savedAddress");

    if(!user){

        if(addressForm) addressForm.style.display = "block";
        if(savedAddress) savedAddress.style.display = "none";

        return;
    }

    if(document.getElementById("name")){
        document.getElementById("name").value = user.name;
    }

    if(document.getElementById("phone")){
        document.getElementById("phone").value = user.phone;
    }

    if(document.getElementById("address")){
        document.getElementById("address").value = user.address;
    }

    if(addressForm) addressForm.style.display = "none";
    if(savedAddress) savedAddress.style.display = "block";

    if(document.getElementById("showName")){
        document.getElementById("showName").innerHTML = "👤 " + user.name;
    }

    if(document.getElementById("showPhone")){
        document.getElementById("showPhone").innerHTML = "📞 " + user.phone;
    }

    if(document.getElementById("showAddress")){
        document.getElementById("showAddress").innerHTML = "🏠 " + user.address;
    }
}

// =========================
// EDIT ADDRESS
// =========================

function editAddress(){

    if(document.getElementById("addressForm"))
        document.getElementById("addressForm").style.display = "block";

    if(document.getElementById("savedAddress"))
        document.getElementById("savedAddress").style.display = "none";

}

// =========================
// SHOW / HIDE UPI
// =========================

function togglePayment(){

    const payment = document.getElementById("payment");
    const upiBox = document.getElementById("upiBox");
    const codInfo = document.getElementById("codInfo");

    if(payment.value === "UPI"){
        upiBox.style.display = "block";
        codInfo.style.display = "none";
    }else{
        upiBox.style.display = "none";
        codInfo.style.display = "flex";
    }

}
// =========================
// GO TO PAYMENT
// =========================

function goToPayment(){

    if(cart.length === 0){
        alert("Your cart is empty.");
        return;
    }

    window.location.href = "payment.html";

}
// =========================
// GO TO REVIEW
// =========================

function goToReview(){

    const payment = document.getElementById("payment").value;

    localStorage.setItem("paymentMethod", payment);

    if(document.getElementById("txnId")){
        localStorage.setItem(
            "txnId",
            document.getElementById("txnId").value
        );
    }

    window.location.href = "review.html";

}

// =========================
// PLACE ORDER
// =========================

function placeOrder(){

    const user = JSON.parse(localStorage.getItem("customer"));

    if(!user){
        alert("Please save your address first.");
        return;
    }

    const payment = localStorage.getItem("paymentMethod");
   
    if(cart.length === 0){
        alert("Your cart is empty.");
        return;
    }

    let message = "🍌 Banana Bliss Order\n\n";

    message += "👤 Name : " + user.name + "\n";
    message += "📞 Phone : " + user.phone + "\n";
    message += "🏠 Address : " + user.address + "\n";
    message += "💳 Payment : " + payment + "\n";

    const savedLocation = localStorage.getItem("customerLocation") || "";

if(savedLocation !== ""){
    message += "📍 Location : " + savedLocation + "\n";
}

    message += "\n🛒 Order Items\n\n";

    total = 0;

    cart.forEach(function(item){

        total += item.price * item.qty;

        message += item.name +
        " × " + item.qty +
        " = ₹" + (item.price * item.qty) + "\n";

    });

    message += "\n💰 Total : ₹" + total;

// Save Order
const orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({
    id: orders.length + 1,
    date: new Date().toLocaleString(),
    total: total,
    payment: payment,
    items: [...cart]
});

localStorage.setItem("orders", JSON.stringify(orders));
localStorage.setItem("newOrder", "true");

// Save invoice for PDF
localStorage.setItem("lastInvoice", JSON.stringify({
    invoiceNo: "BB" + String(orders.length + 1).padStart(4, "0"),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    customer: user,
    payment: payment,
    items: [...cart],
    total: total
}));

const phoneNumber = "919741432959";

window.open(
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

    localStorage.removeItem("cart");

    cart = [];

    updateCart();

    setTimeout(function(){

        window.location.href = "success.html";

    },1000);

}
// =========================
// CHECKOUT ORDER SUMMARY
// =========================

function loadCheckout(){

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    const summary = document.getElementById("orderSummary");
    const checkoutTotal = document.getElementById("checkoutTotal");

    if(!summary || !checkoutTotal) return;

    summary.innerHTML = "";

    let grandTotal = 0;

    if(cart.length === 0){
        summary.innerHTML = "<p>Your cart is empty.</p>";
        checkoutTotal.innerHTML = "0";
        return;
    }

    cart.forEach(function(item){

        const itemTotal = item.price * item.qty;

        grandTotal += itemTotal;

        summary.innerHTML += `
        <div class="summary-item">
            <span>${item.name} × ${item.qty} =</span>
            <strong>₹${itemTotal}</strong>
        </div>
        `;
    });

    checkoutTotal.innerHTML = grandTotal;
}

// =========================
// PAGE INITIALIZATION
// =========================

window.onload = function(){

    updateCart();

    loadAddress();

    loadCheckout();

    if(document.getElementById("payment")){
        toggleUPI();
    }

};
function getLocation() {

    const status = document.getElementById("locationStatus");

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    if (status) {
        status.innerHTML = "Getting location...";
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            customerLocation =
                "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;

            // Save location
            localStorage.setItem("customerLocation", customerLocation);

            if (status) {
                status.innerHTML = "✅ Location Captured";
            }

        },

        function(error) {

            if (status) {
                status.innerHTML = "❌ " + error.message;
            }

        },

        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }

    );
}
function payUPI(){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let amount = 0;

    cart.forEach(item => {
        amount += item.price * item.qty;
    });

    if(amount <= 0){
        alert("Cart is empty.");
        return;
    }

    const upiURL =
        "upi://pay?pa=9741432959@ibl" +
        "&pn=Banana Bliss" +
        "&am=" + amount +
        "&cu=INR";

    window.location.href = upiURL;

}
function copyUPI(){  

    const upi = document.getElementById("upiId");

    upi.select();
    upi.setSelectionRange(0,99999);

    navigator.clipboard.writeText(upi.value);

    alert("UPI ID copied successfully.");

}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js");
    });
}
/* ==========================
   Dark / Light Theme
========================== */

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            themeToggle.textContent="☀️";
            localStorage.setItem("theme","dark");
        }else{
            themeToggle.textContent="🌙";
            localStorage.setItem("theme","light");
        }

    });

    if(localStorage.getItem("theme")==="dark"){
        document.body.classList.add("dark");
        themeToggle.textContent="☀️";
    }

}
document.getElementById("downloadInvoice").addEventListener("click", downloadInvoice);

function downloadInvoice() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();
    // Load Banana Bliss Logo
   const logo = new Image();
logo.src = "images/logo.png";

    // Yellow Header

    // Add Banana Bliss Logo
doc.addImage(logo, "PNG", 8, 4, 30, 30);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(92,52,25);

   doc.text("BANANA BLISS",45,17);

    doc.setFontSize(11);
    doc.setTextColor(60);

   doc.text("Fresh • Homemade • Premium Quality",45,25);

    doc.line(10, 35, 200, 35);

   // Customer Details Box

const customer = JSON.parse(localStorage.getItem("customer")) || {};
const invoice = JSON.parse(localStorage.getItem("lastInvoice")) || {};

doc.setDrawColor(180);
doc.roundedRect(10,40,190,45,4,4);

doc.setFontSize(12);
doc.setTextColor(0);

doc.text("Invoice No :",15,50);
doc.text(invoice.invoiceNo || "BB0001", 60, 50);

doc.text("Date :",15,58);
doc.text(new Date().toLocaleDateString(),60,58);

doc.text("Time :",15,66);
doc.text(new Date().toLocaleTimeString(),60,66);

doc.text("Customer :",110,50);
doc.text(customer.name || "-",145,50);

doc.text("Phone :",110,58);
doc.text(customer.phone || "-",145,58);

doc.text("Address :",110,66);
doc.text(customer.address || "-",145,66);

    // ==========================
// Invoice Items Table
// ==========================

let rows = [];

let grandTotal = invoice.total;

invoice.items.forEach(item=>{

    let itemTotal = item.price * item.qty;

    rows.push([
    item.name,
    item.qty,
    "Rs. " + item.price,
    "Rs. " + itemTotal
]);

});

doc.autoTable({

startY:95,

head:[[
"Item",
"Qty",
"Price",
"Total"
]],

body:rows,

theme:"grid",

headStyles:{
    fillColor:[247,198,0],
    textColor:[0,0,0],
    fontStyle:"bold",
    halign:"center"
},

alternateRowStyles:{
    fillColor:[255,250,220]
},

styles:{
    fontSize:11,
    cellPadding:4
}

});

// ==========================
// Billing Summary
// ==========================

let deliveryCharge = grandTotal >= 100 ? 0 : 10;

let finalTotal = grandTotal + deliveryCharge;

let y = doc.lastAutoTable.finalY + 15;

doc.setFontSize(12);
doc.setFont("helvetica","bold");

// ==========================
// Billing Summary Card
// ==========================

doc.setFillColor(252,252,252);
doc.setDrawColor(225,225,225);
doc.setLineWidth(0.3);

doc.roundedRect(15, y, 180, 38, 4, 4, "F");

doc.setFont("helvetica","normal");
doc.setFontSize(11);
doc.setTextColor(90);

doc.text("Subtotal",123,y+2);
doc.text("Rs. " + grandTotal,170,y+2);

doc.text("Delivery",123,y+9);
if (deliveryCharge === 0) {
    doc.setTextColor(34,139,34);
    doc.text("FREE DELIVERY",170,y+9);
    doc.setTextColor(0,0,0);
} else {
    doc.text("Rs. " + deliveryCharge,170,y+9);
}

doc.setDrawColor(220);
doc.line(122,y+12,192,y+12);

doc.setFont("helvetica","bold");
doc.setFontSize(12);
doc.setTextColor(0);

doc.text("Grand Total",123,y+20);
doc.text("Rs. " + finalTotal,170,y+20);

// Space before Payment Details
y += 18;

// Payment Details
y += 35;

const paymentMethod = localStorage.getItem("paymentMethod") || "UPI";

doc.setFillColor(255,248,225);
doc.roundedRect(15, y, 180, 38, 4, 4, "F");

doc.setFont("helvetica","bold");
doc.setFontSize(14);
doc.setTextColor(92,52,25);
doc.text("Payment Details",20,y+8);

doc.setFont("helvetica","normal");
doc.setFontSize(11);
doc.setTextColor(0,0,0);

// Method
doc.text("Method : " + paymentMethod, 20, y + 18);

// Status
doc.text("Status :", 20, y + 28);

// Green PAID
doc.setFont("helvetica","bold");
doc.setTextColor(34,139,34);
doc.text("PAID", 36, y + 28);

// Reset color
doc.setTextColor(0,0,0);

// ==========================
// Footer
// ==========================

let footerY = 270;

doc.setFillColor(247,198,0);
doc.rect(0, footerY, 210, 27, "F");

// Title
doc.setFont("helvetica","bold");
doc.setFontSize(15);
doc.setTextColor(92,52,25);
doc.text("Thank You for Choosing Banana Bliss!", 28, footerY + 10);

// Subtitle
doc.setFont("helvetica","normal");
doc.setFontSize(10);
doc.setTextColor(0,0,0);
doc.text("Fresh • Homemade • Premium Quality", 55, footerY + 17);

// Contact
doc.text("Phone: +91 9741432959", 15, footerY + 24);

setTimeout(() => {
    doc.save("BananaBliss-Invoice.pdf");
}, 300);






