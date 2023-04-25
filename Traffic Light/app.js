const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const changeColor = () => {
    if (red.style.backgroundColor === 'red'){
        red.style.backgroundColor = 'white';
        yellow.style.backgroundColor = 'yellow';
    } else if (yellow.style.backgroundColor == 'yellow'){
        yellow.style.backgroundColor = 'white';
        green.style.backgroundColor = 'green';
    } else {
        green.style.backgroundColor = 'white';
        red.style.backgroundColor = 'red';
    }
};
const button = document.querySelector('.button');
button.addEventListener('click', changeColor);

function color(){
    let color = Math.floor(Math.random()*3)+1;
    if (color === 1)
        red.style.backgroundColor === 'red';
    else if (color === 2)
        yellow.style.backgroundColor === 'yellow';
    else if (color === 3)
        yellow.style.backgroundColor === 'green';

    return color;
}

