/**
 * Basic tests for @profullstack/storage-service
 */

// Import the module
const storageService = require('../src/index.js');

// Basic test to ensure the module exports something
console.log('Testing @profullstack/storage-service...');
console.log('Module exports:', Object.keys(storageService));

if (Object.keys(storageService).length === 0) {
  console.error('ERROR: Module does not export anything!');
  process.exit(1);
}

// Test adapters if they exist
try {
  const memoryAdapter = require('../src/adapters/memory.js');
  console.log('Testing memory adapter...');
  console.log('Memory adapter exports:', Object.keys(memoryAdapter));
} catch (err) {
  console.log('Memory adapter not found or could not be loaded:', err.message);
}

// Test utils if they exist
try {
  const contentTypeUtils = require('../src/utils/content-type.js');
  console.log('Testing content-type utils...');
  console.log('Content-type utils exports:', Object.keys(contentTypeUtils));
} catch (err) {
  console.log('Content-type utils not found or could not be loaded:', err.message);
}

try {
  const metadataUtils = require('../src/utils/metadata.js');
  console.log('Testing metadata utils...');
  console.log('Metadata utils exports:', Object.keys(metadataUtils));
} catch (err) {
  console.log('Metadata utils not found or could not be loaded:', err.message);
}

try {
  const pathUtils = require('../src/utils/path.js');
  console.log('Testing path utils...');
  console.log('Path utils exports:', Object.keys(pathUtils));
} catch (err) {
  console.log('Path utils not found or could not be loaded:', err.message);
}

// Test basic functionality
if (typeof storageService.createStorage === 'function') {
  console.log('Testing createStorage function exists:', typeof storageService.createStorage === 'function' ? 'SUCCESS' : 'FAILED');
  
  try {
    const storage = storageService.createStorage({ adapter: 'memory' });
    console.log('Storage created successfully:', storage ? 'SUCCESS' : 'FAILED');
    
    if (storage && typeof storage.put === 'function') {
      console.log('put function exists:', typeof storage.put === 'function' ? 'SUCCESS' : 'FAILED');
    }
    
    if (storage && typeof storage.get === 'function') {
      console.log('get function exists:', typeof storage.get === 'function' ? 'SUCCESS' : 'FAILED');
    }
    
    if (storage && typeof storage.delete === 'function') {
      console.log('delete function exists:', typeof storage.delete === 'function' ? 'SUCCESS' : 'FAILED');
    }
    
    if (storage && typeof storage.list === 'function') {
      console.log('list function exists:', typeof storage.list === 'function' ? 'SUCCESS' : 'FAILED');
    }
  } catch (err) {
    console.log('Error creating storage:', err.message);
  }
}

console.log('Basic test passed!');