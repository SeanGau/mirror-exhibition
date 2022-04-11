let myModal = new bootstrap.Modal(document.getElementById('workModal'), {})
$('.workbox').on('click', function (e) {
    e.preventDefault()
    let imgpath = $('img', this).attr('src')
    console.log(imgpath)
    //$('#workImage').css('background-image', `url("${imgpath}")`)
    $('#workImage img').attr("src", imgpath)
    if ($(this).data("angle") == "p" && $(window).height() < $(window).width()) {
        $('#workImage .img-box').addClass("h-100")
    } else {
        $('#workImage .img-box').removeClass("h-100")
    }
    myModal.toggle()
})