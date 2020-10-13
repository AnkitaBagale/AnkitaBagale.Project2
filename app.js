
var slideNo = 1;
var flag;

displaySlide(slideNo);

function autoplayOn(){
        displaySlide(slideNo);
        slideNo++;
        flag= setTimeout(autoplayOn,2000);
}

function autoplayOff(){
    clearTimeout(flag);
}


// Next/previous controls
function plusSlides(n) {
    displaySlide(slideNo += n);
}

// Thumbnail image controls
function currentSlide(n) {
    displaySlide(slideNo = n);
}


function displaySlide(n){

    let slides=document.getElementsByClassName("mySlides");
    let dots= document.getElementsByClassName("dot");

    if(n>slides.length){
        slideNo=1;
    }
    if(n<1){
        slideNo=slides.length;
    }

    for(let i=0; i<slides.length; i++){
            slides[i].style.display= "none";
            dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideNo-1].style.display = "block";
    dots[slideNo-1].className += " active";
    console.log(slideNo); 
}

const navSlide = () =>{
    const burger = document.querySelector('.Burger');
    const nav=document.querySelector('.Nav-Links');
    const navLinks=document.querySelectorAll('.Nav-Links li')
    burger.addEventListener('click', ()=>{
        //toggle menu
        nav.classList.toggle('Nav-Active');
        navLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation='';
            }
            else{
            link.style.animation=`navLinksFade 0.5s ease forwards ${index*100+400}ms`;
            }
        })
        burger.classList.toggle('toggle');
    })

}
navSlide();
