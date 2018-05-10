﻿(function () {
    if ((/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/).test(navigator.userAgent)) {
        document.deviceClickEvent = 'tap';
    } else {
        document.deviceClickEvent = 'click';
    }
    window.a = document.deviceClickEvent;

    var designWidth = document.getElementsByTagName('head')[0].getAttribute('design-width');

    function auto_size() {
        var deviceWidth = document.documentElement.clientWidth;
        // console.log(deviceWidth + '   ' + designWidth);
        if (deviceWidth >= 750) {
            deviceWidth= 750;
        }
        document.documentElement.style.fontSize = deviceWidth / (designWidth / 100) + 'px';
    }


    auto_size()
    window.addEventListener('resize', auto_size, false);

    var media = document.createElement('style')
    media.innerHTML = "@media(min-width:" + 750 + "px){body{margin: 0 auto;width: " + 750 + "px;}.pc{left: 50%;right: initial;-webkit-transform: translate(-50%, 0);-ms-transform: translate(-50%, 0);-o-transform: translate(-50%, 0);transform: translate(-50%, 0);width: " + 750 + "px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}}";
    document.getElementsByTagName('head')[0].appendChild(media);
}());