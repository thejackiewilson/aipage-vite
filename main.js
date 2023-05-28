document.addEventListener('DOMContentLoaded', () => {
  // Search functionality
  const searchInput = document.getElementById('search-input');
  const cards = document.querySelectorAll('.link-card');

  let timeout = null;

  searchInput.addEventListener('input', (event) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const searchTerm = event.target.value.toLowerCase();

      cards.forEach((card) => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();

        card.style.display = (title.includes(searchTerm) || description.includes(searchTerm)) ? 'block' : 'none';
      });
    }, 300); // delay of 300ms
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
  });

  // Apply dark mode if it was set before
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});

// This function copies the given text to the clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

// Add an event listener to all 'copy-prompt-btn' buttons
document.querySelectorAll('.copy-prompt-btn').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    // The text to be copied is the content of the preceding 'card-text' element
    let text = event.target.previousElementSibling.innerText;
    copyToClipboard(text);
  });
});
