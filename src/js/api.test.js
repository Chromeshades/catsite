const { fetchCats } = require('./api');

describe('Cat API', () => {
    test('fetchCats returns array of cat objects', async () => {
        const cats = await fetchCats(2);
        expect(Array.isArray(cats)).toBe(true);
        expect(cats.length).toBe(2);
        expect(cats[0]).toHaveProperty('url');
        expect(cats[0]).toHaveProperty('id');
    });

    test('fetchCats handles errors gracefully', async () => {
        // Mock fetch to simulate error
        global.fetch = jest.fn(() => 
            Promise.reject(new Error('API Error'))
        );

        const cats = await fetchCats();
        expect(Array.isArray(cats)).toBe(true);
        expect(cats.length).toBe(0);
    });
});
