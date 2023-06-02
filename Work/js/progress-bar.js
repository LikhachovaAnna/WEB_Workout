window.addEventListener('scroll', updateProgressBar);

function updateProgressBar() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolledHeight = window.pageYOffset;
  const scrolledPercent = (scrolledHeight / fullHeight) * 100;

  const progressBarFill = document.querySelector('.progress-bar-fill');
  progressBarFill.style.width = `${scrolledPercent}%`;
}
