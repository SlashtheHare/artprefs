// script.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Build a Collapse instance map by panel ID
  const collapseEls = document.querySelectorAll('.theme-card .collapse');
  const instances   = {};
  
  collapseEls.forEach(el => {
    // el.id must match data-bs-target="#<id>"
    instances[el.id] = new bootstrap.Collapse(el, { toggle: false });
  });

  // 2) Wire up each button
  document.querySelectorAll('.theme-card .btn').forEach(btn => {
    // remove leading '#' from data-bs-target
    const targetID = btn.dataset.bsTarget.substring(1);
    const coll     = instances[targetID];
    const panel    = document.getElementById(targetID);

    btn.addEventListener('click', () => {
      const isOpen = panel.classList.contains('show');

      // 3) Close everything, deactivate all buttons
      Object.values(instances).forEach(inst => inst.hide());
      document.querySelectorAll('.theme-card .btn.active')
              .forEach(b => b.classList.remove('active'));

      // 4) If it wasn’t open, open it & activate the button
      if (!isOpen) {
        coll.show();
        btn.classList.add('active');
      }
    });
  });
});
