$(document).ready(function(){

  $("form#politics").submit(function(event) {
    event.preventDefault();

    const gov = parseInt($("#moreOrLess").val());
    const guns = parseInt($("input:radio[name=gunControl]:checked").val());

    const leaning = gov + guns;

    if (gov === 2 && guns === 2) {
      $(".conservative").show();
      $(".liberal").hide();
      $(".moderate").hide();
      $(".unknown").hide();
    }
    else if (gov === 1 && guns === 1) {
      $(".moderate").show();
      $(".liberal").hide();
      $(".conservative").hide();
      $(".unknown").hide();
    }
    else if (gov === 0 && guns === 0) {
      $(".liberal").show();
      $(".conservative").hide();
      $(".moderate").hide();
      $(".unknown").hide();
    }
    else {
      $(".unknown").show();
      $(".liberal").hide();
      $(".conservative").hide();
      $(".moderate").hide();
    }
  });
});