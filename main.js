
const renderHome = Handlebars.compile(document.getElementById("home-template").innerHTML);
const renderShop = Handlebars.compile(document.getElementById("shop-template").innerHTML);
const renderCart = Handlebars.compile(document.getElementById("cart-template").innerHTML);
// const renderBlog = Handlebars.compile(document.getElementById("blog-template").innerHTML);
const renderFaq = Handlebars.compile(document.getElementById("faq-template").innerHTML);
const renderContact = Handlebars.compile(document.getElementById("contact-template").innerHTML);
const renderProduct = Handlebars.compile(document.getElementById("product-template").innerHTML);


function renderContent(content, tagId) {
    const contentDiv = document.getElementById(tagId);
    contentDiv.innerHTML = content;
}
function load(fileName) {
    var script = document.createElement("script");
    script.src = `./js/${fileName}`;
    document.querySelector('#content').appendChild(script);
}
function HandleNavigation() {
    const hash = window.location.hash.split('?')[0];
    console.log(hash)
    switch (hash) {
        case "#home":
            renderContent(renderHome(), "content");
            load('home.js')
            break;
        case "#shop":
            renderContent(renderShop(), "content");
            load('shop.js')
            break;
        case "#cart":
            renderContent(renderCart(), "content");
            load('cart.js')
            break;
        // case "#blog":
        //     renderContent(renderBlog(), "content");
        //     break;
        case "#contact":
            renderContent(renderContact(), "content");
            break;
        case "#faq":
            renderContent(renderFaq(), "content");
            load('faq.js')
            break;
        case "#product":
            renderContent(renderProduct(), "content");
            load('product.js')
            break;
        default:
            renderContent(renderHome(), "content");
            break;
    }

}
function addToCart(imageId) {
    // Retrieve the existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the current product is already in the cart
    const existingProductIndex = cartItems.findIndex(item => item.id === imageId);

    if (existingProductIndex !== -1) {
        // Product already exists in cart, update quantity and price
        cartItems[existingProductIndex].quantity++;
        // cartItems[existingProductIndex].price += price1;
        // console.log(price1)

        // cartItems[existingProductIndex].price += parseFloat(price.textContent);
    } else {
        // Product doesn't exist in cart, add it to cart items array
        const newProduct = {
            id: imageId,
            // title: title.textContent,
            // category: category.textContent,
            // price: price1,
            // price: parseFloat(price),
            quantity: 1
        };
        cartItems.push(newProduct);
    }

    // Store the updated cart items array in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Provide feedback to the user (optional)
    listCartItems()
    
}
async function listCartItems(){
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    document.querySelector('.offcanvas-body').innerHTML=`<h4 class="text-center ">My Cart</h4>`
    if(cartItems.length<1){
        document.querySelector('.offcanvas-body').innerHTML+=`<h6 class="text-center ">you cart still empty let's go and make it full &#128515;</h6>`
    }else{
        let totalPrice=0
     await Promise.all(   cartItems.map(async(element) => {
        const response = await fetch(`https://fakestoreapi.com/products/${element.id}`);
        const data = await response.json();
        totalPrice+=data.price*element.quantity
        document.querySelector('.offcanvas-body').innerHTML+=`<section class="aside-cart row p-4">
        <img class="col-5 img-fluid" src="${data.image}" alt="" srcset="">
        <div class="col-5">
            <h6>${data.title}</h6>
            <h6 class="aside-cart price">${data.price}$</h6>
            <button onclick="decre(${element.id})" class="btn">-</buttoun>
            <span class="aside-cart quantity">${element.quantity}</span>
            <button onclick="incre(${element.id})" class="btn">+</button>
        </div>
        <button onclick="deleteItem(${element.id})" class="col-1 delete aside-cart" style="align-self: flex-end;"><i class="fa-solid fa-trash"></i></button>
    </section>`
    }))
    document.querySelector('.offcanvas-body').innerHTML+=`<h6 class="text-end ">Total Price : ${totalPrice}</h6>`
    }
}
function decre(item){
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const index=cartItems.findIndex(el=>el.id==item)
    if(index<0){
        console.log('there is something wrong this otem is not exist in your cart')
    }else{
        if(cartItems[index].quantity>1){ 
        cartItems[index].quantity--
        }else{
            cartItems.splice(index,1)
        }
    } 
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    listCartItems()
}
function incre(item){
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const index=cartItems.findIndex(el=>el.id==item)
    if(index<0){
        console.log('there is something wrong this otem is not exist in your cart')
    }else{
        cartItems[index].quantity++
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    listCartItems(item)  
}
function deleteItem(item){
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const index=cartItems.findIndex(el=>el.id==item)
    if(index<0){
        console.log('there is something wrong this otem is not exist in your cart')
    }else{
        cartItems.splice(index,1)
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    listCartItems()
}
window.addEventListener("load", HandleNavigation);
window.addEventListener("hashchange", HandleNavigation);
listCartItems()
const login = document.getElementById('login'),
loginButton = document.getElementById('login-button'),
closeIcon = document.getElementById('login-close')
if(loginButton){
  loginButton.addEventListener("click" , ()=>{
    login.classList.add('show-login')
  })
}

if(closeIcon){
  closeIcon.addEventListener("click" , ()=>{
    login.classList.remove('show-login')
  })
}

function Login() {
const login = document.getElementById('login'),
logout = document.getElementById('logout'),
iconLog = document.getElementById('login-button');
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  // Mock user authentication using local storage
  var savedUser = JSON.parse(localStorage.getItem(username));

  if (savedUser && savedUser.password === password) {
      alert('Login successful!');
      login.classList.remove('show-login')
      iconLog.style.display='none';
      logout.style.display='block';
  } else {
      alert('Invalid credentials. Please try again.');
  }
}
// =======================Register================================

function res(){
  const register = document.getElementById('register'),
  registerButton = document.getElementById('cRes'),
  close = document.getElementById('register-close'),
  login = document.getElementById('login');

  if(registerButton){
    registerButton.addEventListener("click" , ()=>{
      register.classList.add('show-register')
      login.classList.remove('show-login')
    })
  }

  if(close){
    close.addEventListener("click" , ()=>{
      register.classList.remove('show-register')
    })
  }
}

function register() {
  const register = document.getElementById('register'),
  login = document.getElementById('login');
  var username = document.getElementById('registerUsername').value;
  var password = document.getElementById('registerPassword').value;

  // Mock user registration using local storage
  if (!localStorage.getItem(username)) {
      var newUser = { username: username, password: password };
      localStorage.setItem(username, JSON.stringify(newUser));
      register.classList.remove('show-register')
      alert('Registration successful!');
      login.classList.add('show-login');
  } else {
      alert('Username already exists. Please choose a different username.');
  }
}

function logout() {
  
  var userName = document.getElementById('loginUsername').value,
  pass = document.getElementById('loginPassword').value,
  logout = document.getElementById('logout'),
  login= document.getElementById('login-button');
  
  localStorage.removeItem(userName);
  localStorage.removeItem(pass);
  logout.style.display='none';
  login.style.display = 'block'
}