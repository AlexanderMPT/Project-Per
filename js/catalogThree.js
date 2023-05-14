const openPopUpThree = document.getElementById('open__pop-up-three');
const closePopUpTwoThree = document.getElementById('pop__up-close-three'); 
const popUpThree = document.getElementById('pop__up-three');

openPopUpThree.addEventListener('click', function(e){
    e.preventDefault();
    popUpThree.classList.add('active');
});

closePopUpTwoThree.addEventListener('click', function(){
    popUpThree.classList.remove('active')
})