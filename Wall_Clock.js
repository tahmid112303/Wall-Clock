const hourHand=document.querySelector('.hour')
const minuteHand=document.querySelector('.minute')
const secondHand=document.querySelector('.second')

function clockTick(){
    let date=new Date()
    let second=date.getSeconds()/60
    let minute=(second+date.getMinutes())/60
    let hour=(minute+date.getHours())/12

    rotateClockHand(hourHand, hour)
    rotateClockHand(minuteHand, minute)
    rotateClockHand(secondHand, second)
    
}

function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate',rotation*360)

}

setInterval(clockTick,1000)