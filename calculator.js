

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".box");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                // Evaluate expression
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (value === "%") {
            display.value = display.value / 100;
        } else {
            display.value += value;
        }
    });
});
