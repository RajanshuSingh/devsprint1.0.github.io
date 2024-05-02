document.addEventListener("DOMContentLoaded", function() {
   
    const submitBtn1 = document.getElementById("submit1");
    const answerInput1 = document.getElementById("answer1");
    const result1 = document.getElementById("result1");
    
    submitBtn1.addEventListener("click", function() {
      const answer = answerInput1.value.trim();
      if (answer === "10") {
        result1.textContent = "Correct!";
        result1.style.color = "lightgreen";
      } else {
        result1.textContent = "Incorrect. Try again!";
        result1.style.color = "red";
      }
    });
  
    const submitBtn2 = document.getElementById("submit2");
    const answerInput2 = document.getElementById("answer2");
    const result2 = document.getElementById("result2");
  
    submitBtn2.addEventListener("click", function() {
      const answer = answerInput2.value.trim();
      if (answer === "120") {
        result2.textContent = "Correct!";
        result2.style.color = "lightgreen";
      } else {
        result2.textContent = "Incorrect. Try again!";
        result2.style.color = "red";
      }
    });
  });
  