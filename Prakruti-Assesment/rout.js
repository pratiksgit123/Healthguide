document.addEventListener('DOMContentLoaded', function() {
    const createRoutineBtn = document.getElementById('create-routine-btn');
    const aiRoutineBtn = document.getElementById('ai-routine-btn');
    const routineBuilder = document.getElementById('routine-builder');
    const aiRoutine = document.getElementById('ai-routine');
    const aiRoutineList = document.getElementById('ai-routine-list');

    createRoutineBtn.addEventListener('click', function() {
        routineBuilder.style.display = 'block';
        aiRoutine.style.display = 'none';
    });

    aiRoutineBtn.addEventListener('click', function() {
        routineBuilder.style.display = 'none';
        aiRoutine.style.display = 'block';
    });

    // Function to add a new activity to the list
    function addActivity() {
        const activityList = document.getElementById('activity-list');
        const newActivity = document.createElement('div');
        newActivity.innerHTML = `
            <input type="text" class="activity-name" placeholder="Activity Name">
            <input type="text" class="start-time" placeholder="Start Time">
            <input type="text" class="end-time" placeholder="End Time">
            <button class="delete-activity-btn">Delete</button>
        `;
        activityList.appendChild(newActivity);
    }

    // Function to delete an activity from the list
    function deleteActivity(activity) {
        activity.parentNode.removeChild(activity);
    }

    // Event listeners for adding and deleting activities
    document.getElementById('add-activity-btn').addEventListener('click', addActivity);
    document.getElementById('activity-list').addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-activity-btn')) {
            deleteActivity(event.target.parentNode);
        }
    });

    // Function to save the routine
    function saveRoutine() {
        const activities = document.querySelectorAll('.activity-name');
        const startTimes = document.querySelectorAll('.start-time');
        const endTimes = document.querySelectorAll('.end-time');
        
        // Display the saved routine
        const myRoutineList = document.getElementById('my-routine');
        myRoutineList.innerHTML = ''; // Clear existing routine
        activities.forEach((activity, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${activity.value} - ${startTimes[index].value} to ${endTimes[index].value}`;
            myRoutineList.appendChild(listItem);
        });

        alert('Routine saved successfully!');
    }

    document.getElementById('save-routine-btn').addEventListener('click', saveRoutine);

    // Function to generate AI routine based on selected purpose
    function generateAIRoutine() {
        const purposeSelect = document.getElementById('purpose-select');
        const purpose = purposeSelect.value;
        const aiRoutineList = document.getElementById('ai-routine-list');
        aiRoutineList.innerHTML = ''; // Clear existing routine

        // Define detailed activities based on purpose
        const activitiesByPurpose = {
            weight_gain: [
                'Morning: Weightlifting (45 mins)',
                'Mid-Morning: High-Protein Snack',
                'Lunch: Balanced Meal with Carbs and Proteins',
                'Afternoon: Rest or Low-Intensity Exercise',
                'Evening: Protein Shake or Smoothie',
                'Night: Light Dinner with Healthy Fats'
            ],
            weight_loss: [
                'Morning: Cardio (30 mins)',
                'Mid-Morning: Low-Calorie Snack',
                'Lunch: Salad with Lean Protein',
                'Afternoon: Green Tea or Herbal Tea',
                'Evening: Light Dinner with Vegetables',
                'Night: Avoid Late-Night Snacking'
            ],
            strength_training: [
                'Morning: Strength Training (1 hour)',
                'Mid-Morning: Protein Shake',
                'Lunch: High-Protein Meal with Carbs',
                'Afternoon: Rest or Stretching',
                'Evening: Light Cardio or Yoga',
                'Night: Balanced Dinner with Fiber'
            ],
            cardio: [
                'Morning: Running or Cycling (45 mins)',
                'Mid-Morning: Hydration with Electrolytes',
                'Lunch: Balanced Meal with Complex Carbs',
                'Afternoon: Low-Impact Exercise or Rest',
                'Evening: Swimming or Dancing (30 mins)',
                'Night: Light Dinner with Lean Protein'
            ],
            flexibility: [
                'Morning: Yoga (1 hour)',
                'Mid-Morning: Healthy Breakfast with Fiber',
                'Lunch: Light Meal with Vegetables',
                'Afternoon: Stretching and Meditation',
                'Evening: Pilates or Tai Chi',
                'Night: Herbal Tea or Warm Milk'
            ],
            endurance: [
                'Morning: Long-Distance Running or Cycling (1 hour+)',
                'Mid-Morning: Rehydration with Electrolytes',
                'Lunch: High-Carb Meal with Protein',
                'Afternoon: Rest or Light Activity',
                'Evening: Swimming or Hiking (1 hour)',
                'Night: Balanced Dinner with Complex Carbs'
            ],
            muscle_building: [
                'Morning: Weightlifting (1 hour)',
                'Mid-Morning: Protein-Rich Snack',
                'Lunch: High-Protein Meal with Healthy Fats',
                'Afternoon: Rest or Light Cardio',
                'Evening: Protein Shake with Creatine',
                'Night: Dinner with Lean Protein and Complex Carbs'
            ],
            stress_relief: [
                'Morning: Meditation (30 mins)',
                'Mid-Morning: Herbal Tea or Green Tea',
                'Lunch: Balanced Meal with Omega-3 Fatty Acids',
                'Afternoon: Nature Walk or Relaxing Music',
                'Evening: Yoga or Deep Breathing Exercises',
                'Night: Light Dinner with Magnesium-Rich Foods'
            ],
            balance: [
                'Morning: Tai Chi or Qigong (30 mins)',
                'Mid-Morning: Balanced Breakfast with Protein',
                'Lunch: Balanced Meal with Whole Grains',
                'Afternoon: Mindful Walking or Stretching',
                'Evening: Pilates or Yoga',
                'Night: Dinner with Colorful Vegetables'
            ],
            general_fitness: [
                'Morning: Varied Exercises (1 hour)',
                'Mid-Morning: Hydration with Lemon Water',
                'Lunch: Balanced Meal with All Macronutrients',
                'Afternoon: Active Breaks or Stretching',
                'Evening: Fun Activity or Team Sport',
                'Night: Light Dinner with Slow-Digesting Protein'
            ],
        };

        // Generate routine based on purpose
        const purposeActivities = activitiesByPurpose[purpose];
        purposeActivities.forEach(activity => {
            const listItem = document.createElement('li');
            listItem.textContent = activity;
            aiRoutineList.appendChild(listItem);
        });
    }

    document.getElementById('generate-ai-routine-btn').addEventListener('click', generateAIRoutine);
});

