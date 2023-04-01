$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky")
      }else{
          $('.navbar').removeClass("sticky")
      }
  });
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})
})
var runredirect = function () {
  var redirectw1 = window.open('https://drive.google.com/file/d/1A17k1zzKrasCQkrVQE3a1YIwQJds0fJ-/view?usp=share_link');
  redirectw1.location;
}























document.getElementById("git3Button").addEventListener("click",function(){
    window.open("https://github.com/Shiuli-suman/Fitness", "_blank");
})

document.getElementById("linkedin").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/shiuli-suman-b378b8247/");
})

document.getElementById("github").addEventListener("click",function(){
    window.open("https://github.com/Shiuli-suman");
})



let nav_icon = document.querySelector('.nav_icon');
let line = document.querySelector('.line');
let nav_menu = document.querySelector('.nav_menu');
let nav_links = document.querySelectorAll('.nav_list');
let nav_length = nav_links.length;
nav_icon.addEventListener('click', () => {
  line.classList.toggle('active');
  nav_menu.classList.toggle('active');
  nav_links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `linkFadeIn 0.5s ease forwards ${
        index / nav_length + 0.2
      }s`;
    }
  });
});
let header = document.querySelector('.header');
let hero = document.querySelector('.hero');
let header_height = header.getBoundingClientRect().height;

let sticky = (entries) => {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
let hero_observer = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${header_height}px`,
});
hero_observer.observe(hero);




const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', ()=>{
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('li  a[href*="'+ sectionId + '"]').classList.add('active');
        } else{
            document.querySelector('li  a[href*="'+ sectionId + '"]').classList.remove('active');
        }
    });
});



function myfunc(){
    
    let sr = document.getElementById("check").checked;

    if(sr){
        document.getElementById("navMenu").style.right = "-110%";
        document.getElementById("check").checked = false;
    } else{
        document.getElementById("navMenu").style.right = "0%";
    }
}

function mycheck(){
    let sr = document.getElementById("check").checked;

    if(sr){
        document.getElementById("navMenu").style.right = "0%";
    } else{
        document.getElementById("navMenu").style.right = "-110%";
    }
}

function resumeDownload(){
   
        window.open("https://drive.google.com/file/d/11sTXdRokfssqzZkMkmEgFq93vfPKQwus/view?usp=share_link","_blank");
      }
