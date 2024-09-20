// Step - 1 : set event handler
document
    .getElementById("button-login")
    .addEventListener("click", function (event) {
        // Step 2 --> Prevent default behavior (Prevent reloading browser)
        event.preventDefault();
        console.log("Click Login");

        // Step 3 -- Get Phone Number and Pin Number
        const phoneNumber = document.getElementById("phone-number").value;
        const pinNumber = document.getElementById("pin-number").value;
        console.log(phoneNumber, pinNumber);

        // step 4 --> Bad way to validate \
        if (phoneNumber === "5" && pinNumber === "1234") {
            console.log("You are Logged in");
            window.location.href = "./home.html";
        } else {
            alert("Wrong phone number or Pin Number");
        }
    });
