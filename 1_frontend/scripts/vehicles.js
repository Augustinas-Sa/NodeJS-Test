//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Footer js
// Variables
const footer = document.querySelector('#date');

// Functions
const date = () => {
  footer.innerText += `${new Date().getFullYear()} © All rights reserved`;
};

// Events
document.addEventListener('DOMContentLoaded', date);
