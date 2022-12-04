const buttonAddMe = document.getElementById("add-me")
const buttonRefreshList = document.getElementById("refresh-list")
const buttonSetInterval = document.getElementById("interval")
const listContents = document.getElementById("list-contents")
const contentsArray = [];
let parentList = document.getElementById("list")

function addMe() {
    let currentText = document.getElementById("current-text").value;
    if (currentText !== "") {
        contentsArray.push(currentText)
        document.getElementById("current-text").value = currentText;
        document.getElementById("current-text").value = "";
        let alert = document.getElementById("alert")
        alert.innerHTML = "Poprawnie dodałeś"
        setTimeout(function () {
            alert.innerHTML = " "
        }, 2000)
    }

}

// let removeInterval = setInterval(interval, 1000)
function interval() {
    let i = 0;
    let handle = setInterval(function () {
        if (i === 0) {
            contentsArray.push("kot")
        } else if (i === 1) {
            contentsArray.push("pies")
        }
        if (i === 2) {
            contentsArray.push("królik")
            clearInterval(handle);
        }
        i = i + 1;
        refreshList()
    }, 1000)
}

function refreshList() {
    parentList.innerHTML = "";
    for (i = 0; i <= contentsArray.length - 1; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(contentsArray[i]);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
    }
}

buttonAddMe.addEventListener("click", function () { addMe() })
buttonRefreshList.addEventListener("click", function () { refreshList() })
buttonSetInterval.addEventListener("click", function () { interval() })
