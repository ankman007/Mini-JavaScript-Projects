function subscribe(){
    const buttonElement = document.querySelector('.subscribe-button');

    if(buttonElement.innerText === 'Subscribe')
        buttonElement.innerText = 'Subscribed';
    else
        buttonElement.innerText = 'Subscribe';
}
function handleCostKeydown(event){
    if (event.key === 'Enter'){
        calculateTotal();
    }
}
function calculateTotal(){
    const inputElement = document.querySelector('.cost-input');
    let cost = Number(inputElement.value);

    if (cost < 40) {
        // cost += 3;
        cost = cost + 10;
    }

    document.querySelector('.total-cost').innerHTML = `$${cost}`;
}