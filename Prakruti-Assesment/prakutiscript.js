const quizForm = document.getElementById('quizForm');
const questionContainer = document.getElementById('questionContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resultContainer = document.getElementById('resultContainer');

let currentQuestion = 0;
let answers = {};

// Function to display current question
function displayQuestion(index) {
    questionContainer.innerHTML = "";
    const question = questions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
        <h3>${question.question}</h3>
        <div>
            ${question.options.map((option, i) => `
                <input type="radio" id="option${i}" name="question${index}" value="${option}">
                <label for="option${i}">${option}</label><br>
            `).join('')}
        </div>
    `;
    questionContainer.appendChild(questionDiv);

    // Show or hide navigation buttons based on current question
    if (currentQuestion === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }
    if (currentQuestion === questions.length - 1) {
        nextBtn.innerHTML = 'Submit';
    } else {
        nextBtn.innerHTML = 'Next';
    }
}

// Function to go to the previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
    }
}

// Function to go to the next question or submit the form
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    } else {
        const formData = new FormData(quizForm);
        for (let pair of formData.entries()) {
            answers[pair[0]] = pair[1];
        }
        const prakruti = calculatePrakruti(answers);
        displayResult(prakruti); // Call displayResult function after form submission
    }
}

// Function to calculate Prakruti based on user's answers
function calculatePrakruti(answers) {
    // Initialize counts for Vata, Pitta, and Kapha
    let vataCount = 0;
    let pittaCount = 0;
    let kaphaCount = 0;

    // Loop through all answers
    for (let key in answers) {
        const answer = answers[key];
        // Assign scores based on answers
        switch (answer) {
            case "Slim":
            case "Low":
            case "Weak":
            case "Quick":
            case "Anxious":
            case "Light":
            case "Hard to gain/lose":
            case "Dry":
            case "Blurry":
            case "Cold":
            case "Forgetful":
            case "Reserved":
            case "Indoor":
            case "Disconnected":
            case "Alone":
                vataCount++;
                break;
            case "Medium":
            case "Moderate":
            case "Balanced":
            case "Moderate":
            case "Balanced":
            case "Moderate":
            case "Moderate":
            case "Normal":
            case "Normal":
            case "Normal":
            case "Average":
            case "Balanced":
            case "Both":
            case "Neutral":
            case "With Family/Friends":
                pittaCount++;
                break;
            case "Heavy":
            case "High":
            case "Strong":
            case "Slow":
            case "Calm":
            case "Deep":
            case "Easy to gain/lose":
            case "Oily":
            case "Sharp":
            case "Hot":
            case "Sharp":
            case "Outgoing":
            case "Outdoor":
            case "Connected":
            case "        In Nature":
                kaphaCount++;
                break;
        }
    }

    // Determine the dominant dosha based on counts
    if (vataCount > pittaCount && vataCount > kaphaCount) {
        return "Vata Prakruti";
    } else if (pittaCount > vataCount && pittaCount > kaphaCount) {
        return "Pitta Prakruti";
    } else if (kaphaCount > vataCount && kaphaCount > pittaCount) {
        return "Kapha Prakruti";
    } else {
        return "Tridoshic Prakruti";
    }
}

// Function to display the result
function displayResult(prakruti) {
    questionContainer.style.display = 'none';
    resultContainer.innerHTML = `<h2>Your Prakruti: ${prakruti}</h2>`;
    resultContainer.style.display = 'block'; // Ensure result container is visible
}
