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


