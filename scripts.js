window.onload = function () {
    // additional task №1. Function to close an inactive submenu.
    function changeOpenMenu(classNameMenuItems, currentOpenItemMenu, listIndex = 2) {
        const menuItemsActive = document.querySelectorAll(classNameMenuItems);

        menuItemsActive.forEach(function (menuItem) {
            if(menuItem !== currentOpenItemMenu){
                menuItem.children[listIndex].classList.remove('open');
            }
        });
    }
    
    //Opening menu sections. Script for correct replacement hover effect on click for mobile devices regardless of screen width
    const isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
    };
    

    if(isMobile.any()){
        const arrow = document.querySelectorAll('.menu__arrow');

        document.querySelector('body').classList.add('touch-screen');

        arrow.forEach(arrow => {
            let subMenu = arrow.nextElementSibling;

            arrow.classList.add('show');

            arrow.addEventListener('click', function () {
                const currentOpenItemMenu = arrow.parentNode;

                subMenu.classList.toggle('open');
                arrow.classList.toggle('active');

                //implementation of the functionality of closing an inactive menu
                currentOpenItemMenu.classList.add('active');
                if(currentOpenItemMenu.parentNode.classList.contains('menu__list')){
                    changeOpenMenu('.menu__list>.active', currentOpenItemMenu);
                } else if(currentOpenItemMenu.parentNode.classList.contains('sub-menu__list-fitstLvl')){
                    changeOpenMenu('.sub-menu__list-fitstLvl>.active', currentOpenItemMenu);
                }

            })

        });
    } else {
        document.querySelector('body').classList.add('mouse');
    }

    //Opening adaptive menu
    const headerBurger = document.querySelector('.header-burger');
    const headerMenu = document.querySelector('.menu');

    headerBurger.addEventListener('click', function () {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        document.querySelector('body').classList.toggle('scroll-block');
    });

};