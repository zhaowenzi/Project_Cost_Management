function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../helpers/baseComponent")), l = e(require("../helpers/classNames"));

(0, t.default)({
    relations: {
        "../checkbox-group/index": {
            type: "ancestor"
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-checkbox"
        },
        cellPrefixCls: {
            type: String,
            value: "wux-cell"
        },
        selectablePrefixCls: {
            type: String,
            value: "wux-selectable"
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
        value: {
            type: String,
            value: ""
        },
        checked: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.setData({
                    inputChecked: e
                });
            }
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        color: {
            type: String,
            value: "balanced"
        }
    },
    data: {
        index: 0,
        inputChecked: !1
    },
    computed: {
        classes: [ "prefixCls", function(e) {
            return {
                cell: (0, l.default)(e),
                selectable: "".concat(e, "__selectable")
            };
        } ]
    },
    methods: {
        checkboxChange: function(e) {
            var t = this.data, l = t.value, a = t.index, n = t.disabled, i = this.getRelationNodes("../checkbox-group/index")[0], c = {
                checked: e.detail.checked,
                value: l,
                index: a
            };
            n || (i ? i.onChange(c) : this.triggerEvent("change", c));
        },
        changeValue: function(e, t) {
            var l = 0 < arguments.length && void 0 !== e && e, a = 1 < arguments.length && void 0 !== t ? t : 0;
            this.setData({
                inputChecked: l,
                index: a
            });
        }
    }
});