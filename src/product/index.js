/**
 * For Product page js
 */

console.log('Hello from Product folder')

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Split Type
  let typeSplit

  function runSplitType() {
    typeSplit = new SplitType('[text-split]', {
      types: 'lines, words, chars',
      tagName: 'span',
    })
  }

  runSplitType()

  //Run the code when window width changes
  let windowWidth = window.innerWidth
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth
      typeSplit.revert()
      runSplitType()
    }
  })

  // Navbar Interaction
  const navbarIx = () => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1 } })

    tl.from('.mono-path', { yPercent: 120 })
    tl.from('.text-path', { yPercent: 120, stagger: { amount: 0.4 } }, '<45%')
    tl.from('.mono-circle', { scale: 0, transformOrigin: '50% 50%' }, '<45%')
    tl.from(
      '.nav_link, .button.is-nav',
      {
        yPercent: -220,
        stagger: { amount: 0.4, from: 'end' },
      },
      0
    )

    let delay = tl.totalDuration()
    console.log(delay)
    return delay
  }

  let delayIx = navbarIx()

  // Hero section
  const sectionHero = (delayIx) => {
    const productTabs = gsap.timeline()

    productTabs
      .from('.product-hero_tabs-content', {
        opacity: 0,
        delay: delayIx / 4,
      })
      .from('.product-hero_tab-link', {
        opacity: 0,
        stagger: { amount: 0.5 },
        y: 40,
        ease: 'back.out',
      })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.product-hero_right',
        start: 'top 75%',
      },
    })

    tl.from(
      '.product-hero_right h1 .char',
      {
        opacity: 0,
        stagger: { amount: 0.7 },
        duration: 1,
        delay: delayIx / 4,
      },
      0
    )
      .from(
        '.product-hero_right p .line, .product-hero_right .heading-style-h3',
        {
          opacity: 0,
          x: '10%',
          stagger: { amount: 0.3 },
        },
        '<45%'
      )
      .from(
        '.product-hero_point-item, .product-hero_review-wrapper, .product-hero_right .button',
        {
          opacity: 0,
          x: '10%',
          stagger: { amount: 0.3 },
        },
        '<45%'
      )
  }

  sectionHero(delayIx)

  // Section Product features
  const sectionFeaturesIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.product-feature_block',
        start: 'top 75%',
      },
    })

    tl.from('.product-feature_block', {
      opacity: 0,
      y: 30,
      stagger: { amount: 0.6 },
      //   ease: 'power2.out',
    })
  }

  sectionFeaturesIx()

  // Section Quality
  const sectionQualityIx = () => {
    const sectionLayouts = document.querySelectorAll('.grid-col-2')

    sectionLayouts.forEach((section) => {
      const sectionImageWrapper = section.querySelector(
        '.product-quality_img-wrapper'
      )
      const sectionImage = section.querySelector('.product-quality_img')
      const sectionTitle = section.querySelectorAll(
        '.product-quality_content h2 .char'
      )
      const sectionPara = section.querySelectorAll(
        '.product-quality_content p .line'
      )
      const sectionPointers = section.querySelectorAll(
        '.product-quality_point-item'
      )

      if (sectionPointers) {
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      })

      tl.from(sectionImageWrapper, { opacity: 0 })
        .from(sectionImage, { scale: 1.5, duration: 1.5, ease: 'expo.out' }, 0)
        .from(
          sectionTitle,
          {
            opacity: 0,
            stagger: { amount: 1 },
          },
          0
        )
        .from(
          [sectionPara, sectionPointers],
          {
            opacity: 0,
            x: '10%',
            stagger: { amount: 0.3 },
          },
          '<45%'
        )
    })
  }

  sectionQualityIx()

  // Footer

  const footer = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer_energy-wrapper',
        start: 'top 75%',
      },
    })

    tl.from('.footer_energy-wrapper h2 .char', {
      opacity: 0,
      stagger: { amount: 0.7 },
      duration: 1,
    })
      .from(
        '.footer_energy-wrapper p .line',
        {
          opacity: 0,
          x: '10%',
          stagger: { amount: 0.3 },
        },
        '<45%'
      )
      .from('.footer_energy-lightbox-wrapper', { opacity: 0, y: 50 }, '<25%')
  }

  footer()
})
