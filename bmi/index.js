function BMI() {
    let height = document.getElementById("hei1").value;
    let weight = document.getElementById("wei1").value;
    let bmi11 = weight/height**2;
    document.getElementById("bmi1").innerHTML=("Your BMI is" + bmi11 );
    alert("Your BMI is" + bmi11 );
    console.log("Your BMI is" + bmi11);
}