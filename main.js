window.addEventListener('scroll', onScroll)

onScroll()



function onScroll(){
    showBackToTopButtonOnScroll()
    showNavOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight/2
    
    const sectionTop = section.offsetTop

    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedLine = targetLine >= sectionTop
   
    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) 

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if(scrollY > 0){
        navigationTop.classList.add('scroll')
    }else{
        navigationTop.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 100){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }

}


function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
}).reveal(`
    #home, 
    #home img, 
    #home .stats,
    #services
    #services .card
    #about
    #about header
    #about .content`);


