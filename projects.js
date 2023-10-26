projects = [
    {
        title: 'Simple To-do list',
        img: 'imgs/todo.png',
        url: 'https://wanderlust51.github.io/to-do-List-1/',
        description: 'Una lista extremadamente simple para anotar tus tareas',
        skills: ['Html', 'Sass', 'Scss', 'Javascript', 'Jquery', 'Responsive Web Design']
    },
    {
        title: 'Prueba de Angular',
        img: 'imgs/mercadolibre.png',
        url: 'https://wanderlust51.github.io/desafio/',
        description: 'Una simple práctica poniendo a prueba mis conocimientos del framework Angular, Angular Material y Typescript',
        skills: ['Angular', 'Angular-material', 'Typescript', 'Scss']
    },
]

$(document).ready(function(){

    let projectCont = $('#project-container')

    for (let i in projects){

        let projectDiv = document.createElement('div')
        let img = document.createElement('img')
        let caption = document.createElement('a')
        
        $(projectDiv).addClass('project')

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
        $(projectDiv).append(caption)
        $(projectCont).prepend(projectDiv)
    }

})