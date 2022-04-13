'use strict'

window.addEventListener('load', function () {
  const heroTitleLetters = document.querySelectorAll('.hero-title-letter');

  heroTitleLetters.forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.remove('hero-title__name__letter-hidden');
    }, i * 200);
  })
})



const socialNavigation = document.querySelector('.social-navigation__list');

socialNavigation.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('social-navigation__icon')) {
    const icon = e.target;
    icon.style.animation = 'shake 0.5s ease';
  } else if (e.target.classList.contains('social-navigation__icon__name')) {
    const icon = e.target.previousElementSibling;
    icon.style.animation = 'shake 0.5s ease';
  }
});
socialNavigation.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('social-navigation__icon')) {
    const icon = e.target;
    icon.style.animation = '';
  } else if (e.target.classList.contains('social-navigation__icon__name')) {
    const icon = e.target.previousElementSibling;
    icon.style.animation = '';
  }
});