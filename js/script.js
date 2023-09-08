
// window.onload = function calculateLove(){
//     let button = document.getElementById("calculate");
//     button.addEventListener("click", calculateLove());
// }

function calculateLove(){
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName != "" && crushName != ""){
        let percentage = Math.floor(Math.random() * 100) + 1;
        document.getElementById("result-message").innerText = yourName + " and " +crushName + "'s chance of love: "
        document.getElementById("result-percentage").innerText = percentage.toString() + "%"
    }
}