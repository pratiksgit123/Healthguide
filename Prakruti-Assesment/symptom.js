document.addEventListener('DOMContentLoaded', function() {
    // Function to show a specific section and hide others
    function showSection(sectionId) {
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Navbar links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Event listener for navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1); // Remove '#' from href
            showSection(targetSectionId);

            // If the target section is user info, display it immediately
            if (targetSectionId === 'userInfo') {
                document.getElementById('userInfo').style.display = 'block';
            }
        });
    });

    // User info form
    const userInfoForm = document.getElementById('userInfoForm');
    const ageInput = document.getElementById('age');
    const sexSelect = document.getElementById('sex');

    // Symptom checkboxes
    const symptomCheckboxes = document.querySelectorAll('input[name="symptom"]');

    // Disable symptom checkboxes by default
    symptomCheckboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });
    
    // Event listener for user info form submission
    userInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const age = ageInput.value;
        const sex = sexSelect.value;

        if (age !== '' && sex !== '') {
            // Enable symptom checkboxes if age and sex are entered
            symptomCheckboxes.forEach(checkbox => {
                checkbox.disabled = false;
            });

            // Hide user info section and show symptoms section
            document.getElementById('userInfo').style.display = 'none';
            document.getElementById('symptoms').style.display = 'block';
        } else {
            // Display an alert if age and sex are not entered
            alert('Please enter your age and sex before proceeding.');
        }
    });

    // Event listener for symptom checkboxes
    symptomCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Display questions and treatment for selected symptom
                const symptom = this.value;
                displaySymptomInfo(symptom);
            } else {
                // Clear questions and treatment if checkbox is unchecked
                clearSymptomInfo();
            }
        });
    });

    // Function to display questions and treatment of selected symptom
    function displaySymptomInfo(symptom) {
        // Sample questions and treatment for each symptom
        const symptomQuestions = getSymptomQuestions(symptom);
        const symptomTreatment = getSymptomTreatment(symptom);

        // Display questions and treatment in respective containers
        document.getElementById('questionText').textContent = symptomQuestions;
        document.getElementById('treatmentText').textContent = symptomTreatment;
    }

    // Function to clear questions and treatment when no symptom is selected
    function clearSymptomInfo() {
        document.getElementById('questionText').textContent = '';
        document.getElementById('treatmentText').textContent = '';
    }

    // Function to retrieve questions for a symptom (sample data)
    function getSymptomQuestions(symptom) {
        const symptomQuestionsMap = {
            'Fever': 'Do you have a temperature above 100.4°F (38°C)?',
            'Headache': 'Are you experiencing pain or discomfort in the head or neck region?',
            'Cough': 'Are you experiencing a persistent cough?',
            'Sore Throat': 'Are you experiencing pain, scratchiness, or irritation of the throat?',
            'Fatigue': 'Are you experiencing tiredness or lack of energy?',
            'Muscle Pain': 'Are you experiencing pain or discomfort in any muscle or muscle group?',
            'Nausea': 'Are you experiencing a sensation of unease or discomfort in the stomach with an urge to vomit?',
            'Vomiting': 'Are you expelling the contents of the stomach through the mouth?',
            'Diarrhea': 'Are you experiencing frequent, loose, or watery stools?',
            'Shortness of Breath': 'Are you experiencing difficulty in breathing or feeling breathless?',
            'Chest Pain': 'Are you experiencing discomfort or pain in the chest?',
            'Dizziness': 'Are you experiencing a sensation of lightheadedness, unsteadiness, or spinning?',
            'Rash': 'Do you have any abnormal changes in the skin, such as redness, itching, or irritation?',
            'Abdominal Pain': 'Are you experiencing pain or discomfort in the abdomen?',
            'Loss of Appetite': 'Are you experiencing a decreased desire to eat?',
            // Add more symptom questions here
        };
        return symptomQuestionsMap[symptom] || 'No questions available for this symptom.';
    }

    // Function to retrieve treatment for a symptom (sample data)
    function getSymptomTreatment(symptom) {
        const symptomTreatmentMap = {
            'Fever': 'Treatment for fever includes rest, hydration, and over-the-counter fever reducers...',
            'Headache': 'Treatment for headache includes rest, hydration, and over-the-counter pain relievers...',
            'Cough': 'Treatment for cough depends on the underlying cause and may include cough suppressants...',
            'Sore Throat': 'Treatment for sore throat may include throat lozenges, gargling with warm salt water...',
            'Fatigue': 'Treatment for fatigue includes rest, proper nutrition, hydration, and stress management...',
            'Muscle Pain': 'Treatment for muscle pain may include rest, over-the-counter pain relievers...',
            'Nausea': 'Treatment for nausea may include dietary changes, medications to reduce nausea...',
            'Vomiting': 'Treatment for vomiting includes rest, hydration, and medications to control nausea and vomiting...',
            'Diarrhea': 'Treatment for diarrhea includes hydration, electrolyte replacement, and medications to control symptoms...',
            'Shortness of Breath': 'Treatment for shortness of breath depends on the underlying cause and may include medications...',
            'Chest Pain': 'Treatment for chest pain depends on the underlying cause and may include medications...',
            'Dizziness': 'Treatment for dizziness depends on the underlying cause and may include medications, balance exercises...',
            'Rash': 'Treatment for rash depends on the underlying cause and may include topical corticosteroids, antihistamines...',
            'Abdominal Pain': 'Treatment for abdominal pain depends on the underlying cause and may include medications, dietary changes...',
            'Loss of Appetite': 'Treatment for loss of appetite depends on the underlying cause and may include dietary modifications...',
            // Add more symptom treatment here
        };
        return symptomTreatmentMap[symptom] || 'No treatment available for this symptom.';
    }
});
