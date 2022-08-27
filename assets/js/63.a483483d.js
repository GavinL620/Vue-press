(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{401:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("要通过脚本进行备份，必然将会应用到压缩技术，这里简单针对几个常见的格式进行测验，从而得到一种合适的方式。")]),s._v(" "),a("p",[s._v("这里以一个应用目录做例子：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@isj-test-5 mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sh")]),s._v(" *\n66M isj-wiki\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("看到目录大小为 66M。")]),s._v(" "),a("p",[s._v("以下考虑压缩比与压缩时长两个维度。")]),s._v(" "),a("h2",{attrs:{id:"_1-只打包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-只打包。"}},[s._v("#")]),s._v(" 1，只打包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@isj-test-5 mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" cf isj-wiki.tar isj-wiki\nreal    0m2.622s\nuser    0m0.013s\nsys 0m2.603s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("对应解压命令为：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf isj-wiki.tar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-tar-gz-格式。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-tar-gz-格式。"}},[s._v("#")]),s._v(" 2，tar.gz 格式。")]),s._v(" "),a("p",[s._v("注意这种格式需要安装 gzip 包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@isj-test-5 mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zcf isj-wiki.tar.gz isj-wiki/\nreal    0m4.004s\nuser    0m3.470s\nsys 0m0.623s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("对应解压命令为：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxf isj-wiki.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-tar-bz2-格式。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-tar-bz2-格式。"}},[s._v("#")]),s._v(" 3，tar.bz2 格式。")]),s._v(" "),a("p",[s._v("注意这种格式需要安装 bzip2 包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bzip2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@isj-test-5 mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" jcf isj-wiki.tar.bz2 isj-wiki/\nreal    0m8.138s\nuser    0m7.754s\nsys 0m0.429s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("对应解压命令为：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" jxf isj-wiki.tar.bz2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-tar-xz-格式。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-tar-xz-格式。"}},[s._v("#")]),s._v(" 4，tar.xz 格式。")]),s._v(" "),a("p",[s._v("注意这种格式需要安装 xz 包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@isj-test-5 mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" Jcf isj-wiki.tar.xz isj-wiki/\nreal    0m29.741s\nuser    0m26.689s\nsys 0m3.192s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("对应解压命令为：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" Jxf isj-wiki.tar.xz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/68efb3791271d595.jpg",alt:"image"}})]),s._v(" "),a("h2",{attrs:{id:"_5-总结。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结。"}},[s._v("#")]),s._v(" 5，总结。")]),s._v(" "),a("p",[s._v("从时间上已经可以看出，越来越长排列的。")]),s._v(" "),a("p",[s._v("接下来看重点，看看压缩之后的包大小：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@isj-test-5 mnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sh")]),s._v(" *\n66M isj-wiki\n64M isj-wiki.tar\n24M isj-wiki.tar.bz2\n26M isj-wiki.tar.gz\n20M isj-wiki.tar.xz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("可以看到大小排序与用时排序是成反比的，压缩比越高的，耗时也越久。")]),s._v(" "),a("p",[s._v("最后，综合各方考虑，决定选用"),a("code",[s._v("bz2")]),s._v("这种格式来作为御用的压缩方式。")]),s._v(" "),a("h2",{attrs:{id:"_6-其他技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他技巧"}},[s._v("#")]),s._v(" 6，其他技巧")]),s._v(" "),a("p",[s._v("有时候在打包压缩某个目录的时候，某些诸如日志类的是不需要的，因此可以使用如下命令，对不需要的目录进行排除。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" jcf tomcat.tar.bz2 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tomcat/logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tomcat/libs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tomcat/xiaoshan.txt tomcat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("注意：")]),s._v("在指定排除目录的时候，目录的话结尾不能带"),a("code",[s._v("/")]),s._v("否则将会排除失败。比如"),a("code",[s._v("--exclude=tomcat/logs")]),s._v("如果写成"),a("code",[s._v("--exclude=tomcat/logs/")]),s._v("，则打包的时候还是会打进去。")])])}),[],!1,null,null,null);a.default=n.exports}}]);