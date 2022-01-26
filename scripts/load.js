let storedLists = {};



function displayLists() {
    const listTarget = document.querySelector('#shoppingLists')

    Object.keys(storedLists).forEach(key => {
        let div = document.createElement('div');
        div.classList.add('load-list');
        let a = document.createElement('a');
        a.setAttribute('href', `../pages/list.html?list-name=${key}`)
        a.textContent = key
        div.appendChild(a);
        listTarget.appendChild(div);
    })
}

function initLoadScreen() {
    storedLists = JSON.parse(localStorage.getItem('myLists'));
    displayLists();
}


window.onload = initLoadScreen;