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

    body.addEventListener('click', event => {
        const id = event.target.dataset.id;
        // Obtener la ID asignada en el HTML al elemento
        if(id){
            // Para los otros botones, borrar el Activo para activar la sección clickada
            section_buttons.forEach((btn) => {
                btn.classList.remove('active')
            })
            event.target.classList.add('active')

            //Esconder las demás secciones
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            //Añadir la clase "Activo" al elemento clickado
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}

SectionTransition();