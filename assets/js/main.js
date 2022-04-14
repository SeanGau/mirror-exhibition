$(function () {
    $(".box-left.mirror").html($(".box-left.real").html())
    $(".box-center.mirror").html($(".box-center.real").html())
    $(".box-right.mirror").html($(".box-right.real").html())
})
$(".box-left.real, .box-center.real, .box-right.real").on({
    mouseenter: function (e) {
        targetClass = `${$(this).attr("class")}`
        switch (targetClass) {
            case "box-left real":
                $(".box-right.mirror").removeClass("show")
                $(".box-left.mirror").addClass("show")
                $(".box-center.real").css("transform", "translateX(100%)")
                $(".box-right.real").css("transform", "translateX(100%)")
                break
            case "box-center real":
                $(".box-center.mirror").addClass("show")
                $(".box-right.real").css("transform", "translateX(100%)")
                break
            case "box-right real":
                $(".box-right.mirror").addClass("show")
                $(".box-left.real").css("transform", "translateX(-100%)")
                $(".box-center.real").css("transform", "translateX(-100%)")
                break
        }
    },
    mouseleave: function (e) {
        $(".box-left.real, .box-center.real, .box-right.real").css("transform", "")
    }
})