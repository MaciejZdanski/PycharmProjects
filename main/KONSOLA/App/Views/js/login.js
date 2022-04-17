$(document).ready(function login(){
    $('#send').on('click', function sendclick() {
        var email = $('#email').val();
        var password = $('#password').val();
        $.ajax({
            type: "POST",
            url: "/logincontroller",
            data: JSON.stringify({
            "email": email,
            "password": password
            }),
            success: function(res){
                if(res.token){
                    window.localStorage.setItem('token', res.token)
                    } 
                if(res.email){
                    window.localStorage.setItem('email',res.email)
                    window.location.pathname = '/games'
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr, ajaxOptions, thrownError)
                },
            dataType: "json",
            contentType : "application/json"
        });
    })
})