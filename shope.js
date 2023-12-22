document.addEventListener('DOMContentLoaded', function() {
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

                <div class="col-5 product-card">
                <div class="badge">Hot</div>
                <div class="product-tumb">
                    <img src="${response[i].image}" alt="${response[i].category}">
                </div>
                <div class="product-details">
                    <span class="product-catagory">${response[i].category}</span>
                    <h4><a href="">${
                        title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                      }</a></h4>
                    <div class="product-bottom-details">
                        <div onclick="console.log((function () { return this.value; })());" class="product-price">${response[i].price}</div>
                        <div class="product-links">
                            <buttom ><i class="fa fa-shopping-cart"></i></buttom>
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
});
