let myModal = new bootstrap.Modal(document.getElementById('workModal'), {})
$('.workbox').on('click', function (e) {
    e.preventDefault()
    let imgpath = $('img', this).attr('src')
    console.log(imgpath)
    //$('#workImageBox').css('background-image', `url("${imgpath}")`)
    $('#workImageBox img').attr("src", imgpath)
    /*
    if ($(this).data("angle") == "p" && $(window).height() < $(window).width()) {
        $('#workImageBox .img-box').addClass("h-100")
    } else {
        $('#workImageBox .img-box').removeClass("h-100")
    }*/
    myModal.toggle()
})