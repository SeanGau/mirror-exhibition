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