
let outcome;
let time_since_last_upgrade = 0;
function random() {

    outcome = Math.round(Math.random() * chance);
    if (localStorage.getItem("chance") != null) {
        chance = localStorage.getItem("chance");
        document.getElementById("chance").innerHTML = "1/" + chance;
        document.getElementById("timessincelastupgrade").innerHTML = "Times since last upgrade: " + localStorage.getItem("time_since_last_upgrade");
    }
    else {
        chance = 1

    }
    if (outcome == 1) {
        chance = chance * 2;
        time_since_last_upgrade = 0;
        document.getElementById("chance").innerHTML = "1/" + chance;
        // save chance to local stortage
        localStorage.setItem("chance", chance);

    }
    else {
        time_since_last_upgrade = time_since_last_upgrade + 1;
        document.getElementById("timessincelastupgrade").innerHTML = "Times since last upgrade: " + time_since_last_upgrade;
        localStorage.setItem("time_since_last_upgrade", time_since_last_upgrade);
    }


}