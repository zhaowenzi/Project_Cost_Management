function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : n(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : n(t);
    })(t);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = t(require("../helpers/baseComponent")), i = t(require("../helpers/styleToCssString")), s = "exited", r = {
    enter: "",
    enterActive: "",
    enterDone: "",
    exit: "",
    exitActive: "",
    exitDone: ""
};

(0, a.default)({
    properties: {
        in: {
            type: Boolean,
            value: !1,
            observer: function(t) {
                this.data.isMounting && this.updated(t);
            }
        },
        classNames: {
            type: null,
            value: r
        },
        duration: {
            type: null,
            value: null
        },
        type: {
            type: String,
            value: "transition"
        },
        appear: {
            type: Boolean,
            value: !1
        },
        enter: {
            type: Boolean,
            value: !0
        },
        exit: {
            type: Boolean,
            value: !0
        },
        mountOnEnter: {
            type: Boolean,
            value: !0
        },
        unmountOnExit: {
            type: Boolean,
            value: !0
        },
        wrapCls: {
            type: String,
            value: ""
        },
        wrapStyle: {
            type: [ String, Object ],
            value: "",
            observer: function(t) {
                this.setData({
                    extStyle: (0, i.default)(t)
                });
            }
        },
        disableScroll: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        animateCss: "",
        animateStatus: s,
        isMounting: !1,
        extStyle: ""
    },
    methods: {
        addEventListener: function() {
            var t = this.data.animateStatus, e = this.getTimeouts(), n = e.enter, a = e.exit;
            "entering" === t && !n && this.data.enter && this.performEntered(), "exiting" === t && !a && this.data.exit && this.performExited();
        },
        onTransitionEnd: function() {
            "transition" === this.data.type && this.addEventListener();
        },
        onAnimationEnd: function() {
            "animation" === this.data.type && this.addEventListener();
        },
        updateStatus: function(t, e) {
            var n = 1 < arguments.length && void 0 !== e && e;
            null !== t && (this.cancelNextCallback(), this.isAppearing = n, "entering" === t ? this.performEnter() : this.performExit());
        },
        performEnter: function() {
            var t = this, e = this.getClassNames("enter"), n = e.className, a = e.activeClassName, i = this.getTimeouts().enter, s = {
                animateStatus: "enter",
                animateCss: n
            }, r = {
                animateStatus: "entering",
                animateCss: "".concat(n, " ").concat(a)
            };
            if (!this.isAppearing && !this.data.enter) return this.performEntered();
            this.safeSetData(s, function() {
                t.triggerEvent("change", {
                    animateStatus: "enter"
                }), t.triggerEvent("enter", {
                    isAppearing: t.isAppearing
                }), t.delayHandler(1e3 / 60, function() {
                    t.safeSetData(r, function() {
                        t.triggerEvent("change", {
                            animateStatus: "entering"
                        }), t.triggerEvent("entering", {
                            isAppearing: t.isAppearing
                        }), i && t.delayHandler(i, t.performEntered);
                    });
                });
            });
        },
        performEntered: function() {
            var t = this, e = {
                animateStatus: "entered",
                animateCss: this.getClassNames("enter").doneClassName
            };
            this.safeSetData(e, function() {
                t.triggerEvent("change", {
                    animateStatus: "entered"
                }), t.triggerEvent("entered", {
                    isAppearing: t.isAppearing
                });
            });
        },
        performExit: function() {
            var t = this, e = this.getClassNames("exit"), n = e.className, a = e.activeClassName, i = this.getTimeouts().exit, s = {
                animateStatus: "exit",
                animateCss: n
            }, r = {
                animateStatus: "exiting",
                animateCss: "".concat(n, " ").concat(a)
            };
            if (!this.data.exit) return this.performExited();
            this.safeSetData(s, function() {
                t.triggerEvent("change", {
                    animateStatus: "exit"
                }), t.triggerEvent("exit"), t.delayHandler(1e3 / 60, function() {
                    t.safeSetData(r, function() {
                        t.triggerEvent("change", {
                            animateStatus: "exiting"
                        }), t.triggerEvent("exiting"), i && t.delayHandler(i, t.performExited);
                    });
                });
            });
        },
        performExited: function() {
            var t = this, e = this.getClassNames("exit").doneClassName, n = {
                animateStatus: s,
                animateCss: e
            };
            this.safeSetData(n, function() {
                t.triggerEvent("change", {
                    animateStatus: s
                }), t.triggerEvent(s), t.data.unmountOnExit && t.setData({
                    animateStatus: "unmounted"
                }, function() {
                    t.triggerEvent("change", {
                        animateStatus: "unmounted"
                    });
                });
            });
        },
        getClassNames: function(t) {
            var e = this.data.classNames;
            return {
                className: "string" != typeof e ? e[t] : "".concat(e, "-").concat(t),
                activeClassName: "string" != typeof e ? e["".concat(t, "Active")] : "".concat(e, "-").concat(t, "-active"),
                doneClassName: "string" != typeof e ? e["".concat(t, "Done")] : "".concat(e, "-").concat(t, "-done")
            };
        },
        getTimeouts: function() {
            var t = this.data.duration;
            return null !== t && "object" === e(t) ? {
                enter: t.enter,
                exit: t.exit
            } : "number" == typeof t ? {
                enter: t,
                exit: t
            } : {};
        },
        updated: function(t) {
            var e = this, n = (this.pendingData || this.data).animateStatus, a = null;
            t ? ("unmounted" === n && (n = s, this.setData({
                animateStatus: s
            }, function() {
                e.triggerEvent("change", {
                    animateStatus: s
                });
            })), "enter" !== n && "entering" !== n && "entered" !== n && (a = "entering")) : "enter" !== n && "entering" !== n && "entered" !== n || (a = "exiting"), 
            this.updateStatus(a);
        },
        delayHandler: function(t, e) {
            t && (this.setNextCallback(e), setTimeout(this.nextCallback, t));
        },
        onTap: function() {
            this.triggerEvent("click");
        },
        noop: function() {}
    },
    attached: function() {
        var t = this, e = null, n = null;
        this.data.in ? this.data.appear ? (e = s, n = "entering") : e = "entered" : e = this.data.unmountOnExit || this.data.mountOnEnter ? "unmounted" : s, 
        this.safeSetData({
            animateStatus: e,
            isMounting: !0
        }, function() {
            t.triggerEvent("change", {
                animateStatus: e
            }), t.updateStatus(n, !0);
        });
    }
});