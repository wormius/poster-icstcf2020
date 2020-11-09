$(document).ready(function(){
    $(".visor").hide();
    $("#A").show();


    $("input[name=fmradio]").click(function () {    
        var fms = $(this).val();
        $("#forcematriximg").attr("src", "src/pfm0"+fms+".png");
    });

    $("#btnA").click(function () {
        $(".visor").hide();
        $("#A").show();
    });

    $("#btnAe").click(function () {
        $(".visor").hide();
        $("#Ae").show();
    });
    $("#btnB").click(function () {
        $(".visor").hide();
        $("#B").show();
    });
    $("#btnBe").click(function () {
        $(".visor").hide();
        $("#Be").show();
    });
    $("#btnC").click(function () {
        $(".visor").hide();
        $("#C").show();
    });
    $("#btnD").click(function () {
        $(".visor").hide();
        $("#D").show();
    });
});