const cheerio = require('cheerio');
const fetch = require('node-fetch');

// Dark/Light theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', toggleTheme);

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function searchHorse() {
  const horseName = document.getElementById('horse-name').value;

  // Replace this with the URL of the webpage you want to scrape
  const url = `https://www.breednet.com.au/horses/${horseName}`;

  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const horseData = scrapeHorseData(html);
      displayHorseDetails(horseData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function scrapeHorseData(html) {
  const $ = cheerio.load(html);
  
  // Implement scraping logic to extract horse data from the HTML
  const horseName = $('selector-for-horse-name').text();
  const winnings = $('selector-for-winnings').text();
  // Add more selectors for other data

  return {
    name: horseName,
    winnings: winnings,
    // Add other data properties here
  };
}

function displayHorseDetails(horseData) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = `
    <h2>${horseData.name}</h2>
    <p>Winnings: ${horseData.winnings}</p>
    <!-- Add more horse information here -->
  `;
}
