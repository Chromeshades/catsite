require('dotenv').config();

// Set up global fetch mock
global.fetch = jest.fn();

// Add global test hooks to global scope
global.beforeEach = () => {
    jest.resetAllMocks();
};