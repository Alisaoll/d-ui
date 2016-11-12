let startX = 0
let tempMoved = 0
let moved = 0
let activeDom = $('.d-tab-scroll ul li')
const ulDom = $('.d-tab-scroll ul')
const tabWrapDom = $('.d-tab-scroll')
const tabWrapWidth = tabWrapDom.getBoundingClientRect().width
const tabWidth = ulDom.getBoundingClientRect().width
const availTabWidth = tabWidth - tabWrapWidth

function $(selector) {
  return document.querySelector(selector)
}

document.addEventListener('DOMContentLoaded', function() {
  ulDom.addEventListener('touchstart', onTabTouchStart)
  ulDom.addEventListener('touchmove', onTabTouchMove)
  ulDom.addEventListener('touchend', onTabTouchEnd)
  tabWrapDom.addEventListener('click', onClickTabLi)
})

function onTabTouchStart(e) {
  startX = e.touches[0].clientX
  setTransition('none')
}

function onTabTouchMove(e) {
  const moveDistance = e.touches[0].clientX - startX
  const distance = moved + moveDistance
  tempMoved = distance
  setTranslateX(tempMoved)
}

function onTabTouchEnd(e) {
  moved = tempMoved
  if (moved > 0) {
    setTransition('all 0.3s ease')
    setTranslateX(0)
    moved = 0
  }
  if (moved < -availTabWidth) {
    setTransition('all 0.3s ease')
    setTranslateX(-availTabWidth)
    moved = -availTabWidth
  }
}

function setTranslateX(num) {
  ulDom.style.transform = `translate3d(${num}px, 0, 0)`
  ulDom.style.webkitTransform = `translate3d(${num}px, 0, 0)`
}

function setTransition(opt) {
  ulDom.style.transition = opt
  ulDom.style.webkitTransition = opt
}

function onClickTabLi(e) {
  const targetDom = e.target
  activeDom.classList.remove('active')
  targetDom.classList.add('active')
  activeDom = targetDom
}
