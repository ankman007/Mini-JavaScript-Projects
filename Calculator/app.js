let inputField = document.getElementById('input-field');
let buttons = document.querySelectorAll('.logic-btn, .number, .arithmetic-operation');

buttons.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        const buttonText = btn.textContent;
        handleButtonPress(buttonText);
    });
});

function handleButtonPress(buttonText){
    switch(buttonText){
        case 'AC':
            inputField.value = '';
            break;
        case '+/-':
            toggleSign();
            break;
        case '%':
            calculatePercentage();
            break;
        case '=':
            calculateResult();
            break;
        default:
            inputField.value += buttonText; 
            break;
    }
}
function toggleSign(){
    const currentValue = parseFloat(inputField.value);
    inputField.value = -currentValue;
}
function calculatePercentage(){
    const currentValue = parseFloat(inputField.value);
    inputField.value = currentValue / 100;
}
function calculateResult(){
    let result;
    try{
        result = eval(inputField.value);
        if(Number.isNaN(result) || !Number.isFinite(result)){
            throw new Error('Invalid expression');
        }  
    } catch (error) {
        result = 'Error';
    }
    inputField.value = result;
}
