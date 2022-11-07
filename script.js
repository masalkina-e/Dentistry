
let isOpen = false
        
function OpenMenu() {
    const mobilMenu = document.getElementById("myMobilMenu") 
    mobilMenu.style.display = "flex"
        
    if (isOpen) {
        mobilMenu.style.display = "none"
        isOpen = false
    } else {
        mobilMenu.style.display = "flex"
        isOpen = true
    }
}
