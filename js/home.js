// add money to the account

// step 1 : add an event handler to the add money btn inside the form
document
    .getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        // prevent page reload after form submit
        event.preventDefault();

        // step 2-- > Get money to be added ot the account
        const addMoneyInput = document.getElementById("input-add-money").value;
        console.log(addMoneyInput);

        // get pin Number
        const pinNumberInput =
            document.getElementById("input-pin-number").value;
        console.log(pinNumberInput);

        // step 3 --> Verify pin number
        // Wrong way to validate pin number cheak
        if (pinNumberInput === "1234") {
            // step 4 --> Get the current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance)

            // step - 5 : add addMoneyInput with balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance)


            //step 6 Update the balance in the UI/ design
            document.getElementById('account-balance').innerText = newBalance;

        } else {
            alert("failed to add money ! please try again");
        }
    });
