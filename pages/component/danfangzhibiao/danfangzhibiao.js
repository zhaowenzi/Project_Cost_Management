Page(function(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}({
    data: {
        limit: 10,
        page: 1,
        isLoading: !1,
        noMore: !1,
        haveMore: !0,
        biaotouHeight: 0,
        screenHeight: 0,
        pageHeight: 0,
        data: [],
        input1: "",
        input2: "",
        input3: "",
        show: !1,
        input4: ""
    },
    onLoad: function(a) {
        var t = this;
        wx.createSelectorQuery().select(".biaotou").boundingClientRect(function(a) {
            var e = a.height;
            e > 0 && t.setData({
                biaotouHeight: e
            });
        }).exec(), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danfangzhibiao",
            data: {
                limit: t.data.limit,
                page: t.data.page
            },
            method: "GET",
            success: function(a) {
                t.setData({
                    page: t.data.page + 1
                }), console.log(a), "0" == a.data.code ? t.setData({
                    data: a.data.data
                }) : wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onClose: function() {
        this.setData({
            show: !1
        });
    },
    reset: function() {
        this.data.selectValue;
        this.data.black;
        this.setData({
            selectValue: "不限",
            black: !1
        });
    },
    submit: function(a) {
        var t = this;
        t.setData({
            input1: a.detail.value.input1,
            input2: a.detail.value.input2,
            input3: a.detail.value.input3,
            input4: a.detail.value.input4
        }), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danfangzhibiao",
            data: {
                limit: t.data.limit,
                page: 1,
                search_keyword: a.detail.value.input1,
                search_lishuhetongleibie: a.detail.value.input2,
                search_lishuxiangmu: a.detail.value.input3,
                search_shujuleibie: a.detail.value.input4
            },
            method: "GET",
            success: function(a) {
                0 == a.data.data.length ? t.setData({
                    page: 2,
                    isLoading: !1,
                    noMore: !0,
                    haveMore: !1,
                    data: [],
                    show: !1
                }) : "0" == a.data.code ? (t.setData({
                    page: 2,
                    isLoading: !1,
                    noMore: !1,
                    haveMore: !0,
                    data: a.data.data,
                    show: !1
                }), a.data.data.length <= 6 && t.setData({
                    noMore: !0,
                    haveMore: !1
                })) : wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        });
    },
    onChangeHide: function() {
        this.setData({
            show: !this.data.show
        }), console.log("this");
    }
}, "onReachBottom", function() {
    var a = this;
    if (0 == a.data.current_index) {
        var t = a.data.data;
        this.data.haveMore && (this.setData({
            haveMore: !1,
            isLoading: !0,
            noMore: !1
        }), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danfangzhibiao",
            data: {
                limit: a.data.limit,
                page: a.data.page,
                search_keyword: a.data.input1,
                search_lishuhetongleibie: a.data.input2,
                search_lishuxiangmu: a.data.input3,
                search_shujuleibie: a.data.input4
            },
            method: "GET",
            success: function(e) {
                0 == e.data.data.length ? a.setData({
                    isLoading: !1,
                    noMore: !0,
                    haveMore: !1
                }) : "0" == e.data.code ? a.setData({
                    page: a.data.page + 1,
                    isLoading: !1,
                    noMore: !1,
                    haveMore: !0,
                    data: t.concat(e.data.data)
                }) : wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        }));
    }
}));