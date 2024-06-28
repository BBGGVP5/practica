function validateForm() {
        if (!$('input[name="answer"]:checked').length) {
            $('#alert').show();
        } else {
            $('#alert').hide();
            document.getElementById("Form1").submit();
        }
    }