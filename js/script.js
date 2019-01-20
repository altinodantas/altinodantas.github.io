$.when( $.ready ).then(function() {

    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    
    $("#home").fadeIn("slow");

    let d = new Date();
    let n = d.getFullYear();

    $(".bottom p").html("Intelligence for Software (i4soft) - " + n);
   
});

$("a[href^='#']").click(function(event){        
    event.preventDefault();
    
    $( "section" ).hide();
    $(this.hash).fadeIn("fast");

    $("a").removeClass();
    
});
