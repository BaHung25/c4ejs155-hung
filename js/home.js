// home.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const carList = document.getElementById("car-list");
    const carItems = carList.getElementsByClassName("car"); // Select all car items

    // Add an event listener for input on the search field
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase(); // Get the search term and convert it to lowercase

        // Loop through all car items and filter based on the search term
        Array.from(carItems).forEach(car => {
            const carName = car.querySelector(".nameandtype p").innerText.toLowerCase(); // Get the car name
            if (carName.includes(searchTerm)) {
                car.style.display = ""; // Show the car if it matches the search term
            } else {
                car.style.display = "none"; // Hide the car if it does not match
            }
        });
    });
});