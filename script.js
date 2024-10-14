let screen = document.querySelector('.calculator-screen');
let buttons = document.querySelectorAll('.btn');
let input = '';

function clearInput() {
  input = '';
  updateScreen();
}

function deleteLastCharacter() {
  input = input.substring(0, input.length - 1);
  updateScreen();
}

function appendValue(value) {
  input += value;
  updateScreen();
}

function calculateResult() {
  try {
    input = eval(input).toString();
  } catch (error) {
    input = 'Error';
  }
  updateScreen();
}

function updateScreen() {
  screen.value = input;
}

function handleButtonClick(button) {
  let value = button.getAttribute('data-value');
  let action = button.getAttribute('data-action');

  if (action === 'clear') {
    clearInput();
  } else if (action === 'delete') {
    deleteLastCharacter();
  } else if (action === 'calculate') {
    calculateResult();
  } else {
    appendValue(value);
  }
}

function setupButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      handleButtonClick(buttons[i]);
    });
  }
}

setupButtons();
