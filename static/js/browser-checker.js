function BrowserChecker() {
    this.isIE = function () {
        return /MSIE 9/i.test(navigator.userAgent)
            || /MSIE 10/i.test(navigator.userAgent)
            || /rv:11.0/i.test(navigator.userAgent)
    };
    this.isEdge = function () {
        return /Edge\/\d./i.test(navigator.userAgent)
    };
    this.isSafari = function () {
        return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    };
    this.isiOS = function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };
    this.isChrome = function () {
        var isChromium = window.chrome;
        var winNav = window.navigator;
        var vendorName = winNav.vendor;
        var isOpera = typeof window.opr !== "undefined";
        var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
        var isIOSChrome = winNav.userAgent.match("CriOS");

        if (isIOSChrome) {
            return true;
        }

        return isChromium !== null &&
            typeof isChromium !== "undefined" &&
            vendorName === "Google Inc." &&
            isOpera === false &&
            isIEedge === false;
    }
}

$(document).ready(function () {
    window.browserChecker = new BrowserChecker();

    if (browserChecker.isiOS()) {
        $("body").addClass('bc--ios');
    }

    if (browserChecker.isSafari()) {
        $("body").addClass('bc--safari');
    }

    if (browserChecker.isChrome()) {
        $("body").addClass('bc--chrome');
    }
});