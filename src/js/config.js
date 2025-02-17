// Helper to safely get environment variables
export const getConfig = () => {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
        // Vite environment
        return {
            apiKey: import.meta.env.VITE_CAT_API_KEY
        };
    }
    // Test/Node environment
    return {
        apiKey: process.env.VITE_CAT_API_KEY || ''
    };
};