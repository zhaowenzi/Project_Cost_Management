function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    for (var t = 1; t < arguments.length; t++) if (t % 2) {
        var i = null != arguments[t] ? arguments[t] : {}, a = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable;
        }))), a.forEach(function(t) {
            n(e, t, i[t]);
        });
    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
    return e;
}

function n(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

function i() {
    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).map(function(e, n) {
        return "string" == typeof e ? {
            title: e,
            value: e,
            index: n
        } : t({}, e, {
            index: n
        });
    });
}

var a = e(require("../helpers/baseComponent")), u = (e(require("../helpers/classNames")), 
e(require("../helpers/eventsMixin")));

(0, a.default)({
    useField: !0,
    behaviors: [ (0, u.default)() ],
    relations: {
        "../field/index": {
            type: "ancestor"
        },
        "../radio/index": {
            type: "child",
            observer: function() {
                this.debounce(this.changeValue);
            }
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-radio-group"
        },
        cellGroupPrefixCls: {
            type: String,
            value: "wux-cell-group"
        },
        value: {
            type: String,
            value: ""
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
        inputValue: "",
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
            var n = 0 < arguments.length && void 0 !== e ? e : this.data.inputValue, a = i(1 < arguments.length && void 0 !== t ? t : this.data.options), u = this.getRelationNodes("../radio/index"), r = 0 < a.length ? a : u ? u.map(function(e) {
                return e.data;
            }) : [];
            !a.length && u && 0 < u.length && u.forEach(function(e, t) {
                e.changeValue(n === e.data.value, t);
            }), this.data.keys !== r && this.setData({
                keys: r
            });
        },
        onChange: function(e) {
            this.triggerEvent("change", t({}, e, {}, this.getValue(e.value), {
                name: this.data.name,
                value: e.value
            }));
        },
        onRadioChange: function(e) {
            var n = e.currentTarget.dataset.index;
            this.onChange(t({}, e.detail, {
                index: n
            }));
        },
        getValue: function(e, t) {
            var n = 0 < arguments.length && void 0 !== e ? e : this.data.inputValue, i = 1 < arguments.length && void 0 !== t ? t : this.data.keys, a = n ? [ n ] : [], u = i.filter(function(e) {
                return a.includes(e.value);
            }).map(function(e) {
                return e.title;
            }) || [], r = i.map(function(e) {
                return e.value;
            }), l = a.map(function(e) {
                return r.indexOf(e);
            });
            return {
                value: n,
                displayValue: u[0] || "",
                selectedIndex: l[0] || "",
                selectedValue: n,
                cols: i
            };
        },
        getBoundingClientRect: function(e) {
            return this.cellGroup = this.cellGroup || this.selectComponent("#wux-cell-group"), 
            this.cellGroup && this.cellGroup.getBoundingClientRect(e);
        }
    }
});