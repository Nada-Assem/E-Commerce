let listproductHtml=document.querySelector('.all_cart_container');
let listProduct=[];
let theRightElement=document.querySelector(".theRightDiv");
let cards=[];






const addDataToHTML= ()=>{

    listproductHtml.innerHTML='';
    if(listProduct.length>0){
        listProduct.forEach(product =>{

const eachcard = document.createElement("div");
eachcard.classList.add("eachcard");

const cart_card = document.createElement("article");
cart_card .classList.add("cart_card");
eachcard.appendChild(cart_card); 
cart_card.style.display="flex";

const cart_box = document.createElement("div");
cart_box .classList.add("cart_box");
cart_card.appendChild(cart_box); 
cart_box.style.marginRight="15px";
cart_box.style.marginBottom="15px";



const cart_img = document.createElement("div");
cart_img.classList.add("cart_img");
cart_img.innerHTML=` <img src="${product.theimage}" alt="">`;

 cart_box.appendChild(cart_img);



const cart_details = document.createElement("div");
cart_details .classList.add("cart_details");
cart_card.appendChild(cart_details);


const cart_price=document.createElement("span");
cart_price .classList.add("cart_price");
cart_price.innerHTML=`


<h3> ${product.thePrice}</h3>


`;
cart_price.style.margin="50px";
cart_details.appendChild(cart_price);


const card_title=document.createElement("h3");
card_title.classList.add("card_title");
card_title.innerHTML=`${product.name}`
cart_details.appendChild(card_title);

card_title.style.margin="10px 10px 10px 0px"
const gray=document.createElement("span");
gray.classList.add("gray");
gray.innerHTML=`${product.cart_color}`
gray.style.margin="20px";

gray.style.color="gray";
cart_details.appendChild(gray);


const cart_Amount = document.createElement("div");
cart_Amount.classList.add("cart_Amount");
cart_details.appendChild(cart_Amount);
cart_Amount.style.margin="20px";

const cart_Amount_content = document.createElement("div");
cart_Amount_content.classList.add("cart_Amount_content");
cart_Amount.appendChild(cart_Amount_content);


const  cart_Amount_minus = document.createElement("span");
cart_Amount_minus.classList.add("cart_Amount_minus");
cart_Amount_content.appendChild(cart_Amount_minus);

const  minus = document.createElement("i");
minus.classList.add("fa-solid");
minus.classList.add("fa-minus");
cart_Amount_content.appendChild(minus);
minus.style.margin="10px";
minus.style.backgroundColor="rgb(128 128 128 / 7%)";
minus.style.width="16px";
minus.style.height="16px";
minus.style.borderRadius="30%"
minus.style.padding="2px"





// var counter = 0;
 
// var counterValue = document.getElementById('cart_count1');
// var incrementBtn = document.getElementById('cart_plus1');
// var decrementBtn = document.getElementById('cart_minus1');
const  cart_Amount_number = document.createElement("span");
cart_Amount_number.classList.add("cart_Amount_number");
cart_Amount_content.appendChild(cart_Amount_number);
cart_Amount_number.innerText="1";
cart_Amount_number.style.fontSize="1.25rem";
cart_Amount_number.style.margin="10px";




const cart_Amount_plus = document.createElement("span");
cart_Amount_plus.classList.add("cart_Amount_plus");
cart_Amount_content.appendChild(cart_Amount_plus);
cart_Amount_content.style.cursor="pointer";

const  plus = document.createElement("i");

plus.classList.add("fa-solid");
plus.classList.add("fa-plus");
plus.style.margin="10px";
plus.style.backgroundColor="rgb(128 128 128 / 7%)";
plus.style.width="16px";
plus.style.height="16px";
plus.style.borderRadius="30%"
plus.style.padding="2px"



 cart_Amount_content.appendChild(plus);

 var counter=0;
    plus.addEventListener('click', () => {
                counter++;
                cart_Amount_number.innerHTML = counter;
            });
            minus.addEventListener('click', () => {
                    if(counter>1){
                        counter--;
                        cart_Amount_number.innerHTML = counter;
                        
                    }
                    else{
                        cart_Amount_number.innerHTML = 0;
                    }
                });
            
   
 const love_Icon = document.createElement("div");
 love_Icon.classList.add("love_Icon");
 eachcard.appendChild(love_Icon);
 love_Icon.style.marginTop="150px";
 love_Icon.style.marginLeft="600px";
 love_Icon.style.color="red";
 love_Icon.style.cursor="pointer";
 love_Icon.style.position="absolute"
 

 const  love = document.createElement("i");
 love_Icon.classList.add("fa-regular");
 love_Icon.classList.add("fa-heart");
 love_Icon.appendChild(love);

 const card_trash2 = document.createElement("div");
 card_trash2.classList.add("fa-solid");
 card_trash2.classList.add("fa-trash");
card_trash2.style.marginBottom="200px";
card_trash2.style.marginLeft="880px";
card_trash2.style.color="red";
card_trash2.style.cursor="pointer";
card_trash2.style.position="absolute"

 eachcard.appendChild(card_trash2);

 const  trash = document.createElement("i");
 trash.classList.add("trash");

 card_trash2.appendChild(trash);
eachcard.style.display="flex";

eachcard.style.backgroundColor="rgb(128 128 128 / 10%)";
eachcard.style.margin="10px";
eachcard.style.padding="10px";
listproductHtml.style.width="70%";
 listproductHtml.appendChild(eachcard);


        })

    }

 
}

    const addDataToHTML1= ()=>{

        theRightElement.innerHTML='';
        if(cards.length>0){
            cards.forEach(card =>{

const therightCart=document.createElement("div");
therightCart.classList.add("therightCart");

const cart_total_Price=document.createElement("h2");
cart_total_Price.classList.add("cart_total_Price"); 
cart_total_Price.innerHTML=`<h3>${card.id}</h3>`; 
therightCart.appendChild(cart_total_Price);



const sub_total_Card=document.createElement("div");
sub_total_Card.classList.add("sub_total_Card");
therightCart.appendChild(sub_total_Card);


const sub_total_Card1=document.createElement("span");
sub_total_Card1.classList.add("sub_total_Card1");
sub_total_Card1.innerText="sub-total";
sub_total_Card.appendChild(sub_total_Card1);


const card_price1=document.createElement("span");
card_price1.classList.add("card_price1");
card_price1.innerText="$48.00";
sub_total_Card.appendChild(card_price1);


const card_shipping=document.createElement("div");
card_shipping.classList.add("card_shipping");
therightCart.appendChild(card_shipping);

const card_shipping1=document.createElement("span");
card_shipping1.classList.add("card_shipping1");
card_shipping1.innerText="shipping";
card_shipping.appendChild(card_shipping1);


const card_price2=document.createElement("span");
card_price2.classList.add("card_price2");
card_price2.innerText="$4.99";
card_shipping.appendChild(card_price2);


const card_total_shipping=document.createElement("div");
card_total_shipping.classList.add("card_total_shipping");
therightCart.appendChild(card_total_shipping);


const card_total_shipping1=document.createElement("span");
card_total_shipping1.classList.add("card_total_shipping1");
card_total_shipping1.innerText="total";
card_total_shipping.appendChild(card_total_shipping1);


const card_price3=document.createElement("span");
card_price3.classList.add("card_price3");
card_price3.innerText="$50.22";
card_total_shipping.appendChild(card_price3);


const button_Checkout=document.createElement("button");
button_Checkout.classList.add("button_Checkout");
button_Checkout.innerText="checkout";
therightCart.appendChild(button_Checkout);
console.log(therightCart);
listproductHtml.appendChild(therightCart);
})
}
}





// const addDataToHTML2= ()=>{

//     theRightElement.innerHTML='';
//     if(listProduct.length>0){
//         listProduct.forEach(product =>{


//  const therightCart=document.createElement("div");
//  therightCart.classList.add("therightCart");

//  const cart_total_Price=document.createElement("h2");
//  cart_total_Price.classList.add("cart_total_Price"); 
//  cart_total_Price.innerText="total"; 
//  therightCart.appendChild(cart_total_Price);
 


//  const sub_total_Card=document.createElement("div");
//  sub_total_Card.classList.add("sub_total_Card");
//  therightCart.appendChild(sub_total_Card);


//  const sub_total_Card1=document.createElement("span");
//  sub_total_Card1.classList.add("sub_total_Card1");
//  sub_total_Card1.innerText="sub-total";
//  sub_total_Card.appendChild(sub_total_Card1);


//  const card_price1=document.createElement("span");
//  card_price1.classList.add("card_price1");
//  card_price1.innerText="$48.00";
//  sub_total_Card.appendChild(card_price1);


//  const card_shipping=document.createElement("div");
//  card_shipping.classList.add("card_shipping");
//  therightCart.appendChild(card_shipping);

//  const card_shipping1=document.createElement("span");
//  card_shipping1.classList.add("card_shipping1");
//  card_shipping1.innerText="shipping";
//  card_shipping.appendChild(card_shipping1);


//  const card_price2=document.createElement("span");
//  card_price2.classList.add("card_price2");
//  card_price2.innerText="$4.99";
//  card_shipping.appendChild(card_price2);


//  const card_total_shipping=document.createElement("div");
//  card_total_shipping.classList.add("card_total_shipping");
//  therightCart.appendChild(card_total_shipping);


//  const card_total_shipping1=document.createElement("span");
//  card_total_shipping1.classList.add("card_total_shipping1");
//  card_total_shipping1.innerText="total";
//  card_total_shipping.appendChild(card_total_shipping1);


//  const card_price3=document.createElement("span");
//  card_price3.classList.add("card_price3");
//  card_price3.innerText="$50.22";
//  card_total_shipping.appendChild(card_price3);


//  const button_Checkout=document.createElement("button");
//  button_Checkout.classList.add("button_Checkout");
//  button_Checkout.innerText="checkout";
//  therightCart.appendChild(button_Checkout);

//  listproductHtml.appendChild(therightCart);

// })

// }





// }


const initAPP = ()=>{
fetch('products.json')
.then(response =>response.json())
.then(data =>{
    listProduct=data;
    console.log(listProduct);
    addDataToHTML();
})
}
initAPP();













// 
            // let card_title1=document.createElement("h3");
            // card_title.classList.add("card_title");
            // card_title.innerHTML=`
            //  ${product.name}
            // `;
            // listproductHtml.appendChild(card_title);


            // let newProduct=document.createElement("div");
            // newProduct.classList.add("item");
            // newProduct.innerHTML=`
            // <img src="${product.image}" alt="">
            // <h3> ${product.name}</h3>
            // `;
            // listproductHtml.appendChild(newProduct);