        document.getElementById('submitBtn').addEventListener('click', checkAnswer);

        function checkAnswer() {
            let correctAnswer = "4";
            // Use querySelector to get the checked radio button
            const checkedRadio = document.querySelector('input[name="quiz"]:checked');
            
            if (checkedRadio) {
                // Retrieve the user's answer from the checked radio button
                let userAnswer = checkedRadio.value;

                // Check if the user's answer is correct
                if (userAnswer === correctAnswer) {
                    document.getElementById('feedback').innerText = "Correct! Well done.";
                } else {
                    document.getElementById('feedback').innerText = "That's incorrect. Try again!";
                }
            } else {
                document.getElementById('feedback').innerText = "Please select an answer.";
            }
        }
