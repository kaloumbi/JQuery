$(function () {
    // Dans cette partie, nous verrons la méthode 
    // .animate() utilisée pour céer des animations personnalisées.
    // $(selecteur).animate({paramètres},vitesse,callback);

    $("#play").click(function () {
        $(".box").animate({
            left: "500px",
            width: "+=100px",
            height: "+=100px",
        }, 2000).animate({
            opacity: "0.1"
        }, {
            'queue': false, //pour gérer deux animations en meme temps
            'duration': 2000
        })

        $('#stop').click(function() {
            $('.box').stop(true, true) //stop la 1ere animation et la 2eme à l'étap finale
        })
    })

})
