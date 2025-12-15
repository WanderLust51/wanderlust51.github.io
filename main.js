$(document).ready(function(){
   
    //Picture adjustment

    picHeight = $('#picture')[0].offsetHeight
    pictureExtra = (Math.sqrt( ((picHeight**2)*Math.cos(85*Math.PI/180)**2)/(1+Math.cos(85*Math.PI/180)**2)) )
    //console.log(pictureExtra)
    if (document.documentElement.clientWidth > 700){
        $('#picture').css('right', `-${pictureExtra}px`)
    }
})