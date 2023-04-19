let number = document.getElementById('number');
const savedNum = document.getElementById('saved-number').innerText;
let num = 0;

function decrease (){
    if (num <= 0){// ở đây em có 1 vấn đề là nếu k đặt dk num < 0 thì khi click decrease sẽ ra ngay num = -1. 

        return num;
    } {
        num --;
        number.innerText = num;
    }   
};


function increase (){
    num ++; 
    number.innerText = num;
} ;



function save (){ 
    savedNum =  ` Save Numbers: ${num}`
}











// const counter = function () {
//    decrease.onclick = function () {

    
//    }
// }