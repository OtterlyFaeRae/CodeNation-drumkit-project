const buttons = document.getElementsByTagName("button")
const audios = document.getElementsByTagName("audio")

for (let button of buttons ) {
    button.addEventListener ("click", () => {
        audios[button.id].play();
    }) 
}

window.addEventListener ("keydown", e => {
    try {
        audios[parseInt(e.key)-1].play();
    } 
    catch(err) {
        return null
    }
})