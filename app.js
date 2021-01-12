const hamburger_icon = document.querySelector('.nav-bar .nav-list .hamburger')
const nav_list =document.querySelector('#nav-bar .nav-bar .nav-list')
const menu_item = document.querySelector('.nav-bar .nav-list ul li a')


hamburger_icon.addEventListener('click', ()=> {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
})

menu_item.addEventListener('click',()=>{
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');

})
