let cart = JSON.parse(localStorage.getItem("cart")) || [];
const receiptItems = document.getElementById("receiptItems");
const discountEl = document.getElementById("discount");
const vatEl = document.getElementById("vat");
const grandTotalEl = document.getElementById("grandTotal");
const tableNumberEl = document.getElementById("tableNumber");

// สร้างเลขโต๊ะ (1-20)
const tableNumber = localStorage.getItem("selectedTable") || "-";
tableNumberEl.innerText = "โต๊ะ " + tableNumber;

function renderReceipt() {
    receiptItems.innerHTML = "";
    let subtotal = 0;
    cart.forEach(item => {
        const div = document.createElement("div");
        const itemTotal = item.qty * item.price;
        subtotal += itemTotal;
        div.className = "receipt-item";
        div.innerHTML = `${item.name} x${item.qty} = ${itemTotal} บาท`;
        receiptItems.appendChild(div);
    });
    let discount = Math.round(subtotal * 0.05); // 5% discount
    let vat = Math.round((subtotal - discount) * 0.07); // 7% VAT
    let grandTotal = subtotal - discount + vat;

    discountEl.innerText = discount;
    vatEl.innerText = vat;
    grandTotalEl.innerText = grandTotal;

    generateQRCode(tableNumber, grandTotal);
}

function generateQRCode(table, total) {
    const qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = "";
    const qrText = `โต๊ะ: ${table} \nรวมสุทธิ: ${total} บาท`;
    QRCode.toCanvas(qrcodeDiv, qrText, function (error) {
        if (error) console.error(error);
    });
}

function printReceipt() {
    window.print();
}

window.onload = () => {
    renderReceipt();
}
