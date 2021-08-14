let btn = document.querySelector('.add-card');
let btnDelete = document.querySelectorAll('.delete');
let form = document.querySelector('form');
let cards = document.querySelector('.cards');
let card = document.querySelectorAll('.card-item');
let url = document.querySelector('#url-field');
let name = document.querySelector('#name-field');
let desc = document.querySelector('#desc-field');
let price = document.querySelector('#price-field');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cards.insertAdjacentHTML('beforeend',
        `
<div class="card-item">
    <button type="button" class="delete">
        <img class="delete-img" src="./img/delete.svg" alt ="">
    </button> 
    <img src = "${url.value}" alt="">
    <div class="text-content">
        <h2>${name.value}</h2> 
        <p>${desc.value}</p>
        <p class="price">${price.value}
            <span>руб.</span>
        </p>
    </div> 
</div>
    `);

    form.reset();

});