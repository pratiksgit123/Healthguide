document.addEventListener('DOMContentLoaded', function() {
    const lightThemeBtn = document.getElementById('lightTheme');
    const darkThemeBtn = document.getElementById('darkTheme');
    const notification = document.getElementById('notification');
    const addActivityBtn = document.getElementById('addActivity');
    const printRoutineBtn = document.getElementById('printRoutine');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const activityInput = document.getElementById('activity');
    const activitiesList = document.getElementById('activitiesList');

    // Theme selection functionality
    lightThemeBtn.addEventListener('click', function() {
        document.body.classList.remove('dark');
    });

    darkThemeBtn.addEventListener('click', function() {
        document.body.classList.add('dark');
    });

    // Add activity button click event
    addActivityBtn.addEventListener('click', function() {
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;
        const activity = activityInput.value;

        // Validation: Check if start time is before end time
        if (startTime >= endTime) {
            showNotification('error', 'Start time must be before end time.');
            return;
        }

        // Create new activity list item
        const activityItem = document.createElement('li');
        activityItem.classList.add('activityItem');
        activityItem.textContent = `${startTime} - ${endTime}: ${activity}`;

        // Add activity to routine list
        activitiesList.appendChild(activityItem);

        // Clear input fields
        startTimeInput.value = '';
        endTimeInput.value = '';
        activityInput.value = '';

        // Show success notification
        showNotification('success', 'Activity added successfully.');
    });

    // Print routine button click event
    printRoutineBtn.addEventListener('click', function() {
        window.print();
    });

    // Function to display notifications
    function showNotification(type, message) {
        const div = document.createElement('div');
        div.className = `notification ${type}`;
        div.textContent = message;
        notification.appendChild(div);

        // Remove notification after 3 seconds
        setTimeout(function() {
            div.remove();
        }, 3000);
    }
});
