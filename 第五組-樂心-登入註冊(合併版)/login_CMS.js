function myFunction2() {
    var a = document.getElementById("pwd-5");
    if (a.type === "password") {
        a.type = "text";
    } else {
        a.type = "password";
    }
}