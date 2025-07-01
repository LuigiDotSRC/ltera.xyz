document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.toc-toggle');
    const tocList = document.getElementById('toc-list');
    if (toggle && tocList) {
      toggle.addEventListener('click', function() {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        tocList.hidden = expanded;
      });
    }
  });