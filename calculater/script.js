const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const num = button.dataset.num;
    const op = button.dataset.op;
    const fn = button.dataset.fn;

    if (num !== undefined) {
      if (display.value === '0') {
        display.value = num;
      } else {
        display.value += num;
      }
    } else if (op !== undefined) {
      const lastChar = display.value.slice(-1);
      // Prevent multiple operators in a row
      if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + op;
      } else {
        display.value += op;
      }
    } else if (fn !== undefined) {
      if (fn === 'clear') {
        display.value = '';
      } else if (fn === 'equal') {
        try {
          // Evaluate expression safely
          const result = eval(display.value);
          display.value = result;
        } catch {
          display.value = 'Error';
        }
      }
    }
  });
});