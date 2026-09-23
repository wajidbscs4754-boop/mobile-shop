// ================= PRODUCTS =================

const products = [

    {
        id: 1,
        name: "iPhone 15 Pro",
        brand: "Apple",
        price: 289999,
        description: "Powerful performance with a premium titanium design.",
        image: "images/iphone 15 pro.jpg",
        emoji: "📱",
        color: "dark",
        specs: [
            "6.1-inch Super Retina XDR",
            "A17 Pro Chip",
            "48MP Main Camera",
            "256GB Storage"
        ]
    },

    {
        id: 2,
        name: "iPhone 15",
        brand: "Apple",
        price: 219999,
        description: "Beautiful design with powerful everyday performance.",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=85",
        emoji: "📱",
        color: "blue",
        specs: [
            "6.1-inch OLED Display",
            "A16 Bionic Chip",
            "48MP Main Camera",
            "128GB Storage"
        ]
    },

    {
        id: 3,
        name: "Galaxy S24 Ultra",
        brand: "Samsung",
        price: 339999,
        description: "Ultimate Galaxy experience with advanced AI features.",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=85",
        emoji: "📱",
        color: "purple",
        specs: [
            "6.8-inch Dynamic AMOLED",
            "Snapdragon Processor",
            "200MP Camera",
            "256GB Storage"
        ]
    },

    {
        id: 4,
        name: "Galaxy S24",
        brand: "Samsung",
        price: 229999,
        description: "Premium Samsung smartphone for everyday performance.",
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=700&q=85",
        emoji: "📱",
        color: "gray",
        specs: [
            "6.2-inch Dynamic AMOLED",
            "Powerful Processor",
            "50MP Camera",
            "256GB Storage"
        ]
    },

    {
        id: 5,
        name: "Xiaomi 14",
        brand: "Xiaomi",
        price: 199999,
        description: "Flagship performance with an advanced camera system.",
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=700&q=85",
        emoji: "📱",
        color: "black",
        specs: [
            "6.36-inch AMOLED",
            "Snapdragon 8 Gen 3",
            "50MP Triple Camera",
            "512GB Storage"
        ]
    },

    {
        id: 6,
        name: "Xiaomi Redmi Note 13",
        brand: "Xiaomi",
        price: 74999,
        description: "Excellent value with a smooth AMOLED display.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=85",
        emoji: "📱",
        color: "green",
        specs: [
            "6.67-inch AMOLED",
            "MediaTek Processor",
            "108MP Camera",
            "256GB Storage"
        ]
    },

    {
        id: 7,
        name: "Pixel 9 Pro",
        brand: "Google",
        price: 249999,
        description: "Smart photography and Google's clean Android experience.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
        emoji: "📱",
        color: "white",
        specs: [
            "6.3-inch OLED Display",
            "Google Tensor Chip",
            "50MP Camera",
            "256GB Storage"
        ]
    },

    {
        id: 8,
        name: "Pixel 9",
        brand: "Google",
        price: 189999,
        description: "Google's smart and powerful everyday smartphone.",
        image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=700&q=85",
        emoji: "📱",
        color: "blue",
        specs: [
            "6.3-inch OLED Display",
            "Google Tensor Chip",
            "50MP Camera",
            "128GB Storage"
        ]
    },

    // ================= NEW iPHONE =================

    {
        id: 9,
        name: "iPhone 18 Pro Max",
        brand: "Apple",
        price: 399999,
        description: "The latest iPhone Pro Max with premium design and powerful performance.",
        image: "images/iphone-18-pro-max.jpg",
        emoji: "📱",
        color: "dark",
        specs: [
            "6.9-inch Super Retina XDR Display",
            "A20 Pro Chip",
            "Advanced Pro Camera System",
            "256GB Storage"
        ]
    }

];


// ================= VARIABLES =================

let cart = [];

let selectedCategory = "all";


// ================= DOM =================

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const noResults =
    document.getElementById("noResults");

const cartCount =
    document.getElementById("cartCount");

const cartSidebar =
    document.getElementById("cartSidebar");

const overlay =
    document.getElementById("overlay");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const cartEmpty =
    document.getElementById("cartEmpty");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalContent =
    document.getElementById("modalContent");


// ================= FORMAT PRICE =================

function formatPrice(price) {

    return new Intl.NumberFormat("en-PK").format(price);

}


// ================= PRODUCT IMAGE =================

function getProductImage(product) {

    if (product.image) {

        return `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="real-product-image"
            >
        `;

    }

    return `
        <div class="product-phone">

            <div class="product-camera-dots"></div>

            ${product.emoji}

        </div>
    `;

}


// ================= RENDER PRODUCTS =================

function renderProducts() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredProducts =
        products.filter(product => {

            const matchesCategory =
                selectedCategory === "all" ||
                product.brand === selectedCategory;


            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm) ||

                product.brand
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    productsGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");


        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                ${getProductImage(product)}

                <button
                    class="wishlist"
                    data-id="${product.id}"
                >
                    ♡
                </button>

            </div>


            <div class="product-info">

                <span class="product-brand">
                    ${product.brand}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <span class="product-price">
                        Rs. ${formatPrice(product.price)}
                    </span>

                    <button
                        class="add-cart"
                        data-id="${product.id}"
                    >
                        + Cart
                    </button>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });


    attachProductEvents();

}


// ================= PRODUCT EVENTS =================

function attachProductEvents() {

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    addToCart(id);

                }
            );

        });


    document
        .querySelectorAll(".wishlist")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    button.classList.toggle("active");

                    button.textContent =
                        button.classList.contains("active")
                            ? "♥"
                            : "♡";

                }
            );

        });


    document
        .querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".add-cart"
                        ) ||
                        event.target.closest(
                            ".wishlist"
                        )
                    ) {
                        return;
                    }


                    const id =
                        Number(
                            card
                                .querySelector(
                                    ".add-cart"
                                )
                                .dataset.id
                        );


                    showProduct(id);

                }
            );

        });

}


// ================= CATEGORY =================

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );


                button.classList.add("active");


                selectedCategory =
                    button.dataset.category;


                renderProducts();

            }
        );

    });


// ================= SEARCH =================

searchInput.addEventListener(
    "input",
    renderProducts
);


// ================= CART =================

function addToCart(id) {

    const product =
        products.find(
            product => product.id === id
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    updateCart();

    openCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    updateCart();

}


function updateCart() {

    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    cartCount.textContent =
        totalItems;


    cartTotal.textContent =
        `Rs. ${formatPrice(totalPrice)}`;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartEmpty.style.display = "block";

        return;

    }


    cartEmpty.style.display = "none";


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");


        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">

                ${
                    item.image
                        ? `<img
                            src="${item.image}"
                            alt="${item.name}"
                            class="cart-product-image"
                          >`
                        : "📱"
                }

            </div>


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    Rs. ${formatPrice(item.price)}
                </p>

                <small>
                    Quantity: ${item.quantity}
                </small>

            </div>


            <button
                class="remove-item"
                data-id="${item.id}"
            >
                ✕
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        Number(button.dataset.id)
                    );

                }
            );

        });

}


// ================= CART OPEN/CLOSE =================

function openCart() {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

}


function closeCart() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

}


document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


overlay.addEventListener(
    "click",
    closeCart
);


// ================= PRODUCT MODAL =================

function showProduct(id) {

    const product =
        products.find(
            product => product.id === id
        );


    if (!product) return;


    modalContent.innerHTML = `

        <div class="modal-product">

            <div class="modal-image">

                ${getProductImage(product)}

            </div>


            <div>

                <span class="product-brand">
                    ${product.brand}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <h3 class="product-price">
                    Rs. ${formatPrice(product.price)}
                </h3>

                <p>
                    ${product.description}
                </p>


                <ul class="specs">

                    ${product.specs
                        .map(
                            spec =>
                                `<li>✓ ${spec}</li>`
                        )
                        .join("")}

                </ul>


                <button
                    class="primary-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add To Cart
                </button>

            </div>

        </div>

    `;


    modalOverlay.classList.add("active");

}


document
    .getElementById("modalClose")
    .addEventListener(
        "click",
        () => {

            modalOverlay.classList.remove(
                "active"
            );

        }
    );


modalOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === modalOverlay
        ) {

            modalOverlay.classList.remove(
                "active"
            );

        }

    }
);


// ================= CHECKOUT =================

document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            alert(
                "Checkout functionality can be connected to a payment gateway later."
            );

        }
    );


// ================= CONTACT FORM =================

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            alert(
                "Thank you! Your message has been received."
            );


            event.target.reset();

        }
    );


// ================= MOBILE MENU =================

document
    .getElementById("menuBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("navigation")
                .classList.toggle("active");

        }
    );


// ================= DARK MODE =================

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        themeBtn.textContent =
            dark ? "☀️" : "🌙";


        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );

    }
);


// ================= RESTORE THEME =================

if (
    localStorage.getItem("theme") ===
    "dark"
) {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


// ================= INITIAL RENDER =================

renderProducts();

updateCart();