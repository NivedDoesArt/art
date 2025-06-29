var imageAmount = 82
var imageLoaded = 0

while (imageAmount > imageLoaded) {
    imageLoaded++

    const newCard = document.createElement("img");
    newCard.id = 'card' + imageLoaded
    newCard.setAttribute('src', '../IMG/preview/' + imageLoaded + '.png')
    newCard.setAttribute('alt', 'Gallery content')
    newCard.setAttribute('onclick', 'galleryOpenImage(this.id)')
    const currentCard = document.getElementById("NEVERUSE");
    document.getElementById('galleryImgHolder').insertBefore(newCard, currentCard);
}

function galleryOpenImage(clickedImage) {
    var targetImage = clickedImage.replace('card', '')

    parent.postMessage('galprev' + targetImage, '*')
}

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

        // if esc key was not pressed in combination with ctrl or alt or shift
        const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
        if (isNotCombinedKey) {
            parent.postMessage('closeImgWithEsc', "*")
        }
    }
});




function nivedEasteregg() {
    parent.postMessage('nivedEasteregg', '*')
}

var eastereggProgress = 0
var eastereggSequence = ['n', 'i', 'v', 'e', 'd']

addEventListener("keydown", (event) => {
    if (event.key == eastereggSequence[eastereggProgress]) {
        eastereggProgress++
    } else if (event.key != eastereggSequence[eastereggProgress]) {
        eastereggProgress = 0
    }

    if (eastereggProgress == 5) {
        nivedEasteregg()
        eastereggProgress = 0
    }
})

































var mobileHasBeenToggled = 0

function mobileMode() {
    if (mobileHasBeenToggled == 0) {
        mobileHasBeenToggled = 1

        for (i = 0; i < imageAmount; i++) {
            document.getElementById('card' + (i + 1)).style.width = '35vw'
            document.getElementById('card' + (i + 1)).style.height = '35vw'
            document.getElementById('card' + (i + 1)).style.objectFit = 'cover'
            document.getElementById('card' + (i + 1)).style.margin = '0px'
            document.getElementById('card' + (i + 1)).style.marginBottom = '2vw'
        }
    }
}

if (window.innerWidth < 1063) {
    mobileMode()
}

window.onresize = function (event) {
    if (window.innerWidth < 1063) {
        mobileMode()
    }
    pageHeight = (document.getElementById('gallery').offsetHeight + 50)
    parent.postMessage("gallery" + pageHeight, "*")
};



var pageHeight

window.onload = function() {
    if (document.getElementById('gallery')) {
        var pageHeight = document.getElementById('gallery').offsetHeight + 50
        parent.postMessage("gallery" + pageHeight, "*")    
    }
}