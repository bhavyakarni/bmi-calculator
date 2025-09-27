function calculateBMI() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (name === "" || age === "" || gender === "" || height === "" || weight === "") {
        document.getElementById("result").innerHTML = "⚠️ Please fill all fields.";
        document.getElementById("result").className = "";
        return;
    }

    height = height / 100; // convert cm to meters
    let bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    let recommendation = "";
    let resultClass = "";

    if (bmi < 18.5) {
        category = "Underweight";
        recommendation = "🍲 Eat calorie-rich foods like nuts, dairy, rice, potatoes, and lean proteins. Avoid skipping meals.";
        resultClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        recommendation = "✅ Your weight is healthy. Maintain balance with fruits, vegetables, whole grains, and regular exercise.";
        resultClass = "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        recommendation = "🚫 Avoid sugary drinks, fried foods, junk food, and excess carbs. Focus on vegetables, lean protein, and exercise.";
        resultClass = "overweight";
    } else {
        category = "Obese";
        recommendation = "⚠️ Reduce oily and processed foods. Consult a doctor/nutritionist for a safe weight-loss plan.";
        resultClass = "obese";
    }

    // Extra health note by gender
    let note = "";
    if (gender === "male") {
        note = "⚡ Men usually have more muscle mass, so BMI may slightly overestimate body fat.";
    } else if (gender === "female") {
        note = "💡 Women naturally have more body fat, so BMI may underestimate health risks.";
    }

    let resultBox = document.getElementById("result");
    resultBox.className = resultClass; // apply color class
    resultBox.innerHTML = 
        `👤 Name: ${name} <br> 🎂 Age: ${age} <br> 🚻 Gender: ${gender} <br><br> 
         📊 Your BMI is <b>${bmi}</b> (${category}) <br><br>
         🍎 Recommendation: ${recommendation} <br><br>
         ${note}`;
}
