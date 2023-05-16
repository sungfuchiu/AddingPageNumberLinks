const paginationDiv = document.getElementById("pagination");
const pageSize = 10;
const numberOfPages = Math.ceil(users.length/pageSize);
const pageArray = [...Array(numberOfPages).keys()].map(i => i+1);
const contactListDiv = document.getElementById("contact-list");
const contactNumber = document.getElementById("contact-number");
let contactTemplate = `<div class="contact-details">
    <img class="avatar" src="@imageURL">
    <h3>@name</h3>
    <span class="email">@emailUsername@example.com</span>
</div>
<div class="joined-details">
       <span class="date">Joined @joinDate</span>
</div>`;

contactNumber.innerText = users.length;
loadAPage();
pageArray.forEach(i => {
    const pageInput = document.createElement("input");
    pageInput.type = "button";
    pageInput.value = i;
    pageInput.onclick = () => loadAPage(i);
    pageInput.addEventListener('click', (event) => clickPageButton(event));
    pageInput.disabled = (i === 1);
    paginationDiv.appendChild(pageInput);
});
function clickPageButton(event){
    Array.from(paginationDiv.children).forEach(pageInput => {
        pageInput.disabled = false;
    })
    const input = event.target;
    const value = input.value;
    input.disabled = true;
    loadAPage(value);
}

function loadAPage(pageNumber = 1){
    contactListDiv.innerHTML = "";
    const startIndex = (pageNumber - 1) * pageSize;
    [...Array(pageSize).keys()].map(i => i+startIndex).forEach(i => {
        let contactHTML = contactTemplate.replace("@imageURL", users[i].image);
        contactHTML = contactHTML.replace("@name", users[i].name);
        contactHTML = contactHTML.replace("@joinDate", users[i].joined);
        contactHTML = contactHTML.replace("@emailUsername", users[i].name.split(" ").join("."));
        
        const userLi = document.createElement("li");
        userLi.className = "contact-item cf";
        userLi.innerHTML = contactHTML;

        contactListDiv.appendChild(userLi);
    });
}

