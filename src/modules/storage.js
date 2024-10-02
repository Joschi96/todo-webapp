// Save data to local storage
export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// Retrieve data from local storage
export const loadData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// update data from local storage
export const deleteData = (key) => {
    localStorage.removeItem(key);
};