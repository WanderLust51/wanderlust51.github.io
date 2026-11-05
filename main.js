$(document).ready(function(){

    //Picture adjustment

    let picHeight = $('#picture')[0].offsetHeight
    let pictureExtra = (Math.sqrt( ((picHeight**2)*Math.cos(85*Math.PI/180)**2)/(1+Math.cos(85*Math.PI/180)**2)) )
    if (document.documentElement.clientWidth > 700){
        $('#picture').css('right', `-${pictureExtra}px`)
    }

    purpleRain()

    // El vinilo: un scratch y de vuelta al inicio
    $('.gotoTop').on('click', function(e){
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        e.preventDefault()
        const link = $(this)
        link.addClass('scratching')
        setTimeout(function(){
            link.removeClass('scratching')
            document.getElementById('banner').scrollIntoView({ behavior: 'smooth' })
        }, 450)
    })
})


// Purple Rain: una lluvia morada en el banner, en honor al simulador de lluvia
function purpleRain(){
    const canvas = document.getElementById('rain')
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    const banner = document.getElementById('banner')
    let drops = []
    let running = true
    let width, height

    function makeDrop(randomY){
        const z = Math.random()                // profundidad: 0 lejos, 1 cerca
        return {
            x: Math.random() * width,
            y: randomY ? Math.random() * height : -20 - Math.random() * 100,
            z: z,
            len: 8 + z * 14,
            speed: 2 + z * 5,
        }
    }

    function resize(){
        const dpr = window.devicePixelRatio || 1
        width = banner.clientWidth
        height = banner.clientHeight
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        const count = Math.round(width / 9)
        drops = Array.from({ length: count }, () => makeDrop(true))
    }

    function frame(){
        if (!running) return
        ctx.clearRect(0, 0, width, height)
        for (const d of drops){
            ctx.strokeStyle = `rgba(199, 199, 255, ${0.08 + d.z * 0.22})`
            ctx.lineWidth = 0.6 + d.z * 1.1
            ctx.beginPath()
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(d.x, d.y + d.len)
            ctx.stroke()
            d.y += d.speed
            if (d.y > height) Object.assign(d, makeDrop(false))
        }
        requestAnimationFrame(frame)
    }

    // Solo llueve mientras el banner se ve
    new IntersectionObserver(function(entries){
        const visible = entries[0].isIntersecting
        if (visible && !running){
            running = true
            requestAnimationFrame(frame)
        }
        running = visible
    }).observe(banner)

    window.addEventListener('resize', resize)
    resize()
    requestAnimationFrame(frame)
}
