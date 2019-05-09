function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var r = e(require("../helpers/baseComponent")), a = e(require("../helpers/classNames"));

(0, r.default)({
    properties: {
        prefixCls: {
            type: String,
            value: "wux-divider"
        },
        position: {
            type: String,
            value: "center"
        },
        dashed: {
            type: Boolean,
            value: !1
        },
        text: {
            type: String,
            value: ""
        },
        showText: {
            type: Boolean,
            value: !0
        }
    },
    computed: {
        classes: [ "prefixCls, dashed, showText, position", function(e, r, n, o) {
            var u;
            return {
                wrap: (0, a.default)(e, (t(u = {}, "".concat(e, "--dashed"), r), t(u, "".concat(e, "--text"), n), 
                t(u, "".concat(e, "--text-").concat(o), n && o), u)),
                text: "".concat(e, "__text")
            };
        } ]
    }
});