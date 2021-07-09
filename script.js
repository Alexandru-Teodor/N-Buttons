let input = undefined, btn, n, winningButton;

document.getElementById("input-id").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("input-btn").click();
    }
});

function getUserInput() {
    input = document.getElementById("input-id").value;
    n = parseInt(input);
    if (Number.isInteger(n) && n > 2) {
        createButtons(n);
        document.getElementById("initial").classList.add("hide");
        document.getElementById("box").classList.remove("hide");
        document.getElementById("box").classList.add("container");
        document.getElementById("guess-msg").classList.remove("hide");
        winningButton = (Math.floor(Math.random()* n) + 1);
    }
    else {
        document.getElementById("initial-msg").innerHTML =
             "Input error! Please enter an integer number that is higher than 2."
        document.getElementById("initial-msg").classList.add("pulsating");
    }
}

function createButtons(n) {
    let nButtons = Array.from(Array(n).keys()).map(i => (
        `<button
            id = "${i + 1}"
            class = "buttons"
            onclick = "reply_click(this.id)"
        >
            ${i + 1}
        </button>
        `
    )).join("");
    document.getElementById("box").innerHTML = nButtons;
}

function reply_click(clicked_id){
    if (clicked_id == winningButton) {
        document.getElementById("guess-msg").classList.add("hide");
        document.body.style.backgroundColor = "hsl(145, 100%, 20%)";
        document.getElementById(clicked_id).classList.add("correct");
        document.getElementById(clicked_id).classList.add("winner");
        document.getElementById("again").classList.add("again-anim");
        document.getElementById("again").classList.remove("hide");
        disableBtns();
    }
    else {
        document.getElementById(clicked_id).classList.add("wrong");
        document.getElementById("not-yet-guessed").classList.remove("hide");
        document.getElementById("not-yet-guessed").classList.add("fadeInAndOut");
        document.getElementById("guess-msg").classList.add("fadeOutAndIn");
        setTimeout (function() {
            document.getElementById("not-yet-guessed").classList.remove("fadeInAndOut");
            document.getElementById("not-yet-guessed").classList.add("hide");
            document.getElementById("guess-msg").classList.remove("fadeOutAndIn");
        }, 1400);
    }
}
function disableBtns() {
    const btns = document.getElementsByClassName("buttons");
    for (let i = 0; i < btns.length; ++i) {
        btns[i].disabled = true;
    }
}
function ans_click(clicked_id) {
    if (clicked_id == "yes") {
        location.reload();
    }
    else {
        document.getElementById("box").style.display = "none";
        document.getElementById("again").style.display = "none";
        document.getElementById("endGame").className += "end-msg-style";
        document.getElementById("endGame").style.display = "inline";
    }
}