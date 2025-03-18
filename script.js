let display = document.getElementById('display');

function clearDisplay() {
  display.value = '0';
}

function appendToDisplay(value) {
  if (display.value === '0' || display.value === 'ERROR') {
    display.value = value;
  } else {
    display.value += value;
  }
  display.style.animation = 'none';
  display.offsetHeight; 
  display.style.animation = 'slideIn 0.3s ease-in-out';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'ERROR';
  }
}

function backspace() {
  if (display.value.length > 1 && display.value !== 'ERROR') {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}