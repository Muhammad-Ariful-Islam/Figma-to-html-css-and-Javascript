const clicktoshow = document.getElementById('clicktoshow')
let myNav = document.getElementById('myNav')
let hideMenu = document.getElementById('hideMenu')
let pushBody = document.getElementById('pushBody')

clicktoshow.addEventListener('click', function(){
    myNav.style.width = '250px';
    pushBody.style.marginLeft = '250px';
    pushBody.style.transition = '0.6s';
})
hideMenu.addEventListener('click', function(){
    myNav.style.width = '0px';
    pushBody.style.marginLeft = '0px';
})