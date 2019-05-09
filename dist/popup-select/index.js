function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    for (var t = 1; t < arguments.length; t++) if (t % 2) {
        var a = null != arguments[t] ? arguments[t] : {}, l = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
        }))), l.forEach(function(t) {
            i(e, t, a[t]);
        });
    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
    return e;
}

function i(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

var a = e(require("../helpers/baseComponent")), l = e(require("../helpers/popupMixin")), n = require("./utils");

(0, a.default)({
    behaviors: [ (0, l.default)("#wux-select") ],
    properties: {
        prefixCls: {
            type: String,
            value: "wux-select"
        },
        value: {
            type: [ String, Array ],
            value: ""
        },
        options: {
            type: Array,
            value: []
        },
        multiple: {
            type: Boolean,
            value: !1
        },
        max: {
            type: Number,
            value: -1
        }
    },
    data: {
        scrollTop: 0
    },
    observers: i({}, "options, multiple", function(e, t) {
        this.setData({
            inputValue: this.getRealValue(e, this.data.inputValue, t)
        });
    }),
    methods: {
        getRealValue: function(e, t, i) {
            var a = 0 < arguments.length && void 0 !== e ? e : this.data.options, l = 1 < arguments.length && void 0 !== t ? t : this.data.inputValue, u = 2 < arguments.length && void 0 !== i ? i : this.data.multiple;
            return (0, n.getRealValue)(a, l, u);
        },
        updated: function(e, t) {
            if (!this.hasFieldDecorator || t) {
                var i = this.getRealValue(this.data.options, e);
                this.data.inputValue !== i && this.setData({
                    inputValue: i
                });
            }
        },
        setVisibleState: function(e, t) {
            var i = this, a = 1 < arguments.length && void 0 !== t ? t : function() {};
            if (this.data.popupVisible !== e) {
                var l = {
                    mounted: !0,
                    inputValue: this.getRealValue(this.data.options, this.data.value),
                    popupVisible: e
                };
                this.setData(e ? l : {
                    popupVisible: e
                }, function() {
                    if (e) {
                        var t = l.inputValue, n = i.getFieldElem();
                        i.hasFieldDecorator && n && (t = n.data.value, n.changeValue(t)), i.getBoundingClientRect(function(e) {
                            i.scrollIntoView(t, e);
                        });
                    }
                    a();
                });
            }
        },
        onValueChange: function(e) {
            if (this.data.mounted) {
                var i = this.data, a = (i.options, i.max), l = i.multiple, n = e.detail.selectedValue;
                l && 1 <= a && a < n.length || (this.setScrollValue(n), this.updated(n, !0), this.triggerEvent("valueChange", this.formatPickerValue(t({}, e.detail, {
                    value: n
                }))));
            }
        },
        scrollIntoView: function(e, t) {
            var i = this.data, a = i.options, l = i.multiple, u = (0, n.getSelectIndex)(a, e, l), o = a.length, r = Array.isArray(u) ? u[u.length - 1] : u;
            -1 !== r && void 0 !== r || (r = 0);
            var s = 1 <= o ? parseFloat(t / o * r) : 0;
            this.data.scrollTop !== s && this.setData({
                scrollTop: s
            });
        },
        getBoundingClientRect: function(e) {
            return this.selectComponent("#wux-select").getBoundingClientRect(e);
        }
    }
});