//Sildshow home 
var slideIndex = 1;
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

  
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();

          for (let i = 0; i < response.length; i++) {
            var products = document.querySelectorAll('.new_container>.row')[document.querySelectorAll('.new_container>.row').length-1];
              let description = response[i].description;
              let title = response[i].title;
              products.innerHTML += `
              <div class="new_content">
              <div class="new_tag"> New</div>
                  <img src="${response[i].image}" alt="${response[i].category}">
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
                  <!-- go to details -->
                  <a href="${response[i].id}" class="button new_button">
                      <i class="bx bx-cart-alt new_icon"></i>
                  </a>
          </div>
              

     
     `
     if(i%3==2){
      document.querySelector('.new_container').innerHTML+=` <div class="row">
      </div>`
     }
          }
      } catch (err) {
          console.log(err);
      }
  }
  fetchProducts('https://fakestoreapi.com/products?limit=6');


         
                       
                        
           