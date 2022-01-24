let tempList = [];

const productForm = document.querySelector('#productForm');
const shopList = document.querySelector('#shopList');
const productList = document.querySelector('#productList');
const saveButton = document.querySelector('#save');


productForm.addEventListener('submit', submitProduct);
saveButton.addEventListener('click', saveList);

function submitProduct(e) {
    e.preventDefault()
    const product = document.querySelector('#productName').value
    const qty = document.querySelector('#quantity').value
    const unit = document.querySelector('#mesure').value
    const listItem = {
        product: product,
        quantity: qty,
        unit: unit,
        id: Date.now()
    }
    tempList.push(listItem);

    let div = document.createElement('div');
    div.classList.add('prodItem');
    div.setAttribute('data-item-id', listItem.id);
    div.innerHTML = `<span class='product'>${product}</span><span class='quantity'>${qty} ${unit}</span><button class="button--small remove" onclick="handleRemove(event)">x</button>`;
    
    productList.appendChild(div);
}

function handleRemove(e) {
    const parentEl = e.target.parentElement;
    const productClasses = parentEl.classList;
    const itemId = parentEl.getAttribute('data-item-id')

    if(productClasses.contains('completed')) {
        tempList = tempList.filter((item) =>  {
            return item.id !== parseInt(itemId, 10)
        });
        parentEl.remove()
    } else {
        productClasses.add('completed');
    }

}

function saveList() {
    let listName = document.querySelector('#listName').value;
    if(listName && listName.length > 0) {
        let storedLists = JSON.parse(localStorage.getItem('myLists'));
        let myLists = storedLists || {};
        myLists[listName.trim().replace(" ", "_")] = tempList;
    
        localStorage.setItem('myLists', JSON.stringify(myLists))
    } else {
        alert('please add the list name if you want to register it');
    }
}