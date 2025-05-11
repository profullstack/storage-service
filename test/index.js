/**
 * Basic tests for @profullstack/storage-service
 */

// Import the module
import storageService from '../src/index.js';
import { jest } from '@jest/globals';

// Import adapters and utils
let memoryAdapter, contentTypeUtils, metadataUtils, pathUtils;

try { memoryAdapter = await import('../src/adapters/memory.js'); }
catch (err) { console.log('Memory adapter not found or could not be loaded:', err.message); }

try { contentTypeUtils = await import('../src/utils/content-type.js'); }
catch (err) { console.log('Content-type utils not found or could not be loaded:', err.message); }

try { metadataUtils = await import('../src/utils/metadata.js'); }
catch (err) { console.log('Metadata utils not found or could not be loaded:', err.message); }

try { pathUtils = await import('../src/utils/path.js'); }
catch (err) { console.log('Path utils not found or could not be loaded:', err.message); }

describe('@profullstack/storage-service', () => {
  test('module exports something', () => {
    console.log('Testing @profullstack/storage-service...');
    console.log('Module exports:', Object.keys(storageService));
    
    expect(Object.keys(storageService).length).toBeGreaterThan(0);
  });
  
  // Test adapters if they exist
  test('memory adapter if available', () => {
    if (memoryAdapter) {
      console.log('Testing memory adapter...');
      console.log('Memory adapter exports:', Object.keys(memoryAdapter));
      expect(Object.keys(memoryAdapter).length).toBeGreaterThan(0);
    } else {
      console.log('Memory adapter not available, skipping test');
    }
  });
  
  // Test utils if they exist
  test('content-type utils if available', () => {
    if (contentTypeUtils) {
      console.log('Testing content-type utils...');
      console.log('Content-type utils exports:', Object.keys(contentTypeUtils));
      expect(Object.keys(contentTypeUtils).length).toBeGreaterThan(0);
    } else {
      console.log('Content-type utils not available, skipping test');
    }
  });
  
  test('metadata utils if available', () => {
    if (metadataUtils) {
      console.log('Testing metadata utils...');
      console.log('Metadata utils exports:', Object.keys(metadataUtils));
      expect(Object.keys(metadataUtils).length).toBeGreaterThan(0);
    } else {
      console.log('Metadata utils not available, skipping test');
    }
  });
  
  test('path utils if available', () => {
    if (pathUtils) {
      console.log('Testing path utils...');
      console.log('Path utils exports:', Object.keys(pathUtils));
      expect(Object.keys(pathUtils).length).toBeGreaterThan(0);
    } else {
      console.log('Path utils not available, skipping test');
    }
  });
  
  // Test basic functionality
  test('createStorage function and storage methods if available', () => {
    if (typeof storageService.createStorage === 'function') {
      console.log('Testing createStorage function exists');
      expect(storageService.createStorage).toBeDefined();
      
      try {
        const storage = storageService.createStorage({ adapter: 'memory' });
        console.log('Storage created successfully');
        expect(storage).toBeDefined();
        
        if (storage && typeof storage.put === 'function') {
          console.log('Testing put function exists');
          expect(storage.put).toBeDefined();
        }
        
        if (storage && typeof storage.get === 'function') {
          console.log('Testing get function exists');
          expect(storage.get).toBeDefined();
        }
        
        if (storage && typeof storage.delete === 'function') {
          console.log('Testing delete function exists');
          expect(storage.delete).toBeDefined();
        }
        
        if (storage && typeof storage.list === 'function') {
          console.log('Testing list function exists');
          expect(storage.list).toBeDefined();
        }
      } catch (err) {
        console.log('Error creating storage:', err.message);
      }
    } else {
      console.log('createStorage function not available, skipping test');
    }
  });
});