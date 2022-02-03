$("#login").click(function() {
    $.ajax({
        url: '',
        method: '',
        contentType: '',
        dataType: '',
        data: JSON.stringify(),
        success: function (result) {
            console.log("success", result);
            showSuccess("Success");
        },
        error: function (request, msg, error) {
            showError(request.responseJSON.message);
        }
    });
});