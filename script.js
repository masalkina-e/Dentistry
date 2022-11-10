
let isOpen = false
        
function OpenMenu() {
    const mobilMenu = document.getElementById("myMobilMenu") 
    const mobilIconBar = document.getElementById("myIconBar")
    const mobilIconClose = document.getElementById("myIconClose")
        
    if (isOpen) {
        mobilMenu.style.display = "none"
        mobilIconBar.style.display = "flex"
        mobilIconClose.style.display = "none"
        isOpen = false
    } else {
        mobilMenu.style.display = "flex"
        mobilIconClose.style.display = "flex"
        mobilIconBar.style.display = "none"
        isOpen = true
    }
}


