
    // Optional: close nav when a nav-link is clicked (mobile UX)
    document.addEventListener('DOMContentLoaded', function () {
      var collapseEl = document.getElementById('navbarNav');
      var toggler = document.querySelector('.navbar-toggler');

      document.querySelectorAll('.navbar-nav .nav-link').forEach(function (lnk) {
        lnk.addEventListener('click', function () {
          if (!collapseEl) return;
          // If collapse is shown, hide it using Bootstrap's API if available
          if (collapseEl.classList.contains('show')) {
            if (window.bootstrap && bootstrap.Collapse) {
              var bs = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl);
              bs.hide();
            } else {
              collapseEl.classList.remove('show');
              toggler.setAttribute('aria-expanded', 'false');
            }
          }
        });
      });
    });
  