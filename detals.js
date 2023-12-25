
// Get the ID from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const imageId = urlParams.get('id');
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

        // Set the image source and alt attribute
        image.src = data.image;
        image.alt = data.title;

        // Set the product details
        title.textContent = data.title;
        category.textContent = data.category;
        price.textContent = `Price: $${data.price}`;
         price1 = parseFloat(price.textContent.match(/\d+\.\d+/)[0]);
        //  console.log(price1)
    } catch (err) {
        console.log(err);
    }
}

fetchImageDetails();

function addToCart() {
    // Retrieve the existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the current product is already in the cart
    const existingProductIndex = cartItems.findIndex(item => item.id === imageId);

    if (existingProductIndex !== -1) {
        // Product already exists in cart, update quantity and price
        cartItems[existingProductIndex].quantity++;
        cartItems[existingProductIndex].price += price1;
        console.log(price1)

        // cartItems[existingProductIndex].price += parseFloat(price.textContent);
    } else {
        // Product doesn't exist in cart, add it to cart items array
        const newProduct = {
            id: imageId,
            title: title.textContent,
            category: category.textContent,
            price: price1,
            // price: parseFloat(price),
            quantity: 1
        };
        cartItems.push(newProduct);
    }

    // Store the updated cart items array in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Provide feedback to the user (optional)
    alert('Product added to cart!');
    
}
