// Lado A: proyectos reales (featured: true). Lado B: experimentos.
// El orden del array es el orden en que aparecen en la página.
const projects = [
    {
        featured: true,
        title: 'Luval Store',
        img: 'imgs/luvalstore1.png',
        url: 'https://luval-store.vercel.app/',
        tagline: 'Tienda digital de remodelaciones',
        description: 'Comercio digital moderno de remodelaciones: pisos, revestimientos, griferías y muebles, además del diseño de cocinas y muebles a medida.',
        highlights: [
            'Panel de administrador que maneja el 90% de la página: artículos, categorías, contacto, diseños, proyectos y demás recursos publicados.',
            'Pedidos que el cliente arma en la web y envía por WhatsApp, sin pagos en línea.',
            'Catálogo organizado por departamentos.',
        ],
        skills: ['Next.js', 'React', 'Supabase', 'Vercel', 'Claude Code']
    },
    {
        featured: true,
        title: 'Kibo Notes',
        img: 'imgs/kibonotes1.png',
        url: 'https://kibo-notes.vercel.app/',
        tagline: 'Tu libreta de clases',
        description: 'App web sencilla para tomar notas, especializada para entornos académicos.',
        highlights: [
            'Apuntes rápidos en Markdown, organizados por materias y clases.',
            'Las notas se guardan en tu propio dispositivo.',
            'Instalable como app (PWA).',
        ],
        skills: ['Next.js', 'React', 'Supabase', 'Vercel', 'PWA', 'Claude Code']
    },
    {
        title: 'Simulador de partículas de lluvia',
        img: 'imgs/rain.png',
        url: 'https://github.com/WanderLust51/Purple-Rain',
        description: 'Un simulador de lluvia natural, eficiente y realista. Usa programación orientada a objetos para manejar dinámicamente el tamaño, la dirección y el movimiento de cada gota y dar una impresión auténtica.',
        skills: ['Python', 'Pygame', 'POO', 'Parallax design']
    },
    {
        title: 'Snake',
        img: 'imgs/snake.png',
        url: 'https://github.com/WanderLust51/snake',
        description: 'Juego clásico de snake hecho en Pygame, usando matrices para simular el espacio, la serpiente y su comportamiento. Se puede jugar tanto en una ventana como en la terminal.',
        skills: ['Python', 'Pygame', 'POO']
    },
    {
        title: 'Modelo predictivo de Regresión Lineal',
        img: 'imgs/ml1.png',
        url: 'https://colab.research.google.com/drive/1sP_PPuHY2zEwjbJbYc6cSfGukUhXabfp?usp=sharing',
        description: 'Modelo predictivo que convierte grados Celsius a grados Fahrenheit.',
        skills: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib']
    },
]

function chipList(skills){
    let ul = $('<ul class="chips"></ul>')
    for (let skill of skills){
        ul.append($('<li class="chip"></li>').text(skill))
    }
    return ul
}

function trackNumber(n){
    return String(n).padStart(2, '0')
}

$(document).ready(function(){

    let featuredCont = $('#featured-container')
    let projectCont = $('#project-container')

    projects.forEach(function(project, i){
        let track = trackNumber(i + 1)

        if (project.featured){
            let article = $('<article class="featured"></article>')

            let media = $('<a class="featured-media" target="_blank" rel="noopener"></a>')
                .attr('href', project.url)
                .attr('aria-label', `Abrir ${project.title}`)
                .append($('<img loading="lazy">').attr('src', project.img).attr('alt', `Captura de ${project.title}`))

            let body = $('<div class="featured-body"></div>')
            body.append($('<span class="track-num"></span>').text(`Pista ${track}`))
            body.append($('<h3></h3>').text(project.title))
            body.append($('<p class="featured-tagline"></p>').text(project.tagline))
            body.append($('<p></p>').text(project.description))

            let ul = $('<ul class="highlights"></ul>')
            for (let h of project.highlights){
                ul.append($('<li></li>').text(h))
            }
            body.append(ul)
            body.append(chipList(project.skills))

            let actions = $('<div class="featured-actions"></div>')
            actions.append(
                $('<a class="btn-live" target="_blank" rel="noopener"></a>')
                    .attr('href', project.url)
                    .text('Ver en vivo ↗')
            )
            body.append(actions)

            article.append(media).append(body)
            featuredCont.append(article)
            return
        }

        let card = $('<a class="project" target="_blank" rel="noopener"></a>').attr('href', project.url)

        let media = $('<div class="project-media"></div>')
            .append($('<img>').attr('src', project.img).attr('alt', `Captura de ${project.title}`))

        let body = $('<div class="project-body"></div>')
        body.append($('<span class="track-num"></span>').text(`Pista ${track}`))
        body.append($('<h3></h3>').text(project.title))
        body.append($('<p></p>').text(project.description))
        body.append(chipList(project.skills))

        card.append(media).append(body)
        projectCont.append(card)
    })

})
