const openPopUpFour = document.getElementById('open__pop-up-four');
const closePopUpFour = document.getElementById('pop__up-close-four'); 
const popUpFour = document.getElementById('pop__up-four');

openPopUpFour.addEventListener('click', function(e){
    e.preventDefault();
    popUpFour.classList.add('active');
});

closePopUpFour.addEventListener('click', function(){
    popUpFour.classList.remove('active')
})