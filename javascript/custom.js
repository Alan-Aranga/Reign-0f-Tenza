// code to get rid of animation once the web page loads 

// window.addEventListener('load', () => {
//     const boxspinner = document.querySelector('.spinner-wrapper');
//     boxspinner.classList.add('spinner-finish');
// });

// $(document).ready(function() {
//     //Preloader
//     $(window).on("load", function() {
//     preloaderFadeOutTime = 500;
//     function hidePreloader() {
//     var preloader = $('.spinner-wrapper');
//     preloader.fadeOut(preloaderFadeOutTime);
//     }
//     hidePreloader();
//     });
//     });

//  script for page loader 

const spinnerwrapper = document.querySelector('.spinner-wrapper');
function finishedLoading () {
    spinnerwrapper.style.opacity = 0;
    setTimeout(() =>{
        spinnerwrapper.style.display = 'none';     
    }, 500);

}

window.onload = function () {
    setTimeout(() => {
        this.finishedLoading();
    }, 1000); 
}