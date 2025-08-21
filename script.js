// Grab all collapse panels and their buttons
const collapseEls = document.querySelectorAll('.theme-card .collapse');
const btns        = document.querySelectorAll('.theme-card .btn');

btns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const panel = collapseEls[idx];
    const isOpen = panel.classList.contains('show');

    // 1) Close all panels & deactivate all buttons
    collapseEls.forEach(el => el.classList.remove('show'));
    btns       .forEach(b  => b.classList.remove('active'));

    // 2) If the clicked one was NOT already open, re-open it
    if (!isOpen) {
      panel.classList.add('show');
      btn.classList.add('active');
    }
    // otherwise we’ve effectively “toggled off” that panel
  });
});
