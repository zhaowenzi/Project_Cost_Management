var a = require("../../../dist/index");

Page(function(a, t, i) {
    return t in a ? Object.defineProperty(a, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = i, a;
}({
    data: {
        htlb_value: "",
        lsxm_value: "",
        data: [],
        data_2: [],
        isLoading: !1,
        noMore: !1,
        haveMore: !0,
        isLoading_2: !1,
        noMore_2: !1,
        haveMore_2: !0,
        limit: 10,
        page: 1,
        limit_2: 10,
        page_2: 1,
        show: !1,
        biaotouHeight: 0,
        screenHeight: 0,
        pageHeight: 0,
        selectValue: "不限",
        black: !1,
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input1_2: "",
        input2_2: "",
        input3_2: "",
        input4_2: "",
        current_index: 0,
        current_title: "单价"
    },
    reset: function() {
        this.data.selectValue;
        this.data.black;
        this.setData({
            selectValue: "不限",
            black: !1
        });
    },
    click_hetongleibie: function() {
        wx.showLoading({
            title: "加载数据中..."
        });
        var t = this;
        0 == t.data.current_index && wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_select_danjia_htlb",
            method: "GET",
            success: function(i) {
                wx.hideLoading();
                var e = [];
                for (var d in i.data) e.push(i.data[d]);
                (0, a.$wuxSelect)("#wux-select1").open({
                    options: e,
                    onConfirm: function(a, i, e) {
                        -1 !== i && t.setData({
                            htlb_value: a
                        });
                    }
                });
            }
        }), 1 == t.data.current_index && wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_select_danfangzhibiao_htlb",
            method: "GET",
            success: function(i) {
                wx.hideLoading();
                var e = [];
                for (var d in i.data) e.push(i.data[d]);
                (0, a.$wuxSelect)("#wux-select1").open({
                    options: e,
                    onConfirm: function(a, i, e) {
                        -1 !== i && t.setData({
                            htlb_value: a
                        });
                    }
                });
            }
        });
    },
    click_lishuxiangmu: function() {
        wx.showLoading({
            title: "加载数据中..."
        });
        var t = this;
        0 == t.data.current_index && wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_select_danjia_lsxm",
            method: "GET",
            success: function(i) {
                wx.hideLoading();
                var e = [];
                for (var d in i.data) e.push(i.data[d]);
                (0, a.$wuxSelect)("#wux-select1").open({
                    options: e,
                    onConfirm: function(a, i, e) {
                        -1 !== i && t.setData({
                            lsxm_value: a
                        });
                    }
                });
            }
        }), 1 == t.data.current_index && wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_select_danfangzhibiao_lsxm",
            method: "GET",
            success: function(i) {
                wx.hideLoading();
                var e = [];
                for (var d in i.data) e.push(i.data[d]);
                (0, a.$wuxSelect)("#wux-select1").open({
                    options: e,
                    onConfirm: function(a, i, e) {
                        -1 !== i && t.setData({
                            lsxm_value: a
                        });
                    }
                });
            }
        });
    },
    submit: function(a) {
        var t = this;
        0 == t.data.current_index ? (t.setData({
            input1: a.detail.value.input1,
            input2: a.detail.value.input2,
            input3: a.detail.value.input3,
            input4: a.detail.value.input4
        }), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danjia",
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
                if (0 == a.data.data.length) t.setData({
                    page: 2,
                    isLoading: !1,
                    noMore: !0,
                    haveMore: !1,
                    data: [],
                    show: !1
                }); else if ("0" == a.data.code) {
                    for (var i = 0; i < a.data.data.length; i++) a.data.data[i].buhanshuidanjia && String(a.data.data[i].buhanshuidanjia).indexOf(".") + 1 > 0 && (a.data.data[i].buhanshuidanjia = parseFloat(a.data.data[i].buhanshuidanjia).toFixed(2)), 
                    a.data.data[i].zhucaijia && String(a.data.data[i].zhucaijia).indexOf(".") + 1 > 0 && (a.data.data[i].zhucaijia = parseFloat(a.data.data[i].zhucaijia).toFixed(2)), 
                    a.data.data[i].shigongjia && String(a.data.data[i].shigongjia).indexOf(".") + 1 > 0 && (a.data.data[i].shigongjia = parseFloat(a.data.data[i].shigongjia).toFixed(2));
                    t.setData({
                        page: 2,
                        isLoading: !1,
                        noMore: !1,
                        haveMore: !0,
                        data: a.data.data,
                        show: !1
                    }), a.data.data.length <= 6 && t.setData({
                        noMore: !0,
                        haveMore: !1
                    });
                } else wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        })) : (t.setData({
            input1_2: a.detail.value.input1,
            input2_2: a.detail.value.input2,
            input3_2: a.detail.value.input3,
            input4_2: a.detail.value.input4
        }), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danfangzhibiao",
            data: {
                limit: t.data.limit_2,
                page: 1,
                search_keyword: a.detail.value.input1,
                search_lishuhetongleibie: a.detail.value.input2,
                search_lishuxiangmu: a.detail.value.input3,
                search_shujuleibie: a.detail.value.input4
            },
            method: "GET",
            success: function(a) {
                if (0 == a.data.data.length) t.setData({
                    page: 2,
                    isLoading_2: !1,
                    noMore_2: !0,
                    haveMore_2: !1,
                    data_2: [],
                    show: !1
                }); else if ("0" == a.data.code) {
                    for (var i = 0; i < a.data.data.length; i++) a.data.data[i].danfangzhibiao && String(a.data.data[i].danfangzhibiao).indexOf(".") + 1 > 0 && (a.data.data[i].danfangzhibiao = parseFloat(a.data.data[i].danfangzhibiao).toFixed(2));
                    t.setData({
                        page_2: 2,
                        isLoading_2: !1,
                        noMore_2: !1,
                        haveMore_2: !0,
                        data_2: a.data.data,
                        show: !1
                    }), a.data.data.length <= 6 && t.setData({
                        noMore_2: !0,
                        haveMore_2: !1
                    });
                } else wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        }));
    },
    onClose: function() {
        this.setData({
            show: !1
        });
    },
    onChangeHide: function() {
        this.setData({
            show: !this.data.show
        }), console.log("this");
    },
    onChange: function(a) {
        this.setData({
            current_index: a.detail.index
        }), 0 == a.detail.index ? this.setData({
            current_title: "单价"
        }) : this.setData({
            current_title: "单方指标"
        });
    },
    onLoad: function(a) {
        var t = this;
        wx.createSelectorQuery().select(".biaotou").boundingClientRect(function(a) {
            var i = a.height;
            i > 0 && t.setData({
                biaotouHeight: i
            });
        }).exec(), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danfangzhibiao",
            data: {
                limit: t.data.limit_2,
                page: t.data.page_2
            },
            method: "GET",
            success: function(a) {
                if (t.setData({
                    page_2: t.data.page_2 + 1
                }), console.log(a), "0" == a.data.code) {
                    for (var i = 0; i < a.data.data.length; i++) a.data.data[i].danfangzhibiao && String(a.data.data[i].danfangzhibiao).indexOf(".") + 1 > 0 && (a.data.data[i].danfangzhibiao = parseFloat(a.data.data[i].danfangzhibiao).toFixed(2));
                    t.setData({
                        data_2: a.data.data
                    });
                } else wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        }), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danjia",
            data: {
                limit: t.data.limit,
                page: t.data.page
            },
            method: "GET",
            success: function(a) {
                if (t.setData({
                    page: t.data.page + 1
                }), console.log(a), "0" == a.data.code) {
                    for (var i = 0; i < a.data.data.length; i++) a.data.data[i].buhanshuidanjia && String(a.data.data[i].buhanshuidanjia).indexOf(".") + 1 > 0 && (a.data.data[i].buhanshuidanjia = parseFloat(a.data.data[i].buhanshuidanjia).toFixed(2)), 
                    a.data.data[i].zhucaijia && String(a.data.data[i].zhucaijia).indexOf(".") + 1 > 0 && (a.data.data[i].zhucaijia = parseFloat(a.data.data[i].zhucaijia).toFixed(2)), 
                    a.data.data[i].shigongjia && String(a.data.data[i].shigongjia).indexOf(".") + 1 > 0 && (a.data.data[i].shigongjia = parseFloat(a.data.data[i].shigongjia).toFixed(2));
                    t.setData({
                        data: a.data.data
                    });
                } else wx.showToast({
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
    onPullDownRefresh: function() {
        console.log("PullDown"), wx.showLoading({
            title: "刷新数据中..."
        }), wx.showNavigationBarLoading();
        var a = this;
        0 == a.data.current_index ? wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danjia",
            data: {
                limit: a.data.limit,
                page: 1,
                search_keyword: a.data.input1,
                search_lishuhetongleibie: a.data.input2,
                search_lishuxiangmu: a.data.input3,
                search_shujuleibie: a.data.input4
            },
            method: "GET",
            success: function(t) {
                if (wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), 0 == t.data.data.length) a.setData({
                    page: 2,
                    isLoading: !1,
                    noMore: !0,
                    haveMore: !1,
                    data: [],
                    show: !1
                }); else if ("0" == t.data.code) {
                    for (var i = 0; i < t.data.data.length; i++) t.data.data[i].buhanshuidanjia && String(t.data.data[i].buhanshuidanjia).indexOf(".") + 1 > 0 && (t.data.data[i].buhanshuidanjia = parseFloat(t.data.data[i].buhanshuidanjia).toFixed(2)), 
                    t.data.data[i].zhucaijia && String(t.data.data[i].zhucaijia).indexOf(".") + 1 > 0 && (t.data.data[i].zhucaijia = parseFloat(t.data.data[i].zhucaijia).toFixed(2)), 
                    t.data.data[i].shigongjia && String(t.data.data[i].shigongjia).indexOf(".") + 1 > 0 && (t.data.data[i].shigongjia = parseFloat(t.data.data[i].shigongjia).toFixed(2));
                    a.setData({
                        page: 2,
                        isLoading: !1,
                        noMore: !1,
                        haveMore: !0,
                        data: t.data.data,
                        show: !1
                    }), t.data.data.length <= 6 && a.setData({
                        noMore: !0,
                        haveMore: !1
                    });
                } else wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        }) : wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danfangzhibiao",
            data: {
                limit: a.data.limit_2,
                page: 1,
                search_keyword: a.data.input1,
                search_lishuhetongleibie: a.data.input2,
                search_lishuxiangmu: a.data.input3,
                search_shujuleibie: a.data.input4
            },
            method: "GET",
            success: function(t) {
                if (wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), 0 == t.data.data.length) a.setData({
                    page: 2,
                    isLoading_2: !1,
                    noMore_2: !0,
                    haveMore_2: !1,
                    data_2: [],
                    show: !1
                }); else if ("0" == t.data.code) {
                    for (var i = 0; i < t.data.data.length; i++) t.data.data[i].danfangzhibiao && String(t.data.data[i].danfangzhibiao).indexOf(".") + 1 > 0 && (t.data.data[i].danfangzhibiao = parseFloat(t.data.data[i].danfangzhibiao).toFixed(2));
                    a.setData({
                        page_2: 2,
                        isLoading_2: !1,
                        noMore_2: !1,
                        haveMore_2: !0,
                        data_2: t.data.data,
                        show: !1
                    }), t.data.data.length <= 6 && a.setData({
                        noMore_2: !0,
                        haveMore_2: !1
                    });
                } else wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
}, "onReachBottom", function() {
    var a = this;
    if (0 == a.data.current_index) {
        var t = a.data.data;
        this.data.haveMore && (this.setData({
            haveMore: !1,
            isLoading: !0,
            noMore: !1
        }), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danjia",
            data: {
                limit: a.data.limit,
                page: a.data.page,
                search_keyword: a.data.input1,
                search_lishuhetongleibie: a.data.input2,
                search_lishuxiangmu: a.data.input3,
                search_shujuleibie: a.data.input4
            },
            method: "GET",
            success: function(i) {
                if (0 == i.data.data.length) a.setData({
                    isLoading: !1,
                    noMore: !0,
                    haveMore: !1
                }); else if ("0" == i.data.code) {
                    for (var e = 0; e < i.data.data.length; e++) i.data.data[e].buhanshuidanjia && String(i.data.data[e].buhanshuidanjia).indexOf(".") + 1 > 0 && (i.data.data[e].buhanshuidanjia = parseFloat(i.data.data[e].buhanshuidanjia).toFixed(2)), 
                    i.data.data[e].zhucaijia && String(i.data.data[e].zhucaijia).indexOf(".") + 1 > 0 && (i.data.data[e].zhucaijia = parseFloat(i.data.data[e].zhucaijia).toFixed(2)), 
                    i.data.data[e].shigongjia && String(i.data.data[e].shigongjia).indexOf(".") + 1 > 0 && (i.data.data[e].shigongjia = parseFloat(i.data.data[e].shigongjia).toFixed(2));
                    a.setData({
                        page: a.data.page + 1,
                        isLoading: !1,
                        noMore: !1,
                        haveMore: !0,
                        data: t.concat(i.data.data)
                    });
                } else wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        }));
    } else {
        var i = a.data.data_2;
        this.data.haveMore_2 && (this.setData({
            haveMore_2: !1,
            isLoading_2: !0,
            noMore_2: !1
        }), wx.request({
            url: "https://xuhui.lalalazzw.top:8888/get_danfangzhibiao",
            data: {
                limit: a.data.limit_2,
                page: a.data.page_2,
                search_keyword: a.data.input1_2,
                search_lishuhetongleibie: a.data.input2_2,
                search_lishuxiangmu: a.data.input3_2,
                search_shujuleibie: a.data.input4_2
            },
            method: "GET",
            success: function(t) {
                if (0 == t.data.data.length) a.setData({
                    isLoading_2: !1,
                    noMore_2: !0,
                    haveMore_2: !1
                }); else if ("0" == t.data.code) {
                    for (var e = 0; e < t.data.data.length; e++) t.data.data[e].danfangzhibiao && String(t.data.data[e].danfangzhibiao).indexOf(".") + 1 > 0 && (t.data.data[e].danfangzhibiao = parseFloat(t.data.data[e].danfangzhibiao).toFixed(2));
                    a.setData({
                        page_2: a.data.page_2 + 1,
                        isLoading_2: !1,
                        noMore_2: !1,
                        haveMore_2: !0,
                        data_2: i.concat(t.data.data)
                    });
                } else wx.showToast({
                    title: "请求错误",
                    icon: "none",
                    duration: 1e3
                });
            }
        }));
    }
}));