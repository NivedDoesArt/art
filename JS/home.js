async function receiveMessage(event) {
    var messageData = (event.data);

    if (messageData == 'loadPage1') {
        for (i = 0; i < 3; i++) {
            document.getElementsByClassName('aboutMe')[i].style = null
        }

        if (mobileHasBeenToggled == 1) {
            await new Promise(r => setTimeout(r, 1000));

            document.getElementById('homeImageHolder').style.transform = 'translateX(-50px)'
            document.getElementById('homeImageHolder').style.width = 'calc(100vw + 50px)'
            await new Promise(r => setTimeout(r, 600));
            document.getElementById('homeImageHolder').style.transform = null
            document.getElementById('homeImageHolder').style.width = '100vw'
        }
    }

    if (messageData.includes('scroll')) {
        messageData = messageData.replace('scroll', '')
        aboutMeScroll(messageData)
    }
}

addEventListener("message", receiveMessage, false);






var welcomeData = ['Welcome!', 'Welkom!', 'Willkommen!', 'Velkommen!', 'Dobrodošli!', 'Vítejte!', 'Bienvenue !', 'Benvenuto!', 'Witamy!', 'Bem-vindo!', 'Bun venit!', '¡Bienvenido!', 'Välkommen!', 'Hoş geldiniz!']

async function textSwitchAnimation() {
    document.getElementById('welcome').style.transform = 'translateX(5px)'
    document.getElementById('welcome').style.opacity = '0%'
    await new Promise(r => setTimeout(r, 250));
    document.getElementById('welcome').style.transform = 'translateX(-5px)'
    await new Promise(r => setTimeout(r, 250));
    document.getElementById('welcome').style.transform = 'translateX(0px)'
    document.getElementById('welcome').style.opacity = '100%'
}






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



function homeNav(clickedLocation) {
    parent.postMessage('quickNav' + clickedLocation, "*")
}



var questionHeightAjust = '3em'
var activeQuestion = null

function questOpen(questionNumber) {
    for (i = 1; i != 6; i++) {
        document.getElementById('questArrow' + i).style = null
        document.getElementById('quest' + i).style.boxShadow = null
        document.getElementById('quest' + i).style.fontWeight = null
        document.getElementById('questAnswer' + i).style.boxShadow = null
        document.getElementById('questAnswer' + i).style.height = null
        document.getElementById('questAnswer' + i).style.color = null
    }

    if (questionNumber != activeQuestion) {
        document.getElementById('questArrow' + questionNumber).style.transform = 'rotate(-45deg)'
        document.getElementById('quest' + questionNumber).style.boxShadow = '0px 0px #0000'
        document.getElementById('quest' + questionNumber).style.fontWeight = '600'
        document.getElementById('questAnswer' + questionNumber).style.boxShadow = 'inset 0px -2px 0px -1px #000'
        document.getElementById('questAnswer' + questionNumber).style.height = questionHeightAjust
        document.getElementById('questAnswer' + questionNumber).style.color = '#000'
    
        parent.postMessage("home" + (pageHeight + 50), "*")    

        activeQuestion = questionNumber
    } else if (questionNumber == activeQuestion) {
        activeQuestion = null
        parent.postMessage("home" + (pageHeight - 50), "*")    
    }
}





function aboutMeScroll(aboutMeOnScreen) {
    aboutMeOnScreen = aboutMeOnScreen - 1
    document.getElementsByClassName('aboutMe')[aboutMeOnScreen].style.opacity = '100%'
    document.getElementsByClassName('aboutMe')[aboutMeOnScreen].style.transform = 'translateY(0px)'
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

        for (i = 0; i < 8; i++) {
            document.getElementById('homeImageHolder').children[i].setAttribute('style', 'height: 60vw; max-width: auto; margin: 10px;')
        }
        document.getElementById('homeImageHolder').style.overflowX = 'scroll'
        document.getElementById('homeImageHolder').style.whiteSpace = 'nowrap'
        document.getElementById('homeImageHolder').style.width = '100vw'
        document.getElementById('homeImageHolder').style.height = 'auto'
        document.getElementById('homeImageHolder').style.margin = '0px'

        document.getElementById('aboutMeP1').style.fontSize = '1.1em'
        document.getElementById('aboutMeImg1').style.height = '50vw'
        document.getElementById('aboutMeImg1').style.marginLeft = 'calc((100% / 2) - (50vw / 2))'
        document.getElementById('aboutMeImg1').style.marginRight = 'calc((100% / 2) - (50vw / 2))'

        document.getElementById('aboutMeH2').style.textAlign = 'left'
        document.getElementById('aboutMeP2').style.fontSize = '1.1em'
        document.getElementById('aboutMeImg2').style.height = '50vw'
        document.getElementById('aboutMeImg2').style.marginLeft = 'calc((100% / 2) - (50vw / 2))'
        document.getElementById('aboutMeImg2').style.marginRight = 'calc((100% / 2) - (50vw / 2))'
        document.getElementById('aboutMeImg2').style.float = 'left'

        document.getElementById('aboutMeP3').style.fontSize = '1.1em'
        document.getElementById('aboutMeImg3').style.height = '50vw'
        document.getElementById('aboutMeImg3').style.marginLeft = 'calc((100% / 2) - (50vw / 2))'
        document.getElementById('aboutMeImg3').style.marginRight = 'calc((100% / 2) - (50vw / 2))'

        document.getElementsByClassName('aboutMe')[0].style.height = '450px'
        document.getElementsByClassName('aboutMe')[1].style.height = '450px'
        document.getElementsByClassName('aboutMe')[2].style.height = '450px'

        for (i = 1; i < 4; i++) {
            document.getElementById('aboutMeP' + i).style.maxWidth = '100%'
        }

        for (i = 0; i < 4; i++) {
            document.getElementById('quickNavList').children[i].style.float = 'none'
        }

        for (i = 1; i < 6; i++) {
            document.getElementById('quest' + i).style.fontSize = '4vw'
        }

        for (i = 1; i < 6; i++) {
            questionHeightAjust = '6em'
            document.getElementById('questAnswer' + i).style.fontSize = '3vw'
            document.getElementById('questAnswer' + i).style.textAlign = 'left'
            document.getElementById('questAnswer' + i).style.textAlignLast = 'left'
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
    pageHeight = (document.getElementById('home').offsetHeight + 50)
    parent.postMessage("home" + pageHeight, "*")
};


var pageHeight

window.onload = async function () {
    // all this file and code does is send the height of an iframe page to the parent
    await new Promise(r => setTimeout(r, 300));

    if (document.getElementById('home')) {
        pageHeight = (document.getElementById('home').offsetHeight + 50)
        parent.postMessage("home" + pageHeight, "*")
    }

    for (i = 0; i < 500; i++) {
        for (ii = 0; ii < 14; ii++) {
            document.getElementById('welcome').innerHTML = welcomeData[ii]
            await new Promise(r => setTimeout(r, 3500));
            textSwitchAnimation()
            await new Promise(r => setTimeout(r, 250));
        }
    }
}