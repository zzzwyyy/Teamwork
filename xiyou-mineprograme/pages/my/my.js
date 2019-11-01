Page({
  data: {
    banben: "v2.1.1",
    nickname: "",
    avatarUrl: "",
    xueyuan: "身份未认证",
    ChangeStyle: !1,
    colors: ["#47a86c", "#769FCD", "#6BC5D2", "#F9B8BE"]
  },
  onPullDownRefresh: function (n) {
    this.onShow(), wx.stopPullDownRefresh();
  },
  onShow: function () {
    var n = this;
    getApp().SetColor(this);
    var o;
    wx.getUserInfo({
      fail: function () {
        n.setData({
          showLoading: !1
        }), wx.showModal({
          title: "获取微信资料失败",
          content: "“在武大”不能获取到您的微信资料（昵称和头像），请在小程序资料页面查看是否开启权限；如果还是不能解决可以尝试重新添加小程序",
          showCancel: !1,
          confirmText: "知道了"
        });
      },
      complete: function (e) {
        o = e.userInfo, console.log(o);
        var t = wx.getStorageSync("StuInfo");
        n.setData({
          avatarUrl: o.avatarUrl
        }), t.id ? n.setData({
          nickname: t.name,
          xueyuan: t.xueyuan + " " + t.zhuanye + " " + t.nianji + "级"
        }) : n.setData({
          nickname: o.nickName ? o.nickName : "游客",
          xueyuan: "（身份未认证）"
        });
      }
    }), wx.getStorageSync("version") != n.data.banben && n.viewBanben();
  },
  ChangeStyle: function () {
    var n = this;
    this.setData({
      ChangeStyle: !0
    }), wx.getClipboardData({
      success: function (o) {
        var e = o.data.match("#[0-9a-fA-F]{6}");
        e ? (console.log(e[0]), wx.showModal({
          content: "检测到【在武大换色口令】，是否要更换在武大配色？",
          confirmText: "确定",
          confirmColor: e[0],
          success: function (o) {
            o.confirm && (wx.setStorageSync("StyleColor", e[0]), n.onShow());
          }
        })) : console.log("没有匹配到颜色");
      }
    }), setTimeout(function () {
      n.setData({
        ChangeStyle: !1
      });
    }, 4e3);
  },
  SaveColor: function (n) {
    var o = n.currentTarget.dataset.color;
    this.setData({
      ChangeStyle: !1,
      NowColor: o
    }), wx.setStorageSync("StyleColor", o), this.onShow();
  },
  MoreColor: function () {
    wx.navigateTo({
      url: "color"
    });
  },
  onShareAppMessage: function (n) {
    return {
      title: "上万武大人都在用的校园小程序，就差你了！",
      path: "/pages/kebiao/kebiao",
      imageUrl: "../../img/share.jpg",
      success: function (n) { },
      fail: function (n) { }
    };
  },
  Setting: function () {
    wx.navigateTo({
      url: "../my/Setting"
    });
  },
  JoinUs: function () {
    wx.navigateTo({
      url: "../my/join"
    });
  },
  viewRecord: function () {
    wx.navigateTo({
      url: "../my/record"
    });
  },
  viewOrder: function () {
    wx.navigateTo({
      url: "../mall/order-list"
    });
  },
  viewPersonInfo: function () {
    wx.navigateTo({
      url: "../my/personInfo"
    });
  },
  text: function () {
    wx.navigateTo({
      url: "../my/text"
    });
  },
  EnterAdmin: function () {
    wx.navigateTo({
      url: "../WebView/index?url=https://xf5z.net/inwhu/admin"
    });
  },
  viewWenjuan: function () {
    wx.navigateTo({
      url: "../my/wenjuan"
    });
  },
  scanCode: function (n) {
    var o = this;
    wx.scanCode({
      success: function (n) {
        console.log(n);
        var e = JSON.parse(n.result);
        console.log(e), "color" == e.type ? wx.showModal({
          content: "是否要更换配色？",
          confirmText: "确定",
          success: function (n) {
            n.confirm && (wx.setStorageSync("StyleColor", e.color), o.onShow());
          }
        }) : "wxid" == e.type ? wx.showModal({
          content: e.wxid,
          confirmText: "知道了"
        }) : wx.showModal({
          content: "没有结果",
          showCancel: !1,
          confirmText: "知道了"
        });
      }
    });
  },
  viewBanben: function () {
    var n = this;
    wx.showModal({
      title: "版本更新",
      content: "【版权所有】\r\n吾社校园文化传媒有限公司\r\n\r\n【当前版本】\r\n" + this.data.banben + " 2018-5-17\r\n\r\n【更新日志】\r\n界面优化。",
      showCancel: !1,
      confirmText: "知道了",
      success: function (o) {
        o.confirm && wx.setStorageSync("version", n.data.banben);
      }
    });
  }
});