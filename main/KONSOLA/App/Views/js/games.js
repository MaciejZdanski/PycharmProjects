//var exec = require('child_process').exec;
$(document).ready(function (){

    if(!window.localStorage.getItem('token') || !window.localStorage.getItem('email')){
        window.location.pathname = '/'
    }
    
    $('#kolko').on('click', run_kolko)
    $('#pacman').on('click', run_pacman)
    
    function run_kolko(){
        $.ajax({
            type: "GET",
            url: "/kolko",
            
            success: function(res){
                
                },
                error: function (xhr, ajaxOptions, thrownError) {
                
                },
            dataType: "json",
            contentType : "application/json"
        });
    }
    
    function run_pacman(){
        $.ajax({
            type: "GET",
            url: "/pacman",
            
            success: function(res){
                
                },
                error: function (xhr, ajaxOptions, thrownError) {
                
                },
            dataType: "json",
            contentType : "application/json"
        });
    }
})