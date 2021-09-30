function validateForm(print_permission) {

    let Y_value = $('#Y_value').val();
    let X_value = $('#X_value').val();

    let arrR = $("input[type='checkbox']");
    let R_element = $.grep(arrR, function (checkedR) {
        return checkedR.checked === true;
    });
    let R_value = R_element.length !== 0 && R_element[0].value;

    let info = "";
    info += "<span>" + validateY(Y_value) + "</span>";
    info += "<span>" + validateX(X_value) + "</span>";
    info += "<span>" + validateR(R_value) + "</span>";
    if (print_permission) {
        $('.Error_text').html(info);
    }

    return (info === "<span></span>".repeat(3));
}

function validateY(field) {

    if (!(field.trim() === "")) {
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(field)) {
            if ((parseInt(field) > -3) && (parseInt(field) < 5)) {
                return "";
            } else return "Координата Y задается числом в промежутке (-3...5)!\n";
        } else return "Координата Y задается числом!\n";
    } else return "Не введена координата Y!\n";
}

function validateX(field) {

    if (field === null) {
        return "Не введена координата X!\n";
    } else return "";
}

function validateR(R_value){
    if (R_value === false) {
        return "Поле не может быть невыбранным";
    } else {
        return "";
    }
}
//
// function validateR() {
//     var inputs = document.getElementsByName("R");
//     for (var i = 0; i < inputs.length; i++) inputs[i].onchange = checkBoxHandler;
// }

// function validateR() {
//     var inputs = document.getElementsByName("R");
//     for (var i = 0; i < inputs.length; i++) inputs[i].onchange = checkBoxHandler();
//     return "";
// }
//
// function checkBoxHandler(e) {
//     for (var i = 0; i < inputs.length; i++)
//         if (inputs[i].checked && inputs[i] !== this) inputs[i].checked = false;
//
// }
// validateR();

var inputs = document.getElementsByName("R");
for (var i = 0; i < inputs.length; i++) inputs[i].onchange = checkBoxHandler;

function checkBoxHandler(e) {
    for (var i = 0; i < inputs.length; i++)
        if (inputs[i].checked && inputs[i] !== this) inputs[i].checked = false;
}