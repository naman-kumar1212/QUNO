function openModal(tableName) {
    // Get the modal
    var docummentdetails = document.querySelector(".studentdetails");
    var modal = document.getElementById("bookingModal");
    // Get the modal content
    var modalContent = modal.querySelector(".modal-content h2");
    // Set the modal content to the selected table nam
    modalContent.textContent = "Book Your Table: " + tableName;
    // Display the modal
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
document.querySelector(".close").onclick = function() {
    document.getElementById("bookingModal").style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// ... existing code ...

document.getElementById('nextButton').addEventListener('click', function() {
    const studentCount = document.getElementById('studentCount').value;
    const studentDetailsDiv = document.getElementById('studentDetails');
    
    // Check if a valid number of students is entered
    if (studentCount > 0) {
        // Show the student details section
        studentDetailsDiv.textContent = 'Number of Students: ' + studentCount;
        studentDetailsDiv.style.display = 'block';
        document.getElementById('bookingTime').style.display = 'block';
        // Optionally, you can add logic to dynamically create input fields for student details
    } else {
        alert('Please enter a valid number of students.');
    }
});

// ... existing code ...