(0, function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../helpers/baseComponent")).default)({
    properties: {
        prefixCls: {
            type: String,
            value: "wux-backdrop"
        },
        transparent: {
            type: Boolean,
            value: !1
        },
        zIndex: {
            type: Number,
            value: 1e3
        },
        classNames: {
            type: null,
            value: "wux-animate--fadeIn"
        }
    },
    computed: {
        classes: [ "prefixCls, transparent", function(t, e) {
            return {
                wrap: e ? "".concat(t, "--transparent") : t
            };
        } ]
    },
    methods: {
        retain: function() {
            "number" == typeof this.backdropHolds && this.backdropHolds || (this.backdropHolds = 0), 
            this.backdropHolds = this.backdropHolds + 1, 1 === this.backdropHolds && this.setData({
                in: !0
            });
        },
        release: function() {
            1 === this.backdropHolds && this.setData({
                in: !1
            }), this.backdropHolds = Math.max(0, this.backdropHolds - 1);
        },
        onClick: function() {
            this.triggerEvent("click");
        }
    }
});