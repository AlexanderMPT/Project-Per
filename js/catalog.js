const openPopUp = document.getElementById('open__pop-up');
const closePopUp = document.getElementById('pop__up-close');
const popUp = document.getElementById('pop__up');

// вешаем на openPopUp событие
openPopUp.addEventListener('click', function(e){
    e.preventDefault() // это мы прописываем для того, чтобы не происходил переход по ссылке на другую страницу
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', function(){
    popUp.classList.remove('active');
});
