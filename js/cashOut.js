document
    .getElementById("btn-cash-out-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const cashoutAmount = document.getElementById(
            "input-cash-out-money"
        ).value;
        const cash_outAmountNumber = parseFloat(cashoutAmount);
        const cash_outPin = document.getElementById("input-cash-out-pin").value;
        if (cash_outPin === "1234") {
            const currentBalance =
                document.getElementById("account-balance").innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const newBalance2 = currentBalanceNumber - cash_outAmountNumber;

            document.getElementById("account-balance").innerText = newBalance2;
        } else {
            alert("Failed to Cash out. Try again");
        }
    });
