/**
 * For Shop page js
 */

console.log('Hello from Shop folder')

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
    const tl = gsap.timeline()

    tl.from('.section_shop-hero h1 .char', {
      opacity: 0,
      stagger: { amount: 0.7 },
    }).from(
      '.shop-hero_grid .product_item',
      { opacity: 0, y: 30, stagger: 0.3 },
      '<45%'
    )
  }

  sectionHero(delayIx)

  // Section product

  const sectionProductIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_product',
        start: 'top 65%',
      },
    })

    tl.from('.section_product h2', { opacity: 0, y: 30 })
      .from('.section_product p', { opacity: 0, y: 30 }, '<45%')
      .from(
        '.product_purchase .heading-style-h3',
        { opacity: 0, y: 30 },
        '<45%'
      )
      .from('.product_purchase .button', { opacity: 0, y: 30 }, '<45%')
      .from('.product_img-wrapper', { opacity: 0, duration: 1 })
  }

  sectionProductIx()

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
