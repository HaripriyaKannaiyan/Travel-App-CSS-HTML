/* booking section code*/ 

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Display confirmation message in an alert box
    const confirmationMessage = `
        Booking Confirmation
        Your booking has been confirmed!
    `;
    
    alert(confirmationMessage);
    
    // Clear form fields
    document.getElementById('bookingForm').reset();
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    // Clear the confirmation message and form fields
    alert('Booking has been cancelled.');
    document.getElementById('bookingForm').reset();
});

/* booking section code - ends*/ 