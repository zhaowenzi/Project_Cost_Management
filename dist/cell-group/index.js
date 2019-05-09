function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../helpers/baseComponent")), n = e(require("../helpers/classNames"));

(0, t.default)({
    options: {
        multipleSlots: !1
    },
    relations: {
        "../cell/index": {
            type: "descendant",
            observer: function() {
                this.debounce(this.updateIsLastElement);
            }
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-cell-group"
        },
        title: {
            type: String,
            value: ""
        },
        label: {
            type: String,
            value: ""
        }
    },
    computed: {
        classes: [ "prefixCls", function(e) {
            return {
                wrap: (0, n.default)(e),
                hd: "".concat(e, "__hd"),
                bd: "".concat(e, "__bd"),
                ft: "".concat(e, "__ft")
            };
        } ]
    },
    methods: {
        updateIsLastElement: function() {
            var e = this.getRelationNodes("../cell/index");
            if (0 < e.length) {
                var t = e.length - 1;
                e.forEach(function(e, n) {
                    e.updateIsLastElement(n === t);
                });
            }
        },
        getBoundingClientRect: function(e) {
            var t = this, n = ".".concat(this.data.prefixCls);
            wx.createSelectorQuery().in(this).select(n).boundingClientRect(function(n) {
                n && e.call(t, n.height);
            }).exec();
        }
    }
});