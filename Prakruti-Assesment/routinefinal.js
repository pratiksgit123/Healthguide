document.addEventListener("DOMContentLoaded", function() {
    const aiRoutineForm = document.getElementById("aiRoutineForm");
    const aiRoutineResult = document.getElementById("aiRoutineResult");

    // Define routines for different purposes
    const routines = {
        
            weightGain: {
                vegetarian: {
                    diet: [
                        "Morning: Protein-rich breakfast (e.g., scrambled tofu with spinach)",
                        "Mid-Morning: Snack with nuts and fruits",
                        "Lunch: Lentil soup with whole grain bread",
                        "Afternoon: Chickpea salad with veggies",
                        "Evening: Quinoa stir-fry with tofu and mixed vegetables"
                    ],
                    exercise: [
                        "Morning: Weightlifting (focus on compound exercises)",
                        "Afternoon: Bodyweight exercises (push-ups, squats, lunges)",
                        "Evening: Yoga or stretching"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Protein-rich breakfast (e.g., scrambled eggs with spinach)",
                        "Mid-Morning: Snack with nuts and fruits",
                        "Lunch: Grilled chicken with quinoa and vegetables",
                        "Afternoon: Protein shake with banana and peanut butter",
                        "Evening: Baked salmon with sweet potatoes and broccoli"
                    ],
                    exercise: [
                        "Morning: Weightlifting (focus on compound exercises)",
                        "Afternoon: Bodyweight exercises (push-ups, squats, lunges)",
                        "Evening: Yoga or stretching"
                    ]
                }
            },
            weightLoss: {
                vegetarian: {
                    diet: [
                        "Morning: Green smoothie with spinach, banana, and almond milk",
                        "Mid-Morning: Greek yogurt with berries",
                        "Lunch: Salad with mixed greens, chickpeas, and vinaigrette dressing",
                        "Afternoon: Apple slices with almond butter",
                        "Evening: Stir-fried vegetables with tofu"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: HIIT (High-Intensity Interval Training)",
                        "Evening: Pilates or aerobic exercise"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Green smoothie with spinach, banana, and almond milk",
                        "Mid-Morning: Greek yogurt with berries",
                        "Lunch: Grilled chicken salad with mixed greens and balsamic dressing",
                        "Afternoon: Apple slices with almond butter",
                        "Evening: Grilled fish with steamed vegetables"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: HIIT (High-Intensity Interval Training)",
                        "Evening: Pilates or aerobic exercise"
                    ]
                }
            },
            muscleGain: {
                vegetarian: {
                    diet: [
                        "Morning: Oatmeal with protein powder and berries",
                        "Mid-Morning: Cottage cheese with pineapple",
                        "Lunch: Lentil curry with brown rice",
                        "Afternoon: Greek yogurt with granola",
                        "Evening: Tofu stir-fry with quinoa and broccoli"
                    ],
                    exercise: [
                        "Morning: Weightlifting (focus on heavy compound exercises)",
                        "Afternoon: Bodyweight exercises (push-ups, pull-ups, dips)",
                        "Evening: Yoga or stretching"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Oatmeal with protein powder and berries",
                        "Mid-Morning: Cottage cheese with pineapple",
                        "Lunch: Grilled steak with sweet potato and mixed vegetables",
                        "Afternoon: Chicken breast with rice and beans",
                        "Evening: Beef stir-fry with brown rice and bell peppers"
                    ],
                    exercise: [
                        "Morning: Weightlifting (focus on heavy compound exercises)",
                        "Afternoon: Bodyweight exercises (push-ups, pull-ups, dips)",
                        "Evening: Yoga or stretching"
                    ]
                }
            },
            endurance: {
                vegetarian: {
                    diet: [
                        "Morning: Smoothie with kale, pineapple, and chia seeds",
                        "Mid-Morning: Banana with almond butter",
                        "Lunch: Whole wheat pasta with marinara sauce and lentils",
                        "Afternoon: Energy bar with nuts and dried fruits",
                        "Evening: Baked tofu with quinoa and steamed spinach"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: Long-distance running or cycling",
                        "Evening: Yoga or stretching"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Smoothie with kale, pineapple, and protein powder",
                        "Mid-Morning: Turkey sandwich on whole grain bread with avocado",
                        "Lunch: Grilled salmon with brown rice and steamed broccoli",
                        "Afternoon: Greek yogurt with honey and almonds",
                        "Evening: Chicken stir-fry with mixed vegetables and rice noodles"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: Long-distance running or cycling",
                        "Evening: Yoga or stretching"
                    ]
                }
            },
            flexibility: {
                vegetarian: {
                    diet: [
                        "Morning: Chia pudding with mixed berries",
                        "Mid-Morning: Apple slices with peanut butter",
                        "Lunch: Quinoa salad with black beans, corn, and avocado",
                        "Afternoon: Hummus with carrot sticks",
                        "Evening: Grilled tofu with sweet potato and sautéed kale"
                    ],
                    exercise: [
                        "Morning: Yoga (focus on flexibility poses)",
                        "Afternoon: Pilates or dance",
                        "Evening: Stretching or foam rolling"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Greek yogurt with granola and strawberries",
                        "Mid-Morning: Mixed nuts with dried fruits",
                        "Lunch: Shrimp and avocado salad with citrus dressing",
                        "Afternoon: Cottage cheese with pineapple",
                        "Evening: Baked chicken with quinoa and roasted vegetables"
                    ],
                    exercise: [
                        "Morning: Yoga (focus on flexibility poses)",
                        "Afternoon: Pilates or dance",
                        "Evening: Stretching or foam rolling"
                    ]
                }
            },
            cardiovascularHealth: {
                vegetarian: {
                    diet: [
                        "Morning: Acai bowl with granola and mixed fruits",
                        "Mid-Morning: Orange slices with almonds",
                        "Lunch: Spinach salad with grilled tofu and berries",
                        "Afternoon: Kale chips with hummus",
                        "Evening: Lentil soup with whole grain bread"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: HIIT (High-Intensity Interval Training)",
                        "Evening: Aerobic exercise or dance"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Scrambled eggs with spinach and whole grain toast",
                        "Mid-Morning: Trail mix with nuts and dried fruits",
                        "Lunch: Grilled chicken Caesar salad",
                        "Afternoon: Beef jerky with carrot sticks",
                        "Evening: Grilled fish tacos with mango salsa"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: HIIT (High-Intensity Interval Training)",
                        "Evening: Aerobic exercise or dance"
                    ]
                }
            },
            strengthTraining: {
                vegetarian: {
                    diet: [
                        "Morning: Protein pancakes with berries",
                        "Mid-Morning: Greek yogurt with walnuts",
                        "Lunch: Tofu and vegetable stir-fry with brown rice",
                        "Afternoon: Protein smoothie with almond milk and spinach",
                        "Evening: Quinoa salad with black beans and avocado"
                    ],
                    exercise: [
                        "Morning: Weightlifting (focus on heavy compound exercises)",
                        "Afternoon: Bodyweight exercises (push-ups, pull-ups, dips)",
                        "Evening: Yoga or stretching"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Scrambled eggs with spinach and whole grain toast",
                        "Mid-Morning: Cottage cheese with pineapple",
                        "Lunch: Grilled chicken breast with sweet potato and green beans",
                        "Afternoon: Turkey and cheese roll-ups with whole grain crackers",
                        "Evening: Baked salmon with asparagus and quinoa"
                    ],
                    exercise: [
                        "Morning: Weightlifting (focus on heavy compound exercises)",
                        "Afternoon: Bodyweight exercises (push-ups, pull-ups, dips)",
                        "Evening: Yoga or stretching"
                    ]
                }
            },
            toneUp: {
                vegetarian: {
                    diet: [
                        "Morning: Smoothie bowl with mixed berries and granola",
                        "Mid-Morning: Apple slices with almond butter",
                        "Lunch: Chickpea and avocado wrap with whole grain tortilla",
                        "Afternoon: Greek yogurt with honey and sliced almonds",
                        "Evening: Stir-fried tofu with mixed vegetables and brown rice"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: Strength training (focus on toning exercises)",
                        "Evening: Pilates or yoga"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Protein smoothie with banana and spinach",
                        "Mid-Morning: Turkey and cheese roll-ups with cucumber slices",
                        "Lunch: Grilled chicken Caesar salad with whole grain croutons",
                        "Afternoon: Cottage cheese with peach slices",
                        "Evening: Grilled steak with roasted potatoes and green beans"
                    ],
                    exercise: [
                        "Morning: Cardio (running, cycling, swimming)",
                        "Afternoon: Strength training (focus on toning exercises)",
                        "Evening: Pilates or yoga"
                    ]
                }
            },
            stressRelief: {
                vegetarian: {
                    diet: [
                        "Morning: Matcha latte with whole grain toast and avocado",
                        "Mid-Morning: Mixed nuts with dried fruits",
                        "Lunch: Lentil and vegetable curry with brown rice",
                        "Afternoon: Dark chocolate with almonds",
                        "Evening: Baked sweet potato with black beans and salsa"
                    ],
                    exercise: [
                        "Morning: Yoga or meditation",
                        "Afternoon: Nature walk or gentle stretching",
                        "Evening: Breathing exercises or restorative yoga"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Green tea with whole grain toast and almond butter",
                        "Mid-Morning: Cottage cheese with pineapple",
                        "Lunch: Chicken and vegetable stir-fry with quinoa",
                        "Afternoon: Turkey and cheese roll-ups with whole grain crackers",
                        "Evening: Grilled salmon with steamed broccoli and quinoa"
                    ],
                    exercise: [
                        "Morning: Yoga or meditation",
                        "Afternoon: Nature walk or gentle stretching",
                        "Evening: Breathing exercises or restorative yoga"
                    ]
                }
            },
            balance: {
                vegetarian: {
                    diet: [
                        "Morning: Smoothie with kale, pineapple, and ginger",
                        "Mid-Morning: Greek yogurt with berries and granola",
                        "Lunch: Spinach and feta omelette with whole grain toast",
                        "Afternoon: Hummus with carrot and celery sticks",
                        "Evening: Stuffed bell peppers with quinoa and black beans"
                    ],
                    exercise: [
                        "Morning: Yoga or Pilates",
                        "Afternoon: Tai chi or Qi Gong",
                        "Evening: Meditation or gentle stretching"
                    ]
                },
                nonvegetarian: {
                    diet: [
                        "Morning: Smoothie with spinach, banana, and protein powder",
                        "Mid-Morning: Turkey and cheese roll-ups with cucumber slices",
                        "Lunch: Grilled chicken salad with avocado and balsamic vinaigrette",
                        "Afternoon: Cottage cheese with pineapple",
                        "Evening: Baked fish with roasted vegetables and sweet potato"
                    ],
                    exercise: [
                        "Morning: Yoga or Pilates",
                        "Afternoon: Tai chi or Qi Gong",
                        "Evening: Meditation or gentle stretching"
                    ]
                }
            }
        };
        
        // Define routines for other purposes similarly...
    

    // Function to generate routine based on selected purpose and diet
    function generateRoutine(event) {
        event.preventDefault();
        const purpose = aiRoutineForm.purposeSelect.value;
        const diet = aiRoutineForm.dietSelect.value;
        const routine = routines[purpose][diet];
        if (routine) {
            aiRoutineResult.innerHTML = "<h3>Generated Routine:</h3>";
            const ul = document.createElement("ul");
            routine.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });
            aiRoutineResult.appendChild(ul);
        } else {
            aiRoutineResult.innerHTML = "<p>No routine available for selected purpose and diet.</p>";
        }
    }

    // Event listener for form submission
    aiRoutineForm.addEventListener("submit", generateRoutine);
});
