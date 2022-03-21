//dom selection
//event lisener
//basic validation
//creatign element
//append

const tittle = document.querySelector("#tittle");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");


btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (tittle.value == "" && author.value == "" && year.value == "") {
        alert("fillup the form")
    }
    else {
        const newRow = document.createElement("tr");

        const newTittle = document.createElement("th");
        newTittle.innerHTML = tittle.value;
        newRow.appendChild(newTittle);
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
})