const display = document.getElementById("display");
const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    if (value !== "=" && value !== "DEL" && value !== "AC") {
      display.value += value;
    }
    if (value === "AC") {
      display.value = "";
    }

    if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    }
    if (value === "=") {
      display.value = eval(display.value);
    }
  });
});
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789+-*/.".includes(key)) {
    display.value += key;
  }

  if (key === "Enter") {
    display.value = eval(display.value);
  }

  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (key === "Escape") {
    display.value = "";
  }
});
