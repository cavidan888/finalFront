$(document).ready(function () {

    var count = 0;
    $(".search>a").on("click", function () {

        count++;
        console.log(count);

        if (count % 2 != 0) {
            $(".search-bar").css("visibility", "visible");
            $(".search-bar").css("opacity", "1");
            $(".search-bar").css("transition", "0.5s ease");
        }
        else {
            $(".search-bar").css("visibility", "hidden");
            $(".search-bar").css("transition", "0.5s ease");
            $(".search-bar").css("opacity", "0");
        }

       
       
    })

    $(".brand>img").css("top", "0")
    $(".brand>img").css("transition", "0.5s ease")
})

