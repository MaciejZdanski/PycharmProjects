$(document).ready(function login(){
    $('#send_reg').on('click', function sendclick() {
        var email = $('#email_reg').val();
        var password = $('#password_reg').val();
        var password_repeat = $('#password_repeat').val();
        if (password != password_repeat){
            return
        }

        $.ajax({
            type: "POST",
            url: "/registercontroller",
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
function validateEmail(email) 
    {
        var re = /\S+@\S+.\S+/;
        return re.test(email);
    }