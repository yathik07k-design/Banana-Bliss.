const orders = JSON.parse(localStorage.getItem("orders")) || [];

// Dashboard Cards
const totalOrders = document.getElementById("totalOrders");
const totalSalesElement = document.getElementById("totalSales");
const productsSoldElement = document.getElementById("productsSold");

if (totalOrders) {
    totalOrders.innerHTML = orders.length;
}

let totalSales = 0;
orders.forEach(order => {
    totalSales += order.total;
});

if (totalSalesElement) {
    totalSalesElement.innerHTML = "₹" + totalSales;
}

let productsSold = 0;
orders.forEach(order => {
    productsSold += order.items.length;
});

if (productsSoldElement) {
    productsSoldElement.innerHTML = productsSold;
}

// Orders Table
const ordersBody = document.getElementById("ordersBody");

if (ordersBody) {

    let ordersToShow = orders;

    if (localStorage.getItem("viewLatest") === "true") {
        ordersToShow = orders;
       
    }

    ordersToShow.forEach((order, index) => {
        ordersBody.innerHTML += `
    <tr
    id="${index === orders.length - 1 ? 'latestOrder' : ''}"
    ${
        index === orders.length - 1 &&
        localStorage.getItem("viewLatest") === "true"
            ? 'style="background:#d4edda;font-weight:bold;"'
            : ""
    }>
                <td>${order.id}</td>
                <td>${order.date}</td>
                <td>₹${order.total}</td>
                <td>${order.payment}</td>
            </tr>
        `;
    });

  
}
const notification = document.getElementById("notification");

if (
    notification &&
    localStorage.getItem("newOrder") === "true"
) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

   notification.style.display = "block";

const latestOrder = orders[orders.length - 1];

let itemsList = ""; 

latestOrder.items.forEach(item => {
    itemsList += `<div>🍌 ${item.name} × ${item.qty}</div>`;
});

notification.innerHTML = `
<h3>🔔 New Order Received!</h3>

<p><strong>Order #${latestOrder.id}</strong></p>

${itemsList}

<p><strong>Total: ₹${latestOrder.total}</strong></p>

<p>
<a href="orders.html" onclick="localStorage.setItem('viewLatest','true')">
📦 Click here to view the latest order
</a>
</p>
`;

document.getElementById("notifySound").play();

    localStorage.removeItem("newOrder");

    setTimeout(() => {
    notification.style.display = "none";
    notification.innerHTML = "";
}, 5000);
}
if (localStorage.getItem("viewLatest") === "true") {

    setTimeout(() => {
        const latestOrder = document.getElementById("latestOrder");

        if (latestOrder) {
            latestOrder.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        localStorage.removeItem("viewLatest");
    }, 100);
}