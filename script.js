// Toggle one collapse-panel at a time under Themes/Aesthetics
const collapseEls = document.querySelectorAll('.theme-card .collapse');
const btns        = document.querySelectorAll('.theme-card .btn');

btns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // close all
    collapseEls.forEach(el => el.classList.remove('show'));
    btns.forEach(b  => b.classList.remove('active'));

    // open the matched panel, activate button styling
    collapseEls[idx].classList.add('show');
    btn.classList.add('active');
  });
});
