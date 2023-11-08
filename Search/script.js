function searchHorse() {
  const horseName = document.getElementById('horse-name').value;

  // Replace this with the URL of the webpage you want to scrape
  const url = `https://www.breednet.com.au/horse/${horseName}`;

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
  // Implement scraping logic to extract horse data from the HTML
  // Replace with your scraping logic
  const horseName = 'Horse Name'; // Example data
  const winnings = 'Winnings';     // Example data

  return {
    name: horseName,
    winnings: winnings
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
