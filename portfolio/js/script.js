const $loadingScreen = document.getElementsByClassName('loading-screen')[0]
const $letters = document.getElementsByClassName('letters')[0]
const $site = document.getElementsByClassName('site')[0]
const $logo = document.getElementsByClassName('logo')[0]
const letters = 'LINE BYLOV NØRREGAARD'.split('')
const charLib = 'LINE BYLOV NØRREGAARD0123456789'.split('')
const firstCharLib = '     26.07.2000 '.split('') 

const getEl = (tag, className, n = '') => {
  const $el = document.createElement(tag)
  if (className) $el.classList.add(className)
  $el.innerHTML = n
  return $el 
}

const $chars = letters.map((letter, j) => {
  const $charWrapper = getEl('DIV', 'char-wrapper')
  const $char = getEl('DIV', 'char')
  
  const random = Math.floor(Math.random() * 5) + 30
  
  for(let i = 0; i < random; i++) { 
    let random2 = charLib[Math.floor(Math.random() * charLib.length)]
    if (i === 0) random2 = firstCharLib[j]
    const $num = getEl('SPAN', 'number', random2) 
    $char.appendChild($num)
  }
      
  $char.appendChild(getEl('SPAN', 'letter', letter))
  $charWrapper.appendChild($char)
  $letters.appendChild($charWrapper)
  
  return $char
})

class Char {
  constructor($el, handleDone) {
    this.$el = $el
    this.handleDone = handleDone
    this.lastIndex = this.$el.children.length - 1
    this.height = this.$el.children[0].clientHeight
    this.index = 0
    
    this.first = true
    this.speed = Math.floor(Math.random() * 50) + 150
    
    this.next() 
  } 
  
  next() { 
    const speed = this.first ? Math.random() * 1000 + 2000 : this.speed
    this.first = false
    this.speed *= 0.95 
    
    this.timeout = setTimeout(() => {
      this.index += 1
      this.update()
      
      if (this.index === this.lastIndex) {
        this.handleDone()
        return 
      }
      
      this.next()
    }, speed)
  }
  
  update() {
    this.$el.style.transform = `translate3d(0,-${this.index * this.height}px,0)`
  }
}

setTimeout(() => {
  $loadingScreen.classList.add('is-loading')
}, 0)

const promises = $chars.map($char => {
  return new Promise((resolve, reject) => {
    new Char($char, resolve) 
  }) 
}) 

Promise.all(promises).then(() => {
  $letters.classList.add('is-done')
  $logo.classList.add('is-revealed')
  $site.classList.add('is-visible')
})