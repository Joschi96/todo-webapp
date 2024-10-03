// functions to render static ui components (navigation bar, header and empty main content area)

export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML=`
        <span class="material-symbols-rounded">done_all</span>
        <h1 id="title">Todo List</h1>
        `;
    document.body.insertBefore(header, document.body.firstChild);
}
