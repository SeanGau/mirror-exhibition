let myModal = new bootstrap.Modal(document.getElementById('workModal'), {})
$('.workbox').on('click', function (e) {
    e.preventDefault()
    let imgpath = $('img', this).attr('src')
    $('#workImageBox img').attr("src", imgpath)
    myModal.toggle()
    $(".modal-backdrop").css("z-index", "1057")
})

$("workModal").on("hide.bs.modal", function(e) {
    $(".modal-backdrop").css("z-index", "")
})

function startItro(duration) {
    anime({
        targets: ['#intro-overlay .textbox p', '#startanim'],
        opacity: 1,
        easing: 'easeInQuad',
        duration: duration,
        delay: anime.stagger(duration/2)
    })
    $("#startanim").on("click", function(e){
        $("#intro-overlay .textbox").fadeOut(duration/6)
        anime({
            targets: '#intro-overlay .topeye',
            translateY: "-100%",
            duration: duration/2,
            easing: 'easeInOutQuad',
        })
        anime({
            targets: '#intro-overlay .bottomeye',
            translateY: "100%",
            duration: duration/2,
            easing: 'easeInOutQuad',
            complete: function(anim) {
                $("#intro-overlay").fadeOut(duration/6, function(e) {})
            }
        })
    })
}