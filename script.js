

Monday 2:09 PM

script.js
JavaScript

when i added to cart not showing upside cart aded

image(27).png
i want to cahne tgis image and put new image

Generated image: Decadent chocolate banana dessert slice


Edit


Generated image: Decadent chocolate banana dessert slice
Generated image: Decadent chocolate banana dessert slice
Generated image: Decadent chocolate banana dessert slice

Generated image: Chocolate banana parfait delight
Generated image: Chocolate banana parfait delight
Generated image: Chocolate banana parfait delight

image(28).png
this image i want to put

image(29).png
jpg

This


Where

Next


Images not showing when in GitHub website 



Now changed but should updated last 6 minutes ago

Not showing images why






not gettig scanner


remove this

remove this

this remove and put BB in enlarge comany name

in medium large size visible with attractive colour code

it is enlraged put in medium

more gap is there 

images not showing



image showing but one image missing


image not showing


thus colour change

this colour red want to change different colour

Generated image: Color control grid showcase


Edit


error coming


Pasted code.css
File

when i click ok not going back

why like this coimg whiel order on whatapp

getting like this

this image coimg



working but here it shoul should multiple means 30 *3=90 like this 

this on esimple in different colour visible to all light colour code

this type should get in inside box looks attractive

this in box 

some space between them


index(5).html
File

nothing is happening


style(5).css
File
step by step 



style(6).css
File

done next we want to make this image 3 d

 where

like this i am getting


script(11).js
JavaScript







image(130).png
image(131).png
status paid should come below second image and staus paid gap is there make changes

Generated image: Payment Details: COD Paid


Edit

The large gap is caused by the X/Y coordinates you're using for the Status text. Instead of placing it on the same line with a large X value, place it below the Method with a small vertical gap.

Replace this:

doc.text("Method : " + paymentMethod,20,y+17);

doc.text("Status : PAID",120,y+17);
with:

// Method
doc.text("Method : " + paymentMethod, 20, y + 17);

// Status (below Method)
doc.text("Status : PAID", 20, y + 25);
If you're using the green "PAID" stamp, move it down too. Replace:

doc.roundedRect(145, y + 5, 35, 15, 2, 2);
doc.text("PAID", 154, y + 15);
with:

doc.roundedRect(120, y + 18, 35, 12, 2, 2);
doc.text("PAID", 129, y + 26);
The payment section will then look like:

Payment Details

Method : COD

Status : PAID   [PAID]
with no excessive spacing.

If you share your current Payment Details code block, I can adjust the coordinates precisely so it aligns perfectly in your invoice.


Generated image: Banana Bliss Delivery Checkout


Edit

The code you pasted is payment.html, but the "Status : PAID" shown in your screenshot is generated in script.js by jsPDF when creating the invoice PDF. The spacing can't be fixed from this HTML page.

Please open script.js and find the Payment Details section inside downloadInvoice(). It will look similar to this:

doc.text("Method : " + paymentMethod, ...);

doc.text("Status : PAID", ...);
Change it to:

// Method
doc.text("Method : " + paymentMethod, 20, y + 17);

// Status (below Method)
doc.text("Status : PAID", 20, y + 25);
If you're using a separate green PAID stamp, move that down as well:

doc.roundedRect(120, y + 18, 35, 12, 2, 2);
doc.text("PAID", 129, y + 26);
This will produce:

Payment Details

Method : COD

Status : PAID
with no large gap.

Please paste the "Payment Details" section from your downloadInvoice() function in script.js (about 15–20 lines around Method and Status). I can then give you the exact coordinate changes for your current code.




where it is getting 


script(12).js
JavaScript

it is shwinh 18 why

remove brown colour and make perfect as in app that code

Generated image: Grand Total Checkout Summary


Edit

Yes. A cleaner design is more like Swiggy/Zomato. Instead of a dark brown box, use a white card with a light border.

Step 1
Find this entire block:

// Brown background
doc.setFillColor(92,52,25);

// Rectangle
doc.roundedRect(120,y,75,20,3,3,"F");

// White text
doc.setTextColor(255,255,255);

doc.setFontSize(15);

doc.text("Grand Total",126,y+8);

doc.text("Rs. " + finalTotal,165,y+8);

// Restore black text
doc.setTextColor(0,0,0);
Replace it with:
// ==========================
// Grand Total Card
// ==========================

// White card
doc.setFillColor(255,255,255);
doc.setDrawColor(220,220,220);
doc.setLineWidth(0.5);

doc.roundedRect(120, y, 75, 20, 3, 3, "FD");

// Black text
doc.setFont("helvetica","bold");
doc.setFontSize(14);
doc.setTextColor(0,0,0);

doc.text("Grand Total", 126, y + 8);
doc.text("Rs. " + finalTotal, 165, y + 8);
Result
----------------------------------------
Subtotal                 Rs. 30
Delivery                 Rs. 10
----------------------------------------

┌──────────────────────────────┐
│ Grand Total        Rs. 40    │
└──────────────────────────────┘
It will look much cleaner and closer to the style used by modern food-ordering apps while still keeping the invoice professional.


Generated image: Grand Total Receipt Summary


Edit

A smaller, cleaner Grand Total card is a better match for modern food-ordering apps. Replace your current Grand Total block with the following.

// ==========================
// Grand Total (Modern Style)
// ==========================

y += 6;

// Compact card
doc.setFillColor(250,250,250);
doc.setDrawColor(220,220,220);
doc.setLineWidth(0.4);

doc.roundedRect(125, y, 68, 14, 2, 2, "FD");

// Title
doc.setFont("helvetica","bold");
doc.setFontSize(11);
doc.setTextColor(60,60,60);
doc.text("Grand Total", 129, y + 9);

// Amount
doc.setFont("helvetica","bold");
doc.setFontSize(13);
doc.setTextColor(0,0,0);
doc.text("Rs. " + finalTotal, 166, y + 9);

// Reset
doc.setTextColor(0,0,0);
It will look like this:
Subtotal                 Rs. 30
Delivery                 Rs. 10
────────────────────────────────

┌────────────────────────────┐
│ Grand Total      Rs. 40    │
└────────────────────────────┘
This is much closer to the clean style used in food delivery apps while keeping the invoice easy to read.


why


script(13).js
JavaScript
where to change

why i am getting this box


script(14).js
JavaScript

i dont wnat that why i am getting

yes


remove red box

when i add to cart in dark mode nothing is visble what i added what to do in code

where

Screenshot 2026-07-29 202052.png
image(144).png
this type i want in this below 

Generated image: Banana Bliss Checkout and Payment UI


Edit

This version shows a polished checkout page with the payment card styled like your reference, including the soft green background, cash icon, and clear payment message.

Would you like the cash icon to match your reference more closely by using a realistic money-note icon instead of the current illustration?


Generated image: Banana Bliss Checkout Screen


Edit

I've placed the green Cash on Delivery card below the Payment Method heading so it matches the layout you described more closely.

Would you like the payment card to span the full width of the white container like in your reference image?


below this

Generated image: Banana Bliss Checkout Screen


Edit

The green Cash on Delivery information card is now positioned directly below the payment dropdown, matching the layout you pointed out.

Would you like the green information card to have the same left and right margins as the dropdown, or should it stretch slightly wider?



payment(4).html
File

when i dark mode its not visible your cart is empty that


script(15).js
JavaScript










when i click this i am not getting anything



product page getting blank

i getting like this

image(162).png
image(163).png
this one name missing in this and banana pudding want to be banana cake change

when i click my orders in website it is coming to admin panel and showing all orders why 


index(6).html
File

why it shwoing like this anything happened

Today 10:50 AM
why in admin panel shoing all orders do i want or not

didint got



image(170).png
Screenshot 2026-07-30 110648.png
i am getting in website like this and in admin panel i am getting this 31 orders are available like that

getting

when i click here to view order it should display only new orders not all in orders it should dipslay all order in ascending oreder like 1 2 3 like that

this one getting in colour

Click here to view the latest order. when i click this it will show order but not automatically scrolling i have to scroll


admin.js
JavaScript


admin(1).js
JavaScript
is this now correct




image(178).png
when i changed to kanada langauge it in in english pnly


script(16).js
JavaScript


script(17).js
JavaScript


index(7).html
File


language(1).js
JavaScript

when we unlock 100 free delivery but in invoice i am getting deleiveryy cahregs why


Screenshot 2026-07-30 152129.png
image(181).png
when i click place order it is showing like this i dont enat this why its showing


manifest(1).json
File


service-worker(1).js
JavaScript




logo-512.png
logo-192.png



when i click check out in app i want to back means there is no option 





script(18).js
JavaScript
see 


index(8).html
File

Today 6:13 PM
image not getting

Today 7:15 PM
while order placed i clicked on down load invoice on fisrt click its not downloading and agian i press means its downloading why


Yes. Now you can do the rest in one go.

Move ALL the remaining PDF generation code inside logo.onload.
That means everything starting from:

doc.setFont("helvetica", "bold");
through

doc.save("BananaBliss-Invoice.pdf");
should be inside:

const logo = new Image();

logo.onload = function () {

    doc.setFillColor(247,198,0);
    doc.rect(0,0,210,35,"F");
    doc.setDrawColor(180);
    doc.line(0,35,210,35);
    doc.addImage(logo, "PNG", 8, 4, 30, 30);

    // ↓↓↓ Move EVERYTHING below here ↓↓↓
    // doc.setFont(...)
    // doc.setFontSize(...)
    // ...
    // ...
    // doc.save("BananaBliss-Invoice.pdf");

};

logo.src = "images/logo.png";
Important
After you move everything:

There should be no PDF code left outside logo.onload.

The only line after }; should be:

logo.src = "images/logo.png";
Once you've done that, save the file and test it on your phone.

If it still doesn't download on the first tap, send me your complete downloadInvoice() function (or upload script.js), and I'll fix it exactly.


last line what

The last line inside logo.onload should be:

doc.save("BananaBliss-Invoice.pdf");
Then close the function:

};
And after that, keep:

logo.src = "images/logo.png";
So the end of your function should look like this:

// ... all PDF code ...

doc.save("BananaBliss-Invoice.pdf");

};

logo.src = "images/logo.png";
Question: Is doc.save("BananaBliss-Invoice.pdf"); currently the last line in your function, or do you have more code after it?



Pasted text(1).txt
Document
make changes

I found the issue.

You moved only the first few lines into logo.onload, but the rest of the PDF code is still outside, so the image still isn't guaranteed to be loaded. 


Instead of moving hundreds of lines, use this simpler fix.

Replace this:
const logo = new Image();

logo.onload = function () {
    doc.setFillColor(247,198,0);
    doc.rect(0,0,210,35,"F");
    doc.setDrawColor(180);
    doc.line(0, 35, 210, 35);
    doc.addImage(logo, "PNG", 8, 4, 30, 30);
};

logo.src = "images/logo.png";
With this:
const logo = new Image();
logo.src = "images/logo.png";
Then find this line:

doc.save("BananaBliss-Invoice.pdf");
Replace it with:

setTimeout(() => {
    doc.save("BananaBliss-Invoice.pdf");
}, 300);
This is a much smaller change and often fixes the Android "first tap does nothing" issue by giving the image a moment to load before saving the PDF.


step by step what to do

Let's undo the incomplete changes first and apply the easier fix.

Step 1
In your downloadInvoice() function, find this block:

const logo = new Image();

logo.onload = function () {
    doc.setFillColor(247,198,0);
    doc.rect(0,0,210,35,"F");
    doc.setDrawColor(180);
    doc.line(0,35,210,35);
    doc.addImage(logo,"PNG",8,4,30,30);
};

logo.src = "images/logo.png";
Replace the entire block with:

const logo = new Image();
logo.src = "images/logo.png";
That's all for this step.

Reply "Done" after replacing it.


done

Perfect.

Step 2
Go to the bottom of downloadInvoice().

Find this line:

doc.save("BananaBliss-Invoice.pdf");
It is the last line before the closing } of the function. 


Replace it with:

setTimeout(() => {
    doc.save("BananaBliss-Invoice.pdf");
}, 300);
Save the file and test it on your phone.

Reply "Done" and tell me whether the PDF downloads on the first tap now.


done

Now test it on your Android phone.

Refresh the website completely.

Place a new order.

Go to the success page.

Tap Download Invoice once.

Tell me exactly what happens:

A) ✅ It downloads on the first tap.

B) Nothing happens on the first tap, but the second tap downloads.

C) Nothing happens even after multiple taps.

D) Some error appears.

Reply with A, B, C, or D.


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
logo.onload = function () {
doc.setFillColor(247,198,0);
doc.rect(0,0,210,35,"F");
doc.setDrawColor(180);
doc.line(0, 35, 210, 35);
doc.addImage(logo, "PNG", 8, 4, 30, 30);
};
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

body,

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

doc.save("BananaBliss-Invoice.pdf");
}




