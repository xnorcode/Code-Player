function updateOut(){
  $("iframe").contents().find("html").html(
    "<html><head><style type='text/css'>"
    + $("#cssPanel").val()
    + "</style></head><body>"
    + $("#htmlPanel").val()
    +"</body></html>"
  );

  document.getElementById("outPanel").contentWindow.eval($("#jsPanel").val());
}


// Header
$(".toggleButton")
.hover(function(){
  $(this).addClass("highlightedButton");
}, function(){
  $(this).removeClass("highlightedButton");
})
.click(function(){
  $(this).toggleClass("active")
  $(this).removeClass("highlightedButton");

  var panelID = $(this).attr("id") + "Panel";

  $("#" + panelID).toggle();

  var activePanels = $(".active").length;

  $(".panel").width(($(window).width() / activePanels) - 10);
});


// Content
$(".panel").height($(window).height() - $(".header").height());
$(".panel").width(($(window).width() / 2) - 10);

// html panel
$("textarea").bind("input propertychange", function(){
  updateOut();
});


updateOut();
