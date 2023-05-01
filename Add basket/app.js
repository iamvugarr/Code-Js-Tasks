const addItemBtn = document.querySelector('.add-item')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')

const form = document.querySelector('#item-about')

const cardsContainer = document.querySelector('.cards-container')



addItemBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

closeBtn.addEventListener('click', closeModal)

overlay.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

if (localStorage.getItem("product") === null) {
    localStorage.setItem("product", JSON.stringify([]))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const itemName = document.querySelector('#product-name').value;
    const itemPrice = document.querySelector('#product-price').value;
    const itemImage = document.querySelector('#product-image').src;

    const product = JSON.parse(localStorage.getItem('product'));

    product.push({
        name: itemName,
        price: itemPrice,
        productImage: itemImage.name,
    });

    localStorage.setItem("product", JSON.stringify((product)))

    getProduct()

    closeModal()

    // console.log(product);
})

function getProduct() {
    const product = JSON.parse(localStorage.getItem('product'));

    product.map((item) => {
        cardsContainer.innerHTML += `
        <div class="item-card">
            <div class="item-image">
                <img src=${item.productImage} class="image" alt="">
            </div>

            <div class="card-desc">
                <h2>${item.name}</h2>
                <h2>${item.price}</h2>
            </div>

            <div class="btn-container">
                <button class="btn add-basket-btn">Add To Basket</button>
                <button class="btn btn-delete">Delete</button>
            </div>
        </div>
        `
        const deleteBtn = document.querySelector('.btn-delete')
        
        

    })
}


