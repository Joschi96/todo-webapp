import { saveData, loadData, deleteData } from './storage';

// Mock localStorage
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = value;
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  }
};

describe('storage functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('loadData', () => {
  test('should load existing data from local storage', () => {
    const key = 'testKey';
    const data = { title: 'Test Title' };
    localStorage.setItem(key, JSON.stringify(data));

    const result = loadData(key);
    expect(result).toEqual(data);
  });

  test('should return null for non-existing data', () => {
    const key = 'nonExistingKey';
    const result = loadData(key);
    expect(result).toBeNull();
    });
  });

  describe('saveData', () => {
    test('should save data to local storage', () => {
      const key = 'testKey';
      const data = { title: 'Test Title' };

      saveData(key, data);

      const storedData = JSON.parse(localStorage.getItem(key));
      expect(storedData).toEqual(data);
    });
  });

  describe('deleteData', () => {
    test('should delete data from local storage', () => {
      const key = 'testKey';
      const data = { title: 'Test Title' };
      localStorage.setItem(key, JSON.stringify(data));

      deleteData(key);

      const result = localStorage.getItem(key);
      expect(result).toBeNull();
    });
  });
});