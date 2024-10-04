// Save data to local storage
export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// Retrieve data from local storage
export const loadData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : data = [
        {
          title: 'My Tasks',
          todos: [
            {
              title: 'Task 1',
              description: 'Description of task 1',
              dueDate: '2021-07-01',
              important: false,
              isComplete: false,
              projectId: 0
            },
            {
              title: 'Task 2',
              description: 'Description of task 2',
              dueDate: '2021-07-02',
              important: true,
              isComplete: false,
              projectId: 0
            }
          ]
        }
      ];
}

// update data from local storage
export const deleteData = (key) => {
    localStorage.removeItem(key);
};