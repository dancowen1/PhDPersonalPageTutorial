document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;

  function updateProgress() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    root.style.setProperty('--scroll-progress', progress);
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress();
});
