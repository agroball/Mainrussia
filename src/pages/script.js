const listContainerElements = document.querySelector(".cards");
const templateElement = document.querySelector(".template");

const initialCards = [{
        title: "Архыз",
    },
    {
        title: "Челябинская область",
    },
    {
        title: "Иваново",
    },
    {
        title: "Камчатка",
    },
    {
        title: "Холмогорский район",
    },
    {
        title: "Байкал",
    },
    {
        title: "Камчатка",
    },
    {
        title: "Камчатка",
    },
];



function renderList() {
    const listItems = initialCards.map(composeItem);
    listContainerElements.append(...listItems);
}

function composeItem(item) {
    const newItem = templateElement.content.cloneNode(true);
    const Kyk = newItem.querySelector(".kyk");
    Kyk.textContent = item.title;
    return newItem
}


renderList();