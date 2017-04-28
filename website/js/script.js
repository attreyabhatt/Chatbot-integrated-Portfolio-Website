$(document).ready(function(){
    $('#para').on('click',function(){
        $('#headingdiv').hide("slow");
    });

    $('img').on('click',function(){
        $('#headingdiv').show("slow");
    });

    $('#submit').on('click',function(){
       var search_value =  $('#search').val();
        alert(search_value);
    });
});

