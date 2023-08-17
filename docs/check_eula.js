window.onload = function(){
    var eula = getCookie("eula");
    if (eula != "True"){
        alert("By clicking OK you agree to the terms of services of our site!")  
    }
    setCookie("eula", "True", 1)
};