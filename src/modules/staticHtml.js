const staticHtml =(() => {
    
    function initializeHtml() {
        const header = document.createElement('header');
        const navBar = document.createElement('nav');
        const mainContent = document.createElement('main');

        header.innerHTML=`
            <span class="material-symbols-rounded">done_all</span>
            <h1 id="title">Todo List</h1>
        `; 
        navBar.innerHTML=`
            <div class="nav-btn-group">
                <button id="all-btn" class="nav-btn active" data-title="all"><span class="material-symbols-rounded">calendar_month</span>All</button>
                <button id="today-btn" class="nav-btn" data-title="today"><span class="material-symbols-rounded">today</span>Today</button>
                <button id="week-btn" class="nav-btn" data-title="week"><span class="material-symbols-rounded">date_range</span>This week</button>
                <button id="important-btn" class="nav-btn" data-title="important"><span class="material-symbols-rounded">assignment_late</span>Important</button>
                <button id="completed-btn" class="nav-btn" data-title="completed"><span class="material-symbols-rounded">event_available</span>Completed</button>
            </div>
            <div class="nav-list-group">
                <div class="lists-header">
                    <h1>Lists</h1>
                    <button type="button" id="add-btn"><span class="material-symbols-rounded" id="add-icon">
                        playlist_add
                        </span></button>
                </div>
                <div class="list-card-container">
                    <!--
                    <div class="list-card">
                        <div class="list-name">My tasks</div>
                        <button id="edit-btn"><span class="material-symbols-rounded" id="edit-icon">
                            edit_note
                            </span></button>
                    </div> -->
                </div>
            </div>
            <div class="impressum">
                created by <a href="https://github.com/Joschi96">Joschi96</a> | <a href="https://github.com/Joschi96">Source</a>
            </div>
        `;   
        mainContent.innerHTML=`
            <div class="main-content">
                <div class="main-content-header">
                    <h1>Placeholder for Tab Name</h1>
                    <button id="add-todo-btn">Add Task <span class="material-symbols-rounded">note_stack_add</span></button>
                </div>
                <div class="todo-list">
                    Placeholder for todo list
                </div>
            </div>
        `;
        document.body.insertBefore(header, document.body.firstChild);
        document.body.appendChild(navBar);
        document.body.appendChild(mainContent);
    }

    return {
        initializeHtml,
    };
})();

export default staticHtml;