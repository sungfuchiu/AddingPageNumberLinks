const paginationDiv = document.getElementById("pagination");
const pageSize = 10;
const numberOfPages = Math.ceil(users.length/pageSize);
const pageArray = [...Array(numberOfPages).keys()].map(i => i+1);
const contactListDiv = document.getElementById("contact-list");
const contactNumber = document.getElementById("contact-number");
const contactTemplate = (imageURL, name, emailUsername, joinDate) => `
<div class="contact-details">
    <img class="avatar" src="${imageURL}">
    <h3>${name}</h3>
    <span class="email">${emailUsername}@example.com</span>
</div>
<div class="joined-details">
       <span class="date">Joined ${joinDate}</span>
</div>`;

contactNumber.innerText = users.length;
loadAPage();
pageArray.forEach(i => {
    const pageInput = document.createElement("input");
    pageInput.type = "button";
    pageInput.value = i;
    pageInput.className = (i === 1) ? "" : "page-button";
    pageInput.addEventListener('click', (event) => clickPageButton(event));
    pageInput.disabled = (i === 1);
    paginationDiv.appendChild(pageInput);
});

function clickPageButton(event){
    Array.from(paginationDiv.children).forEach(pageInput => {
        pageInput.disabled = false;
        pageInput.className = "page-button";
    })
    const input = event.target;
    const value = input.value;
    input.className = "";
    input.disabled = true;
    loadAPage(value);
}

function loadAPage(pageNumber = 1){
    contactListDiv.innerHTML = "";
    const startIndex = (pageNumber - 1) * pageSize;
    [...Array(pageSize).keys()].map(i => i+startIndex).forEach(i => {
        if(i >= users.length){
            return;
        }
        let contactHTML = contactTemplate(users[i].image, 
                                            users[i].name,
                                            users[i].name.split(" ").join("."),
                                            
                                            users[i].joined);

        const userLi = document.createElement("li");
        userLi.className = "contact-item cf";
        userLi.innerHTML = contactHTML;

        contactListDiv.appendChild(userLi);
    });
}

