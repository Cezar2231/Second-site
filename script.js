//Scroll top Button//
var b2t= document.querySelector('.b2t_btn');
var root=document.querySelector(':root');

function moveTo(pos){
    document.documentElement.scrollTop=pos;
}

function pageScrollEvent(){
    var currentScroll=document.documentElement.scrollTop;
        if(currentScroll>10){
            b2t.style.display="flex";
        }
        else{
            b2t.style.display= "none";
        }
    var height= document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var scrolled=(currentScroll/height)*100;
    root.style.setProperty('--b2t_progress',scrolled+"%");
}

window.onscroll = function() { pageScrollEvent() };

//Dark mode//
let darkMode=localStorage.getItem('darkMode');
const darkModeToggle= document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode','enabled');
};

const disableDarkMode=()=>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode',null);
};

if(darkMode== 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener("click",()=>{
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
    } else{
        disableDarkMode();
    }
});

