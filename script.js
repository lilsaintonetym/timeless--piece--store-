const products = [
  {
    "id": "white-tee",
    "name": "White T-Shirt",
    "color": "White",
    "price": 30000,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "category": "T-shirts",
    "image": "assets/white-tee-front-back.jpeg",
    "description": "A clean white essential with considered TP detailing."
  },
  {
    "id": "black-tee",
    "name": "Black T-Shirt",
    "color": "Black",
    "price": 30000,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "category": "T-shirts",
    "image": "assets/black-tee-front-back.jpeg",
    "description": "A considered black essential with understated contrast detailing."
  },
  {
    "id": "product-001",
    "name": "Hour Glass Sleeveless",
    "color": "",
    "price": 30000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Sleeveless",
    "image": "assets/hour-glass-sleeveless.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-002",
    "name": "Black Timeless Piece Sleeveless",
    "color": "",
    "price": 25000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Sleeveless",
    "image": "assets/black-timeless-piece-sleeveless.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-003",
    "name": "Black Timeless Piece Shorts",
    "color": "",
    "price": 25000,
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "category": "Men's Shorts",
    "image": "assets/black-timeless-piece-shorts.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-013",
    "name": "Timeless Heritage Polo",
    "color": "",
    "price": 30000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Polos",
    "image": "assets/timeless-heritage-polo.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-014",
    "name": "Timeless Coffee Cup Polo",
    "color": "",
    "price": 35000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Polos",
    "image": "assets/timeless-coffee-cup-polo.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-007",
    "name": "Timeless Palazzo Dark Trouser",
    "color": "",
    "price": 45000,
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "category": "Men's Trousers",
    "image": "assets/timeless-palazzo-dark-trouser.png",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-008",
    "name": "Combat Dark Trouser",
    "color": "",
    "price": 45000,
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "category": "Men's Trousers",
    "image": "assets/combat-dark-trouser.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-009",
    "name": "Timeless Camo Trouser",
    "color": "",
    "price": 50000,
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38",
      "40"
    ],
    "category": "Men's Trousers",
    "image": "assets/timeless-camo-trouser.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-004",
    "name": "Black Timeless Zip Up Shirt",
    "color": "",
    "price": 35000,
    "sizes": [
      "L",
      "XL",
      "XXL"
    ],
    "category": "Men's Shirts",
    "image": "assets/black-timeless-zip-up-shirt.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-005",
    "name": "Timeless Relaxed Shirt",
    "color": "",
    "price": 35000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Shirts",
    "image": "assets/timeless-relaxed-shirt.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-006",
    "name": "Timeless Camo Shirt",
    "color": "",
    "price": 35000,
    "sizes": [
      "L",
      "XL",
      "XXL"
    ],
    "category": "Men's Shirts",
    "image": "assets/timeless-camo-shirt.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-010",
    "name": "Timeless Piece Track Set",
    "color": "",
    "price": 65000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Two-Piece Sets",
    "image": "assets/timeless-piece-track-set.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-011",
    "name": "Timeless Onyx Set",
    "color": "",
    "price": 75000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Two-Piece Sets",
    "image": "assets/timeless-onyx-set.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-012",
    "name": "Timeless Two-Piece Set",
    "color": "",
    "price": 80000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Two-Piece Sets",
    "image": "assets/timeless-two-piece-set.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-017",
    "name": "Timeless Ivory Jacket",
    "color": "",
    "price": 40000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Men's Jackets",
    "image": "assets/timeless-ivory-jacket.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-015",
    "name": "Black Timeless Beauty Hoodie & Shorts Set",
    "color": "",
    "price": 35000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Women's — Timeless Beauty",
    "image": "assets/black-timeless-beauty-hoodie-shorts-set.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-016",
    "name": "White Timeless Beauty Tennis Set",
    "color": "",
    "price": 35000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Women's — Timeless Beauty",
    "image": "assets/white-timeless-beauty-tennis-set.jpeg",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  },
  {
    "id": "product-018",
    "name": "Wine Timeless Beauty Three-Piece",
    "color": "",
    "price": 50000,
    "sizes": [
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "category": "Women's — Timeless Beauty",
    "image": "assets/wine-timeless-beauty-three-piece-edited.png",
    "description": "A considered Timeless Piece design, created for effortless everyday style."
  }
];
let cart = JSON.parse(localStorage.getItem("tp-cart") || "[]");
let activeProduct = null;
let selectedSize = null;
const money = n => new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);
const grid = document.getElementById("productGrid");
// Keep the original HTML unchanged while refreshing its category strip to match the catalogue.
const categoryRow = document.querySelector(".category-row");
if (categoryRow) {
  categoryRow.innerHTML = ["All pieces", "T-shirts", "Sleeveless", "Shorts", "Polos", "Trousers", "Shirts", "Two-piece sets", "Jackets", "Timeless Beauty"]
    .map((label, index) => `<span${index === 0 ? ' class="active"' : ""}>${label}</span>`).join("");
}

function renderProducts(){
  grid.innerHTML = products.map(p => `
    <article class="product-card">
      <button class="product-image-button" data-view="${p.id}" aria-label="View ${p.name}">
        <img src="${p.image}" alt="${p.name}">
        <span class="image-tag">${p.category}</span>
      </button>
      <div class="product-meta"><div><h3>${p.name}</h3><p>${p.sizes.length ? `Sizes ${p.sizes.join(", ")}` : "Sizes to be confirmed"}</p></div><span class="product-price">${money(p.price)}</span></div>
      <div class="product-actions"><button data-view="${p.id}">View product</button><button data-quick="${p.id}">Quick add</button></div>
    </article>`).join("");
}
function persistCart(){localStorage.setItem("tp-cart",JSON.stringify(cart));renderCart();}
function openCart(){document.getElementById("cartDrawer").classList.add("open");document.getElementById("overlay").classList.add("open");document.getElementById("cartDrawer").setAttribute("aria-hidden","false");}
function closeCart(){document.getElementById("cartDrawer").classList.remove("open");document.getElementById("overlay").classList.remove("open");document.getElementById("cartDrawer").setAttribute("aria-hidden","true");}
function renderCart(){
  const count=cart.reduce((sum,item)=>sum+item.quantity,0);
  document.getElementById("cartCount").textContent=count;
  document.getElementById("subtotal").textContent=money(cart.reduce((sum,item)=>sum+item.price*item.quantity,0));
  document.getElementById("checkoutSubtotal").textContent=document.getElementById("subtotal").textContent;
  const target=document.getElementById("cartItems");
  if(!cart.length){target.innerHTML='<p class="empty-state">Your bag is currently empty.</p>';return;}
  target.innerHTML=cart.map((item,i)=>`<div class="cart-item"><img src="${item.image}" alt=""><div><h3>${item.name}</h3><p>Size: ${item.size} · Qty: ${item.quantity}</p><p>${money(item.price*item.quantity)}</p><button data-remove="${i}">Remove</button></div></div>`).join("");
}
function showProduct(id){
  activeProduct=products.find(p=>p.id===id); selectedSize=null;
  document.getElementById("dialogName").textContent=activeProduct.name;
  document.getElementById("dialogPrice").textContent=money(activeProduct.price);
  document.getElementById("dialogImages").innerHTML=`<img src="${activeProduct.image}" alt="${activeProduct.name}">`;
  document.getElementById("sizeOptions").innerHTML=activeProduct.sizes.map(s=>`<button type="button" data-size="${s}">${s}</button>`).join("");
  document.getElementById("quantitySelect").value="1";
  document.getElementById("productDialog").showModal();
}
function addActiveProduct(){
  if(!selectedSize){alert("Please select a size first.");return;}
  const quantity=Number(document.getElementById("quantitySelect").value);
  const existing=cart.find(i=>i.id===activeProduct.id&&i.size===selectedSize);
  if(existing)existing.quantity+=quantity;else cart.push({...activeProduct,size:selectedSize,quantity});
  persistCart();document.getElementById("productDialog").close();openCart();
}
grid.addEventListener("click",e=>{
  const view=e.target.closest("[data-view]"); const quick=e.target.closest("[data-quick]");
  if(view)showProduct(view.dataset.view);
  if(quick){showProduct(quick.dataset.quick);}
});
document.getElementById("sizeOptions").addEventListener("click",e=>{
  const btn=e.target.closest("[data-size]");if(!btn)return;
  selectedSize=btn.dataset.size;
  document.querySelectorAll("#sizeOptions button").forEach(b=>b.classList.toggle("selected",b===btn));
});
document.getElementById("addToBag").addEventListener("click",addActiveProduct);
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
document.getElementById("overlay").addEventListener("click",closeCart);
document.getElementById("cartItems").addEventListener("click",e=>{
  const btn=e.target.closest("[data-remove]");if(!btn)return;cart.splice(Number(btn.dataset.remove),1);persistCart();
});
document.getElementById("checkoutButton").addEventListener("click",()=>{
  if(!cart.length){alert("Your bag is empty.");return;}
  closeCart();document.getElementById("checkoutDialog").showModal();
});
document.getElementById("closeProduct").addEventListener("click",()=>document.getElementById("productDialog").close());
document.getElementById("closeCheckout").addEventListener("click",()=>document.getElementById("checkoutDialog").close());
document.getElementById("checkoutForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMessage").textContent="This is a design prototype. Secure order submission and Paystack checkout must be connected before launch. No details have been sent or stored.";
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();
