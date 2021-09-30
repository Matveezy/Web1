function receiveSubmit() {

    if (validateForm(true)) {
        let Y_value = $('#Y_value').val();
        let X_value = $('#X_value').val();

        let arrR = $("input[type='checkbox']");
        let R_element = $.grep(arrR, function (checkedR) {
            return checkedR.checked === true;
        });
        let R_value = R_element.length !== 0 && R_element[0].value;

        $.ajax({
            type: 'POST',
            url: '../src/php/upload.php',
            data: {'y': Y_value, 'x': X_value, 'r': R_value},
            success: function (response) {
                console.log(response);

                if (response !== undefined){
                    let localS = localStorage.getItem("1");

                    if (localS === null){
                        localStorage.setItem("1", response); 
                    }
                    else {
                        localStorage.setItem("1", (localStorage.getItem("1") + response));
                    }
                    cleanTable();
                    document.getElementById("table").innerHTML += localStorage.getItem("1");

                }else {
                    alert("Error response from server");
                }
            },
            error: function (xls, str) {
                alert("Возникла ошибка: " + str);
            }
        })
    }
}

window.onload = function() {
    if (localStorage.getItem("1") !== null){
        document.getElementById("table").innerHTML += localStorage.getItem("1");
    }
}
