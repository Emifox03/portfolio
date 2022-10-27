Window.alert(Panoli);

const canvas=document.getElementById('game'); 
const ctx=canvas.getContext('2d');


function drawGame() {
    clearScreen();
    
}


function clearScreen() {
    ctx.fillStyle= 'aquamarine'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)
    
}

drawGame();