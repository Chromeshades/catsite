const { fetchCats } = require('./api.cjs');

describe('Cat API', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        global.fetch = jest.fn();
        global.console.error = jest.fn();
    });

    it('returns array of cat objects', async () => {
        const mockCats = [
            { id: '1', url: 'http://example.com/cat1.jpg' },
            { id: '2', url: 'http://example.com/cat2.jpg' }
        ];

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockCats
        });

        const cats = await fetchCats(2);
        expect(Array.isArray(cats)).toBe(true);
        expect(cats.length).toBe(2);
        expect(cats[0]).toHaveProperty('url');
        expect(cats[0]).toHaveProperty('id');
    });

    it('handles errors gracefully', async () => {
        const networkError = new Error('Network error');
        global.fetch.mockRejectedValueOnce(networkError);
        const cats = await fetchCats();

        expect(Array.isArray(cats)).toBe(true);
        expect(cats.length).toBe(0);
        expect(console.error).toHaveBeenCalledWith('Error fetching cats:', networkError);
    });
});