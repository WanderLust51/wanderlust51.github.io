projects = [
    {
        title: 'Simple To-do list',
        img: 'imgs/todo.png',
        url: 'https://wanderlust51.github.io/to-do-List-1/',
        description: 'Una lista extremadamente simple para anotar tus tareas',
        skills: ['Html', 'Sass', 'Scss', 'Javascript', 'Jquery', 'Responsive Web Design']
    },
    {
        title: 'Carrito de compra',
        img: 'imgs/cart.png',
        url: 'https://wanderlust51.github.io/desafio1/',
        description: 'Ejemplo de un carrito de compra en Angular',
        skills: ['Angular', 'Typescript', 'Scss']
    },
    {
        title: 'Prueba de Angular',
        img: 'imgs/mercadolibre.png',
        url: 'https://wanderlust51.github.io/desafio/',
        description: 'Una simple práctica poniendo a prueba mis conocimientos del framework Angular, Angular Material y Typescript',
        skills: ['Angular', 'Angular-material', 'Typescript', 'Scss']
    },
    {
        title: 'Simulador de partículas de lluvia',
        img: 'imgs/rain.png',
        url: 'https://github.com/WanderLust51/Purple-Rain',
        description: 'Un simulador de lluvia natural, eficiente y realista. Haciendo uso de la programación orientada a objetos para manejar dinamicamente, de cada entidad, su tamaño, dirección y movimiento para dar una impresión auténtica',
        skills: ['Python', 'Pygame', 'POO', 'Parallax design']
    },
    {
        title: 'Modelo predictivo de Regresión Lineal',
        img: 'imgs/ml1.png',
        url: 'https://colab.research.google.com/drive/1sP_PPuHY2zEwjbJbYc6cSfGukUhXabfp?usp=sharing',
        description: 'Modelo predictivo que convierte grados Celcius a grados Fahrenheit',
        skills: ['Python', 'Tensorflow', 'Keras', 'Numpy', 'Pandas', 'Matplotlib.pyplot'] 
    },
]

$(document).ready(function(){

    

    let projectCont = $('#project-container')

    for (let i in projects){

        let projectDiv = document.createElement('div')
        let previewDiv = document.createElement('div')
        let img = document.createElement('img')
        let caption = document.createElement('a')
        
        $(projectDiv).addClass('project')
        $(previewDiv).addClass('preview')

        // Preview
        let previewH2 = document.createElement('h2')
        previewH2.textContent = projects[i].title
        $(previewDiv).append(previewH2)

        // Caption
        $(caption).addClass('caption')
        let blur = document.createElement('div')
        let captionText = document.createElement('div')
        $(blur).addClass('blur')
        $(captionText).addClass('caption-text')

        let titleH1 = document.createElement('h1')
        let descriptionP = document.createElement('p')
        $(titleH1).text(projects[i].title)
        $(descriptionP).text(projects[i].description)
        
        $(captionText).append(titleH1).append(descriptionP)

        let span = document.createElement('span')
        for (let skillIndex in projects[i].skills){
            let chip = document.createElement('span')
            $(chip).text(projects[i].skills[skillIndex]).addClass('chip')
            $(span).append(chip)
        }
        $(captionText).append(span)

        $(caption).append(blur).append(captionText).attr('href', projects[i].url).attr('target', '_blank')

        $(img).attr('src', projects[i].img)
        $(projectDiv).append(img)
        $(projectDiv).append(previewDiv)
        $(projectDiv).append(caption)
        $(projectCont).prepend(projectDiv)
    }

})