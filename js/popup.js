var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var mapOpen = document.querySelectorAll("a.js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    setTimeout(function () {
        popup.classList.remove("fixer");
    }, 600);

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
        setTimeout(function () {
            popup.classList.remove("modal-error");
        }, 600);
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
});

for (var i = 0; i < mapOpen.length; i++) {
    mapOpen[i].addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
        overlay.classList.add("modal-content-show");
    });
}

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show") && overlay.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-content-show");
        }
    }
});

overlay.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
});
