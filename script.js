var fontColor = '#ffffff';
        
$("#csc").hide();
$("#phl").hide();
$("#contact").hide();
$("#aboutButton").click(function() {
    $("#csc").hide("slow");
    $("#phl").hide("slow");
    $("#contact").hide("slow");
    $("#about").show("slow");
});
$("#cscButton").click(function() {
    $("#about").hide("slow");
    $("#phl").hide("slow");
    $("#contact").hide("slow");
    $("#csc").show("slow");
});
$("#phlButton").click(function() {
    $("#csc").hide("slow");
    $("#about").hide("slow");
    $("#contact").hide("slow");
    $("#phl").show("slow");
});
$("#contactButton").click(function() {
    $("#csc").hide("slow");
    $("#phl").hide("slow");
    $("#about").hide("slow");
    $("#contact").show("slow");
});
$("div#menu > ul li").mouseover(function() {
    $(this).animate({
        color: fontColor,
        margin: '0 0 0 20px'
     }, 200)
}).mouseout(function() {
    $(this).animate({
        color: '#999',
        margin: '0'
     }, 200)
});
$("h1").mouseover(function() {
    $(this).animate({
        color: '#1C8FE1'
     }, 200)
}).mouseout(function() {
    $(this).animate({
        color: fontColor
     }, 200)
});