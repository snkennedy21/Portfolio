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

  projectCards.forEach((card) => {
    const projectCardIcons = card.querySelector('.project-card__icons');
    const projectCardIconContainers = card.querySelectorAll('.project-card__icon-container')
    const projectCardImageWrap = card.querySelector('.project-card__image-wrap');


    card.addEventListener('mouseenter', function () {
      if (projectCardImageWrap.classList.contains('invisible')) {
        projectCardImageWrap.classList.remove('invisible');
        projectCardIconContainers.forEach((icon, i) => {
          icon.style.animation = `fadeInDown 1s ease forwards ${i / 5}s`;
        });
      }
    });
    card.addEventListener('mouseleave', function () {
      if (!projectCardImageWrap.classList.contains('invisible')) {
        projectCardImageWrap.classList.add('invisible');
      }
      projectCardIconContainers.forEach((icon) => {
        icon.style.animation = '';
      });
    });
  });
};
portfolioProjectHoverAnimationFunction();



// This function handles revealing letters for section titles
const letterRevealingFunction = function () {
  const projectSectionHeadingLetters = document.querySelectorAll('.projects-section-heading__letter');

  const revealLetters = function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {} else if (entry.isIntersecting) {
      projectSectionHeadingLetters.forEach((letter, i) => {
        letter.style.animation = `bounceIn 1s ease forwards ${i / 8}s`;
      })
    }
  }

  const sectionHeadingObserver = new IntersectionObserver(revealLetters, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
  });

  sectionHeadingObserver.observe(projectSectionHeadingLetters[0]);
}
letterRevealingFunction();




const sectionRevealingFunction = function () {

  const projectsGrid = document.querySelector('.projects-grid');
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {

    const revealSection = function (entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log('intersection');
        card.style.animation = 'fadeInDown 1s ease forwards';
      }
    }

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.3,
    })

    sectionObserver.observe(card);
  })

}
sectionRevealingFunction();