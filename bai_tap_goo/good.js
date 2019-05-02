let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
button1.checked = false;
button2.checked = false;
button3.checked = false;

function click3() {
    if (button1.checked && button2.checked && button3.checked) {
        button2.checked = false;
    }
}

function click2() {
    if (button1.checked && button2.checked && button3.checked) {
        button1.checked = false;
    }
}function click1() {
    if (button1.checked && button2.checked && button3.checked) {
        button3.checked = false;
}


}
