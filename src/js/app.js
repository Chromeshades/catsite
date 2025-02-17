cat-web-app
├── src
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   ├── app.js
│   │   └── api.js
├── .env
├── package.json
└── README.md

document.addEventListener('DOMContentLoaded', () => {
    const catContainer = document.getElementById('cat-container');
    const refreshBtn = document.getElementById('refresh-btn');

    async function displayCats() {
        const cats = await fetchCats();
        catContainer.innerHTML = '';
        
        cats.forEach(cat => {
            const catCard = document.createElement('div');
            catCard.className = 'cat-card';
            
            const img = document.createElement('img');
            img.src = cat.url;
            img.alt = 'Cute cat';
            
            catCard.appendChild(img);
            catContainer.appendChild(catCard);
        });
    }

    refreshBtn.addEventListener('click', displayCats);
    displayCats(); // Initial load
});