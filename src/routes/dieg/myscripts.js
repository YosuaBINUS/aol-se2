const budgetSlider = document.getElementById('budget-slider');
const budgetDisplay = document.getElementById('budget-display');
const increaseButton = document.getElementById('increase-button');
const decreaseButton = document.getElementById('decrease-button');

// Set the initial budget value
let budget = 10000;

// Function to update the budget display
const updateBudgetDisplay = () => {
  budgetDisplay.textContent = `${budget}K IDR`;
};

// Function to handle increasing the budget
const increaseBudget = () => {
  if (budget + 5000 <= 30000) {
    budget += 5000;
    updateBudgetDisplay();
  }
};

// Function to handle decreasing the budget
const decreaseBudget = () => {
  if (budget - 5000 >= 10000) {
    budget -= 5000;
    updateBudgetDisplay();
  }
};

// Event listeners for the buttons
increaseButton.addEventListener('click', increaseBudget);
decreaseButton.addEventListener('click', decreaseBudget);

// Set up the budget slider
budgetSlider.type = 'range';
budgetSlider.min = '10000';
budgetSlider.max = '30000';
budgetSlider.step = '5000';
budgetSlider.value = '10000';
budgetSlider.addEventListener('input', (event) => {
  budget = parseInt(event.target.value);
  updateBudgetDisplay();
});

// Initialize the budget display
updateBudgetDisplay();