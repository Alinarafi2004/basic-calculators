function Tip() {
    let BilAmount = document.getElementById("BilA").value;
    let TipPercentage = document.getElementById("TipA").value;
    let tip11 = BilAmount*TipPercentage/100;
    document.getElementById("tip1").innerHTML=("Your Tip is" + tip11);
    alert("Your Tip is" + tip11);
    console.log("Your Tip is" + tip11);
}
