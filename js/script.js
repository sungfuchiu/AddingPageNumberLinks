const paginationDiv = document.getElementById("pagination");
const pageSize = 10;
const numberOfPages = Math.ceil(users.length/pageSize);
const pageArray = [...Array(numberOfPages).keys()].map(i => i+1);
const contactListDiv = document.getElementById("contact-list");

pageArray.forEach(i => {
    const pageInput = document.createElement("input");
    pageInput.type = "button";
    pageInput.value = i;
    paginationDiv.appendChild(pageInput);
});
loadAPage();

function loadAPage(pageNumber = 1){
    const startIndex = (pageNumber - 1) * pageSize;
    [...Array(pageSize).keys()].map(i => i+startIndex).forEach(i => {
        const userLi = document.createElement("li");
        userLi.className = "contact-item cf";

        const contactDetailDiv = document.createElement("div");
        contactDetailDiv.className = "contact-details";

        const contactDetailImg = document.createElement("img");
        contactDetailImg.className = "avatar";
        contactDetailImg.src = users[i].image;
        contactDetailDiv.appendChild(contactDetailImg);

        const contactDetailH3 = document.createElement("h3");
        contactDetailH3.textContent = users[i].name;
        contactDetailDiv.appendChild(contactDetailH3);

        const contactDetailSpan = document.createElement("span");
        contactDetailSpan.className = "email";
        contactDetailSpan.textContent = "@example.com";
        contactDetailDiv.appendChild(contactDetailSpan);

        userLi.appendChild(contactDetailDiv);

        const joinedDetailDiv = document.createElement("div");
        joinedDetailDiv.className = "joined-details";
        const joinDate = document.createElement("span");
        joinDate.textContent = `Joined ${users[i].joined}`;
        joinedDetailDiv.appendChild(joinDate);

        userLi.appendChild(joinedDetailDiv);

        contactListDiv.appendChild(userLi);
    });
}

