var password = document.getElementById('password');
var btn = document.getElementById('btnSubmit');
var mypass = "tann"

password.onmouseleave = MouseLeave;
btn.onmouseenter = mouseEnter;
//btn.onmouseleave = btnMouseLeave;
var flag = true;
var mgLeft = 0;
var count = 0;

function MouseLeave() {

    var userPass = password.value;
    if (userPass.length > 0) {
        if (userPass !== mypass) {
            password.style.borderColor = '#e52213';
            flag = false;

        } else {
            flag = true;
        }
    }


}

function mouseEnter() {
    if (flag == false) {
        btn.className += " btn btn-danger"

        if (count % 2 == 0) {
            mgLeft = 150;
            count += 1;
        } else {
            mgLeft = 0;
            count += 1;
        }

        btn.style.marginLeft = mgLeft + 'px';


    } else {
        password.style.borderColor = '#59FF00';
        $('#btnSubmit').removeClass("btn btn-danger")
        btn.className += " btn btn-success"
        btn.style.marginLeft = 0 + 'px';
    }


}