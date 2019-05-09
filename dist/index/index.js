function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    return i(t) || r(t, e) || n();
}

function n() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function r(t, e) {
    var n = [], r = !0, i = !1, a = void 0;
    try {
        for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), 
        !e || n.length !== e); r = !0) ;
    } catch (t) {
        i = !0, a = t;
    } finally {
        try {
            r || null == s.return || s.return();
        } finally {
            if (i) throw a;
        }
    }
    return n;
}

function i(t) {
    if (Array.isArray(t)) return t;
}

function a(t) {
    for (var e = 1; e < arguments.length; e++) if (e % 2) {
        var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), r.forEach(function(e) {
            o(t, e, n[e]);
        });
    } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
    return t;
}

function o(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

var s = t(require("../helpers/baseComponent")), c = t(require("../helpers/classNames")), u = t(require("../helpers/styleToCssString"));

(0, s.default)({
    relations: {
        "../index-item/index": {
            type: "child",
            observer: function() {
                this.debounce(this.updated);
            }
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-index"
        },
        height: {
            type: [ String, Number ],
            value: 300,
            observer: "updateStyle"
        },
        showIndicator: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        scrollTop: 0,
        sections: [],
        moving: !1,
        current: 0,
        currentName: "",
        extStyle: ""
    },
    computed: {
        classes: [ "prefixCls", function(t) {
            return {
                wrap: (0, c.default)(t),
                nav: "".concat(t, "__nav"),
                navItem: "".concat(t, "__nav-item"),
                indicator: "".concat(t, "__indicator")
            };
        } ]
    },
    methods: {
        updateStyle: function(t) {
            var e = 0 < arguments.length && void 0 !== t ? t : this.data.height, n = (0, u.default)({
                height: e
            });
            n !== this.data.extStyle && this.setData({
                extStyle: n
            });
        },
        updated: function() {
            var t = this.getRelationNodes("../index-item/index");
            0 < t.length && (t.forEach(function(t, e) {
                t.updated(e);
            }), setTimeout(this.getNavPoints.bind(this))), this.data.sections.length !== t.length && this.setData({
                sections: t.map(function(t) {
                    return t.data;
                })
            });
        },
        setActive: function(t, e) {
            if (t !== this.data.current || e !== this.data.currentName) {
                var n = this.data.sections.filter(function(n) {
                    return n.index === t && n.name === e;
                })[0];
                n && this.setData({
                    current: t,
                    currentName: e,
                    scrollTop: n.top
                });
            }
            this.triggerEvent("change", {
                index: t,
                name: e
            });
        },
        onTouchStart: function(t) {
            if (!this.data.moving) {
                var e = t.target.dataset, n = e.index, r = e.name;
                this.setActive(n, r), this.setData({
                    moving: !0
                });
            }
        },
        onTouchMove: function(t) {
            var e = this.getTargetFromPoint(t.changedTouches[0].pageY);
            if (void 0 !== e) {
                var n = e.dataset, r = n.index, i = n.name;
                this.setActive(r, i);
            }
        },
        onTouchEnd: function(t) {
            var e = this;
            this.data.moving && setTimeout(function() {
                return e.setData({
                    moving: !1
                });
            }, 300);
        },
        onScroll: function(t) {
            var e = this;
            if (!this.data.moving) {
                var n = t.detail.scrollTop;
                this.data.sections.forEach(function(t, r) {
                    n < t.top + t.height && n >= t.top && (r === e.data.current && t.name === e.data.currentName || e.setData({
                        current: r,
                        currentName: t.name
                    }));
                });
            }
        },
        getNavPoints: function() {
            var t = this, e = ".".concat(this.data.prefixCls, "__nav-item");
            wx.createSelectorQuery().in(this).selectAll(e).boundingClientRect(function(e) {
                e.filter(function(t) {
                    return !t;
                }).length || t.setData({
                    points: e.map(function(t) {
                        return a({}, t, {
                            offsets: [ t.top, t.top + t.height ]
                        });
                    })
                });
            }).exec();
        },
        getTargetFromPoint: function(t) {
            for (var n, r = this.data.points, i = r.length - 1; 0 <= i; i--) {
                var a = e(r[i].offsets, 2), o = a[0], s = a[1];
                if (i === r.length - 1 && s < t || 0 === i && t < o || o <= t && t <= s) {
                    n = r[i];
                    break;
                }
            }
            return n;
        }
    },
    ready: function() {
        this.updateStyle(), this.getNavPoints();
    }
});