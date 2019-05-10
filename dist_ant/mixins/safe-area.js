function e() {
    return new Promise(function(e, s) {
        null != t ? e(t) : wx.getSystemInfo({
            success: function(s) {
                var n = s.model, o = s.screenHeight, a = s.statusBarHeight, r = /iphone x/i.test(n), i = /iPhone11/i.test(n) && 812 === o;
                e(t = {
                    isIPhoneX: r || i,
                    statusBarHeight: a
                });
            },
            fail: s
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = null;

exports.safeArea = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = t.safeAreaInsetBottom, n = void 0 === s || s, o = t.safeAreaInsetTop, a = void 0 !== o && o;
    return Behavior({
        properties: {
            safeAreaInsetTop: {
                type: Boolean,
                value: a
            },
            safeAreaInsetBottom: {
                type: Boolean,
                value: n
            }
        },
        created: function() {
            var t = this;
            e().then(function(e) {
                var s = e.isIPhoneX, n = e.statusBarHeight;
                t.set({
                    isIPhoneX: s,
                    statusBarHeight: n
                });
            });
        }
    });
};