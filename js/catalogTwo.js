const openPopUpTwo = document.getElementById('open__pop-up-two');
const closePopUpTwo = document.getElementById('pop__up-close-two'); 
const popUpTwo = document.getElementById('pop__up-two');

openPopUpTwo.addEventListener('click', function(e){
    e.preventDefault();
    popUpTwo.classList.add('active');
});

closePopUpTwo.addEventListener('click', function(){
    popUpTwo.classList.remove('active')
})