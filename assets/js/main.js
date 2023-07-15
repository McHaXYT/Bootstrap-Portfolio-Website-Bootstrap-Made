const menuBtn = document.getElementById("header-button");
const headerMenu = document.getElementById("header");
const headerOption = document.querySelectorAll(".nav-link");
const topBtn = document.getElementById("back-to-top-btn");

menuBtn.addEventListener("click", function () {
    headerMenu.classList.toggle("display-none");
    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-close");
    } else if (menuBtn.classList.contains("fa-close")) {
        menuBtn.classList.remove("fa-close");
        menuBtn.classList.add("fa-bars");
    }
});

headerOption.forEach((option) => {
    option.addEventListener("click", function () {
        headerOption.forEach((link) => {
            if (link.classList.contains("active")) {
                link.classList.remove("active");
            }
        });
        if (option.classList.contains("active")) {
            option.classList.remove("active");
        } else {
            option.classList.add("active");
        }
    });
});

window.onscroll = function () {
    var pageOffset =
        document.documentElement.scrollTop || document.body.scrollTop;
    if (pageOffset <= 1000) {
        if (topBtn.classList.contains("d-none")) {
        } else if (!topBtn.classList.contains("d-none")) {
            topBtn.classList.add("d-none");
        } else if (topBtn.classList.contains("d-flex")) {
            topBtn.classList.remove("d-flex");
        }
    } else {
        topBtn.classList.remove("d-none");
        topBtn.classList.add("d-flex");
    }
};
