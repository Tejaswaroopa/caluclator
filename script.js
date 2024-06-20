window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });

    var calc = document.getElementById("Button=");
    calc.addEventListener("click", calculate);

    var C = document.getElementById("ButtonC");
    C.addEventListener("click", erase);

    function buttonClick(buttonId) {
        if (buttonId !== "ButtonC" && buttonId !== "Button=") {
            var button = document.getElementById(buttonId);
            var s = button.value; // Use button's value instead of manipulating id
            entries(s);
        }
    }

    function entries(s) {
        input.value += s;
    }

    function calculate() {
        try {
            if (input.value === "") {
                alert("Please enter a mathematical expression.");
                return;
            }
            input.value = eval(input.value);
        } catch (error) {
            input.value = "Error";
        }
    }

    function erase() {
        input.value = "";
    }
};
