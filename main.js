const productForm = document.querySelector('#productForm');
productForm.addEventListener('submit', submitProduct);
const shopList = document.querySelector('#shopList');
const divList = document.querySelector('#divList');

function submitProduct(e) {
    e.preventDefault()
    const product = document.querySelector('#productName').value
    const qty = document.querySelector('#quantity').value
    const unit = document.querySelector('#mesure').value

    let div = document.createElement('div')
    div.classList.add('prodItem');
    div.innerHTML = `<span class='product'>${product}</span><span class='quantity'>${qty} ${unit}</span><button class="button--small remove" onclick="handleRemove(event)">x</button>`;
    
    divList.appendChild(div);

}

function handleRemove(e) {
    const productClasses = e.target.parentElement.classList;
    if(productClasses.contains('completed')) {
        e.target.parentElement.remove()
    } else {
        productClasses.add('completed');
    }

}