function updateTimes() {
    const yourDate = new Date()
    const yourTime = yourDate.toLocaleTimeString('en-US')
    
    const mydate = new Date()
    const options = { timeZone: 'Europe/Amsterdam' }
    const myTime = mydate.toLocaleTimeString('en-US', options)
    
    document.getElementById('myTime').innerHTML = myTime
    document.getElementById('yourTime').innerHTML = yourTime
}



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
            document.getElementsByClassName('catagory')[0].children[0].children[i].setAttribute('style', 'width: 100%;')
        }
        document.getElementsByClassName('catagory')[0].children[0].setAttribute('style', 'text-align: center; text-align-last: center;')
    
        for (i = 0; i < 2; i++) {
            document.getElementsByClassName('catagory')[1].children[1].children[i].setAttribute('style', 'width: 100%;')
            document.getElementsByClassName('catagory')[1].children[1].children[i].children[0].setAttribute('style', 'text-align: center; text-align-last: center;')
            document.getElementsByClassName('catagory')[1].children[1].children[i].children[1].setAttribute('style', 'margin-bottom: 20px;')
        }
        document.getElementsByClassName('catagory')[1].children[1].setAttribute('style', 'text-align: center; text-align-last: center;')
    
        document.getElementById('asleep').style.height = '80vw'
        document.getElementById('asleep').style.marginLeft = '10vw'
        document.getElementById('asleep').style.marginRight = '10vw'
    }
}

if (window.innerWidth < 1063) {
    mobileMode()
}

window.onresize = function (event) {
    if (window.innerWidth < 1063) {
        mobileMode()
    }
    pageHeight = (document.getElementById('contact').offsetHeight + 50)
    parent.postMessage("contact" + pageHeight, "*")
};



var pageHeight

window.onload = async function () {
    if (document.getElementById('contact')) {
        var pageHeight = document.getElementById('contact').offsetHeight + 50
        parent.postMessage("contact" + pageHeight, "*")
    }

    for (i = 0; i < 3600; i++) {
        await new Promise(r => setTimeout(r, 1000));
        updateTimes()
    }
}