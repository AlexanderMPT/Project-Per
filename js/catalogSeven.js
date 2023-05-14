const openPopUpSeven = document.getElementById('open__pop-up-seven');
const closePopUpSeven = document.getElementById('pop__up-close-seven'); 
const popUpSeven = document.getElementById('pop__up-seven');

openPopUpSeven.addEventListener('click', function(e){
    e.preventDefault();
    popUpSeven.classList.add('active');
});

closePopUpSeven.addEventListener('click', function(){
    popUpSeven.classList.remove('active')
})