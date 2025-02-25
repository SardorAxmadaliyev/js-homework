let elPoint = document.querySelectorAll('.point')
let elImageSlider = document.querySelectorAll('.imageSlider')
let elLeftBtn = document.getElementById('leftBtn')
let elRightBtn = document.getElementById('rightBtn')

elPoint[0].classList.add('activeImage')
elImageSlider[0].classList.add('activeImage')

let counter = 0;

for(let i=0; i<elPoint.length; i++){
  elPoint[i].addEventListener('click',()=>{
        for(let k = 0; k<elImageSlider.length; k++){
          elPoint[k].classList.remove('activeImage')
          elImageSlider[k].classList.remove('activeImage')
        }
        counter = i;
        elImageSlider[counter].classList.add('activeImage');
        elPoint[counter].classList.add('activeImage');
    })
}

elLeftBtn.addEventListener('click',()=>{
    for(let k = 0; k<elImageSlider.length; k++){
      elPoint[k].classList.remove('activeImage')
      elImageSlider[k].classList.remove('activeImage')
    }
    counter--
    if (counter <0){
        counter = elImageSlider.length-1
    }
    elImageSlider[counter].classList.add('activeImage');
    elPoint[counter].classList.add('activeImage');
})

elRightBtn.addEventListener('click',()=>{
    for(let k = 0; k<elImageSlider.length; k++){
      elPoint[k].classList.remove('activeImage')
      elImageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= elImageSlider.length){
        counter = 0
    }
    elImageSlider[counter].classList.add('activeImage');
    elPoint[counter].classList.add('activeImage');
})


function slowSlider () {
    for(let k = 0; k<elImageSlider.length; k++){
      elPoint[k].classList.remove('activeImage')
      elImageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= elImageSlider.length){
        counter = 0
    }
    elImageSlider[counter].classList.add('activeImage');
    elPoint[counter].classList.add('activeImage');
}

let elSecond = 1000*2
let elTimerImage = setInterval(()=>slowSlider(), elSecond)

let elBlockSlider = document.getElementById('blockSlider')
elBlockSlider.addEventListener('mouseover',()=>{
    clearInterval(elTimerImage)
})

elBlockSlider.addEventListener('mouseleave',()=>{
  elTimerImage = setInterval(()=>slowSlider(), elSecond)
})