function sendContact() {
    var valid;  
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
        url: "contact_mail.php",
        data:'userName='+$("#userName").val()+'&userEmail='+$("#userEmail").val()+'&phone='+$("#phone").val()+'&content='+$(content).val()+'&cpatchaTextBox='+$(cpatchaTextBox).val(),
        type: "POST",
        success:function(data){
        $("#mail-status").html(data);
        $("#userName").val("");
        $("#userEmail").val("");
        $("#phone").val("");
        $("#content").val("");
        $("#cpatchaTextBox").val("");
        },
        error:function (){}
        });
    }
}

function validateContact() {
    var valid = true;   
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    
    if(!$("#userName").val()) {
        $("#userName-info").html("(required)");
        $("#userName").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val()) {
        $("#userEmail-info").html("(required)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail-info").html("(invalid)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#phone").val()) {
        $("#phone-info").html("(required)");
        $("#phone").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#phone").val().match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
        $("#phone-info").html("(invalid)");
        $("#phone").css('background-color','#FFFFDF');
        valid = false;
        }
    if(!$("#content").val()) {
        $("#content-info").html("(required)");
        $("#content").css('background-color','#FFFFDF');
        valid = false;
    }
    // New
    if(!$("#cpatchaTextBox").val()) {
        $("#cpatchaTextBox-info").html("(required)");
        $("#content").css('background-color','#FFFFDF');
        event.preventDefault();
          debugger
          if (document.getElementById("cpatchaTextBox").value == code) {
            alert("Valid Captcha");
          }else{
            alert("Invalid Captcha. try Again");
            createCaptcha();
          }
        valid = false;
    }
    // New    
    return valid;
}
