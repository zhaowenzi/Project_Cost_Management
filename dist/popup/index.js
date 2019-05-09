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

var a = e(require("../helpers/baseComponent")), o = e(require("../helpers/classNames")), i = e(require("../helpers/styleToCssString")), n = require("../index");

(0, a.default)({
    useSafeArea: !0,
    externalClasses: [ "wux-content-class", "wux-header-class", "wux-body-class", "wux-footer-class", "wux-close-class" ],
    properties: {
        prefixCls: {
            type: String,
            value: "wux-popup"
        },
        animationPrefixCls: {
            type: String,
            value: "wux-animate"
        },
        title: {
            type: String,
            value: ""
        },
        content: {
            type: String,
            value: ""
        },
        extra: {
            type: String,
            value: ""
        },
        position: {
            type: String,
            value: "center",
            observer: "getTransitionName"
        },
        wrapStyle: {
            type: [ String, Object ],
            value: "",
            observer: function(e) {
                this.setData({
                    extStyle: (0, i.default)(e)
                });
            }
        },
        closable: {
            type: Boolean,
            value: !1
        },
        mask: {
            type: Boolean,
            value: !0
        },
        maskClosable: {
            type: Boolean,
            value: !0
        },
        visible: {
            type: Boolean,
            value: !1,
            observer: "setPopupVisible"
        },
        zIndex: {
            type: Number,
            value: 1e3
        },
        hasHeader: {
            type: Boolean,
            value: !0
        },
        hasFooter: {
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
        }
    },
    data: {
        transitionName: "",
        popupVisible: !1,
        extStyle: ""
    },
    computed: {
        classes: [ "prefixCls, position, safeAreaConfig, isIPhoneX", function(e, a, i, n) {
            var s;
            return {
                wrap: (0, o.default)("".concat(e, "-position"), (t(s = {}, "".concat(e, "-position--").concat(a), a), 
                t(s, "".concat(e, "-position--is-iphonex"), i.bottom && n), s)),
                content: "".concat(e, "__content"),
                hd: "".concat(e, "__hd"),
                title: "".concat(e, "__title"),
                bd: "".concat(e, "__bd"),
                ft: "".concat(e, "__ft"),
                extra: "".concat(e, "__extra"),
                close: "".concat(e, "__close"),
                x: "".concat(e, "__close-x")
            };
        } ]
    },
    methods: {
        close: function() {
            this.triggerEvent("close");
        },
        onMaskClick: function() {
            this.data.maskClosable && this.close();
        },
        onExited: function() {
            this.triggerEvent("closed");
        },
        getTransitionName: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : this.data.position, a = this.data.animationPrefixCls, o = "";
            switch (t) {
              case "top":
                o = "".concat(a, "--slideInDown");
                break;

              case "right":
                o = "".concat(a, "--slideInRight");
                break;

              case "bottom":
                o = "".concat(a, "--slideInUp");
                break;

              case "left":
                o = "".concat(a, "--slideInLeft");
                break;

              default:
                o = "".concat(a, "--fadeIn");
            }
            this.setData({
                transitionName: o
            });
        },
        setPopupVisible: function(e) {
            this.data.popupVisible !== e && (this.setData({
                popupVisible: e
            }), this.setBackdropVisible(e));
        },
        setBackdropVisible: function(e) {
            this.data.mask && this.$wuxBackdrop && this.$wuxBackdrop[e ? "retain" : "release"]();
        }
    },
    created: function() {
        this.data.mask && (this.$wuxBackdrop = (0, n.$wuxBackdrop)("#wux-backdrop", this));
    },
    attached: function() {
        this.setPopupVisible(this.data.visible), this.getTransitionName();
    }
});