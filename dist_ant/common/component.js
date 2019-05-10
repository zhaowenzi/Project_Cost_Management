function e(e, s, a) {
    return s in e ? Object.defineProperty(e, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[s] = a, e;
}

function s(e, s, a) {
    Object.keys(a).forEach(function(t) {
        e[t] && (s[a[t]] = e[t]);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VantComponent = void 0;

var a = require("../mixins/basic"), t = require("../mixins/observer/index");

exports.VantComponent = function() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = {};
    s(r, o, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses"
    });
    var n = r.relation;
    n && (o.relations = Object.assign(o.relations || {}, e({}, "../" + n.name + "/index", n))), 
    o.externalClasses = o.externalClasses || [], o.externalClasses.push("custom-class"), 
    o.behaviors = o.behaviors || [], o.behaviors.push(a.basic), r.field && o.behaviors.push("wx://form-field"), 
    o.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, (0, t.observe)(r, o), Component(o);
};