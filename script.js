import people from '/data.js'

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const container = document.querySelector('.slide-container')

container.innerHTML= people.map((person, idx)=>{
    const {img, name, job, text} = person;
    let position = 'next'
    if(idx === 0){
        position='active'
    }
    if(idx === people.length-1){
        position='last'
    }
    return`
    <article class="slide ${position}">
        <img src="${img}" class="img" alt="${name}">
        <h3>${name}</h3>
        <h4>${job}</h4>
        <p class="text">${text}</p>
        <i class="fas fa-quote-right"></i>
    </article>`
}).join('')

const startSlider = type =>{
    const active = document.querySelector('.active')
    const last = document.querySelector('.last')
    let next = active.nextElementSibling
    if(!next){
        next=container.firstElementChild
    }
    active.classList.remove('active')
    last.classList.remove('last')
    next.classList.remove('next')

    if(type === 'prev'){
        active.classList.add('next')
        last.classList.add('active')
        next = last.previousElementSibling
        if(!next){
            next = container.lastElementChild
        }
        next.classList.remove('next')
        next.classList.add('last')
        return
    }

    active.classList.add('last')
    last.classList.add('next')
    next.classList.add('active')
}
next.addEventListener('click', ()=>{
    startSlider()
})
prev.addEventListener('click', ()=>{
    startSlider('prev')
})