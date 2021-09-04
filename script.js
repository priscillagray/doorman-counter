let countEl = document.getElementById("count-el")
const inBtn = document.getElementById("inBtn")
const saveBtn = document.getElementById("saveBtn")
let count = 0 
const saveEntryEl = document.getElementById("previous-el")

// buttons
inBtn.addEventListener("click", peopleIn)
saveBtn.addEventListener("click", saveCount)

// count people in
function peopleIn() {
    count += 1
    countEl.textContent = count
}

// save count
function saveCount() {
    saveEntryEl.textContent += count + " - "
    count = 0
    countEl.textContent = 0 
   
}
