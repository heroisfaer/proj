// 1. YOUR CREDENTIAL MAP
const shopKeys = {
    "shop_001": "streetwear77",
    "shop_002": "minimal88"
};

let currentShopId = ""; // This is our "Session" variable

function attemptLogin() {
    const selectedShop = document.getElementById('shop-select').value;
    const enteredPass = document.getElementById('admin-pass').value;

    if (shopKeys[selectedShop] === enteredPass) {
        currentShopId = selectedShop; // LOCK the ID
        
        // Switch UI
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        document.getElementById('display-shop-name').innerText = "Store: " + currentShopId;
        
        // Build the table immediately
        renderInventoryList();
    } else {
        alert("Wrong passkey for this shop!");
    }
}

function renderInventoryList() {
    const container = document.getElementById('product-list-container');
    const data = JSON.parse(localStorage.getItem('custom_inventory')) || {};
    
    // Safety check: Grab only THIS shop's data
    const shopInv = data[currentShopId] || {};
    
    console.log("Rendering list for:", currentShopId);
    console.table(shopInv); // Check your F12 console to see this!

    let html = `
        <table style="width:100%; border-collapse: collapse; margin-top:10px;">
            <tr style="text-align:left; border-bottom: 2px solid #000;">
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
    `;

    let itemCount = 0;

    Object.entries(shopInv).forEach(([category, products]) => {
        products.forEach((p, index) => {
            itemCount++;
            html += `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding:10px;">${p.name} <br><small>${category}</small></td>
                    <td>$${Number(p.price).toFixed(2)}</td>
                    <td>
                        <button onclick="deleteProduct('${category}', ${index})" 
                                style="background:red; color:white; border:none; padding:5px; cursor:pointer;">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        });
    });

    html += `</table>`;

    if (itemCount === 0) {
        container.innerHTML = "<p>No custom products found for this ID.</p>";
    } else {
        container.innerHTML = html;
    }
}

function deleteProduct(cat, idx) {
    let data = JSON.parse(localStorage.getItem('custom_inventory')) || {};
    data[currentShopId][cat].splice(idx, 1);
    
    // Clean up empty categories
    if (data[currentShopId][cat].length === 0) delete data[currentShopId][cat];
    
    localStorage.setItem('custom_inventory', JSON.stringify(data));
    renderInventoryList(); // Refresh the table
}

function addProduct() {
    const name = document.getElementById('p-name').value;
    const cat = document.getElementById('p-cat').value;
    const price = document.getElementById('p-price').value;
    const img = document.getElementById('p-img').value;

    if(!name || !cat || !price || !img) return alert("Fill all fields");

    let data = JSON.parse(localStorage.getItem('custom_inventory')) || {};
    if (!data[currentShopId]) data[currentShopId] = {};
    if (!data[currentShopId][cat]) data[currentShopId][cat] = [];

    data[currentShopId][cat].push({ name, price: parseFloat(price), image: img });

    localStorage.setItem('custom_inventory', JSON.stringify(data));
    alert("Added!");
    
    // Clear the form and refresh the table
    document.getElementById('p-name').value = "";
    renderInventoryList();
}