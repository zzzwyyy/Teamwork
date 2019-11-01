Page({

    data: {
        // 轮播图大小自适应
        imgUrls: [

            "http://www.xiyou.edu.cn/images/1029guojizhou.png",
            "http://www.xiyou.edu.cn/zuofengzhuti_.jpg",
            "http://www.xiyou.edu.cn/images/19/08/30/107ekhgjvm/0830chuxinshiming.jpg",
            "http://www.xiyou.edu.cn/images/1029guojizhou.png"
        ],
        imgUrls1: [

            "http://www.xiyou.edu.cn/__local/1/EB/04/74DE7763B66B6658252D5B352CD_03B65FB4_140D7.jpg",
            "http://www.xiyou.edu.cn/_mediafile/xupt/2019/09/26/18hjla8hh3.jpg",
            "http://www.xiyou.edu.cn/_mediafile/xupt/2019/09/10/34szzk11s9.jpg",
            "http://www.xiyou.edu.cn/_mediafile/xupt/2019/09/05/2wdp9ic0l7.jpg"
        ],
        imgheights: [],
        imgheights1: [],
        current: 0

    },

    imgload: function(e) {

        console.log(wx.getSystemInfoSync().windowWidth)

        var imgheight = e.detail.height;

        var imgwidth = e.detail.width;

        var bl = imgheight / imgwidth;

        var sjgd = bl * (wx.getSystemInfoSync().windowWidth);

        var hs = this.data.imgheights;

        console.log(e);

        console.log(sjgd);

        hs[e.target.dataset.id] = sjgd;

        this.setData({ imgheights: hs });

    },
    imgload: function(e) {

        console.log(wx.getSystemInfoSync().windowWidth)

        var imgheight = e.detail.height;

        var imgwidth = e.detail.width;

        var bl = imgheight / imgwidth;

        var sjgd = bl * (wx.getSystemInfoSync().windowWidth);

        var hs = this.data.imgheights1;

        console.log(e);

        console.log(sjgd);

        hs[e.target.dataset.id] = sjgd;

        this.setData({ imgheights1: hs });

    },

    bindchange: function(e) {

        // console.log(e.detail.current)

        this.setData({ current: e.detail.current })

    },
})