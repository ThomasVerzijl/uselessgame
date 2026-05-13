
let outcome;
function random() {

    outcome = Math.round(Math.random() * chance);
    if (localStorage.getItem("chance") != null) {
        chance = localStorage.getItem("chance");
        document.getElementById("chance").innerHTML = "1/" + chance;
    }
    else {
        chance = 1
    }
    if (outcome == 1) {
        chance = chance * 2;
        document.getElementById("chance").innerHTML = "1/" + chance;
        // save chance to local stortage
        localStorage.setItem("chance", chance);

    }


}