


//--------------le menu caché-----------------------

function burger(){
    document.getElementById('MenuCache').style.width='80vw';
}

function Fermerburger(){
    document.getElementById('MenuCache').style.width='0';
}

//bouton pour replier le header
var deplier=true;

function HomeBanner(){
   if(deplier){
        document.getElementById('HomeBanner').style.height = '0' ;
        document.getElementById('HomeBanner').style.marginTop = '0' ;
      
        deplier = false;
   }else{
    document.getElementById('HomeBanner').style.height = 'auto' ;
    document.getElementById('HomeBanner').style.marginTop = '12vh' ;
   
    deplier = true;
   }
}


/*----Back to top btn*/
window.addEventListener('scroll',ApparitionBackToTop);
var profondeur;


function ApparitionBackToTop(){
    profondeur = window.pageYOffset;
    // console.log(profondeur);
    if(profondeur > 70){
        document.getElementById('RetourVersLeHaut').style.display = 'flex' ;
    }else{
        document.getElementById('RetourVersLeHaut').style.display = 'none' ;
    }
}

function BackToTop(){
    profondeur = window.pageYOffset;
   
    window.scrollBy({
        top: -profondeur,
        left: 0,
        behavior: 'smooth'
      });
}

//-------------le loader ----
const loader = document.querySelector('.loader');

window.addEventListener('load',() => {
    setTimeout(()=>{
        loader.classList.add('fadeOut');
        setTimeout(()=>{
            loader.classList.add('hidden');
        }, 700)//disparition
        
}, 2000)//opacité reduite
});

