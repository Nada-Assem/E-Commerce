
const renderHome = Handlebars.compile(document.getElementById("home-template").innerHTML);
const renderShop = Handlebars.compile(document.getElementById("shop-template").innerHTML);
const renderCart = Handlebars.compile(document.getElementById("cart-template").innerHTML);
const renderBlog = Handlebars.compile(document.getElementById("blog-template").innerHTML);
const renderFaq = Handlebars.compile(document.getElementById("faq-template").innerHTML);
const renderContact = Handlebars.compile(document.getElementById("contact-template").innerHTML);



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
    const hash = window.location.hash;
    switch (hash) {
        case "#home":
            renderContent(renderHome(), "content");
            break;
        case "#shop":
            renderContent(renderShop(), "content");
            load('shop.js')
            break;
        case "#cart":
            renderContent(renderCart(), "content");
            break;
        case "#blog":
            renderContent(renderBlog(), "content");
            break;
        case "#contact":
            renderContent(renderContact(), "content");
            break;
        case "#faq":
            renderContent(renderFaq(), "content");
            break;
        default:
            renderContent(renderHome(), "content");
            break;
    }
    
}

window.addEventListener("load", HandleNavigation);
window.addEventListener("hashchange", HandleNavigation);