Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.transition = void 0;

var e = require("../common/utils"), t = function(e) {
    return {
        enter: "van-" + e + "-enter van-" + e + "-enter-active enter-class enter-active-class",
        "enter-to": "van-" + e + "-enter-to van-" + e + "-enter-active enter-to-class enter-active-class",
        leave: "van-" + e + "-leave van-" + e + "-leave-active leave-class leave-active-class",
        "leave-to": "van-" + e + "-leave-to van-" + e + "-leave-active leave-to-class leave-active-class"
    };
}, n = function() {
    return new Promise(function(e) {
        return setTimeout(e, 1e3 / 30);
    });
};

exports.transition = function(a) {
    return Behavior({
        properties: {
            customStyle: String,
            show: {
                type: Boolean,
                value: a,
                observer: "observeShow"
            },
            duration: {
                type: [ Number, Object ],
                value: 300,
                observer: "observeDuration"
            },
            name: {
                type: String,
                value: "fade"
            }
        },
        data: {
            type: "",
            inited: !1,
            display: !1
        },
        attached: function() {
            this.data.show && this.enter();
        },
        methods: {
            observeShow: function(e) {
                e ? this.enter() : this.leave();
            },
            enter: function() {
                var a = this, s = this.data, i = s.duration, r = s.name, o = t(r), c = (0, e.isObj)(i) ? i.leave : i;
                this.status = "enter", Promise.resolve().then(n).then(function() {
                    a.checkStatus("enter"), a.set({
                        inited: !0,
                        display: !0,
                        classes: o.enter,
                        currentDuration: c
                    });
                }).then(n).then(function() {
                    a.checkStatus("enter"), a.set({
                        classes: o["enter-to"]
                    });
                }).catch(function() {});
            },
            leave: function() {
                var a = this, s = this.data, i = s.duration, r = s.name, o = t(r), c = (0, e.isObj)(i) ? i.leave : i;
                this.status = "leave", Promise.resolve().then(n).then(function() {
                    a.checkStatus("leave"), a.set({
                        classes: o.leave,
                        currentDuration: c
                    });
                }).then(function() {
                    return setTimeout(function() {
                        return a.onTransitionEnd();
                    }, c);
                }).then(n).then(function() {
                    a.checkStatus("leave"), a.set({
                        classes: o["leave-to"]
                    });
                }).catch(function() {});
            },
            checkStatus: function(e) {
                if (e !== this.status) throw new Error("incongruent status: " + e);
            },
            onTransitionEnd: function() {
                this.data.show || (this.set({
                    display: !1
                }), this.$emit("transitionEnd"));
            }
        }
    });
};