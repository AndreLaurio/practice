$(document).ready(function(){

    // $(window).ready(function() {
    //     $("#title").hide();
         
    // });

    $("#first-div").on('click','#btn', function(){

        // var first_name = $('#first-div').find('input[id="first-name"]').val();
        // var last_name  = $('#first-div').find('input[id="last-name"]').val();
        // var age        = $('#first-div').find('input[id="age"]').val(); 

        
        $('#btn').removeClass('btn-primary').addClass('btn-danger');

    });

});