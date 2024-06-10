/**
 * This is the individual file for a webflow page.
 * For Home page js
 */

console.log('Hello from Home folder')

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

    tl.from('.section_home-hero h1 .char', {
      opacity: 0,
      stagger: { amount: 0.7 },
      delay: delayIx / 4,
      duration: 1,
    })
      .from(
        '.home-hero_content-wrapper p .line',
        {
          opacity: 0,
          x: '10%',
          stagger: { amount: 0.3 },
        },
        '<45%'
      )
      .from(
        '.home-hero_content-wrapper .button',
        { opacity: 0, x: '10%' },
        '<45%'
      )
      .from('.home-hero_logo-item', { opacity: 0, stagger: { amount: 0.5 } })
  }

  sectionHero(delayIx)

  // Section 2nd fold
  const sectionSecondFoldIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-fuel_wrapper',
        start: 'top 75%',
      },
    })

    tl.from('.home-fuel_wrapper .home-fuel_img-wrapper', { opacity: 0 })
      .from(
        '.home-fuel_wrapper .home-fuel_img-wrapper img',
        { scale: 1.5, duration: 1.5, ease: 'expo.out' },
        0
      )
      .from(
        '.home-fuel_content h2 .char',
        {
          opacity: 0,
          stagger: { amount: 1 },
        },
        0
      )
      .from(
        '.home-fuel_content p .line, .home-fuel_point-item',
        {
          opacity: 0,
          x: '10%',
          stagger: { amount: 0.3 },
        },
        '<45%'
      )
  }

  sectionSecondFoldIx()

  // Science
  const sectionScienceIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-science_header-wrapper',
        start: 'top 75%',
      },
    })

    tl.from('.home-science_wrapper h2 .char', {
      opacity: 0,
      stagger: { amount: 0.7 },
      duration: 1,
    })

    const productTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-science_grid',
        start: 'top 75%',
      },
    })

    productTl.from('.home-science_grid .product_item', {
      opacity: 0,
      y: 30,
      stagger: 0.3,
    })
  }

  sectionScienceIx()

  // Section Performance
  const sectionPerformanceIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-performance_header-wrapper',
        start: 'top 75%',
      },
    })

    tl.from('.home-performance_para-wrapper p .line', {
      opacity: 0,
      x: '10%',
      stagger: { amount: 0.3 },
    })
    tl.from(
      '.home-performance_header-wrapper h2 .char',
      {
        opacity: 0,
        stagger: { amount: 0.7 },
        duration: 1,
      },
      '45%'
    )
  }

  sectionPerformanceIx()

  // Section Combo

  const sectionComboIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_home-combo',
        start: 'top 65%',
      },
    })

    tl.from('.section_home-combo h2', { opacity: 0, y: 30 }).from(
      '.section_home-combo .product_item',
      { opacity: 0, y: 30, stagger: 0.3 }
    )
  }

  sectionComboIx()

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
