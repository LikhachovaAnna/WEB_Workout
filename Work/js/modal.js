const modal = document.getElementById('modal');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const closeBtn = document.querySelector('.close');

yesBtn.addEventListener('click', onYesClick);
noBtn.addEventListener('click', onNoClick);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function onYesClick() {
  document.location.href = "https://www.youtube.com/watch?v=jpizoUy4K9s";
}

function onNoClick() {
  closeModal();
}

function outsideClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}
