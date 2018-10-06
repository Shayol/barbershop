import "../scss/main.scss";

function importAll(r) {
    let icons = {};
    r.keys().map((item, index) => { icons[item.replace('./', '')] = r(item); });
    return icons;
}

const images = importAll(require.context('../icons', false, /\.svg$/));




window.addEventListener("load", function () {
    function mobileMenu() {
        let open = document.querySelector(".js-nav");

        let close = document.querySelector(".js-menu-close");

        let openLogin = document.querySelector(".js-show-login-mobile");

        function closeMenu() {
            open.classList.add("js-nav--closed");
            open.classList.remove("js-nav--opened");
        }

        if (open && close) {
            open.addEventListener('click', function () {
                if (open.className.indexOf("js-nav--closed") != -1) {
                    open.classList.remove("js-nav--closed");
                    open.classList.add("js-nav--opened");
                }
            });
            close.addEventListener('click', function () {
                closeMenu();
                event.stopPropagation();
            });

            if (openLogin) {
                openLogin.addEventListener('click', function () {
                    closeMenu();
                    event.stopPropagation();
                });
            }
        }


    }

    (function setActiveLocation() {
        let links = document.querySelectorAll(".js-menu-item");
        let currentHref = window.location.href;

        if (links.length > 0) {
            links.forEach(function (item) {
                if (currentHref == item.querySelector("a").href) {
                    item.classList.add("top-menu__item--active");
                }
            });
        }


    })();

    function login() {
        let mobOpen = document.querySelector(".js-show-login-mobile");
        let menuOpen = document.querySelector(".js-show-login");
        let el = document.querySelector(".js-login");

        if (mobOpen && menuOpen && el) {
            [mobOpen, menuOpen].forEach(function (link) {
                link.addEventListener('click', function (e) {
                    el.style.display = "initial";
                    e.preventDefault();
                });
            });
            el.addEventListener('click', function (e) {
                if (e.target.classList.contains("js-login-close")) {
                    el.style.display = "none";
                    e.preventDefault();
                }
            });
        }
    }

    mobileMenu();
    login();
});