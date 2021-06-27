let input = window.prompt("Please enter an integer number that is higher than 0: ");
let btn, n, winningButton;
if (input != null) {
    n = parseInt(input);
}
if (Number.isInteger(n) && n > 2) {
    createButtons(n);
    winningButton = (Math.floor(Math.random()* n) + 1);
}
else {
    alert("Input error! Please reload the page and enter an integer number that is higher than 2.")
    console.log(n);
    console.log(Number.isInteger(n));
}

function createButtons(n) {
    for (let i = 0; i < n; ++i) {
        btn = document.createElement("button");
        btn.innerHTML = i + 1;
        btn.id = (i + 1).toString();
        document.body.appendChild(btn);
        btn.setAttribute("onClick", "reply_click(this.id)");
    }
}
function reply_click(clicked_id){
    console.log(winningButton);
    console.log(clicked_id);

    if (clicked_id == winningButton) {
        alert("Congratulations, you've guessed the button.");
    }
    else {
        alert("You didn't guess the button.");
    }
}