/*window.onload=function(){

const a=document.querySelectorAll('.navigation ul');

const coolButton=document.querySelectorAll('.burger');
coolButton[0].addEventListener('click', () => {
    a[0].classList.toggle('nav-active');
});
}*/

window.onload=function(){
    const navSlide=() => {
        const burger=document.querySelector('.burger');
        const nav=document.querySelector('.nav-links');
        const links=document.querySelectorAll('.nav-links li');
        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');

            links.forEach((link,index) => {
                if(link.style.animation){
                    link.style.animation='';
                }
                else{
                    link.style.animation=`opac 0.5s ease forwards ${index/7+0.5}s`;
                }
            });
        });
       
    }
    navSlide();
}