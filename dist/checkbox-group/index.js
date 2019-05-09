function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    return i(e) || r(e) || n();
}

function n() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function r(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function i(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
}

function a(e) {
    for (var t = 1; t < arguments.length; t++) if (t % 2) {
        var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
        }))), r.forEach(function(t) {
            u(e, t, n[t]);
        });
    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
    return e;
}

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function o() {
    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).map(function(e, t) {
        return "string" == typeof e ? {
            title: e,
            value: e,
            index: t
        } : a({}, e, {
            index: t
        });
    });
}

function l(e) {
    var n = t(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []);
    return n = -1 !== n.indexOf(e) ? n.filter(function(t) {
        return t !== e;
    }) : [].concat(t(n), [ e ]);
}

var c = e(require("../helpers/baseComponent")), s = e(require("../helpers/eventsMixin"));

(0, c.default)({
    useField: !0,
    behaviors: [ (0, s.default)() ],
    relations: {
        "../field/index": {
            type: "ancestor"
        },
        "../checkbox/index": {
            type: "descendant",
            observer: function() {
                this.debounce(this.changeValue);
            }
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-checkbox-group"
        },
        cellGroupPrefixCls: {
            type: String,
            value: "wux-cell-group"
        },
        value: {
            type: Array,
            value: []
        },
        title: {
            type: String,
            value: ""
        },
        label: {
            type: String,
            value: ""
        },
        options: {
            type: Array,
            value: []
        }
    },
    data: {
        inputValue: [],
        keys: []
    },
    observers: {
        value: function(e) {
            this.hasFieldDecorator || (this.updated(e), this.changeValue(e));
        },
        inputValue: function(e) {
            this.hasFieldDecorator && this.changeValue(e);
        },
        options: function(e) {
            this.changeValue(this.data.inputValue, e);
        }
    },
    methods: {
        updated: function(e) {
            this.data.inputValue !== e && this.setData({
                inputValue: e
            });
        },
        changeValue: function(e, t) {
            var n = 0 < arguments.length && void 0 !== e ? e : this.data.inputValue, r = o(1 < arguments.length && void 0 !== t ? t : this.data.options), i = this.getRelationNodes("../checkbox/index"), a = 0 < r.length ? r : i ? i.map(function(e) {
                return e.data;
            }) : [];
            !r.length && i && 0 < i.length && i.forEach(function(e, t) {
                e.changeValue(Array.isArray(n) && n.includes(e.data.value), t);
            }), this.data.keys !== a && this.setData({
                keys: a
            });
        },
        onChange: function(e) {
            var t = l(e.value, this.data.inputValue);
            this.hasFieldDecorator && (e.value = t), this.triggerEvent("change", a({}, this.getValue(t), {}, e, {
                name: this.data.name,
                value: e.value
            }));
        },
        onCheckboxChange: function(e) {
            var t = e.currentTarget.dataset.index;
            this.onChange(a({}, e.detail, {
                index: t
            }));
        },
        getValue: function(e, t) {
            var n = 0 < arguments.length && void 0 !== e ? e : this.data.inputValue, r = 1 < arguments.length && void 0 !== t ? t : this.data.keys, i = r.filter(function(e) {
                return n.includes(e.value);
            }).map(function(e) {
                return e.title;
            }) || [], a = r.map(function(e) {
                return e.value;
            }), u = n.map(function(e) {
                return a.indexOf(e);
            });
            return {
                value: n,
                displayValue: i,
                selectedIndex: u,
                selectedValue: n,
                cols: r
            };
        },
        getBoundingClientRect: function(e) {
            return this.cellGroup = this.cellGroup || this.selectComponent("#wux-cell-group"), 
            this.cellGroup && this.cellGroup.getBoundingClientRect(e);
        }
    }
});