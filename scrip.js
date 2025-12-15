
const resultEl = document.querySelector('.result');
const expressionEl = document.querySelector('.expression');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let currentExpression = '';


function updateDisplay() {
  resultEl.textContent = currentInput || '0';
  expressionEl.textContent = currentExpression;
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('c')) {
      
      currentInput = '';
      currentExpression = '';
    } else if (button.classList.contains('equals')) {
      
      try {
       
        const evalExpression = currentExpression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        currentInput = eval(evalExpression);
        currentExpression = currentInput;
      } catch (e) {
        currentInput = 'Error';
      }
    } else if (button.classList.contains('orange')) {
      
      if (value === '±') {
        if (currentInput) currentInput = String(-parseFloat(currentInput));
        currentExpression = currentInput;
      } else if (value === '%') {
        if (currentInput) currentInput = String(parseFloat(currentInput) / 100);
        currentExpression = currentInput;
      } else {
        currentExpression += value;
        currentInput = '';
      }
    } else if (button.classList.contains('dark')) {
      if (value === '⌫') {
       
        currentExpression = currentExpression.slice(0, -1);
        currentInput = '';
      } else if (value === '⟲') {
        
        currentInput = '';
        currentExpression = '';
      }
    } else {
  
      currentInput += value;
      currentExpression += value;
    }

    updateDisplay();
  });
});
