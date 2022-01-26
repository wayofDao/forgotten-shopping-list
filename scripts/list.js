let currentList;
const listItems = document.querySelector('#listItems')

function initListScreen() {
    const urlParams = new URLSearchParams(window.location.search);
    const listName = urlParams.get('list-name');

    const title = document.querySelector('.title')
    title.textContent = listName || 'error no name';
    const storedLists = JSON.parse(localStorage.getItem('myLists'));
    if(storedLists && storedLists[listName]) {
        storedLists[listName].forEach(item => {
            let div  = document.createElement('div')
            div.addEventListener('click', toggleDone)
            div.innerHTML = `<span class="left-side">${item.quantity} ${item.unit}</span> <span class="right-side">${item.product}</span>`; 
            listItems.appendChild(div)
        })
    } else {
        alert('oups, this list does not exist');
    }
    
}

function toggleDone() {
    this.classList.toggle('done');
}


window.onload = initListScreen;