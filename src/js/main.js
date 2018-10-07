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

    let popups = {
        popups: document.querySelectorAll(".js-popup"),
        success: document.querySelector(".js-popup--success"),
        failure: document.querySelector(".js-popup--failure"),
        addListeners() {
            this.popups.forEach(popup => {
                popup.addEventListener('click', e => {
                    if (!e.target.classList.contains("js-popup-body")) {
                        popup.style.display = "none";
                    }
                })
            })
        },
        showSuccess() {
            this.success.style.display = "flex";
        },
        showFailure() {
            this.failure.style.display = "flex";
        }
    };

    let form = {
        el: document.querySelector('.js-form'),
        addListeners() {
            if (this.el) {
                this.el.addEventListener('submit', e => {
                    console.log(this.el.elements);
                    let fieldsWithErrors = Array.prototype.filter.call(this.el.elements, formEl => {
                        if (!formEl.validity.valid) {
                            formEl.classList.add("invalid");
                            return true;
                        }
                        return false;
                    });

                    if (fieldsWithErrors.length > 0) {
                        e.preventDefault();
                        popups.showFailure();
                    }
                    else {
                        e.preventDefault(); //to see popup and not actually sibmit form
                        popups.showSuccess();
                    }
                });
            }
        }
    };

    mobileMenu();
    login();
    popups.addListeners();
    form.addListeners();
});