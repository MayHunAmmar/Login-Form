const InputBox =  document.querySelector(".js-type")
const ShowPassword = document.querySelector(".js-ShowPassword")
const HidePassword = document.querySelector(".js-password")

function PassToggle() {
    if (InputBox.type === "password") {
        InputBox.type = "text";

        setTimeout(() => {
            ShowPassword.classList.add("hide");
            HidePassword.classList.remove("hide");
        }, 70);
    } else {
        InputBox.type = "password";

        setTimeout(() => {
            ShowPassword.classList.remove("hide");
            HidePassword.classList.add("hide");
        }, 70);
    }
}

ShowPassword.addEventListener("click", PassToggle);
HidePassword.addEventListener("click", PassToggle);