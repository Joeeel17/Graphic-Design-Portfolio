AOS.init({
    duration: 1800,
});

$("#myCarousel").carousel();
$(".item").click(function () {
    $("#myCarousel").carousel(1);
});

$(".left").click(function () {
    $("#myCarousel").carousel("prev");
});
