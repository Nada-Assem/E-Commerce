
// Get the ID from the URL query string
console.log(window.location.hash)
var urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
var imageId = urlParams.get('id');
var price1;
// Fetch the image details based on the ID
async function fetchImageDetails() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${imageId}`);
        const data = await response.json();
        const image = document.getElementById('image');
        const title = document.getElementById('title');
        const category = document.getElementById('category');
        const price = document.getElementById('price');
        const btn=document.querySelector('.add-to-cart-btn.detailsCart')
        btn.addEventListener('click',()=>{
            addToCart(data.id)
        })
        // Set the image source and alt attribute
        image.src = data.image;
        image.alt = data.title;

        // Set the product details
        title.textContent = data.title;
        category.textContent = data.category;
        price.textContent = `Price:${data.price}$`;
         price1 = parseFloat(price.textContent.match(/\d+\.\d+/)[0]);
        //  console.log(price1)
    } catch (err) {
        console.log(err);
    }
}

fetchImageDetails();


