/* INVENTORY MANAGER
   To change items: Edit the name, price, or image link below. 
*/
const inventory = [
    { name: "Classic White Tee", price: "$25", img: "https://via.placeholder.com/300x400?text=White+Tee" },
    { name: "Black Slim Denim", price: "$75", img: "https://via.placeholder.com/300x400?text=Black+Denim" },
    { name: "Linen Button-Down", price: "$55", img: "https://via.placeholder.com/300x400?text=Linen+Shirt" },
    { name: "Cotton Chinos", price: "$60", img: "https://via.placeholder.com/300x400?text=Chinos" },
    { name: "Canvas Tote Bag", price: "$20", img: "https://via.placeholder.com/300x400?text=Tote" },
    { name: "Heavyweight Hoodie", price: "$85", img: "https://via.placeholder.com/300x400?text=Hoodie" },
    { name: "Leather Chelsea Boots", price: "$140", img: "https://via.placeholder.com/300x400?text=Boots" },
    { name: "Wool Blend Coat", price: "$190", img: "https://via.placeholder.com/300x400?text=Coat" },
    { name: "Graphic Streetwear Tee", price: "$35", img: "https://via.placeholder.com/300x400?text=Graphic+Tee" },
    { name: "Utility Cargo Pants", price: "$70", img: "https://via.placeholder.com/300x400?text=Cargos" },
    { name: "Silk Neck Scarf", price: "$30", img: "https://via.placeholder.com/300x400?text=Scarf" },
    { name: "Denim Trucker Jacket", price: "$95", img: "https://via.placeholder.com/300x400?text=Jacket" },
    { name: "Beanie Hat", price: "$15", img: "https://via.placeholder.com/300x400?text=Beanie" },
    { name: "Polarized Sunglasses", price: "$45", img: "https://via.placeholder.com/300x400?text=Sunglasses" },
    { name: "V-Neck Sweater", price: "$65", img: "https://via.placeholder.com/300x400?text=Sweater" },
    { name: "Leather Belt", price: "$40", img: "https://via.placeholder.com/300x400?text=Belt" },
    { name: "Oxford Dress Shirt", price: "$50", img: "https://via.placeholder.com/300x400?text=Oxford" },
    { name: "Athletic Joggers", price: "$55", img: "https://via.placeholder.com/300x400?text=Joggers" },
    { name: "Canvas High Tops", price: "$65", img: "https://via.placeholder.com/300x400?text=Shoes" },
    { name: "Minimalist Watch", price: "$120", img: "https://via.placeholder.com/300x400?text=Watch" }
];

// This function builds the HTML for each product
function renderShop() {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Only runs if we are on the shop page

    grid.innerHTML = ""; // Clear the "Loading" text

    inventory.forEach(item => {
        const card = `
            <div class="product-card">
                <img src="${item.img}" alt="${item.name}" class="product-img">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <a href="https://wa.me/YOURNUMBER?text=Hi, I'm interested in the ${item.name}" class="btn-buy">Inquire via WhatsApp</a>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// Run the function when the page loads
window.onload = renderShop;