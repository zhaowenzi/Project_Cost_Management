Page({
    data: {
        show: !0
    },
    onClose: function() {
        this.setData({
            show: !1
        });
    },
    onOpen: function() {
        this.setData({
            show: !0
        });
    }
});