(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{438:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("nginx的日志默认是不会进行切割的，如果我们不对其进行一些处理，那么就会一天一天变大，等大到几个G的时候，一旦出现问题，想通过日志进行一些问题的排查都很困难了。")]),s._v(" "),a("p",[s._v("我的博客中nginx日志也是这么个情况，于是打算做一下日志切割。")]),s._v(" "),a("p",[s._v("脚本如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-1 day'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+%Y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/log/nginx  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" logs/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Date")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" access.log error.log\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" logs/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Date")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v('"')]),s._v("_"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Date")]),s._v('"')]),s._v(".gz\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" logs/ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ctime")]),s._v(" +30 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("此处只用把脚本中日志的位置进行调整并创建logs目录，就可以了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/77372889aa90ebcd.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("然后再将脚本扔进定时任务当中，每天的凌晨执行一次，这样就达到了按天切割，然后删除掉30天之前的日志的目的了。")])])}),[],!1,null,null,null);a.default=r.exports}}]);