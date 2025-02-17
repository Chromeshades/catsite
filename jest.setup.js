import { jest } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

// Mock fetch globally
global.fetch = jest.fn();

// Mock console.error to avoid noise in tests
global.console.error = jest.fn();

// Mock process.env if not defined
process.env.VITE_CAT_API_KEY = process.env.VITE_CAT_API_KEY || 'test-api-key';

// Add global test hooks to global scope
global.beforeEach = () => {
    jest.resetAllMocks();
};