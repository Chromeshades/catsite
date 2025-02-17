import { fetchCats } from './api';

// Mock fetch globally
global.fetch = jest.fn();
global.console.error = jest.fn();

describe('fetchCats', () => {
    beforeEach(() => {
        fetch.mockClear();
        console.error.mockClear();
    });

    it('fetches cats with default limit of 6', async () => {
        const mockData = [{ id: 1, url: 'cat1.jpg' }, { id: 2, url: 'cat2.jpg' }];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });

        const result = await fetchCats();
        
        expect(fetch).toHaveBeenCalledWith(
            'https://api.thecatapi.com/v1/images/search?limit=6',
            expect.objectContaining({
                headers: expect.objectContaining({
                    'x-api-key': expect.any(String)
                })
            })
        );
        expect(result).toEqual(mockData);
    });

    it('fetches cats with custom limit', async () => {
        const mockData = [{ id: 1, url: 'cat1.jpg' }];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });

        const result = await fetchCats(1);
        
        expect(fetch).toHaveBeenCalledWith(
            'https://api.thecatapi.com/v1/images/search?limit=1',
            expect.any(Object)
        );
        expect(result).toEqual(mockData);
    });

    it('handles HTTP errors', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 404
        });

        const result = await fetchCats();
        
        expect(result).toEqual([]);
        expect(console.error).toHaveBeenCalled();
    });

    it('handles network errors', async () => {
        fetch.mockRejectedValueOnce(new Error('Network error'));

        const result = await fetchCats();
        
        expect(result).toEqual([]);
        expect(console.error).toHaveBeenCalled();
    });
});
