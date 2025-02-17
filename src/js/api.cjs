const API_URL = 'https://api.thecatapi.com/v1';

const getApiKey = () => {
    // For Node/test environment
    if (typeof process !== 'undefined' && process.env) {
        return process.env.VITE_CAT_API_KEY || '';
    }
    return '';
};

async function fetchCats(limit = 6) {
    try {
        const apiKey = getApiKey();
        
        const response = await fetch(`${API_URL}/images/search?limit=${limit}`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cats:', error);
        return [];
    }
}

module.exports = { fetchCats };