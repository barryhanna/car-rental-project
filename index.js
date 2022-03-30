const filterMenuBtn = document.querySelector('.filter-menu-btn');
const filterMenu = document.querySelector('.filter-menu');
filterMenuBtn.addEventListener('click', (e) => {
  filterMenu.classList.toggle('open');
});

const likeBtns = document.querySelectorAll('.like-btn');
likeBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    if (e.target.src.includes('save.svg')) {
      e.target.src = 'assets/save-filled.svg';
    } else {
      e.target.src = 'assets/save.svg';
    }
  })
);
