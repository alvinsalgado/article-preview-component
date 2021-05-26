let shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
  shareBtn.parentElement.classList.toggle('active');
});
