$(function() {
 
//*magnific-popup http://dimsemenov.com/plugins/magnific-popup/
$('.magnific-popup').magnificPopup({
	type: 'inline',
	midClick: true,
});

// * Аякс отправка форм
 //Документация: http://api.jquery.com/jquery.ajax/
  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку!");
      $("#form").trigger("reset");

    });
    return false;
  });
 

})

jQuery(function($){
   $(".phone").mask("+7(999) 999-99-99");
   });