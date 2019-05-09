function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "$wuxCountDown", {
    enumerable: !0,
    get: function() {
        return t.default;
    }
}), Object.defineProperty(exports, "$wuxCountUp", {
    enumerable: !0,
    get: function() {
        return o.default;
    }
}), exports.$stopWuxLoader = exports.$stopWuxRefresher = exports.$startWuxRefresher = exports.$wuxCalendar = exports.$wuxSelect = exports.$wuxKeyBoard = exports.$wuxNotification = exports.$wuxGallery = exports.$wuxToptips = exports.$wuxForm = exports.$wuxDialog = exports.$wuxLoading = exports.$wuxToast = exports.$wuxBackdrop = exports.$wuxActionSheet = void 0;

var t = e(require("./countdown/index")), o = e(require("./countup/index")), r = function(e, t) {
    var o = (1 < arguments.length && void 0 !== t ? t : getCurrentPages()[getCurrentPages().length - 1]).selectComponent(e);
    if (!o) throw new Error("无法找到对应的组件，请按文档说明使用组件");
    return o;
};

exports.$wuxActionSheet = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-actionsheet", 1 < arguments.length ? t : void 0);
};

exports.$wuxBackdrop = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-backdrop", 1 < arguments.length ? t : void 0);
};

exports.$wuxToast = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-toast", 1 < arguments.length ? t : void 0);
};

exports.$wuxLoading = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-loading", 1 < arguments.length ? t : void 0);
};

exports.$wuxDialog = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-dialog", 1 < arguments.length ? t : void 0);
};

exports.$wuxForm = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-form", 1 < arguments.length ? t : void 0);
};

exports.$wuxToptips = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-toptips", 1 < arguments.length ? t : void 0);
};

exports.$wuxGallery = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-gallery", 1 < arguments.length ? t : void 0);
};

exports.$wuxNotification = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-notification", 1 < arguments.length ? t : void 0);
};

exports.$wuxKeyBoard = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-keyboard", 1 < arguments.length ? t : void 0);
};

exports.$wuxSelect = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-select", 1 < arguments.length ? t : void 0);
};

exports.$wuxCalendar = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-calendar", 1 < arguments.length ? t : void 0);
};

exports.$startWuxRefresher = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-refresher", 1 < arguments.length ? t : void 0).triggerRefresh();
};

exports.$stopWuxRefresher = function(e, t) {
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-refresher", 1 < arguments.length ? t : void 0).finishPullToRefresh();
};

exports.$stopWuxLoader = function(e, t, o) {
    var n = 2 < arguments.length ? o : void 0;
    return r(0 < arguments.length && void 0 !== e ? e : "#wux-refresher", 1 < arguments.length ? t : void 0).finishLoadmore(n);
};