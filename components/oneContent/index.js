Component({
    properties: {
        wx_data: {
            type: Array
        },
        wx_path: {
            type: String
        },
        shujuleibie: {
            type: String
        },
        tedian: {
            type: String
        },
        url: {
            type: String
        },
        danfangzhibiao: {
            type: String
        },
        qiandingshijian: {
            type: String
        },
        beizhu: {
            type: String
        },
        theid: {
            type: Number
        },
        danwei: {
            type: String
        },
        lishuxiangmu: {
            type: String
        },
        duiyingqingdanhetong: {
            type: String
        },
        filename: {
            type: String
        },
        lishuhetongleibie: {
            type: String
        }
    },
    data: {
        img: "/images/1.jpg",
        add: "/images/1.jpg",
        subtract: "/images/2.jpg",
        dispear: !1
    },
    methods: {
        onHide: function() {
            var t = this.data.hide;
            t = !t, this.setData({
                hide: t
            });
        },
        yulan: function(t) {
            wx.showLoading({
                title: "下载文件中"
            });
            var i = "https://xuhui-file-success.oss-cn-shenzhen.aliyuncs.com/" + t.currentTarget.dataset.experienceid;
            wx.downloadFile({
                url: i,
                success: function(t) {
                    wx.hideLoading(), console.log(t);
                    var i = t.tempFilePath;
                    wx.openDocument({
                        filePath: i,
                        success: function(t) {
                            console.log("打开成功");
                        }
                    });
                },
                fail: function(t) {
                    wx.showToast({
                        title: "请求失败",
                        duration: 1e3
                    });
                }
            });
        },
        hide: function() {
            var t = this.data.img, i = this.data.add, e = this.data.subtract, a = this.data.dispear;
            t == i && 0 == a ? (t = e, a = !0, this.setData({
                img: t,
                dispear: a
            })) : (t = i, a = !1, this.setData({
                img: t,
                dispear: a
            }));
        }
    }
});