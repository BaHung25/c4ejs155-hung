// payment.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const rentNowButton = document.querySelector(".confirmation button");
    
    // Billing information inputs
    const nameInput = document.querySelector("input[placeholder='Your Name']");
    const phoneInput = document.querySelector("input[placeholder='Phone Number']");
    const addressInput = document.querySelector("input[placeholder='Address']");
    const townInput = document.querySelector("input[placeholder='Town/City']");

    // Payment information inputs
    const cardNumberInput = document.querySelector(".cardnumber input");
    const expirationInput = document.querySelector(".exprationdate input");
    const cardHolderInput = document.querySelector(".cardholder input");
    const cvcInput = document.querySelector(".cvc input");

    // Pickup and Drop-off fields
    const pickupLocationInput = document.querySelectorAll('input[placeholder="Select your city"]')[0];
    const pickupDateInput = document.querySelectorAll('input[placeholder="Select your date"]')[0];
    const pickupTimeInput = document.querySelectorAll('input[placeholder="Select your time"]')[0];

    const dropoffLocationInput = document.querySelectorAll('input[placeholder="Select your city"]')[1];
    const dropoffDateInput = document.querySelectorAll('input[placeholder="Select your date"]')[1];
    const dropoffTimeInput = document.querySelectorAll('input[placeholder="Select your time"]')[1];

    // Checkboxes for terms and conditions
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    
    // Payment methods
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]'); // Select payment method radio buttons


    // Function to validate inputs
    function validateInputs() {
        let isValid = true;
        let errorMsg = '';

        // Validate billing information
        if (!nameInput.value.trim() || !phoneInput.value.trim() || !addressInput.value.trim() || !townInput.value.trim()) {
            isValid = false;
            errorMsg += "Please fill in all billing information.\n";
        }

        // Validate Pickup Information
        if (!pickupLocationInput.value.trim() || !pickupDateInput.value.trim() || !pickupTimeInput.value.trim()) {
            isValid = false;
            errorMsg += "Please fill in all pickup information.\n";
        }

        // Validate Drop-off Information
        if (!dropoffLocationInput.value.trim() || !dropoffDateInput.value.trim() || !dropoffTimeInput.value.trim()) {
            isValid = false;
            errorMsg += "Please fill in all drop-off information.\n";
        }

        // Validate selected payment method
        const selectedPaymentMethod = Array.from(paymentMethods).find(method => method.checked);
        if (!selectedPaymentMethod) {
            isValid = false;
            errorMsg += "Please select a payment method.\n";
        } else {
            const paymentMethodValue = selectedPaymentMethod.value;

            // Validate credit card inputs if credit card method is selected
            if (paymentMethodValue === 'credit') {
                if (!cardNumberInput.value.trim() || !expirationInput.value.trim() || !cardHolderInput.value.trim() || !cvcInput.value.trim()) {
                    isValid = false;
                    errorMsg += "Please fill in all credit card details.\n";
                }   else if (paymentMethodValue === 'paypal') {
                    // Placeholder for PayPal specific validation (if needed)
                    // You can add checks for PayPal email or account details here.
                } else if (paymentMethodValue === 'bitcoin') {
                    // Placeholder for Bitcoin specific validation (if needed)
                    // You can add checks for Bitcoin wallet address here.
                }
            }
            // Add specific validations for other payment methods here if needed (e.g., PayPal, Bitcoin)
        }

        // Validate terms and conditions
        if (![...checkboxes].some(checkbox => checkbox.checked)) {
            isValid = false;
            errorMsg += "You must agree to the terms and conditions.\n";
        }

        if (!isValid) {
            alert("Bạn hãy điền đầy đủ thông tin"); // Show aggregated error messages
        }

        return isValid;
    }

    // Add event listener to the Rent Now button
    rentNowButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default form submission

        if (validateInputs()) {
            alert("Payment Successful! Thank you for your rental.");
            // Here you can add further actions like sending data to the server
            // e.g., window.location.href = "homecarrent.html"; // Redirect to home
        }
    });
});