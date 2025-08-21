document.querySelectorAll('.theme-card .btn').forEach((btn, idx) => {
  const panels = document.querySelectorAll('.theme-card .card-body');
  btn.addEventListener('click', () => {
    // deactivate all
    document.querySelectorAll('.theme-card .btn.active').forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('show'));
    // activate clicked + matching panel
    btn.classList.add('active');
    panels[idx].classList.add('show');
  });
});
