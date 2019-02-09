let formLogin = prompt("Please, enter your username", "");
let formPassword;

if (formLogin === null || formLogin === "") {
    alert("Canceled");
} else if (formLogin.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (formLogin !== "Admin" && formLogin !== "User") {
    alert("I don't know you");
} else {
    formPassword = prompt("Please, enter your password", "");
}

if (formPassword === null || formPassword === "") {
    alert("Canceled");
} else if (formLogin === "User" && formPassword === "UserPass" ||
 formLogin === "Admin" && formPassword === "RootPass") {
    if (new Date().getHours() < 20) {
        if (formLogin === "User") {
            alert("Good day, dear User!");
        } else {
            alert("Good day, dear Admin!");
        }
    } else {
        if (formLogin === "User") {
            alert("Good evening, dear User!");
        } else {
            alert("Good evening, dear Admin!");
        }
    }
} else {
    alert("Wrong password");
}
