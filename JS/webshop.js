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

        for (i = 0; i < 4; i++) {
            document.getElementsByClassName('catagory')[i].children[0].setAttribute('style', 'text-align: center; font-size: 10vw;')
        }

        for (i = 0; i < 20; i++) {
            if (document.getElementById('ref' + (i + 1))) {
                document.getElementById('ref' + (i + 1)).style.width = 'calc(50% - 2.5vw)'
                document.getElementById('ref' + (i + 1)).children[1].setAttribute('style', 'font-size: 5vw')
            }
        }

        for (i = 0; i < 20; i++) {
            if (document.getElementById('sti' + (i + 1))) {
                document.getElementById('sti' + (i + 1)).style.width = 'calc(50% - 2.5vw)'
                document.getElementById('sti' + (i + 1)).children[1].setAttribute('style', 'font-size: 5vw')
            }
        }

        for (i = 0; i < 20; i++) {
            if (document.getElementById('oth' + (i + 1))) {
                document.getElementById('oth' + (i + 1)).style.width = 'calc(50% - 2.5vw)'
                document.getElementById('oth' + (i + 1)).children[1].setAttribute('style', 'font-size: 5vw')
            }
        }

        for (i = 0; i < 20; i++) {
            if (document.getElementById('clo' + (i + 1))) {
                document.getElementById('clo' + (i + 1)).style.width = 'calc(50% - 2.5vw)'
                document.getElementById('clo' + (i + 1)).children[1].setAttribute('style', 'font-size: 5vw')
            }
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
    pageHeight = (document.getElementById('webshop').offsetHeight + 50)
    parent.postMessage("webshop" + pageHeight, "*")
};



var pageHeight

window.onload = function () {
    if (document.getElementById('webshop')) {
        var pageHeight = document.getElementById('webshop').offsetHeight + 50
        parent.postMessage("webshop" + pageHeight, "*")
    }
}