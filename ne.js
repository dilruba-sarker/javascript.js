var $finalprice = $('.W_E-total').val();
var promocode;

$('#update').click(function() {
  promocode = $('#promocode').val();
  total = $('.W_E-total').val();

  finalprice = total;
  if ((promocode == 'test') || (promocode == 'test1')) {
   finalprice = +finalprice * 0.9;
  } else if (promocode.length < 1) {
   finalprice = +finalprice * 1;
  } else {
   alert("Invalid Promo Code");
   finalprice = 0;
  }
  $('.W_E-total').val(finalprice);
}); 