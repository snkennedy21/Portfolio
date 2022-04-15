'use strict'

window.addEventListener('load', function () {
  const heroTitleLetters = document.querySelectorAll('.hero-title-letter');
  const socialNavigation = document.querySelector('.social-navigation');
  const siteNavigation = document.querySelector('.site-navigation');
  const heroTitleRole = document.querySelector('.hero-title__role');


  heroTitleLetters.forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.remove('hero-title__name__letter-hidden');
    }, i * 150);
  })

  setTimeout(() => {
    heroTitleRole.classList.remove('invisible');
    heroTitleRole.classList.remove('translate-left');
    heroTitleRole.style.animation = 'slideInBounce 0.7s ease'
  }, 1800);

  setTimeout(() => {
    socialNavigation.classList.remove('invisible');
    socialNavigation.style.animation = 'zoomFadeIn 1s ease'

    siteNavigation.classList.remove('invisible');
    siteNavigation.style.animation = 'zoomFadeIn 1s ease'

  }, 2200);
})


// This function adds/removes shake animation to social-navigation icons through event delegation on mouseover/mouseout
const socialNavigationIconAnimation = function () {
  const socialNavigation = document.querySelector('.social-navigation__list');

  // Add shake animation
  socialNavigation.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('social-navigation__icon')) {
      const icon = e.target;
      icon.style.animation = 'shake 0.5s ease';
    } else if (e.target.classList.contains('social-navigation__icon__name')) {
      const icon = e.target.previousElementSibling;
      icon.style.animation = 'shake 0.5s ease';
    }
  });

  // Remove shake animation
  socialNavigation.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('social-navigation__icon')) {
      const icon = e.target;
      icon.style.animation = '';
    } else if (e.target.classList.contains('social-navigation__icon__name')) {
      const icon = e.target.previousElementSibling;
      icon.style.animation = '';
    }
  });
}
socialNavigationIconAnimation();


const portfolioProjectHoverAnimationFunction = function () {

  const projectCards = document.querySelectorAll('.project-card');
  const projectCardIcons = document.querySelector('.project-card__icons');

  projectCards.forEach((card) => {
    const projectCardIconContainers = card.querySelectorAll('.project-card__icon-container')
    const projectCardImageWrap = card.querySelector('.project-card__image-wrap');
    card.addEventListener('mouseenter', function () {
      if (projectCardImageWrap.classList.contains('invisible')) {
        projectCardImageWrap.classList.remove('invisible');
        projectCardIconContainers.forEach((icon, i) => {
          setTimeout(() => {
            icon.style.animation = 'fadeInDown 1s ease';
          }, i * 200);
          setTimeout(() => {
            icon.classList.remove('invisible');
          }, 400);
        });
      }
    });
    card.addEventListener('mouseleave', function () {
      if (!projectCardImageWrap.classList.contains('invisible')) {
        projectCardImageWrap.classList.add('invisible');
      }
      projectCardIconContainers.forEach((icon) => {
        icon.style.animation = '';
        icon.classList.add('invisible');
      });
    });
  });
};
portfolioProjectHoverAnimationFunction();