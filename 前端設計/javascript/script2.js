var title = document.getElementById("title")
var content = document.getElementById("content")
var submit = document.getElementById("submit")
var list = document.getElementById("list")
var Delete = document.getElementById("Delete")
//innerHTML 顯示文字在HTML上
submit.addEventListener("click", function () {
    list.innerHTML = list.innerHTML + `
    <div>
    <h2>${title.value}</h2>
    <span>${content.value}</span>
    <hr>
    </div>
    `;
})