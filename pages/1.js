$(document).ready(function() {
  console.log('cool')
$('a[href*=#]').each(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname
&& this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($target) {
var targetOffset = $target.offset().top;
$(this).click(function() {
  console.log(targetOffset)
$("#nav li a").removeClass("active");
$(this).addClass('active');
$('html, body').animate({scrollTop: targetOffset}, 300);
return false;
});
$(document).scroll(function() {

  if($target==targetOffset){
    $("#nav li a").removeClass("active");
    $(this).addClass('active');
    return false;
  }
});

}
}
});

});
