$(document).ready(function () {
    $('#send-email-submit-button').click(function () {
        $.ajax({
            type: "POST",
            url: 'http://jaruss.net/mail.php',
            data: $('#send-email').serialize(),
            success: function () {
                $("#send-success").fadeIn().delay(5000).fadeOut();
                $("#send-email").find("input[type=text], textarea").val("");
            },
            error: function () { $("#send-error").fadeIn().delay(5000).fadeOut();  },
        });
    });
});
