// functions to render static ui components (navigation bar, header and empty main content area)

export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML=`
          <span class="material-icons-round" id="page-title">
        done_all
        </span>
        `;
    document.body.insertBefore(header, document.body.firstChild);
}
