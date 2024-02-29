// public/scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/foods')
      .then(response => response.json())
      .then(data => displayFoodItems(data));
    
    function displayFoodItems(foods) {
      const foodList = document.getElementById('food-list');
      foods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.innerHTML = `
          <h3>${food.name}</h3>
          <p>${food.description}</p>
          <p>Price: ${food.price}</p>
          <img src="${food.image}" alt="${food.name}" width="200">
        `;
        foodList.appendChild(foodItem);
      });
    }
  });
  