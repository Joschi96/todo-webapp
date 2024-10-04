// functions to render static ui components (navigation bar, header and empty main content area)

export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML=`
        <span class="material-symbols-rounded">done_all</span>
        <h1 id="title">Todo List</h1>
        `;
    document.body.insertBefore(header, document.body.firstChild);
}

export function renderNavBar() {
    const navBar = document.createElement('nav');

    const navBtnGroup = document.createElement('div');
    navBtnGroup.classList.add('nav-btn-group');
    navBar.appendChild(navBtnGroup);

    const navListGroup = document.createElement('div');
    navListGroup.classList.add('nav-list-group');
    navBar.appendChild(navListGroup);

    const impressum = document.createElement('div');
    impressum.classList.add('impressum');
    impressum.innerHTML=`
        created by <a href="https://github.com/Joschi96">Joschi96</a> | <a href="https://github.com/Joschi96">Source</a>
    `;
    navBar.appendChild(impressum);

    navBtnGroup.innerHTML=`
        <button id="all-btn" class="nav-btn"><span class="material-symbols-rounded">calendar_month</span>All</button>
        <button id="today-btn" class="nav-btn"><span class="material-symbols-rounded">today</span>Today</button>
        <button id="week-btn" class="nav-btn"><span class="material-symbols-rounded">date_range</span>This week</button>
        <button id="important-btn" class="nav-btn"><span class="material-symbols-rounded">assignment_late</span>Important</button>
        <button id="completed-btn" class="nav-btn"><span class="material-symbols-rounded">event_available</span>Completed</button>
    `;

    navListGroup.innerHTML=`
        <div class="lists-header">
            <h1>Lists</h1>
            <button type="button" id="add-btn"><span class="material-symbols-rounded" id="add-icon">
              playlist_add
              </span></button>
        </div>
        <div class="list-card">
            <div class="list-name">My tasks</div>
            <button id="edit-btn"><span class="material-symbols-rounded" id="edit-icon">
              edit_note
            </span></button>
        </div>
    `;

    document.body.appendChild(navBar);
}

export function renderMainContent() {
    const mainContent = document.createElement('main');
    mainContent.innerHTML=`
        <div class="main-content">
            <div class="main-content-header">
                <h1>My Tasks</h1>
                <button id="add-todo-btn">Add Task <span class="material-symbols-rounded">note_stack_add</span></button>
            </div>
            <div class="todo-list">
                Placeholder for todo list
            </div>
        </div>
    `;
    document.body.appendChild(mainContent);
}