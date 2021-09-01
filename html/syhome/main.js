const toggleBtn = document.querySelector('.sy_toogleBtn');
const menu = document.querySelector('.sy_menu');
const sns = document.querySelector('.sy_sns');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});

