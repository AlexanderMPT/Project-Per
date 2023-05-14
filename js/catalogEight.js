const openPopUpEight = document.getElementById('open__pop-up-eight');
const closePopUpTwoEight = document.getElementById('pop__up-close-eight'); 
const popUpEight = document.getElementById('pop__up-eight');

openPopUpEight.addEventListener('click', function(e){
    e.preventDefault();
    popUpEight.classList.add('active');
});

closePopUpTwoEight.addEventListener('click', function(){
    popUpEight.classList.remove('active')
})