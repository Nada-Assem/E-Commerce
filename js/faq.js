(async function getFAQ(){
let faq=await fetch('./faq.json')
faq=await faq.json()
console.log(faq)
faq.forEach((element,i) => {
    if(i%2){
        document.querySelectorAll('#faq .col-12')[1].innerHTML+=`<div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapseOne">
            ${element.question}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
           ${element.answer}
          </div>
        </div>
      </div>`
    }else{
        document.querySelectorAll('#faq .col-12')[0].innerHTML+=`<div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapseOne">
            ${element.question}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
           ${element.answer}
          </div>
        </div>
      </div>`
    }
});
})()