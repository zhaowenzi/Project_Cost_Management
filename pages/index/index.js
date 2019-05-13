var e = require("../../utils/util.js");

Page(function(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}({
    data: {
        logs: []
    },
    onLoad: function() {
        this.setData({
            logs: (wx.getStorageSync("logs") || []).map(function(t) {
                return e.formatTime(new Date(t));
            })
        });
        var t = wx.getStorageSync("lastTime"), a = Date.parse(new Date());
        (a /= 1e3) - t < 604800 && wx.redirectTo({
            url: "../component/card/card"
        });
    },
    submit: function(e) {
        console.log(e.detail.value.username);
    }
}, "submit", function(e) {
    var t = e.detail.value.username, a = e.detail.value.pwd;
    0 == t.length || 0 == a.length ? wx.showToast({
        title: "账号和密码不能为空",
        icon: "none",
        duration: 2e3
    }) : (wx.showLoading({
        title: "加载中"
    }), wx.request({
        url: "https://xuhui.lalalazzw.top:8888/login",
        data: {
            username: t,
            password: a
        },
        method: "POST",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        dataType: "json",
        success: function(e) {
            wx.setStorageSync("accessToken", e.data.data.access_token);
            var t = Date.parse(new Date());
            t /= 1e3, wx.setStorageSync("lastTime", t), "0" == e.data.code ? wx.showToast({
                title: "登录成功",
                icon: "success",
                duration: 1e3,
                success: function() {
                    setTimeout(function() {
                        wx.redirectTo({
                            url: "../component/card/card"
                        });
                    }, 1e3);
                }
            }) : wx.showToast({
                title: "账号或密码错误",
                icon: "none",
                duration: 1e3
            });
        }
    }));
}));