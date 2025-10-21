// main.js
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Initial state check
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else if (!localStorage.getItem('darkMode') && body.classList.contains('dark-mode')) {
    // Handle initial state if dark-mode is default
    localStorage.setItem('darkMode', 'enabled');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle handler
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});