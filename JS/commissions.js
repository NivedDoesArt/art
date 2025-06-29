function galPrev(currentImg) {
    parent.postMessage("galprev" + currentImg, "*")
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

        for (i = 0; i < 5; i++) {
            document.getElementsByClassName('catagory')[i].children[0].setAttribute('style', 'font-size: 8vw; text-align: center;')
            for (ii = 0; ii < 4; ii++) {
                document.getElementsByClassName('catagory')[i].children[3].children[ii].setAttribute('style', 'width: 42vw; height: 42vw; margin-bottom: 10px;')
            }    
        }

        document.getElementsByClassName('aditional')[0].children[0].setAttribute('style', 'font-size: 6vw;')
        document.getElementsByClassName('aditional')[0].children[1].setAttribute('style', 'font-size: 6vw;')
        document.getElementsByClassName('aditional')[0].children[2].setAttribute('style', 'width: 80%; margin-left: 10%; margin-right: 10%; text-align: justify; text-align-last: center;')
    }
}

if (window.innerWidth < 1063) {
    mobileMode()
}

window.onresize = function (event) {
    if (window.innerWidth < 1063) {
        mobileMode()
    }
    pageHeight = (document.getElementById('commissions').offsetHeight + 50)
    parent.postMessage("commissions" + pageHeight, "*")
};



var pageHeight

window.onload = function() {
    if (document.getElementById('commissions')) {
        var pageHeight = document.getElementById('commissions').offsetHeight + 50
        parent.postMessage("commissions" + pageHeight, "*")    
    }
}