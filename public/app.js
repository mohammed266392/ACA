/* eslint-disable max-len */
const app = {

    // fonction d'initialisation, lancée au chargement de la page
    init() {
        app.addEventListenerToActions();
    },
    addEventListenerToActions() {
        app.scrollHeader();
    },
    scrollHeader() {
        let lastScrollTop = 0;
        const header = document.querySelector(".header2");
        // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
        window.addEventListener("scroll", () => { // or window.addEventListener("scroll"....
            const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            console.log(st);
            if (st > lastScrollTop) {
                // downscroll code
                header.style.transform = "translateY(-100%)";
            } else {
                header.style.transform = "translateY(0%)";
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        });
    },
};
document.addEventListener("DOMContentLoaded", app.init);
