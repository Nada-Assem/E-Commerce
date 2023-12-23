let products = document.querySelector('.productss');
async function fetchProducts(url) {
    try {
        let data = await fetch(url);
        let response = await data.json();
        console.log(response[1].category.image)

        for (let i = 0; i < response.length; i++) {
            let description = response[i].description;
            let title = response[i].title;
            products.innerHTML += `

                <div class="shop  col-5 product-card">
                <div class="shop  badge">Hot</div>
                <div class="shop  product-tumb">
                    <img class="shop"src="${response[i].image}" alt="${response[i].category}">
                </div>
                <div class="shop  product-details">
                    <span class="shop  product-catagory">${response[i].category}</span>
                    <h4><a class="shop" href="#prodact?id=${response[i].id}">${title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                }</a></h4>
                    <div class="shop  product-bottom-details">
                        <div onclick="console.log((function () { return this.value; })());" class="shop  product-price">${response[i].price}</div>
                        <div class="shop  product-links">
                            <buttom ><i class="shop  fa fa-shopping-cart"></i></buttom>
                        </div>
                    </div>
                </div>
            </div>

       
       `;
        }
    } catch (err) {
        console.log(err);
    }
}
fetchProducts('https://fakestoreapi.com/products');

