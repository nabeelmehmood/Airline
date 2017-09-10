$(document).ready(function(){
    $("#booksubmit").click(function(){
    	$("#booking-form").hide("slow");
        $("#book-search-result").show("slow");
    });
});

$(document).ready(function(){
    $("#calcharges").click(function(){
    	$("#book-search-result").hide("slow");
        $("#book-purchase").show("slow");
    });
});

$(document).ready(function(){
    $("#purchase-button").click(function(){
        $("#payment-done").show("slow");
    });
});

$(document).ready(function(){
    $('.collapsible').collapsible();
  });