const openPopUpFive = document.getElementById('open__pop-up-five');
const closePopUpFive = document.getElementById('pop__up-close-five'); 
const popUpFive = document.getElementById('pop__up-five');

openPopUpFive.addEventListener('click', function(e){
    e.preventDefault();
    popUpFive.classList.add('active');
});

closePopUpFive.addEventListener('click', function(){
    popUpFive.classList.remove('active')
})