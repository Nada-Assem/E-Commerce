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

// // Change background header
// function scrollHeader(){
//     const header=document.getElementById('header');
//     // when the scroll is greater than 50 viewport height
//     //add scroll-header class to header
//     if(this.scrollY>=50)
//         header.classList.add('scroll-header');
//     else
//     header.classList.remove('scroll-header');
// }
// window.addEventListener('scroll', scrollHeader)


// ============login=====================


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

         
                       
                        
           