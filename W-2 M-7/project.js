const LoadAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            displayproduct(data);
        });
};


const displayproduct = (products) => {
    const productContainer = document.getElementById("product-container");
    products.forEach(product => {
        console.log(product);
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
        <img class="card-img" src="${product.image}" alt="">
        <h5> ${product.title.slice(0, 30)}</h5>
        <h3> Price: ${product.price}</h3>
        <p>${product.description.slice(0, 30)}</p>
        <button>detais</button>
        <button onclick="handleAddToCart('${product.title.slice(0, 10)}',${product.price})">add to cart</button>
        `
        productContainer.appendChild(div);
    });
};
let cnt = 0;
const handleAddToCart = (name, price) => {
    cnt += 1;
    document.getElementById("count").innerText = cnt;

    const container = document.getElementById("cart-main-container");
    const div = document.createElement("div");
    div.classList.add("cart-info");
    div.innerHTML = `
    <p>'${name}'</p>
    <h3 class="price">${price}</h3>
    `
    container.appendChild(div);
    updateTotal();
};

const updateTotal = () => {
    const allPrice = document.getElementsByClassName("price");
    let count = 0;
    for (const element of allPrice) {
        count = count + parseFloat(element.innerText);
    }
    document.getElementById("total").innerText = count.toFixed(2);
};

LoadAllProduct();