// window.addEventListener('load', function() {
//     var preview_img = document.querySelector('.preview_img');
//     var mask = document.querySelector('.mask');
//     var big = document.querySelector('.big');
//     // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
//     preview_img.addEventListener('mouseover', function() {
//         mask.style.display = 'block';
//         big.style.display = 'block';
//     })
//     preview_img.addEventListener('mouseout', function() {
//             mask.style.display = 'none';
//             big.style.display = 'none';
//         })
//         // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
//     preview_img.addEventListener('mousemove', function(e) {
//         // (1). 先计算出鼠标在盒子内的坐标
//         var x = e.pageX - this.offsetLeft;
//         var y = e.pageY - this.offsetTop;
//         // console.log(x, y);
//         // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
//         // (3) 我们mask 移动的距离
//         var maskX = x - mask.offsetWidth / 2;
//         var maskY = y - mask.offsetHeight / 2;
//         // (4) 如果x 坐标小于了0 就让他停在0 的位置
//         // 遮挡层的最大移动距离
//         var maskMax = preview_img.offsetWidth - mask.offsetWidth;
//         if (maskX <= 0) {
//             maskX = 0;
//         } else if (maskX >= maskMax) {
//             maskX = maskMax;
//         }
//         if (maskY <= 0) {
//             maskY = 0;
//         } else if (maskY >= maskMax) {
//             maskY = maskMax;
//         }
//         mask.style.left = maskX + 'px';
//         mask.style.top = maskY + 'px';
//         // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
//         // 大图
//         var bigIMg = document.querySelector('.bigImg');
//         // 大图片最大移动距离
//         var bigMax = bigIMg.offsetWidth - big.offsetWidth;
//         // 大图片的移动距离 X Y
//         var bigX = maskX * bigMax / maskMax;
//         var bigY = maskY * bigMax / maskMax;
//         bigIMg.style.left = -bigX + 'px';
//         bigIMg.style.top = -bigY + 'px';

//     })

// })
window.addEventListener("load", function() {
    var preview_wrap = document.querySelector(".preview_wrap");
    var mask = document.querySelector(".mask");
    var big = document.querySelector(".big");
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_wrap.addEventListener("mouseover", function() {
        mask.style.display = "block";
        big.style.display = "block";
    });
    //隐藏盒子
    preview_wrap.addEventListener("mouseout", function() {
        mask.style.display = "none";
        big.style.display = "none";
    });
    preview_wrap.addEventListener("mousemove", function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // 判断条件 不能让遮挡层超出父盒子的范围

        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= preview_wrap.offsetWidth - mask.offsetWidth) {
            //最好不要写死 动态计算比较好
            maskX = preview_wrap.offsetWidth - mask.offsetWidth;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= 100) {
            maskY = 98;
        }
        mask.style.left = maskX + "px";
        mask.style.top = maskY + "px";
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        //         // 大图
        var maskMax = preview_wrap.offsetWidth - mask.offsetWidth;
        var bigImg = document.querySelector(".bigImg");
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        //图片需要加定位 并且和遮罩层的移动方向相反
        bigImg.style.left = -bigX + "px";
        bigImg.style.top = -bigY + "px";

    })
})