// ALL VARIABLES

var mobileMenuToggled = 0
var recievedPageHeight = null

var homeHeight
var galleryHeight
var webshopHeight
var commissionsHeight
var contactHeight



// EVENT LISTENER FOR RECIEVING MESSAGES FROM IFRAMES

async function receiveMessage(event) {
    var messageData = (event.data);

    if (messageData.includes('home')) {
        messageData = messageData.replace('home', '')
        homeHeight = messageData + 'px'

        if (sessionStorage.getItem('currentPage') == 1) {
            document.getElementById('content').style.height = homeHeight
        }
    }

    if (messageData.includes('gallery')) {
        messageData = messageData.replace('gallery', '')
        galleryHeight = messageData + 'px'

        if (sessionStorage.getItem('currentPage') == 2) {
            document.getElementById('content').style.height = galleryHeight
        }
    }

    if (messageData.includes('webshop')) {
        messageData = messageData.replace('webshop', '')
        webshopHeight = messageData + 'px'

        if (sessionStorage.getItem('currentPage') == 3) {
            document.getElementById('content').style.height = webshopHeight
        }
    }

    if (messageData.includes('commissions')) {
        messageData = messageData.replace('commissions', '')
        commissionsHeight = messageData + 'px'

        if (sessionStorage.getItem('currentPage') == 4) {
            document.getElementById('content').style.height = commissionsHeight
        }
    }

    if (messageData.includes('contact')) {
        messageData = messageData.replace('contact', '')
        contactHeight = messageData + 'px'

        if (sessionStorage.getItem('currentPage') == 5) {
            document.getElementById('content').style.height = contactHeight
        }
    }

    if (messageData.includes('galprev')) {
        messageData = messageData.replace('galprev', '')
        console.log(messageData)

        document.getElementById('galPrev').style.transform = 'scale(100%)'
        document.getElementById('galPrev').style.opacity = '100%'
        document.getElementById('prevImg').setAttribute('src', 'IMG/full/' + messageData + '.png')
        await new Promise(r => setTimeout(r, 400));
        document.getElementById('prevImg').style.opacity = '100%'
        document.getElementById('prevImg').style.transform = 'scale(90%) translateY(0px)'
    }

    if (messageData.includes('closeImgWithEsc')) {
        prevClose()
    }

    if (messageData.includes('quickNav')) {
        messageData = messageData.replace('quickNav', '')
        nav(messageData)
    }

    if (messageData.includes('nivedEasteregg')) {
        nivedEasteregg()
    }
}

addEventListener("message", receiveMessage, false);

async function prevClose() {
    document.getElementById('galPrev').style.opacity = '0%'
    document.getElementById('prevImg').style.transform = 'scale(90%) translateY(-50px)'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('galPrev').style.transform = 'scale(0%)'
    document.getElementById('prevImg').style.opacity = '0%'
    document.getElementById('prevImg').style.transform = 'scale(90%) translateY(50px)'
}

// SMALL MENU BUTTON THAT APPEARS WHEN MOBILE MODE IS DETECTED

async function mobileMenuToggle() {
    if (mobileMenuToggled == 0) {
        mobileMenuToggled = 1
        console.log('Open menu')

        document.getElementById('mmb1').style.transform = 'rotate(45deg) translateY(9px) translateX(10px)'
        document.getElementById('mmb2').style.transform = 'scale(0%)'
        document.getElementById('mmb2').style.opacity = '0%'
        document.getElementById('mmb3').style.transform = 'rotate(-45deg)translateY(-9px) translateX(10px)'

        document.getElementById('mobileMenu').style.transform = 'translateY(0px)'
        document.getElementById('mobileSocials').style.transform = 'scale(100%)'

    } else if (mobileMenuToggled == 1) {
        mobileMenuToggled = 0
        console.log('Close menu')

        document.getElementById('mmb1').style = null
        document.getElementById('mmb2').style = null
        document.getElementById('mmb3').style = null

        document.getElementById('mobileMenu').style = null
        document.getElementById('mobileSocials').style = null
    }
}

var aboutMe1toggle = 0
var aboutMe2toggle = 0
var aboutMe3toggle = 0

addEventListener("scroll", (event) => {
    if (mobileMenuToggled == 1) {
        mobileMenuToggle()
    }

    if (window.scrollY > 377 && aboutMe1toggle == 0) {
        aboutMe1toggle = 1
        console.log('About me 1')

        document.getElementById('home').contentWindow.postMessage('scroll1', '*')

    } else if (window.scrollY > 696 && aboutMe2toggle == 0) {
        aboutMe2toggle = 1
        console.log('About me 2')

        document.getElementById('home').contentWindow.postMessage('scroll2', '*')

    } else if (window.scrollY > 1072 && aboutMe3toggle == 0) {
        aboutMe3toggle = 1
        console.log('About me 3')

        document.getElementById('home').contentWindow.postMessage('scroll3', '*')

    }
});





// NAVBAR PAGE SELECTOR FUNCTIONALITY

async function nav(goTo) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    if (mobileMenuToggled == 1) {
        mobileMenuToggle()
    }
    
    if (goTo == 1) {
        sessionStorage.setItem('currentPage', goTo)
        document.title = 'NivedDoesArt | Home'

        if (document.getElementById('selectorArrow')) {
            document.getElementById('selectorArrow').style.transform = 'translateX(-220px)'
        }

        document.getElementById('content').style.transform = 'scale(95%)'
        document.getElementById('contentHolder').style.opacity = '0%'
        await new Promise(r => setTimeout(r, 300));
        document.getElementById('contentHolder').style.transform = 'translateX(0%)'
        document.getElementById('content').style.height = homeHeight
        console.log(homeHeight)
        await new Promise(r => setTimeout(r, 400));
        document.getElementById('content').style.transform = 'scale(100%)'
        document.getElementById('contentHolder').style.opacity = '100%'
        document.getElementById('home').contentWindow.postMessage('loadPage1', '*')

        if (document.getElementById('mobileMenuButton')) {
            document.getElementById('mobile1').style.textDecoration = 'underline'
            document.getElementById('mobile2').style.textDecoration = null
            document.getElementById('mobile3').style.textDecoration = null
            document.getElementById('mobile4').style.textDecoration = null
            document.getElementById('mobile5').style.textDecoration = null
        }

        aboutMe1toggle = 0
        aboutMe2toggle = 0
        aboutMe3toggle = 0
    }

    if (goTo == 2) {
        sessionStorage.setItem('currentPage', goTo)
        document.title = 'NivedDoesArt | Gallery'

        if (document.getElementById('selectorArrow')) {
            document.getElementById('selectorArrow').style.transform = 'translateX(-136px)'
        }

        document.getElementById('content').style.transform = 'scale(95%)'
        document.getElementById('contentHolder').style.opacity = '0%'
        await new Promise(r => setTimeout(r, 300));
        document.getElementById('contentHolder').style.transform = 'translateX(-20%)'
        document.getElementById('content').style.height = galleryHeight
        console.log(galleryHeight)
        await new Promise(r => setTimeout(r, 400));
        document.getElementById('content').style.transform = 'scale(100%)'
        document.getElementById('contentHolder').style.opacity = '100%'

        if (document.getElementById('mobileMenuButton')) {
            document.getElementById('mobile1').style.textDecoration = null
            document.getElementById('mobile2').style.textDecoration = 'underline'
            document.getElementById('mobile3').style.textDecoration = null
            document.getElementById('mobile4').style.textDecoration = null
            document.getElementById('mobile5').style.textDecoration = null
        }
}

    if (goTo == 3) {
        sessionStorage.setItem('currentPage', goTo)
        document.title = 'NivedDoesArt | Webshop'

        if (document.getElementById('selectorArrow')) {
            document.getElementById('selectorArrow').style.transform = 'translateX(-35px)'
        }

        document.getElementById('content').style.transform = 'scale(95%)'
        document.getElementById('contentHolder').style.opacity = '0%'
        await new Promise(r => setTimeout(r, 300));
        document.getElementById('contentHolder').style.transform = 'translateX(-40%)'
        document.getElementById('content').style.height = webshopHeight
        console.log(webshopHeight)
        await new Promise(r => setTimeout(r, 400));
        document.getElementById('content').style.transform = 'scale(100%)'
        document.getElementById('contentHolder').style.opacity = '100%'

        if (document.getElementById('mobileMenuButton')) {
            document.getElementById('mobile1').style.textDecoration = null
            document.getElementById('mobile2').style.textDecoration = null
            document.getElementById('mobile3').style.textDecoration = 'underline'
            document.getElementById('mobile4').style.textDecoration = null
            document.getElementById('mobile5').style.textDecoration = null
        }
    }

    if (goTo == 4) {
        sessionStorage.setItem('currentPage', goTo)
        document.title = 'NivedDoesArt | Commissions'

        if (document.getElementById('selectorArrow')) {
            document.getElementById('selectorArrow').style.transform = 'translateX(90px)'
        }

        document.getElementById('content').style.transform = 'scale(95%)'
        document.getElementById('contentHolder').style.opacity = '0%'
        await new Promise(r => setTimeout(r, 300));
        document.getElementById('contentHolder').style.transform = 'translateX(-60%)'
        document.getElementById('content').style.height = commissionsHeight
        console.log(commissionsHeight)
        await new Promise(r => setTimeout(r, 400));
        document.getElementById('content').style.transform = 'scale(100%)'
        document.getElementById('contentHolder').style.opacity = '100%'

        if (document.getElementById('mobileMenuButton')) {
            document.getElementById('mobile1').style.textDecoration = null
            document.getElementById('mobile2').style.textDecoration = null
            document.getElementById('mobile3').style.textDecoration = null
            document.getElementById('mobile4').style.textDecoration = 'underline'
            document.getElementById('mobile5').style.textDecoration = null
        }
    }

    if (goTo == 5) {
        sessionStorage.setItem('currentPage', goTo)
        document.title = 'NivedDoesArt | Contact'

        if (document.getElementById('selectorArrow')) {
            document.getElementById('selectorArrow').style.transform = 'translateX(210px)'
        }

        document.getElementById('content').style.transform = 'scale(95%)'
        document.getElementById('contentHolder').style.opacity = '0%'
        await new Promise(r => setTimeout(r, 300));
        document.getElementById('contentHolder').style.transform = 'translateX(-80%)'
        document.getElementById('content').style.height = contactHeight
        console.log(contactHeight)
        await new Promise(r => setTimeout(r, 400));
        document.getElementById('content').style.transform = 'scale(100%)'
        document.getElementById('contentHolder').style.opacity = '100%'

        if (document.getElementById('mobileMenuButton')) {
            document.getElementById('mobile1').style.textDecoration = null
            document.getElementById('mobile2').style.textDecoration = null
            document.getElementById('mobile3').style.textDecoration = null
            document.getElementById('mobile4').style.textDecoration = null
            document.getElementById('mobile5').style.textDecoration = 'underline'
        }
    }
}





async function nivedEasteregg() {
    document.getElementById('galPrev').style.transform = 'scale(100%)'
    document.getElementById('galPrev').style.opacity = '100%'
    document.getElementById('prevImg').setAttribute('src', 'IMG/nived.gif')
    await new Promise(r => setTimeout(r, 400));
    document.getElementById('prevImg').style.opacity = '100%'
    document.getElementById('prevImg').style.transform = 'scale(90%) translateY(0px)'
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












// ONCE PAGE IS LOADED, EXECUTE SOME ESSENTIAL STUFF

window.onload = async function () {
    if (document.getElementById('header')) {
        document.getElementById('header').style.transform = 'translateY(0px)'
        document.getElementById('header').style.opacity = '100%'
    }

    await new Promise(r => setTimeout(r, 50));
    window.scrollTo(0, 0)
    if (sessionStorage.getItem('currentPage') == null) {
        nav(1)
    } else {
        nav(sessionStorage.getItem('currentPage'))
    }

    await new Promise(r => setTimeout(r, 950));
    document.getElementById('content').style.transform = 'translateY(0px)'
    document.getElementById('content').style.opacity = '100%'
}





// DETECTS IF WIDTH IS TOO SMALL, AND THAT MOBILE MODE SHOULD BE ENABLED

var mobileHasBeenToggled = 0

function mobileMode() {
    if (mobileHasBeenToggled == 0) {
        mobileHasBeenToggled = 1
        console.log('mobile')

        document.getElementById('header').style.position = 'fixed'
        document.getElementById('headerLeft').style.marginLeft = '5px'
        document.getElementById('headerMiddle').remove()
        document.getElementById('headerRight').remove()
        document.getElementById('mobileMenuButton').style.transform = 'scale(100%)'

        document.getElementById('content').style.paddingTop = '63px'
        document.getElementById('contentHolder').style.height = 'calc(100% - 63px)'
    }
}

if (window.innerWidth < 1080) {
    mobileMode()
}

window.onresize = function (event) {
    if (window.innerWidth < 1080) {
        mobileMode()
    }
};