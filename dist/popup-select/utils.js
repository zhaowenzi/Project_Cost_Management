function t(t) {
    return r(t) || n(t) || e();
}

function e() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function n(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
}

function r(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
    }
}

function i(e) {
    return Array.isArray(e) ? t(e) : "string" == typeof e ? [ e ] : [];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.convertValue = i, exports.getSelectIndex = function() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = i(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ""), r = t.map(function(t) {
        return t.value || t;
    }).filter(function(t) {
        return !!t;
    });
    return e ? n.map(function(t) {
        return r.indexOf(t);
    }) : r.indexOf(n[0]);
}, exports.getRealValue = function() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = i(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ""), r = t.map(function(t) {
        return t.value || t;
    }).filter(function(t) {
        return !!t;
    });
    return e ? n.filter(function(t) {
        return r.includes(t);
    }) : r.includes(n[0]) ? n[0] : "";
};