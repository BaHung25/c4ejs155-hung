const pendingCars = [
    {
        id: 1,
        model: "Nissan GT-R",
        pricePerDay: 80,
        status: "Pending"
    },
    {
        id: 2,
        model: "Koenigsegg",
        pricePerDay: 99,
        status: "Pending"
    },
    {
        id: 3,
        model: "Rolls Royce",
        pricePerDay: 96,
        status: "Pending"
    }
];

// Function to display pending rental cars
function displayPendingCars() {
    const pendingCarList = document.getElementById("pending-car-list");
    pendingCarList.innerHTML = ""; // Clear existing content

    pendingCars.forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car-item");
        carDiv.innerHTML = `
            <p><strong>Model:</strong> ${car.model}</p>
            <p><strong>Price per Day:</strong> $${car.pricePerDay}</p>
            <p><strong>Status:</strong> ${car.status}</p>
            <button onclick="approveCar(${car.id})">Approve</button>
            <button onclick="rejectCar(${car.id})">Reject</button>
            <hr>
        `;
        pendingCarList.appendChild(carDiv);
    });
}

// Function to approve a car
function approveCar(carId) {
    const car = pendingCars.find(c => c.id === carId);
    if (car) {
        car.status = "Approved"; // Mark the car as approved
        alert(`The ${car.model} has been approved for rental.`);
        displayPendingCars(); // Refresh the displayed cars
    }
}

// Function to reject a car
function rejectCar(carId) {
    const carIndex = pendingCars.findIndex(c => c.id === carId);
    if (carIndex !== -1) {
        pendingCars.splice(carIndex, 1); // Remove the car from the array
        alert(`The ${pendingCars[carIndex].model} has been rejected.`);
        displayPendingCars(); // Refresh the displayed cars
    }
}

// Initial display of pending cars
displayPendingCars();