//document.getElementById("count").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countAndDash = " " + count + " -"
    saveEl.textContent += countAndDash
    count = 0
    countEl.textContent = count
}


