
console.log("hi")
$('#menuIcon').click(function(){
  $('.hamburgerList'). toggle();
});

$(".item").click(function(){
  $(this).find(">:first-child").toggle();
});

$(".tipBtn").click(function(){
  $("#tipBox").toggle();
});

// $(".payBtn").click(function(){
//   $("#payWay").toggle();
// })
