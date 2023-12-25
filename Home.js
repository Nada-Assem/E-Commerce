//Sildshow home 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Change background header
function scrollHeader(){
    const header=document.getElementById('header');
    // when the scroll is greater than 50 viewport height
    //add scroll-header class to header
    if(this.scrollY>=50)
        header.classList.add('scroll-header');
    else
    header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


// ============login=====================
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

// ===============================================================================
document.addEventListener('DOMContentLoaded', function() {
  let products = document.querySelector('.prodacts');
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();
          console.log(response[1].category.image)

          for (let i = 0; i < response.length; i++) {
              let description = response[i].description;
              let title = response[i].title;
              products.innerHTML += `
              
              <div new_content">
              <img src="${response[i].image}" class="new_img" alt="${response[i].category}">
              <h3 class="new_title">
              ${
                title.length > 18 ? title.substring(0, 18).concat(' ...') : title
              }
                </h3>
                <span class="new_suptitle">
                ${response[i].category}
                </span>
                <div class="new_prices">
                            <span class="new_price">${response[i].price}</span>
                            <span class="new_discount">$29.99</span>
                        </div>
                        <a href="" class="button new_button">
                            <i class="bx bx-cart-alt new_icon"></i>
                        </a>
          </div>

     
     `;
          }
      } catch (err) {
          console.log(err);
      }
  }
  fetchProducts('https://fakestoreapi.com/products?limit=3');
});

         
                       
                        
           