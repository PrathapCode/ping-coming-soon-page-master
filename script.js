function validation() {

    var text =document.getElementById("email").value;

    var regexp = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    if (regexp.test(text))
    {
        document.getElementById("error").style.visibility = "none";
        document.getElementById("email").style.border = "none";

    } else {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("email").style.border = "1px solid red";
    }
}