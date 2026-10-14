const products = [
  {id:"white-tee", name:"White T-Shirt", color:"White", price:30000, sizes:["M","L","XL","XXL"], image:"assets/white-tee-front-back.jpeg", description:"A clean white essential with considered TP detailing."},
  {id:"black-tee", name:"Black T-Shirt", color:"Black", price:30000, sizes:["M","L","XL","XXL"], image:"assets/black-tee-front-back.jpeg", description:"A considered black essential with understated contrast detailing."}
];
let cart = JSON.parse(localStorage.getItem("tp-cart") || "[]");
let activeProduct = null;
let selectedSize = null;
const money = n => new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);
const grid = document.getElementById("productGrid");
function renderProducts(){
  grid.innerHTML = products.map(p => `
    <article class="product-card">
      <button class="product-image-button" data-view="${p.id}" aria-label="View ${p.name}">
        <img src="${p.image}" alt="${p.name}, front and back product view">
        <span class="image-tag">FIRST COLLECTION</span>
      </button>
      <div class="product-meta"><div><h3>${p.name}</h3><p>${p.color} · Sizes M–XXL</p></div><span class="product-price">${money(p.price)}</span></div>
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
  document.getElementById("dialogImages").innerHTML=`<img src="${activeProduct.image}" alt="${activeProduct.name}, front and back">`;
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
