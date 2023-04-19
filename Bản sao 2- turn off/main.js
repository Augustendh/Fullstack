const turnLight = document.querySelector('.image'); 

turnLight.onclick = function () {
    if ( turnLight.alt === "turn-off") {
        turnLight.src = './image/turn_on.jpg';
        turnLight.setAttribute('alt', 'turn-on');
    }
    else { 
        turnLight.src = './image/turn_off.jpg';
        turnLight.setAttribute('alt','turn-off');
    }
}

alert('huy')

