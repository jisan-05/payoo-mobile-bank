/**
 * 1. add event listener to the add money button (form submit)
 * make sure ot prevent Default so that page doesn't relods
 * 2. get the money user wants to add 
 * also, get the pin number provided 
 * 3. verify the pin number allow to add the number to the account balance
 * 
 * 4. get the current balance 
 * 
 * 5. add money to be added with the current balance
 * 
 * 6. display/update the balance in the DOM/UI
 * 
 */


document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    
    const inputMoney = document.getElementById('input-add-money').value;
    const inputMoneyNumber = parseFloat(inputMoney);
    const inputPin = document.getElementById('input-pin-number').value;

    if(inputPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const updateBalance = inputMoneyNumber + balanceNumber;
        
        document.getElementById('account-balance').innerText = (updateBalance)
    }
    else{
        alert('Failed to add money')
    }
})