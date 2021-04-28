var $links= $(".itmelinks");

$links.click(function(e){
    $links.removeClass("active");
    var clickedlink = e.target;
    clickedlink=$(clickedlink);
    var position= clickedlink.attr("data-pos")
  var   translatevalue= "tramslate3d ("+ position * 25 +"%, 0px, 0px)";
  $("#wrapper").css({
      transform:  translatevalue
  })
  clickedlink.addClass("active")
});