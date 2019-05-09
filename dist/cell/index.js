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

var a = e(require("../helpers/baseComponent")), n = e(require("../helpers/classNames")), i = e(require("../helpers/eventsMixin")), r = {
    onClick: function() {},
    onError: function() {}
};

(0, a.default)({
    behaviors: [ (0, i.default)({
        defaultEvents: r
    }) ],
    relations: {
        "../cell-group/index": {
            type: "ancestor"
        },
        "../picker/index": {
            type: "parent"
        },
        "../date-picker/index": {
            type: "parent"
        },
        "../popup-select/index": {
            type: "parent"
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-cell"
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        hoverClass: {
            type: String,
            value: "default"
        },
        hoverStopPropagation: {
            type: Boolean,
            value: !1
        },
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: "en"
        },
        sessionFrom: {
            type: String,
            value: ""
        },
        sendMessageTitle: {
            type: String,
            value: ""
        },
        sendMessagePath: {
            type: String,
            value: ""
        },
        sendMessageImg: {
            type: String,
            value: ""
        },
        showMessageCard: {
            type: Boolean,
            value: !1
        },
        appParameter: {
            type: String,
            value: ""
        },
        thumb: {
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
        extra: {
            type: String,
            value: ""
        },
        isLink: {
            type: Boolean,
            value: !1
        },
        openType: {
            type: String,
            value: "navigateTo"
        },
        url: {
            type: String,
            value: ""
        },
        delta: {
            type: Number,
            value: 1
        }
    },
    data: {
        isLast: !1
    },
    computed: {
        classes: [ "prefixCls, hoverClass, isLast, isLink, disabled", function(e, a, i, r, l) {
            var o;
            return {
                wrap: (0, n.default)(e, (t(o = {}, "".concat(e, "--last"), i), t(o, "".concat(e, "--access"), r), 
                t(o, "".concat(e, "--disabled"), l), o)),
                hd: "".concat(e, "__hd"),
                thumb: "".concat(e, "__thumb"),
                bd: "".concat(e, "__bd"),
                text: "".concat(e, "__text"),
                desc: "".concat(e, "__desc"),
                ft: "".concat(e, "__ft"),
                hover: a && "default" !== a ? a : "".concat(e, "--hover")
            };
        } ]
    },
    methods: {
        onTap: function() {
            this.data.disabled || (this.triggerEvent("click"), this.linkTo());
        },
        bindgetuserinfo: function(e) {
            this.triggerEvent("getuserinfo", e.detail);
        },
        bindcontact: function(e) {
            this.triggerEvent("contact", e.detail);
        },
        bindgetphonenumber: function(e) {
            this.triggerEvent("getphonenumber", e.detail);
        },
        bindopensetting: function(e) {
            this.triggerEvent("opensetting", e.detail);
        },
        onError: function(e) {
            this.triggerEvent("error", e.detail);
        },
        linkTo: function() {
            var e = this.data, t = e.url, a = e.isLink, n = e.openType, i = e.delta;
            return !!(a && t && [ "navigateTo", "redirectTo", "switchTab", "navigateBack", "reLaunch" ].includes(n)) && ("navigateBack" === n ? wx[n].call(wx, {
                delta: i
            }) : wx[n].call(wx, {
                url: t
            }));
        },
        updateIsLastElement: function(e) {
            this.setData({
                isLast: e
            });
        }
    }
});