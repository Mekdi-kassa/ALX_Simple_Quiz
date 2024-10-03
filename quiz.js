document.getElementById('submit-answer').addEventListener('click', checkAnswer);
function checkAnswer(){
    let correctAnswer="4"
    const radios=document.getElementsByName('quiz')
    for(let i=0;i<radios.length;i++){
        if(radios[i].checked==correctAnswer){
            document.getElementById('feedback').innerText="Correct! Well done";
        }
        else{
            document.getElementById('feedback').innerText="That's incorrect. Try again!"
        }
    }
    
}
