if (head.browser.ie && head.browser.version < 8) {
    location.replace("ie7/ie7.html");
}

if (head.browser.ie && head.browser.version < 9) {
    head.load("js/html5.js");
}

head.js(
    "js/jquery-1.10.2.min.js",
    "js/jquery.actual.min.js",
    // "js/tip.js",
    "js/tip.min.js",
    "js/scripts.js",
    function() {

        $('.tip-right-js').tooltip();

        $('.tip-top-js').tooltip({
            side: "top",
        });

        $('.tip-bottom-js').tooltip({
            side: "bottom"
        });

        $('.tip-left-js').tooltip({
            side: "left"
        });

        $('.tip-fix-js').tooltip({
            fix: true,
            hover: true
        });

        $('.tip-js').tooltip({
            side: "top",
            hover: true,
            fullWidthClass: ''
        });

    }
);