Scroller = {
    speed: 10,
    offsetParent: function(d) {
        offsetParent = d.offsetTop;
        if (d.offsetParent) {
            while (d = d.offsetParent) {
                offsetParent += d.offsetTop
            }
        }
        return offsetParent
    },
    scrollTop: function() {
        body = document.body;
        d = document.documentElement;
        if (body && body.scrollTop) {
            return body.scrollTop
        }
        if (d && d.scrollTop) {
            return d.scrollTop
        }
        if (window.pageYOffset) {
            return window.pageYOffset
        }
        return 0
    },
    attachEvent: function(a, b, d) {
        if (a.addEventListener) {
            return a.addEventListener(b, d, false)
        }
        if (a.attachEvent) {
            return a.attachEvent("on" + b, d)
        }
    },
    end: function(e) {
        if (window.event) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
            return
        }
        if (e.preventDefault && e.stopPropagation) {
            e.preventDefault();
            e.stopPropagation()
        }
    },
    scroll: function(d) {
        i = window.innerHeight || document.documentElement.clientHeight;
        h = document.body.scrollHeight;
        a = Scroller.scrollTop();
        if (d > a) {
            if (h - d > i) {
                a += Math.ceil((d - a) / Scroller.speed)
            } else {
                a += Math.ceil((d - a - (h - d)) / Scroller.speed)
            }
        } else {
            a = a + (d - a) / Scroller.speed
        }
        window.scrollTo(0, a);
        if (a == d || Scroller.offsetTop == a) {
            clearInterval(Scroller.interval)
        }
        Scroller.offsetTop = a
    },
    init: function() {
        Scroller.attachEvent(window, "load", Scroller.load)
    },
    load: function() {
        a = document.getElementsByTagName("a");
        Scroller.end(this);
        window.onscroll;
        for (i = 0; i < a.length; i++) {
            l = a[i];
            d = location.pathname;
            if (l.href && l.href.indexOf("#") != -1 && (l.pathname == d || "/" + l.pathname == d)) {
                Scroller.attachEvent(l, "click", Scroller.end);
                l.onclick = function() {
                    Scroller.end(this);
                    l = this.hash.substr(1);
                    a = document.getElementsByTagName("a");
                    for (i = 0; i < a.length; i++) {
                        if (a[i].name == l) {
                            clearInterval(Scroller.interval);
                            Scroller.interval = setInterval("Scroller.scroll(" + Scroller.offsetParent(a[i]) + ")", 10)
                        }
                    }
                }
            }
        }
    }
};
Scroller.init()