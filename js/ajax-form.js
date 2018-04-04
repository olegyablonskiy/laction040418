$('form input[type=submit]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://tranquil-sierra-86540.herokuapp.com/email", 
        method: "POST",
        data: {
            name: $('#form-name').val(),
            email: $('#form-email').val()
        },
        dataType: "json"
    });
}

