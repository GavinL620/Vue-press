(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{868:function(t,e,s){"use strict";s.r(e);var p=s(0),a=Object(p.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("这两天重新配置博客，但是自己有很多地方是不明白的，基本上也都是迷迷糊糊的，网上找着教程进行配置，遇到不少问题，一个一个来，先说说新建页面但是没有模板的问题。")]),t._v(" "),e("p",[t._v("新上了一个主题，各种眼花缭乱的配置，让我也云里雾里，之前使用默认主题的时候，并没有过多的对导航栏里边的“关于”之类的设置，所以也没有碰上这个问题，现在想往前走，不会的，终究还会成为一个问题，在那个地方等待着我，网上教程不少，但是有的思路偏了，效果也对应的不理想。今儿把解决的方法记录一下，纪念自己在坑里的时间与迷惘：")]),t._v(" "),e("p",[t._v("问题：在编辑页面的时候（关于页面与文章的区别，网上有不少书面化的表达，反正我看不太懂），是需要模板辅助编辑的，如果没有模板创建页面，则这个页面在主页前端是无法查看到的，但是我的wordpress偏偏就没有模板。如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0af40be86fedb790.jpg",alt:"image"}})]),t._v(" "),e("p",[t._v("正常的，在右侧的页面属性当中应该有模板选项的，但是这里没有，此时需要在php配置文件当中更改一个地方。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vim /usr/local/php/etc/php.ini   #一般源码安装的php配置文件都在这个位置，如果不是，请根据自己的服务安装情况进行调整。\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8deae2987d3ebb55.jpg",alt:"image"}})]),t._v(" "),e("p",[t._v("然后将scandir，删掉。（注意连同后边的逗号也一并删掉）")]),t._v(" "),e("p",[t._v("然后再重启php-fpm和nginx。此时再去博客的后台新建页面，就可以看到有模板的选项了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ecbdf96000770f19.jpg",alt:"image"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);