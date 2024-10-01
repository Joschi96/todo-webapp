import { saveData, loadData, deleteData } from '../modules/storage';

describe('storage module', () => {
    const key = 'testKey';
    const data = { name: 'test' };

    beforeEach(() => {
        localStorage.clear();
    });

    test('saveData should save data to localStorage', () => {
        saveData(key, data);
        const storedData = localStorage.getItem(key);
        expect(storedData).toBe(JSON.stringify(data));
    });

    test('loadData should retrieve data from localStorage', () => {
        localStorage.setItem(key, JSON.stringify(data));
        const retrievedData = loadData(key);
        expect(retrievedData).toEqual(data);
    });

    test('loadData should return null if no data is found', () => {
        const retrievedData = loadData('nonExistentKey');
        expect(retrievedData).toBeNull();
    });

    test('deleteData should remove data from localStorage', () => {
        localStorage.setItem(key, JSON.stringify(data));
        deleteData(key);
        const storedData = localStorage.getItem(key);
        expect(storedData).toBeNull();
    });
});