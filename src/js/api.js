const API_KEY = 'live_gzyXgesQtDPSUiWmyHvyGjEbUIZcoWm2PafUQdY7MvgmvdSyEo4J4pGAvsU25ToG';
const API_URL = 'https://api.thecatapi.com/v1';

async function fetchCats(limit = 6) {
    try {
        const response = await fetch(`${API_URL}/images/search?limit=${limit}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cats:', error);
        return [];
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchCats };
}