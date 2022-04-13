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