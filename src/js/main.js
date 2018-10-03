import "../scss/main.scss";

import logotypeMob from '../icons/logotype-mobile.svg';
import menuIcon from '../icons/menu-icon.svg';
import menuClose from '../icons/menu-close.svg';
import advant1 from '../icons/advantage-1-illustration.svg';
import advant2 from '../icons/advantage-2-illustration.svg';
import advant3 from '../icons/advantage-3-illustration.svg';
import featuresTriangle from '../icons/triangle-bottom.svg';
import insta from '../icons/instagram.svg';
import facebook from '../icons/facebook.svg';
import vk from '../icons/vk.svg';
import logotypeDesk from '../icons/logotype-desktop.svg';
import logotypeTabl from '../icons/logotype-tablet.svg';
import beard1 from '../icons/beard-1.svg';
import beard2 from '../icons/beard-2.svg';
import beard3 from '../icons/beard-3.svg';
import beard4 from '../icons/beard-4.svg';
import beard5 from '../icons/beard-5.svg';




window.addEventListener("load", function () {
    function mobileMenu() {
        let open = document.querySelector(".js-nav");

        let close = document.querySelector(".js-menu-close");

        if (open && close) {
            open.addEventListener('click', function () {
                if (open.className.indexOf("js-nav--closed") != -1) {
                    open.classList.remove("js-nav--closed");
                    open.classList.add("js-nav--opened");
                }
            });
            close.addEventListener('click', function (e) {
                open.classList.add("js-nav--closed");
                open.classList.remove("js-nav--opened");
                event.stopPropagation();
            });
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

    mobileMenu();
});