let $ = function(el){
    let element = document.querySelector(el)
    return element
}

let $a = function(el){
    let element = document.querySelectorAll(el)
    return element
}

let createElement = function (el, className, text) {
    let element = document.createElement(el)
    if(className){
        element.setAttribute('class', className)
    }
    if(text){
        element.innerHTML = text
    }
    return element
}
