document.addEventListener('DOMContentLoaded', () => {
  // Search functionality
  const searchInput = document.getElementById('search-input');
  const cards = document.querySelectorAll('.link-card');

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
  
    cards.forEach((card) => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const description = card.querySelector('.card-text').textContent.toLowerCase();
  
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
  
    const cardTitles = document.querySelectorAll('.card-title');
    const cardTexts = document.querySelectorAll('.card-text');
    const categoryHeaders = document.querySelectorAll('.category-header');
  
    if (isDarkMode) {
      cardTitles.forEach((title) => title.style.color = '#fff');
      cardTexts.forEach((text) => text.style.color = '#fff');
      categoryHeaders.forEach((header) => header.style.borderColor = '#fff');
    } else {
      cardTitles.forEach((title) => title.style.color = '#2e3c5a');
      cardTexts.forEach((text) => text.style.color = '#333');
      categoryHeaders.forEach((header) => header.style.borderColor = '#2e3c5a');
    }
  });
});
  
