
var button = document.querySelector('.confirm')
var mBox = document.querySelector('.m-box')
var warning = document.querySelector('.warning')
var nameBox = document.querySelector('.name-box')
button.addEventListener('click', (e) => {
    if (mBox.value == '' || nameBox.value == '') {
        e.preventDefault()
        warning.classList.add('active')
    }
})
mBox.addEventListener('focus', () => {
    warning.classList.remove('active')
})
nameBox.addEventListener('focus', () => {
    warning.classList.remove('active')
})

var section = document.querySelector('section')
var sec_ul = section.querySelector('ul')
document.body.addEventListener('click', (e) => {
    if ( e.target.matches('.search') ) {
        section.classList.add('active')
        if ( sec_ul.childNodes.length == 1 ) {
            section.textContent = 'Message Box is empty :('
        }
    } else {
        section.classList.remove('active')
    }
})

var parent = document.querySelector('main ul')
parent.addEventListener('click', (e) => {
    var e = e.target
    if ( e.matches('.editor') ) {
        var message = e.parentNode.parentNode
        var content = message.querySelector('.m-content')
        var finish = message.querySelector('.finish')
        content.classList.remove('disabled')
        finish.classList.add('active')
        var len = content.value.length
        content.setSelectionRange(len, len) 
        content.focus()
    }
})
