/* hamburger */
$('.hamburger').on('click',function(){
  $('.hamburger').toggleClass('active');
  $('.nav-hamburger').fadeIn();
});

$('.nav-hamburger').on('click',function(){
  $('.nav-hamburger').fadeOut();
});

/* faq */
$(".faq-list dd").hide();
$(".faq-list").on("click", function(e) {
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});

/* email */

// $(function(){
//   $('mail').on('click', function(){
//     if($('#mail').val() === ''){
//       alert('Whoops, make sure it is an email');
//       $('#mail').focus();
//       return false;
//     }
//     alert('Sent');
//     });
// });