$(function () {
  let $btn = $(".btnMenu");

  $(".btnMenu").on("click", function () {
    $(".hambuger").fadeToggle(250);
    $(".btnMenu").toggleClass("on");
  });

  $(".btnMenu").on("click", function () {
    $(".login > img").toggle();
  });

});
/* //header */

$(function () {
  $(".acc-que").on("click", function () {
    $(this).next(".acc-ans").stop().toggle();
    //현재 클릭된 .acc-que에게 toggle 클래스 메소드('on') 적용
    //형제 요소한테 on을 제거
    $(this).toggleClass("on").siblings().removeClass("on");
    $(this).next(".acc-ans").siblings(".acc-ans").stop();
  });
});
/* //mobile_menu */

$(function () {
  $("footer .second button").on("click", function () {
    $(".second .in").toggleClass("on");
  });
});
/* //footer */
