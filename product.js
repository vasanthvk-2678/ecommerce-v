const getProducts = async () => {
    const res = await fetch("products.json");
    const data = await res.json();
    const products = data.products;
    return products;
    
};


const displayProducts = (products, center) => {
    let display = products.map(
      ({ title, image, price }) => `<div class="product">
            <div class="product-header">
              <img src=${image} alt="product">
            </div>
            <div class="product-footer">
              <h3>${title}</h3>
              <div class="ratting">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="product-price">
                <h4>₹${price}</h4>
              </div>
            </div>
            <ul>
              <li>
                <a href="">
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="far fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fas fa-sync"></i>
                </a>
              </li>
            </ul>
          </div>`
    );
  
    display = display.join("");
    center.innerHTML = display;
  };


const catContainer = document.querySelector(".sort-category");
const productCenter = document.querySelector(".product-center");
const filterBtns = [...document.querySelectorAll(".filter-btn")];

if (catContainer) 
  catContainer.addEventListener("click", async e => {
    const target = e.target.closest(".section-title");
    if (!target) return;
    const id = target.dataset.id;
    const products = await getProducts();

    if (id) 
      filterBtns.forEach(btn => {
        btn.classList.remove("active");
      });
    target.classList.add("active");
    const menucat = products.filter(product=> product.category == id);
    productCenter.classList.add('animate__animated', 'animate__backInUp');
    setTimeout(()=>{
        productCenter.classList.remove('animate__animated', 'animate__backInUp');
    }, 1000);
    displayProducts(menucat, productCenter);
});

const filterarray = async type => {
    const products = await getProducts();
    return products.filter(product => product.category == type);
};
const shopcenter = document.querySelector(".shop-center");
const latest = document.querySelector(".latest-center");
const recent = document.querySelector(".recent-center");
window.addEventListener("DOMContentLoaded",async () => {
    const products = await getProducts();
    const defaultProducts = await filterarray("trend");
    const latestProducts = await filterarray("latest");
    const recentProducts = await filterarray("recent");
    displayProducts(latestProducts, latest);
    displayProducts(defaultProducts, productCenter);
    displayProducts(recentProducts, recent);
    displayProducts(products, shopcenter);
});