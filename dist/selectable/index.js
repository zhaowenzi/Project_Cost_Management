function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = e(require("../helpers/baseComponent")), l = e(require("../helpers/classNames")), n = e(require("../helpers/styleToCssString")), r = require("../helpers/colors");

(0, a.default)({
    externalClasses: [ "wux-input-class" ],
    properties: {
        prefixCls: {
            type: String,
            value: "wux-selectable"
        },
        type: {
            type: String,
            value: "checkbox"
        },
        value: {
            type: String,
            value: ""
        },
        defaultChecked: {
            type: Boolean,
            value: !1
        },
        checked: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.data.controlled && this.updated(e);
            }
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        color: {
            type: String,
            value: "balanced",
            observer: function(e) {
                this.setData({
                    inputColor: (0, r.isPresetColor)(e)
                });
            }
        },
        controlled: {
            type: Boolean,
            value: !1
        },
        wrapStyle: {
            type: [ String, Object ],
            value: "",
            observer: function(e) {
                this.setData({
                    extStyle: (0, n.default)(e)
                });
            }
        }
    },
    data: {
        inputChecked: !1,
        inputColor: "",
        extStyle: ""
    },
    computed: {
        classes: [ "prefixCls, inputChecked, disabled", function(e, a, n) {
            var r;
            return {
                wrap: (0, l.default)(e, (t(r = {}, "".concat(e, "--checked"), a), t(r, "".concat(e, "--disabled"), n), 
                r)),
                input: "".concat(e, "__input"),
                icon: "".concat(e, "__icon")
            };
        } ]
    },
    methods: {
        updated: function(e) {
            this.data.inputChecked !== e && this.setData({
                inputChecked: e
            });
        },
        onChange: function() {
            var e = this.data, t = e.value, a = e.inputChecked, l = e.disabled, n = e.controlled, r = {
                checked: !a,
                value: t
            };
            l || (n || this.updated(!a), this.triggerEvent("change", r));
        }
    },
    attached: function() {
        var e = this.data, t = e.defaultChecked, a = e.checked, l = e.controlled ? a : t, n = (0, 
        r.isPresetColor)(this.data.color);
        this.setData({
            inputChecked: l,
            inputColor: n
        });
    }
});