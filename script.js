
let number = 0;
let circle = document.getElementsByClassName('seven-boom-circle')[0];
let innerCircleText =  document.getElementById('number-or-boom');
innerCircleText.innerText = 0;
circle.append(innerCircleText)
circle.addEventListener("click",()=>{
    number++;
    if(isSevenBoom(number)){
        innerCircleText.innerText = 'Boom';
    }else{
        innerCircleText.innerText = number;
    }
})
function isSevenBoom(number){
    if(number%7===0)return true;
    let temp = number;
    while(temp>0){
        if(temp%10 ===7)return true;
        temp/=10;
    }
    return false;
}