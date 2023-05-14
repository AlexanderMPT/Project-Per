const openPopUpSix = document.getElementById('open__pop-up-six');
const closePopUpSix = document.getElementById('pop__up-close-six'); 
const popUpSix = document.getElementById('pop__up-six');

openPopUpSix.addEventListener('click', function(e){
    e.preventDefault();
    popUpSix.classList.add('active');
});

closePopUpSix.addEventListener('click', function(){
    popUpSix.classList.remove('active')
})