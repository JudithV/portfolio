const sections = document.querySelectorAll('.section');
const section_buttons = document.querySelectorAll('.controls');
const section_button = document.querySelectorAll('.control');
const body = document.querySelector('.main-content');

function SectionTransition(){
    for(let i = 0; i < section_button.length; i++){
        section_button[i].addEventListener('click', function(){
            let current_button = document.querySelectorAll('.active-btn');
            current_button[0].classList = current_button[0].className.replace('active-btn', '');
            this.classList += ' active-btn';
        })
    }
}

SectionTransition();