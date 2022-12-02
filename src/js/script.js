const buttonAddMe = document.getElementById("add-me")
const buttonRefreshList = document.getElementById("refresh-list")
const listContents = document.getElementById("list-contents")
const contentsArray = [];
let parentList = document.getElementById("list")
let parent = "<ol>"

function addMe() {
    let currentText = document.getElementById("current-text").value;
    if (currentText !== "") {
        contentsArray.push(currentText)
        document.getElementById("current-text").value = "";
    }
}

function refreshList() {
    parentList.innerHTML = "";
    for (i = 0; i <= contentsArray.length - 1; i++) {
        parent += "<li>" + contentsArray[i] + "</li>";
    }
    document.getElementById("list-contents").innerHTML = parent;
}

buttonAddMe.addEventListener("click", function () { addMe() })
buttonRefreshList.addEventListener("click", function () { refreshList() })