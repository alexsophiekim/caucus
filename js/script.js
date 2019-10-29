
$('#menuIcon').click(function(){
  $('.hamburgerList'). toggle();
});

$(".item").click(function(){
  $(this).find(">:first-child").toggle();
});

$("#tip").click(function(){
  $("#tipBox").toggle();
});

$(".addBtn").click(function(){
	$(".lastqt").append('<div class="qty">1</div>')
  $(".lastnm").append('<div class="itemName">Tip</div>')
  $(".lastpr").append('<div class="price">$ 5.00</div>')

});

$("#pay").click(function(){
  $("#payWay").toggle();
});
