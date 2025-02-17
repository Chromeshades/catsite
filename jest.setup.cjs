// const { jest } = require('@jest/globals');
require('dotenv').config();

// Mock fetch globally
global.fetch = jest.fn();

// Mock console.error to avoid noise in tests
global.console.error = jest.fn();

// Mock process.env if not defined
process.env.VITE_CAT_API_KEY = process.env.VITE_CAT_API_KEY || 'test-api-key';

// Export Jest methods globally for tests
global.jest = jest;
global.describe = jest.describe;
global.test = jest.test;
global.it = jest.it;
global.expect = jest.expect;
global.beforeEach = jest.beforeEach;