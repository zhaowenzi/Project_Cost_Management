function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    for (var t = 1; t < arguments.length; t++) if (t % 2) {
        var i = null != arguments[t] ? arguments[t] : {}, o = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable;
        }))), o.forEach(function(t) {
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

function i(e, t, n) {
    var i = t.value, o = n.data, s = o.options, l = o.multiple, c = (0, r.getSelectIndex)(s, i, l);
    "function" == typeof n.fns[e] && n.fns[e].call(n, i, c, s);
}

var o = e(require("../helpers/baseComponent")), r = (e(require("../helpers/classNames")), 
require("../popup-select/utils")), s = {
    prefixCls: "wux-select",
    value: "",
    options: [],
    multiple: !1,
    max: -1,
    toolbar: {
        title: "请选择",
        cancelText: "取消",
        confirmText: "确定"
    },
    onChange: function() {},
    onConfirm: function() {},
    onCancel: function() {}
};

(0, o.default)({
    useFunc: !0,
    data: s,
    methods: {
        open: function(e) {
            var n = 0 < arguments.length && void 0 !== e ? e : {}, i = this.$$mergeOptionsAndBindMethods(Object.assign({}, s, n, {
                max: parseInt(n.max)
            }));
            this.$$setData(t({
                visible: !0
            }, i));
        },
        close: function(e) {
            this.select = this.select || this.selectComponent("#wux-popup-select"), this.select && this.select.close(e);
        },
        onConfirm: function(e) {
            return i("onConfirm", e.detail, this);
        },
        onCancel: function(e) {
            return i("onCancel", e.detail, this);
        },
        onValueChange: function(e) {
            return i("onChange", e.detail, this);
        },
        onVisibleChange: function(e) {
            this.$$setData({
                visible: e.detail.visible
            });
        }
    }
});